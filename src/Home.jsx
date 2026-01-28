import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-main">
<header className="home-header">
  <span className="home-logo">☁️ SoftGo</span>

  <button
    className="home-exit"
    onClick={() => navigate("/")}
  >
    Sair
  </button>
</header>

      <main className="home-main">
        <h1 className="home-title">SoftGo</h1>

        <p className="home-subtitle">
          No seu tempo, do seu jeito — só não deixe de ir.
        </p>

        <p className="home-text">
          Um espaço para registrar vontades, entender experiências
          e se preparar com mais segurança, respeitando seus limites.
        </p>

        <div className="home-cards">
          <div className="home-card">
            <span>💚</span>
            <h3>Registre vontades</h3>
            <p>Guarde seus desejos em um lugar seguro</p>
          </div>

          <div className="home-card">
            <span>✨</span>
            <h3>Entenda experiências</h3>
            <p>Saiba como cada momento funciona</p>
          </div>

          <div className="home-card">
            <span>🛡</span>
            <h3>Prepare-se com segurança</h3>
            <p>Sinta-se pronta antes de ir</p>
          </div>
        </div>

        <button
          className="home-button"
          onClick={() => navigate("/lista-vontades")}
        >
          Começar →
        </button>
      </main>
    </div>
  );
}
