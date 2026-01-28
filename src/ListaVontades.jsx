import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListaVontades.css";

export default function ListaVontades() {
  const navigate = useNavigate();

  const [vontades, setVontades] = useState([
    { titulo: "Ir a cafeteria", icone: "☕" },
    { titulo: "Ir na feira da aurora", icone: "🛒" },
    { titulo: "Viajar para Bahia", icone: "✈️" },
    { titulo: "Ir ao museu", icone: "🏛️" },
    { titulo: "Vagar de Bike", icone: "🚴‍♀️" },
    { titulo: "Ir na rua do Bom Jesus", icone: "🌇" },
    { titulo: "Ir a um show", icone: "🎤" },
    { titulo: "Yoga", icone: "🧘‍♀️" },
    { titulo: "Pilates", icone: "🤸‍♀️" },
    { titulo: "Oficina de cerâmica", icone: "🎨" },
  ]);

  const [novaVontade, setNovaVontade] = useState("");

  const adicionarVontade = () => {
    if (novaVontade.trim() !== "") {
      setVontades([...vontades, { titulo: novaVontade.trim(), icone: "✨" }]);
      setNovaVontade("");
    }
  };

  const handleVoltar = () => {
    navigate("/");
  };

  const gerarSlug = (titulo) => {
    return titulo.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="lista-vontades">
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

  <div className="voltar-container">
          <button className="voltar-btn" onClick={handleVoltar}>
            ← Voltar
          </button>
        </div>


      <main className="lista-content">
        <h1>Lista de Vontades</h1>

        <p className="subtitle">Veja tudo que você quer realizar</p>

        <div className="adicionar-vontade">
          <input
            type="text"
            placeholder="Adicione uma nova vontade..."
            value={novaVontade}
            onChange={(e) => setNovaVontade(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && adicionarVontade()}
          />
          <button onClick={adicionarVontade}>➕ Adicionar</button>
        </div>

        <div className="cards">
          {vontades.map((v, index) => (
            <div
              key={index}
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate(`/detalhes-vontades/${gerarSlug(v.titulo)}`)
              }
            >
              <div className="card-icone">{v.icone}</div>
              <h3>{v.titulo}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
