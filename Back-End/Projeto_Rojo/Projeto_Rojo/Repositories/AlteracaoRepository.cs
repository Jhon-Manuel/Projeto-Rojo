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
        RojoContext ctx = new RojoContext();

               
       
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
    
                ctx.Alteracaos.Add(a);

                ctx.SaveChanges();

            return a;
     
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
