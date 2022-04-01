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
    public class TipoEquipamentoRepository : ITipoEquipamentoRepository
    {
        RojoContext ctx = new RojoContext();


        public void Atualizar(TipoEquipamento a)
        {
            TipoEquipamento b = ctx.TipoEquipamentos.Find(a);

            if (b.IdTipoEquipamento == a.IdTipoEquipamento)
            {
                ctx.Entry(a).State = EntityState.Modified;

                ctx.SaveChanges();
            }
        }



        public TipoEquipamento BuscarPorId(int id)
        {
            return ctx.TipoEquipamentos.FirstOrDefault(e => e.IdTipoEquipamento == id);
        }


        public TipoEquipamento Cadastrar(TipoEquipamento a)
        {
      
                ctx.TipoEquipamentos.Add(a);

                ctx.SaveChanges();

                return a;

        }


        public void Deletar(int id)
        {
            var b = ctx.TipoEquipamentos.Find(id).ToString();

            if (b != null)
            {
                ctx.TipoEquipamentos.Remove(BuscarPorId(id));

                ctx.SaveChanges();
            }

        }


        public IEnumerable<TipoEquipamento> Listar()
        {
            return ctx.TipoEquipamentos.ToList();
        }
    }
}
