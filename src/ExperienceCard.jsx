export default function ExperienceCard({ emoji, title, date, status }) {
  return (
    <div className="card">
      <span className="emoji">{emoji}</span>

      <div className="info">
        <strong>{title}</strong>
        <span className="date">{date}</span>
      </div>

      <span className="status">{status}</span>
    </div>
  );
}
