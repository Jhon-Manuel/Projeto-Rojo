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

            public LoginController()
            {
                _usuarioRepository = new UsuarioRepository();
            }


            [HttpPost]
            public IActionResult Login(LoginViewModel login)
            {
                try
                {
                    Usuario usuarioBuscado = _usuarioRepository.Login(login.Email, login.Senha);

                    if (usuarioBuscado == null)
                    {
                        return NotFound("E-mail ou senha inválidos!");
                    }

                    // Caso o usuário seja encontrado, prossegue para a criação do token

                    /*
                        Dependências
                        Criar e validar o JWT:      System.IdentityModel.Tokens.Jwt
                        Integrar a autenticação:    Microsoft.AspNetCore.Authentication.JwtBearer (versão compatível com o .NET do projeto)
                    */

                    var minhasClaims = new[]
                    {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),
                    new Claim(ClaimTypes.Role, usuarioBuscado.IdTipoUsuario.ToString()),
                    new Claim( "role", usuarioBuscado.IdTipoUsuario.ToString() ),
                     // Armazena na Claim o nome do usuário que foi autenticado
                    new Claim(JwtRegisteredClaimNames.Name, usuarioBuscado.NomeUsuario)
                };

                    var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("gufi-chave-autenticacao"));

                    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var meuToken = new JwtSecurityToken(
                            issuer: "gufi.webAPI",
                            audience: "gufi.webAPI",
                            claims: minhasClaims,
                            expires: DateTime.Now.AddMinutes(30),
                            signingCredentials: creds
                        );

                    return Ok(new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(meuToken)
                    });
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
        }
    }

