using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Rojo.Domains
{
    public partial class Empresa
    {
        public int IdEmpresa { get; set; }
        public int IdUsuario { get; set; }
        public string RazaoSocial { get; set; }
        public string Cnpj { get; set; }
        public string Endereco { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
