using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projeto_Rojo.Domains;
using Projeto_Rojo.Interfaces;
using Projeto_Rojo.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Rojo.Controllers
{
    
            [Produces("application/json")]
            [Route("api/[controller]")]
            [ApiController]
            public class EquipamentoController : ControllerBase
            {

                private IEquipamentoRepository _equipamentoRepository { get; set; }


                public EquipamentoController()
                {
                     _equipamentoRepository = new EquipamentoRepository();
                }


                [HttpGet]
                public IActionResult Get()
                {
                    try
                    {
                        // Retorna a resposta da requisição fazendo a chamada para o método
                        return Ok(_equipamentoRepository.Listar());
                    }
                    catch (Exception erro)
                    {
                        return BadRequest(erro);
                    }
                }


                [HttpGet("{id}")]
                public IActionResult GetById(int id)
                {
                    try
                    {
                        // Retora a resposta da requisição fazendo a chamada para o método
                        return Ok(_equipamentoRepository.BuscarPorId(id));
                    }
                    catch (Exception erro)
                    {
                        return BadRequest(erro);
                    }
                }


                [Authorize(Roles = "1")]
                [HttpPost]
                public IActionResult Post(Equipamento novoEvento)
                {
                    try
                    {
                // Faz a chamada para o método
                        _equipamentoRepository.Cadastrar(novoEvento);

                        // Retorna um status code
                        return StatusCode(201);
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex);
                    }
                }


                [Authorize(Roles = "1")]
                [HttpPut("{id}")]
                public IActionResult Put(int id, Equipamento eventoAtualizado)
                {
                    try
                    {
                         // Faz a chamada para o método
                        _equipamentoRepository.Atualizar(eventoAtualizado);

                        // Retorna um status code
                        return StatusCode(204);
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex);
                    }
                }


                [Authorize(Roles = "1")]
                [HttpDelete("{id}")]
                public IActionResult Delete(int id)
                {
                    try
                    {
                        // Faz a chamada para o método
                        _equipamentoRepository.Deletar(id);

                        // Retorna um status code
                        return StatusCode(204);
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex);
                    }
                }
            }
}
    
