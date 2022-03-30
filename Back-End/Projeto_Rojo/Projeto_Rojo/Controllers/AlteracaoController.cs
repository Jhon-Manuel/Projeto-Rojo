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
        public class AlteracaoController : ControllerBase      {
             

            private IAlteracaoRepository _alteracaoRepository { get; set; }

            
            public AlteracaoController()
            {
            _alteracaoRepository = new AlteracaoRepository();
            }

            
            [HttpGet]
            public IActionResult Get()
            {
                try
                {
                    // Retorna a resposta da requisição fazendo a chamada para o método
                    return Ok(_alteracaoRepository.Listar());
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
                    return Ok(_alteracaoRepository.BuscarPorId(id));
                }
                catch (Exception erro)
                {
                    return BadRequest(erro);
                }
            }

            
            [Authorize(Roles = "1")]
            [HttpPost]
            public IActionResult Post(Alteracao novoEvento)
            {
                try
                {
                // Faz a chamada para o método
                _alteracaoRepository.Cadastrar(novoEvento);

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
            public IActionResult Put(int id, Alteracao eventoAtualizado)
            {
                try
                {
                // Faz a chamada para o método
                _alteracaoRepository.Atualizar(eventoAtualizado);

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
                _alteracaoRepository.Deletar(id);

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
