import { fmt } from "./CreatorTable";

export default function CreatorCard({ c }) {
  return (
    <div className="card">
      <div className="row" style={{ border: 0, padding: 0, opacity: 1 }}>
        <span className="av">{c.handle[0].toUpperCase()}</span>
        <div><div className="n">{c.handle}</div><div className="m">{fmt(c.followers)} followers</div></div>
        <span className="e">{c.engagement}%</span>
      </div>
      <span className="tag" style={{ width: "fit-content" }}>{c.niche}</span>
    </div>
  );
}
