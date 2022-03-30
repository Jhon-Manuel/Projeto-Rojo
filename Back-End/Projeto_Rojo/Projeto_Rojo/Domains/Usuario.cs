using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Rojo.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Empresas = new HashSet<Empresa>();
            Equipamentos = new HashSet<Equipamento>();
            Funcionarios = new HashSet<Funcionario>();
        }

        public int IdUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Contato { get; set; }
        public string Nome { get; set; }

        public virtual Imagemusuario Imagemusuario { get; set; }
        public virtual ICollection<Empresa> Empresas { get; set; }
        public virtual ICollection<Equipamento> Equipamentos { get; set; }
        public virtual ICollection<Funcionario> Funcionarios { get; set; }
    }
}
