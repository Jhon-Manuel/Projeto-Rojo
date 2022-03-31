using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Projeto_Rojo.Domains;
using Projeto_Rojo.Interfaces;
using Projeto_Rojo.Repositories;
using Projeto_Rojo.ViewModels;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Projeto_Rojo.Controllers
{


    [Produces("application/json")]


    [Route("api/[controller]")]


    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        bool EFexistente;

        public LoginController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Login (LoginViewModel login)
        {
            
            EmpresaRepository empresa = new EmpresaRepository();
            FuncionarioRepository funcionario = new FuncionarioRepository();

            try
            {
                Usuario b = _usuarioRepository.Login(login.Email, login.Senha);

                if (b == null)
                {
                    return NotFound("Email ou senha inválidos");
                }

                Empresa Empresa = new Empresa();
                Funcionario Funcionario = new Funcionario();


                Empresa = empresa.Listar()
                    .Select(e => new Empresa()
                    {
                        IdEmpresa = e.IdEmpresa,
                        IdUsuario = e.IdUsuario,

                        IdUsuarioNavigation = new Usuario()
                        {
                            IdUsuario = e.IdUsuarioNavigation.IdUsuario,
                            Email = e.IdUsuarioNavigation.Email,
                        }
                    })
                    .FirstOrDefault(e => b.IdUsuario == e.IdUsuario);


                Funcionario = funcionario.Listar()
                    .Select(f => new Funcionario()
                    {
                        IdFuncionario = f.IdFuncionario,
                        IdUsuario = f.IdUsuario,

                        IdUsuarioNavigation = new Usuario()
                        {
                            IdUsuario = f.IdUsuarioNavigation.IdUsuario,
                            Email = f.IdUsuarioNavigation.Email,
                        }
                    })
                    .FirstOrDefault(e => b.IdUsuario == e.IdUsuario);

                if (Empresa != null && Funcionario == null)
                {
                    EFexistente = true;
                }
                else if (Empresa == null && Funcionario != null)
                {
                    EFexistente = false;
                }

                switch (EFexistente)
                {
                    case true:
                        var minhasClaimsE = new[]
                        {
                            new Claim(JwtRegisteredClaimNames.Email, b.Email),
                            new Claim(JwtRegisteredClaimNames.Jti, b.IdUsuario.ToString()),
                            new Claim(ClaimTypes.Role, Empresa.IdEmpresa.ToString())
                        };

                        var keyE = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("rojo-chave-empresa"));

                        var credsE = new SigningCredentials(keyE, SecurityAlgorithms.HmacSha256);

                        var meuTokenE = new JwtSecurityToken(
                                issuer: "RojoEmpresa.webAPI",
                                audience: "RojoEmpresa.webAPI",
                                claims: minhasClaimsE,
                                expires: DateTime.Now.AddHours(2),
                                signingCredentials: credsE
                            );

                        return Ok(new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(meuTokenE)

                        });


                    case false:

                        var minhasClaimsF = new[]
                        {
                            new Claim(JwtRegisteredClaimNames.Email, b.Email),
                            new Claim(JwtRegisteredClaimNames.Jti, b.IdUsuario.ToString()),
                            new Claim(ClaimTypes.Role, Funcionario.IdFuncionario.ToString())
                        };

                        var keyF = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("rojo-chave-funcionario"));

                        var credsF = new SigningCredentials(keyF, SecurityAlgorithms.HmacSha256);

                        var meuTokenF = new JwtSecurityToken(
                                issuer: "RojoFuncionario.webAPI",
                                audience: "RojoFuncionario.webAPI",
                                claims: minhasClaimsF,
                                expires: DateTime.Now.AddHours(5),
                                signingCredentials: credsF
                            );

                        return Ok(new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(meuTokenF)
                        });

                

                } }


            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

    }
            
 }

