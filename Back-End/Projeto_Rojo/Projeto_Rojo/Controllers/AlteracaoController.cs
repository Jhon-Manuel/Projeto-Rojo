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
        public class AlteracaoController : ControllerBase      
        {
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
                    return Ok(_alteracaoRepository.BuscarPorId(id));
                }
                catch (Exception erro)
                {
                    return BadRequest(erro);
                }
            }

            
   
            [HttpPost]
            public IActionResult Post(Alteracao novoEvento)
            {
                try
                {

                    _alteracaoRepository.Cadastrar(novoEvento);

                    return StatusCode(201);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }

            
   
            [HttpPut("{id}")]
            public IActionResult Put(int id, Alteracao eventoAtualizado)
            {
                try
                {

                    _alteracaoRepository.Atualizar(eventoAtualizado);


                    return StatusCode(204);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }

           
      
            [HttpDelete("{id}")]
            public IActionResult Delete(int id)
            {
                try
                {
                    _alteracaoRepository.Deletar(id);

                    return StatusCode(204);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
        }
}
