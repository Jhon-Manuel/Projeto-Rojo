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
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        private readonly RojoContext ctx;

        public TipoUsuarioRepository(RojoContext rojoContext)
        {
            ctx = rojoContext;
        }

        public TipoUsuarioRepository()
        {

        }

 
        public void Atualizar(TipoUsuario a)
        {
            TipoUsuario b = ctx.TipoUsuarios.Find(a);

            if (b.IdTipoUsuario == a.IdTipoUsuario)
            {
                ctx.Entry(a).State = EntityState.Modified;

                ctx.SaveChanges();
            }
        }



        public TipoUsuario BuscarPorId(int id)
        {
            return ctx.TipoUsuarios.FirstOrDefault(e => e.IdTipoUsuario == id);
        }


        public TipoUsuario Cadastrar(TipoUsuario a)
        {
           
                ctx.TipoUsuarios.Add(a);

                ctx.SaveChanges();

                return a;
   
        }


        public void Deletar(int id)
        {
            var b = ctx.TipoUsuarios.Find(id).ToString();

            if (b != null)
            {
                ctx.TipoUsuarios.Remove(BuscarPorId(id));

                ctx.SaveChanges();
            }

        }


        public IEnumerable<TipoUsuario> Listar()
        {
            return ctx.TipoUsuarios.ToList();
        }
    }
}
