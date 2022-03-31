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
    public class FuncionarioRepository : IFuncionarioRepository
    {
        private readonly RojoContext ctx;

        public FuncionarioRepository()
        {

        }

        public FuncionarioRepository(RojoContext appContext)
        {
            ctx = appContext;
        }

        public void Atualizar(Funcionario e)
        {
            ctx.Funcionarios.Find(e);

            if (e != null)
            {
                ctx.Entry(e).State = EntityState.Modified;

                ctx.SaveChanges();
            }
        }

        public Funcionario BuscarPorId(int id)
        {
            return ctx.Funcionarios.Find(id);
        }

        public Funcionario Cadastrar(Funcionario e)
        {
            ctx.Funcionarios.Add(e);

            ctx.SaveChanges();

            return e;
        }

        public void Deletar(int id)
        {
            var b = ctx.Funcionarios.Find(id);
            if (b != null)
            {
                ctx.Funcionarios.Remove(b);

                ctx.SaveChanges();
            }
        }

        public IEnumerable<Funcionario> Listar()
        {
            return ctx.Funcionarios.ToList();
        }
    }
}
