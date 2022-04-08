﻿using Microsoft.AspNetCore.Http;
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
        RojoContext ctx = new RojoContext();

        public string ConsultarPerfilBD(int id_e)
        {
            ImgEquipamento ImgEquipamento = new ImgEquipamento();

            ImgEquipamento = ctx.ImgEquipamentos.FirstOrDefault(i => i.IdEquipamento == id_e);

            if (ImgEquipamento != null)
            {
                return Convert.ToBase64String(ImgEquipamento.Binario);
            }

            return null;
        }

        public void SalvarPerfilBD(IFormFile foto, int id_e)
        {

            ImgEquipamento imgEquipamento = new ImgEquipamento();

            using (var ms = new MemoryStream())
            {

                foto.CopyTo(ms);

                imgEquipamento.Binario = ms.ToArray();

                imgEquipamento.NomeArquivo = foto.FileName;

                imgEquipamento.MimeType = foto.FileName.Split('.').Last();

                imgEquipamento.IdEquipamento = id_e;
            }


            ImgEquipamento fotoexistente = new ImgEquipamento();
            fotoexistente = ctx.ImgEquipamentos.FirstOrDefault(i => i.IdEquipamento == id_e);

            if (fotoexistente != null)
            {
                fotoexistente.Binario = imgEquipamento.Binario;
                fotoexistente.NomeArquivo = imgEquipamento.NomeArquivo;
                fotoexistente.MimeType = imgEquipamento.MimeType;
                fotoexistente.IdEquipamento = id_e;


                ctx.ImgEquipamentos.Update(fotoexistente);
            }
            else
            {
                ctx.ImgEquipamentos.Add(imgEquipamento);
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

        public void Atualizar(int id, Equipamento e)
        {
            Equipamento b = ctx.Equipamentos.FirstOrDefault(e => e.IdEquipamento == id);

            b.Modelo = e.Modelo;
            b.NumeroDeSerie = e.NumeroDeSerie;
            b.Porta = e.Porta;
            b.Descricao = e.Descricao;
            b.Dns = e.Dns;
            b.GateWay = e.GateWay;
            b.Mask = e.Mask;

            if (b.IdEquipamento == e.IdEquipamento)
            {
                ctx.Entry(e).State = EntityState.Modified;

                ctx.SaveChanges();
            }
        }



        public Equipamento BuscarPorId(int idEquipamento)
        {

            return ctx.Equipamentos.FirstOrDefault(e => e.IdEquipamento == idEquipamento);
        }


        public Equipamento Cadastrar(Equipamento e)
        {
 
                ctx.Equipamentos.Add(e);

                ctx.SaveChanges();

                return e;
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


        public IEnumerable<Equipamento> Listar(int idUsuario)
        {
            Usuario usuario = ctx.Usuarios.FirstOrDefault( e => e.IdUsuario == idUsuario);

            return ctx.Equipamentos
                .Where(e => e.IdUsuario == usuario.IdUsuario)
                .Select(e => new Equipamento
                {
                    IdUsuario = e.IdUsuario,
                    IdEquipamento = e.IdEquipamento,
                    IdTipoEquipamento = e.IdTipoEquipamento,
                    Modelo = e.Modelo,
                    NumeroDeSerie = e.NumeroDeSerie,
                    Mask = e.Mask,
                    Porta = e.Porta,
                    Dns = e.Dns,
                    GateWay = e.GateWay,
                    Descricao = e.Descricao,
                    DataEntrada = e.DataEntrada,
                })
                .ToList();

       
        }
    }
}
