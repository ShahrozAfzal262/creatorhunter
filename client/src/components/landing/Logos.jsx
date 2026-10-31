// Placeholder brand names. Replace with real customer logos when you have them.
const NAMES = ["Acme", "Northwind", "Globex", "Initech", "Hooli", "Umbrella"];

export default function Logos() {
  return (
    <div className="wrap logos">
      <p>used by teams for creator-marketing at scale</p>
      {NAMES.map((n) => <span key={n}>{n}</span>)}
    </div>
  );
}
