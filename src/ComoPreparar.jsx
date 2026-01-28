import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ComoPreparar.css";

export default function ComoPreparar() {
  const navigate = useNavigate();

  const [companhia, setCompanhia] = useState("");
  const [planoB, setPlanoB] = useState([]);
  const [outroLugar, setOutroLugar] = useState("");

  const togglePlanoB = (opcao) => {
    setPlanoB((prev) =>
      prev.includes(opcao)
        ? prev.filter((item) => item !== opcao)
        : [...prev, opcao]
    );
  };

  return (
    <div className="preparar-container">
      <header className="preparar-header">
        <h1>Como me preparar</h1>
        <button className="sair-btn" onClick={() => navigate(-1)}>
          ✕
        </button>
      </header>

      <p className="preparar-subtitle">
        Pequenas decisões ajudam a trazer mais segurança 💙
      </p>

      <section className="preparar-section">
        <h2>Como pretendo ir</h2>

        <div className="options">
          <button
            className={companhia === "sozinha" ? "active" : ""}
            onClick={() => setCompanhia("sozinha")}
          >
            🙋‍♀️ Sozinha
          </button>

          <button
            className={companhia === "acompanhada" ? "active" : ""}
            onClick={() => setCompanhia("acompanhada")}
          >
            👯 Acompanhada
          </button>
        </div>
      </section>

      <section className="preparar-section">
        <h2>Plano B (caso não me sinta bem)</h2>
        <p className="section-desc">
          Ter um plano alternativo ajuda a relaxar.
        </p>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={planoB.includes("casa")}
              onChange={() => togglePlanoB("casa")}
            />
            Voltar pra casa
          </label>

          <label>
            <input
              type="checkbox"
              checked={planoB.includes("lugarConhecido")}
              onChange={() => togglePlanoB("lugarConhecido")}
            />
            Ir para um lugar conhecido perto
          </label>
        </div>

        {planoB.includes("lugarConhecido") && (
          <div className="extra-options">
            <p>Que tipo de lugar?</p>

            <label>
              <input
                type="checkbox"
                checked={planoB.includes("shopping")}
                onChange={() => togglePlanoB("shopping")}
              />
              🛍️ Shopping
            </label>

            <label>
              <input
                type="checkbox"
                checked={planoB.includes("praia")}
                onChange={() => togglePlanoB("praia")}
              />
              🏖️ Praia
            </label>

            <label className="outro-label">
              Outro:
              <input
                type="text"
                placeholder="Ex: café tranquilo, casa de alguém..."
                value={outroLugar}
                onChange={(e) => setOutroLugar(e.target.value)}
              />
            </label>
          </div>
        )}
      </section>

      <div className="preparar-actions">
        <button className="btn-secondary" onClick={() => navigate(-1)}>
          Voltar
        </button>

        <button
  className="btn-primary"
  onClick={() =>
    navigate("/historico", {
      state: {
        companhia,
        planoB,
        outroLugar,
      },
    })
  }
>
  Histórico
</button>


      </div>
    </div>
  );
}
