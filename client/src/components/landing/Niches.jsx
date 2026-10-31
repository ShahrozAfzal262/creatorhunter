import { useMemo, useState } from "react";

const NICHES = [
  ["🤖", "AI"],
  ["⚡", "Productivity"],
  ["💪", "Fitness"],
  ["💻", "Tech"],
  ["🎥", "Content Creation"],
  ["🥗", "Nutrition"],
  ["📣", "Marketing"],
  ["₿", "Crypto"],
  ["💗", "Relationships"],
  ["⚖️", "Law"],
  ["📊", "Finance"],
  ["🛍️", "Ecom"],
  ["✈️", "Travel"],
  ["👨‍💻", "Developer"],
  ["⭐", "Lifestyle"],
  ["🏢", "Corporate"],
  ["💼", "Career"],
  ["🤝", "Business"],
  ["📈", "Trading"],
  ["👾", "Gaming"],
  ["🍼", "Parenting"],
  ["♊", "Astrology"],
  ["🏠", "Home"],
  ["✝️", "Christian"],
  ["🗣️", "Language"],
  ["📚", "Books"],
  ["💄", "Beauty"],
  ["🎨", "Design"],
  ["🏡", "Real Estate"],
  ["🎬", "Editing"],
  ["👗", "Fashion"],
  ["🎵", "Music"],
  ["🌱", "Self Growth"],
];

const FILTERS = ["active", "transcribed", "liked by algo", "Purple Hair"];

export default function Niches() {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState(["active", "transcribed"]);
  const filteredNiches = useMemo(
    () => NICHES.filter(([, name]) => name.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  );

  function toggleFilter(filter) {
    setActiveFilters((current) => current.includes(filter)
      ? current.filter((item) => item !== filter)
      : [...current, filter]);
  }

  return (
    <section id="creators" className="niches-section" aria-labelledby="niches-title">
      <div className="niches-inner">
        <h2 id="niches-title">Find creators in your<br />niche, tonight</h2>
        <div className="niches-panel">
          <label className="niches-search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search niches..."
              aria-label="Search niches"
            />
          </label>
          <div className="niches-filters" aria-label="Creator filters">
            {FILTERS.map((filter) => (
              <button
                type="button"
                key={filter}
                className={activeFilters.includes(filter) ? "selected" : ""}
                aria-pressed={activeFilters.includes(filter)}
                onClick={() => toggleFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="niches-cloud">
          {filteredNiches.length > 0
            ? filteredNiches.map(([icon, name], index) => (
              <span className="niche-cloud-item" key={name}>
                <span aria-hidden="true">{icon}</span> {name}
                {index < filteredNiches.length - 1 && <i aria-hidden="true">·</i>}
              </span>
            ))
            : <p className="niches-empty">No niches match “{query}”. Try another search.</p>}
        </div>
      </div>
    </section>
  );
}
