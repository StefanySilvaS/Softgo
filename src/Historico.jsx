import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Historico.css";

export default function Historico() {
  const navigate = useNavigate();

  const [respostas, setRespostas] = useState({
    bom: "",
    senti: "",
    diferente: ""
  });

  const [novoLugar, setNovoLugar] = useState("");
  const [lugaresVisitados, setLugaresVisitados] = useState([]);

  const adicionarLugar = () => {
    if (novoLugar.trim() === "") return;
    setLugaresVisitados((prev) => [...prev, novoLugar]);
    setNovoLugar("");
  };

  const salvarExperiencia = () => {
    console.log({
      respostas,
      lugaresVisitados
    });
    alert("Experiência salva 💙");
  };

  return (
    <div className="historico-container">
      <header className="historico-header">
        <button className="voltar-btn" onClick={() => navigate(-1)}>
          ← Voltar
        </button>
        <h1>Histórico</h1>
      </header>

      <div className="historico-card">
        <h2>Refletindo sobre a experiência</h2>

        <div className="historico-bloco">
          <label>Como me senti?</label>
          <textarea
            placeholder="Como você se sentiu nessa experiência?"
            value={respostas.senti}
            onChange={(e) =>
              setRespostas({ ...respostas, senti: e.target.value })
            }
          />
        </div>

        <div className="historico-bloco">
          <label>O que foi bom?</label>
          <textarea
            placeholder="Digite sua resposta aqui..."
            value={respostas.bom}
            onChange={(e) =>
              setRespostas({ ...respostas, bom: e.target.value })
            }
          />
        </div>

        <div className="historico-bloco">
          <label>O que faria diferente?</label>
          <textarea
            placeholder="Algo que faria diferente numa próxima vez?"
            value={respostas.diferente}
            onChange={(e) =>
              setRespostas({ ...respostas, diferente: e.target.value })
            }
          />
        </div>
      </div>

      <div className="historico-lugares">
        <h2>Lugares que já visitei</h2>

        <div className="adicionar-lugar">
          <input
            type="text"
            placeholder="Digite o nome do lugar..."
            value={novoLugar}
            onChange={(e) => setNovoLugar(e.target.value)}
          />
          <button onClick={adicionarLugar}>Adicionar</button>
        </div>

        {lugaresVisitados.map((lugar, index) => (
          <div key={index} className="lugar-item">
            📍 {lugar}
          </div>
        ))}
      </div>

      <button className="salvar-btn" onClick={salvarExperiencia}>
        Salvar experiência
      </button>
    </div>
  );
}
