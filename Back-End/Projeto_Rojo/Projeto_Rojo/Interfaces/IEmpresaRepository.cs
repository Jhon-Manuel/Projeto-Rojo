using Projeto_Rojo.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Rojo.Interfaces
{
    interface IEmpresaRepository
    {
        IEnumerable<Empresa> Listar();

        Empresa BuscarPorId(int id);

        Empresa Cadastrar(Empresa e);

        void Atualizar(Empresa e);

        void Deletar(int id);
    }
}
