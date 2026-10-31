import { useEffect, useState } from "react";
import api from "../api/axios";
import FilterChips from "../components/creators/FilterChips";
import CreatorTable from "../components/creators/CreatorTable";

const NICHES = ["All", "Student", "Travel", "Developer", "Fitness", "AI", "Marketing"];

export default function Creators() {
  const [niche, setNiche] = useState("All");
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState([]);
  const [sel, setSel] = useState([]);
  const [lists, setLists] = useState([]);
  const [target, setTarget] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const t = setTimeout(() => api.get("/creators", { params: { niche, search, limit: 100 } }).then((r) => setRows(r.data)), 250);
    return () => clearTimeout(t);
  }, [niche, search]);
  const loadLists = () => api.get("/lists").then((r) => setLists(r.data));
  useEffect(() => { loadLists(); }, []);

  const toggle = (id) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const all = () => setSel(sel.length === rows.length ? [] : rows.map((r) => r._id));
  const dest = target || lists[0]?._id || "new";
  const save = async () => {
    let id = dest;
    if (id === "new") id = (await api.post("/lists", { name: name || "My list" })).data._id;
    await api.post(`/lists/${id}/add`, { creatorIds: sel });
    setMsg(`Added ${sel.length} creators`);
    setSel([]);
    loadLists();
  };

  return (
    <div>
      <h1>Creators</h1>
      <p className="lead">Filter by niche, select the ones you like and save them to a list.</p>
      <FilterChips options={NICHES} value={niche} onChange={setNiche} />
      <div className="toolbar">
        <input placeholder="Search creators…" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="btn ghost" onClick={all}>{sel.length === rows.length && rows.length ? "Clear selection" : `Select all (${rows.length})`}</button>
        {sel.length > 0 && (
          <>
            <select value={dest} onChange={(e) => setTarget(e.target.value)}>
              {lists.map((l) => <option key={l._id} value={l._id}>{l.name}</option>)}
              <option value="new">New list…</option>
            </select>
            {dest === "new" && <input placeholder="List name" value={name} onChange={(e) => setName(e.target.value)} />}
            <button className="btn" onClick={save}>Add {sel.length} to list</button>
          </>
        )}
        {msg && <span className="ok">{msg}</span>}
      </div>
      <CreatorTable rows={rows} selected={sel} onToggle={toggle} />
    </div>
  );
}
