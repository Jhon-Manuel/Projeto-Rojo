using Projeto_Rojo.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Rojo.Interfaces
{
    interface IFuncionarioRepository
    {
        IEnumerable<Funcionario> Listar();

        Funcionario BuscarPorId(int id);

        Funcionario Cadastrar(Funcionario e);

        void Atualizar(Funcionario e);

        void Deletar(int id);
    }
}
