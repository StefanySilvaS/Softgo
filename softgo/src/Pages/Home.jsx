import "./Home.css";
import CategoryIcon from "../../components/CategoryIcon/CategoryIcon";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

export default function Home() {
  return (
    <div className="home-container">

      <header className="home-header">
        <h1>Explore com o SoftGo!</h1>
        <p>Registre e acompanhe suas experiências</p>
      </header>

      <section className="categories">
        <CategoryIcon label="Viagem" emoji="🎒" color="orange" />
        <CategoryIcon label="Cafeteria" emoji="☕" color="pink" />
        <CategoryIcon label="Praia" emoji="🏖️" color="blue" />
        <CategoryIcon label="Museu" emoji="🖼️" color="green" />
        <CategoryIcon label="Trilha" emoji="🥾" color="yellow" />
      </section>

      <section className="experiences">
        <h2>Últimas experiências</h2>

        <ExperienceCard
          title="Museu do Amanhã"
          date="05/01/2026"
          status="Concluída"
          emoji="🖼️"
        />

        <ExperienceCard
          title="Cafeteria Central"
          date="02/01/2026"
          status="Pendente"
          emoji="☕"
        />
      </section>

      <button className="add-button">
        ➕ Adicionar Experiência
      </button>

    </div>
  );
}
