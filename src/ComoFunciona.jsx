import React from "react";
import { useNavigate } from "react-router-dom";
import "./ComoFunciona.css";

export default function ComoFunciona() {
  const navigate = useNavigate();

  return (
    <div className="como-container">
      <header className="como-header">
        <button className="voltar" onClick={() => navigate(-1)}>
          ← Voltar
        </button>

        <div className="menu-topo">
          <span>Histórico</span>
          <span>Check</span>
        </div>
      </header>

      <main className="como-conteudo">
        <h1>Aurora Café</h1>
        <p className="localizacao">Graças - Recife</p>

        <h2>Como funciona lá</h2>

        <div className="info-card">
          <span className="icone">👤</span>
          <div>
            <strong>Atendimento</strong>
            <p>Os pedidos são feitos no balcão, não há garçom</p>
          </div>
        </div>

        <div className="info-card">
          <span className="icone">💳</span>
          <div>
            <strong>Pagamento</strong>
            <p>O pagamento é feito antes de receber o pedido</p>
          </div>
        </div>

        <div className="info-card">
          <span className="icone">📅</span>
          <div>
            <strong>Reserva</strong>
            <p>Não precisa reservar</p>
          </div>
        </div>

        <button
          className="btn-preparar"
          onClick={() => navigate("/como-se-preparar")}
        >
          Ir para “Como se preparar”
        </button>
      </main>
    </div>
  );
}
