using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Rojo.Domains
{
    public partial class Tipoequipamento
    {
        public Tipoequipamento()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdTipoEquipamento { get; set; }
        public string Equipamento { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
