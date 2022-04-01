using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Rojo.Domains
{
    public partial class Alerta
    {
        public int IdAlerta { get; set; }
        public int? IdEquipamento { get; set; }
        public string Descricao { get; set; }

        public virtual Equipamento IdEquipamentoNavigation { get; set; }
    }
}
