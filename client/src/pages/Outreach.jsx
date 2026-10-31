import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Outreach() {
  const [creators, setCreators] = useState([]);
  const [cid, setCid] = useState("");
  const [product, setProduct] = useState("");
  const [d, setD] = useState(null);
  const [hist, setHist] = useState([]);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const loadHist = () => api.get("/outreach").then((r) => setHist(r.data));
  useEffect(() => {
    api.get("/creators", { params: { limit: 100 } }).then((r) => { setCreators(r.data); setCid(r.data[0]?._id || ""); });
    loadHist();
  }, []);

  const fail = (e) => setErr(e.response?.data?.message || "Something went wrong");
  const makeDraft = async () => {
    setErr(""); setMsg("");
    try { setD((await api.post("/outreach/draft", { creatorId: cid, product: product || "our app" })).data); } catch (e) { fail(e); }
  };
  const send = async () => {
    setErr("");
    try {
      await api.post("/outreach/send", { id: d._id, subject: d.subject, body: d.body });
      setMsg(`Email sent to ${d.creator.handle}. Follow-up is due in 3 days.`);
      setD(null);
      loadHist();
    } catch (e) { fail(e); }
  };

  return (
    <div>
      <h1>Outreach</h1>
      <p className="lead">Write a draft from the creator’s niche, edit it, then send.</p>
      <div className="toolbar">
        <select value={cid} onChange={(e) => setCid(e.target.value)}>
          {creators.map((c) => <option key={c._id} value={c._id}>{c.handle} · {c.contact}</option>)}
        </select>
        <input placeholder="Your app name" value={product} onChange={(e) => setProduct(e.target.value)} />
        <button className="btn" onClick={makeDraft} disabled={!cid}>Write draft</button>
      </div>
      {err && <p className="err">{err}</p>}
      {msg && <p className="ok">{msg}</p>}
      {d && (
        <form onSubmit={(e) => { e.preventDefault(); send(); }} style={{ maxWidth: 680 }}>
          <label>Subject<input value={d.subject} onChange={(e) => setD({ ...d, subject: e.target.value })} /></label>
          <label>Message<textarea value={d.body} onChange={(e) => setD({ ...d, body: e.target.value })} /></label>
          <div className="cta" style={{ marginTop: 0 }}>
            <button className="btn">Send email</button>
            <button type="button" className="btn ghost" onClick={() => setD(null)}>Discard</button>
          </div>
        </form>
      )}
      <div className="history">
        <h2 className="h3">History</h2>
        {!hist.length && <p className="lead">No emails yet.</p>}
        <div className="tbl" style={{ display: hist.length ? "block" : "none" }}>
          <table>
            <thead><tr><th>Creator</th><th>Subject</th><th>Status</th><th>Follow-up due</th></tr></thead>
            <tbody>
              {hist.map((h) => (
                <tr key={h._id}>
                  <td><b>{h.creator?.handle}</b></td><td>{h.subject}</td>
                  <td><span className="status">{h.status}</span></td>
                  <td>{h.followUpAt ? new Date(h.followUpAt).toLocaleDateString() : "–"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
