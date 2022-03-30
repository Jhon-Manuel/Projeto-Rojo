using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Projeto_Rojo.Contexts;
using Projeto_Rojo.Domains;
using Projeto_Rojo.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Rojo.Repositories
{
    public class EquipamentoRepository : IEquipamentoRepository
    {
        private readonly RojoContext ctx;

        public EquipamentoRepository()
        {

        }

        public EquipamentoRepository(RojoContext rojoContext)
        {
            ctx = rojoContext;
        }

        public string ConsultarPerfilBD(int id_e)
        {
            Imagemequipamento imagemEquipamento = new Imagemequipamento();

            imagemEquipamento = ctx.Imagemequipamentos.FirstOrDefault(i => i.IdEquipamento == id_e);

            if (imagemEquipamento != null)
            {
                return Convert.ToBase64String(imagemEquipamento.Binario);
            }

            return null;
        }

        public void SalvarPerfilBD(IFormFile foto, int id_e)
        {

            Imagemequipamento imgEquipamento = new Imagemequipamento();

            using (var ms = new MemoryStream())
            {

                foto.CopyTo(ms);

                imgEquipamento.Binario = ms.ToArray();

                imgEquipamento.NomeArquivo = foto.FileName;

                imgEquipamento.MimeType = foto.FileName.Split('.').Last();

                imgEquipamento.IdEquipamento = id_e;
            }


            Imagemequipamento fotoexistente = new Imagemequipamento();
            fotoexistente = ctx.Imagemequipamentos.FirstOrDefault(i => i.IdEquipamento == id_e);

            if (fotoexistente != null)
            {
                fotoexistente.Binario = imgEquipamento.Binario;
                fotoexistente.NomeArquivo = imgEquipamento.NomeArquivo;
                fotoexistente.MimeType = imgEquipamento.MimeType;
                fotoexistente.IdEquipamento = id_e;


                ctx.Imagemequipamentos.Update(fotoexistente);
            }
            else
            {
                ctx.Imagemequipamentos.Add(imgEquipamento);
            }


            ctx.SaveChanges();
        }

        public void SalvarPerfilDir(IFormFile foto, int id_e)
        {


            string nome_novo = id_e.ToString() + ".png";


            using (var stream = new FileStream(Path.Combine("perfil", nome_novo), FileMode.Create))
            {

                foto.CopyTo(stream);
            }
        }


        public string ConsultarPerfilDir(int id_e)
        {
            string nome_novo = id_e.ToString() + ".png";
            string caminho = Path.Combine("Perfil", nome_novo);


            if (File.Exists(caminho))
            {

                byte[] bytesArquivo = File.ReadAllBytes(caminho);

                return Convert.ToBase64String(bytesArquivo);
            }

            return null;

        }

        public void Atualizar(Equipamento e)
        {
            Equipamento b = ctx.Equipamentos.Find(e);

            if (b.IdEquipamento == e.IdEquipamento)
            {
                ctx.Entry(e).State = EntityState.Modified;

                ctx.SaveChanges();
            }
        }



        public Equipamento BuscarPorId(int id)
        {
            return ctx.Equipamentos.FirstOrDefault(e => e.IdEquipamento == id);
        }


        public Equipamento Cadastrar(Equipamento e)
        {
            if (e != null)
            {
                ctx.Equipamentos.Add(e);

                ctx.SaveChanges();

                return e;
            }

            return null;
        }


        public void Deletar(int id)
        {
            var b = ctx.Equipamentos.Find(id).ToString();

            if (b != null)
            {
                ctx.Equipamentos.Remove(BuscarPorId(id));

                ctx.SaveChanges();
            }

        }


        public IEnumerable<Equipamento> Listar()
        {
            return ctx.Equipamentos.ToList();
        }
    }
}
