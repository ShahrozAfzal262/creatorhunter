import { useEffect, useState } from "react";
import api from "../api/axios";
import Button from "../components/common/Button";
import CreatorCard from "../components/creators/CreatorCard";

export default function Dashboard() {
  const [top, setTop] = useState([]);
  const [lists, setLists] = useState([]);
  const [mails, setMails] = useState([]);
  useEffect(() => {
    api.get("/creators", { params: { limit: 6 } }).then((r) => setTop(r.data));
    api.get("/lists").then((r) => setLists(r.data));
    api.get("/outreach").then((r) => setMails(r.data));
  }, []);
  const items = lists.flatMap((l) => l.items);
  const replied = items.filter((i) => ["Replied", "Negotiating", "Onboarded"].includes(i.status)).length;
  const sent = mails.filter((m) => m.status !== "draft").length;
  return (
    <div>
      <h1>Dashboard</h1>
      <p className="lead">Your creators, emails and replies in one place.</p>
      <div className="kpis">
        <div className="kpi"><b>{lists.length}</b><span>Lists</span></div>
        <div className="kpi"><b>{items.length}</b><span>Saved creators</span></div>
        <div className="kpi"><b>{sent}</b><span>Emails sent</span></div>
        <div className="kpi"><b>{replied}</b><span>Replied or onboarded</span></div>
      </div>
      <div className="cta">
        <Button to="/agent">Ask the AI agent</Button>
        <Button ghost to="/creators">Browse creators</Button>
        <Button ghost to="/outreach">Write outreach</Button>
      </div>
      <h2 className="h3">Highest engagement right now</h2>
      <div className="grid">{top.map((c) => <CreatorCard key={c._id} c={c} />)}</div>
    </div>
  );
}
