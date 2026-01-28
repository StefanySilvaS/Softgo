import "./ExperienceCard.css";

export default function ExperienceCard({ title, date, status, emoji }) {
  return (
    <div className="experience-card">
      <span className="emoji">{emoji}</span>

      <div className="info">
        <strong>{title}</strong>
        <span className="date">{date}</span>
      </div>

      <span className={`status ${status}`}>{status}</span>
    </div>
  );
}
