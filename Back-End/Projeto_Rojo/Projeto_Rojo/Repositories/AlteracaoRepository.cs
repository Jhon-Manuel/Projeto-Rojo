using Microsoft.EntityFrameworkCore;
using Projeto_Rojo.Contexts;
using Projeto_Rojo.Domains;
using Projeto_Rojo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Rojo.Repositories
{
    public class AlteracaoRepository : IAlteracaoRepository
    {
        private readonly RojoContext ctx;

        public AlteracaoRepository()
        {

        }

        public AlteracaoRepository(RojoContext rojoContext)
        {
            ctx = rojoContext;    
        }
        
       
        public void Atualizar(Alteracao a)
        {
            Alteracao b = ctx.Alteracaos.Find(a);

            if (b.IdAlteracao == a.IdAlteracao)
            {
                ctx.Entry(a).State = EntityState.Modified;

                ctx.SaveChanges();
            }
        }



        public Alteracao BuscarPorId(int id)
        {
            return ctx.Alteracaos.FirstOrDefault(e => e.IdAlteracao == id);
        }


        public Alteracao Cadastrar(Alteracao a)
        {
            if (a != null)
            {
                ctx.Alteracaos.Add(a);

                ctx.SaveChanges();

                return a;
            }

            return null;
        }


        public void Deletar(int id)
        {
            var b = ctx.Alteracaos.Find(id).ToString();

            if (b != null)
            {
                ctx.Alteracaos.Remove(BuscarPorId(id));

                ctx.SaveChanges();
            }

        }


        public IEnumerable<Alteracao> Listar()
        {
            return ctx.Alteracaos.ToList();
        }
    }
}
