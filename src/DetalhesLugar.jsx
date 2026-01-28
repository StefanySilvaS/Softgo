import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DetalhesLugar.css";

export default function DetalhesLugar() {
  const { state } = useLocation();
  const { nome, icone, descricao, data, local, funcionamento } = state;

  const navigate = useNavigate();
return (
  <div className="softgo-background">
    <div className="detalhes-lugar">
      <header className="softgo-header">
        <div className="softgo-logo">
          <span className="logo-icone">☁️</span>
          <span className="logo-texto">SoftGo</span>
        </div>

        <button
          className="home-exit"
          onClick={() => navigate("/")}
        >
          Sair
        </button>
      </header>
<div className="retornar-container">
  <button className="btn-primary" onClick={() => navigate(-1)}>
    Voltar
  </button>
</div>

      <main className="lugar-content">
        <h1>{icone} {nome}</h1>

        {descricao && <p className="descricao">{descricao}</p>}
        {data && <p>📅 {data}</p>}
        {local && <p>📍 {local}</p>}

        {funcionamento && (
          <div className="info-card">
            <p><strong>🧍 Atendimento:</strong> {funcionamento.atendimento}</p>
            <p><strong>💳 Pagamento:</strong> {funcionamento.pagamento}</p>
            <p><strong>📅 Reserva:</strong> {funcionamento.reserva}</p>
            <p><strong>👥 Movimento:</strong> {funcionamento.movimento}</p>
          </div>
        )}

        <button
          className="btn-preparar"
          onClick={() => navigate("/como-preparar")}
        >
          Como me preparar
        </button>
      </main>
    </div>
  </div>
  );
}
