export default function FilterChips({ options, value, onChange }) {
  return (
    <div className="chips" role="group" aria-label="Filter by niche">
      {options.map((o) => (
        <button key={o} className="chip" aria-pressed={o === value} onClick={() => onChange(o)}>{o}</button>
      ))}
    </div>
  );
}
