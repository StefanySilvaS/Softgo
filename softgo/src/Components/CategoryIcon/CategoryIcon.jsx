
import "./CategoryIcon.css";

export default function CategoryIcon({ label, emoji, color }) {
  return (
    <div className={`category-icon ${color}`}>
      <span className="emoji">{emoji}</span>
      <span className="label">{label}</span>
    </div>
  );
}
