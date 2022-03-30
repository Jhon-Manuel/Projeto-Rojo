using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Rojo.Domains
{
    public partial class Funcionario
    {
        public int IdFuncionario { get; set; }
        public int? IdUsuario { get; set; }
        public string Cpf { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
