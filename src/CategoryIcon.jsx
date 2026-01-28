export default function CategoryIcon({ emoji, label }) {
  return (
    <div className="category">
      <span>{emoji}</span>
      <span>{label}</span>
    </div>
  );
}
