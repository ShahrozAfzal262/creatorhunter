import { useState } from "react";
import api from "../api/axios";
import CreatorTable from "../components/creators/CreatorTable";

const MAP = { student: "Student", travel: "Travel", developer: "Developer", fitness: "Fitness", ai: "AI", marketing: "Marketing" };

// A simple "ask for creators in plain words" agent: it spots a niche in your sentence.
export default function Agent() {
  const [text, setText] = useState("");
  const [log, setLog] = useState([]);

  const ask = async (e) => {
    e.preventDefault();
    const q = text.trim();
    if (!q) return;
    setText("");
    const key = Object.keys(MAP).find((k) => new RegExp("\\b" + k + "\\b", "i").test(q));
    const { data } = await api.get("/creators", { params: { niche: key ? MAP[key] : "All", limit: 100 } });
    setLog((l) => [...l, { q, rows: data, niche: key ? MAP[key] : "all niches", saved: false }]);
  };
  const saveAll = async (i) => {
    const m = log[i];
    const list = (await api.post("/lists", { name: m.q.slice(0, 40) })).data;
    await api.post(`/lists/${list._id}/add`, { creatorIds: m.rows.map((r) => r._id) });
    setLog((l) => l.map((x, j) => (j === i ? { ...x, saved: true } : x)));
  };

  return (
    <div>
      <h1>AI Agent</h1>
      <p className="lead">Try: “Find student creators on TikTok for my study app”.</p>
      <div className="agentlog">
        {log.map((m, i) => (
          <div key={i}>
            <div className="bubble">{m.q}</div>
            <div className="card" style={{ marginTop: 10 }}>
              <b>{m.rows.length} matches · {m.niche}</b>
              <CreatorTable rows={m.rows.slice(0, 5)} />
              <div className="cta" style={{ marginTop: 6 }}>
                <button className="btn" disabled={m.saved} onClick={() => saveAll(i)}>
                  {m.saved ? "Saved to your lists" : `Save all ${m.rows.length} to a list`}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={ask} style={{ maxWidth: 820, gridTemplateColumns: "1fr auto" }}>
        <input placeholder="Describe the creators you need…" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="btn">Find creators</button>
      </form>
    </div>
  );
}
