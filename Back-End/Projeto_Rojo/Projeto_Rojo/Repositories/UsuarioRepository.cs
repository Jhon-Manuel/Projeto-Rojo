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
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly RojoContext ctx;

        public UsuarioRepository()
        {

        }

        public UsuarioRepository(RojoContext appContext)
        {
            ctx = appContext;
        }

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }

        public string ConsultarPerfilBD(int id_usuario)
        {
            Imagemusuario imagemUsuario = new Imagemusuario();

            imagemUsuario = ctx.Imagemusuarios.FirstOrDefault(i => i.IdUsuario == id_usuario);

            if (imagemUsuario != null)
            {
                return Convert.ToBase64String(imagemUsuario.Binario);
            }

            return null;
        }

        public void SalvarPerfilBD(IFormFile foto, int id_usuario)
        {
            
            Imagemusuario imagemUsuario = new Imagemusuario();

            using (var ms = new MemoryStream())
            {
               
                foto.CopyTo(ms) ;
               
                imagemUsuario.Binario = ms.ToArray();
               
                imagemUsuario.NomeArquivo = foto.FileName;
               
                imagemUsuario.MimeType = foto.FileName.Split('.').Last();
             
                imagemUsuario.IdUsuario = id_usuario;
            }

            
            Imagemusuario fotoexistente = new Imagemusuario();
            fotoexistente = ctx.Imagemusuarios.FirstOrDefault(i => i.IdUsuario == id_usuario);

            if (fotoexistente != null)
            {
                fotoexistente.Binario = imagemUsuario.Binario;
                fotoexistente.NomeArquivo = imagemUsuario.NomeArquivo;
                fotoexistente.MimeType = imagemUsuario.MimeType;
                fotoexistente.IdUsuario = id_usuario;

              
                ctx.Imagemusuarios.Update(fotoexistente);
            }
            else
            { 
                ctx.Imagemusuarios.Add(imagemUsuario);
            }

           
            ctx.SaveChanges();
        }

        public void SalvarPerfilDir(IFormFile foto, int id_usuario)
        {

           
            string nome_novo = id_usuario.ToString() + ".png";

           
            using (var stream = new FileStream(Path.Combine("perfil", nome_novo), FileMode.Create))
            {
               
                foto.CopyTo(stream);
            }
        }


        public string ConsultarPerfilDir(int id_usuario)
        {
            string nome_novo = id_usuario.ToString() + ".png";
            string caminho = Path.Combine("Perfil", nome_novo);

           
            if (File.Exists(caminho))
            {
             
                byte[] bytesArquivo = File.ReadAllBytes(caminho);
              
                return Convert.ToBase64String(bytesArquivo);
            }

            return null;

        }
         
        public void Atualizar(Usuario a)
        {
            Usuario b = ctx.Usuarios.Find(a);

            if (b.IdUsuario == a.IdUsuario)
            {
                ctx.Entry(a).State = EntityState.Modified;

                ctx.SaveChanges();
            }
        }



        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuarios.FirstOrDefault(e => e.IdUsuario == id);
        }


        public Usuario Cadastrar(Usuario a)
        {
            if (a != null)
            {
                ctx.Usuarios.Add(a);

                ctx.SaveChanges();

                return a;
            }

            return null;
        }


        public void Deletar(int id)
        {
            var b = ctx.Usuarios.Find(id).ToString();

            if (b != null)
            {
                ctx.Usuarios.Remove(BuscarPorId(id));

                ctx.SaveChanges();
            }

        }


        public IEnumerable<Usuario> Listar()
        {
            return ctx.Usuarios.ToList();
        }
    }
}
