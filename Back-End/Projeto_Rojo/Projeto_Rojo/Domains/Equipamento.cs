using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Rojo.Domains
{
    public partial class Equipamento
    {
        public Equipamento()
        {
            Imagemequipamentos = new HashSet<Imagemequipamento>();
        }

        public int IdEquipamento { get; set; }
        public int IdUsuario { get; set; }
        public int IdTipoEquipamento { get; set; }
        public int? Modelo { get; set; }
        public int? NumeroDeSerie { get; set; }
        public int? GateWay { get; set; }
        public int? Mask { get; set; }
        public int? Dns { get; set; }
        public int? Porta { get; set; }
        public DateTime DataEntrada { get; set; }
        public string Descricao { get; set; }

        public virtual Tipoequipamento IdTipoEquipamentoNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Imagemequipamento> Imagemequipamentos { get; set; }
    }
}
