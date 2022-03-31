using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

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

        [Required(ErrorMessage = "O campo e-mail é obrigatório")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O campo senha é obrigatório")]
        [StringLength(12, MinimumLength = 5, ErrorMessage ="A senha deve ter 5 a 12 caracteres!")]
        public string Senha { get; set; }
        public string Contato { get; set; }
        public string Nome { get; set; }

        public virtual Imagemusuario Imagemusuario { get; set; }
        public virtual ICollection<Empresa> Empresas { get; set; }
        public virtual ICollection<Equipamento> Equipamentos { get; set; }
        public virtual ICollection<Funcionario> Funcionarios { get; set; }
    }
}
