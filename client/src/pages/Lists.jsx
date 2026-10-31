import { useEffect, useState } from "react";
import api from "../api/axios";
import { fmt } from "../components/creators/CreatorTable";

const STATUSES = ["Found", "Emailed", "Follow-up sent", "Replied", "Negotiating", "Onboarded"];

export default function Lists() {
  const [lists, setLists] = useState([]);
  const load = () => api.get("/lists").then((r) => setLists(r.data));
  useEffect(() => { load(); }, []);
  const setStatus = async (l, c, status) => {
    await api.patch(`/lists/${l._id}/status`, { creatorId: c._id, status });
    load();
  };
  return (
    <div>
      <h1>Lists</h1>
      <p className="lead">Every creator’s status, until they’re on board.</p>
      {!lists.length && <p className="lead">No lists yet. Save creators from the Creators page.</p>}
      {lists.map((l) => (
        <div className="panel" key={l._id}>
          <h2 className="h3">{l.name} <span className="count">{l.items.length} creators</span></h2>
          <div className="tbl">
            <table>
              <thead><tr><th>Creator</th><th>Followers</th><th>Engagement</th><th>Status</th></tr></thead>
              <tbody>
                {l.items.filter((i) => i.creator).map((i) => (
                  <tr key={i._id}>
                    <td><b>{i.creator.handle}</b></td>
                    <td>{fmt(i.creator.followers)}</td>
                    <td>{i.creator.engagement}%</td>
                    <td>
                      <select className={"status " + i.status} value={i.status} onChange={(e) => setStatus(l, i.creator, e.target.value)}>
                        {STATUSES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
