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
    public class EmpresaRepository : IEmpresaRepository
    {
        private readonly RojoContext ctx;

        public EmpresaRepository()
        {

        }

        public EmpresaRepository(RojoContext appContext)
        {
            ctx = appContext;
        }

        public void Atualizar(Empresa e)
        {
            ctx.Empresas.Find(e);
            if (e != null)
            {
                ctx.Entry(e).State = EntityState.Modified;

                ctx.SaveChanges();
            }
        }

        public Empresa BuscarPorId(int id)
        {
            return ctx.Empresas.FirstOrDefault(e => id == e.IdEmpresa);
        }

        public Empresa Cadastrar(Empresa e)
        {
            ctx.Empresas.Find(e);
            
                ctx.Empresas.Add(e);

                ctx.SaveChanges();

                return e;
            
        }

        public void Deletar(int id)
        {
            var b = ctx.Empresas.FirstOrDefault(e => id == e.IdEmpresa);
            ctx.Empresas.Remove(b);

            ctx.SaveChanges();
        }

        public IEnumerable<Empresa> Listar()
        {
            return ctx.Empresas.ToList();
        }
    }
}
