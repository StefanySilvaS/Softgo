import React, { useState, useEffect } from "react";
import "./Listagem.css";

function Listagem() {
  // Dados de exemplo (poderiam vir de uma API)
  const dadosSimulados = [
    { id: 1, nome: "Ana Souza", email: "ana@email.com" },
    { id: 2, nome: "Carlos Silva", email: "carlos@email.com" },
    { id: 3, nome: "Maria Oliveira", email: "maria@email.com" },
    { id: 4, nome: "João Pereira", email: "joao@email.com" },
    { id: 5, nome: "Fernanda Lima", email: "fernanda@email.com" },
    { id: 6, nome: "Paulo Santos", email: "paulo@email.com" },
    { id: 7, nome: "Camila Ferreira", email: "camila@email.com" },
    { id: 8, nome: "Bruno Almeida", email: "bruno@email.com" },
    { id: 9, nome: "Larissa Gomes", email: "larissa@email.com" },
    { id: 10, nome: "Lucas Andrade", email: "lucas@email.com" },
    { id: 11, nome: "Rafael Costa", email: "rafael@email.com" },
    { id: 12, nome: "Beatriz Nunes", email: "beatriz@email.com" },
  ];

  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;

  const indexUltimoItem = paginaAtual * itensPorPagina;
  const indexPrimeiroItem = indexUltimoItem - itensPorPagina;
  const itensAtuais = dadosSimulados.slice(indexPrimeiroItem, indexUltimoItem);

  const totalPaginas = Math.ceil(dadosSimulados.length / itensPorPagina);

  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) setPaginaAtual(paginaAtual + 1);
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) setPaginaAtual(paginaAtual - 1);
  };

  return (
    <div className="listagem-container">
      <h2>Consulta de Listagem</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {itensAtuais.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="paginacao">
        <button onClick={paginaAnterior} disabled={paginaAtual === 1}>
          ◀ Anterior
        </button>
        <span>
          Página {paginaAtual} de {totalPaginas}
        </span>
        <button onClick={proximaPagina} disabled={paginaAtual === totalPaginas}>
          Próxima ▶
        </button>
      </div>
    </div>
  );
}

export default Listagem;
