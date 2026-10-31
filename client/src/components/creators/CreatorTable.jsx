export const fmt = (n = 0) =>
  n >= 1e6 ? (n / 1e6).toFixed(1) + "M" : n >= 1e3 ? (n / 1e3).toFixed(1) + "K" : String(n);

export default function CreatorTable({ rows, selected = [], onToggle }) {
  return (
    <div className="tbl">
      <table>
        <thead>
          <tr>
            {onToggle && <th aria-label="Select" />}
            <th>Creator</th><th>Followers</th><th>Engagement</th><th>Median views</th><th>Niche</th><th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c, i) => (
            <tr key={c._id} style={{ animationDelay: `${i * 40}ms` }}>
              {onToggle && (
                <td>
                  <input type="checkbox" aria-label={`Select ${c.handle}`} checked={selected.includes(c._id)} onChange={() => onToggle(c._id)} />
                </td>
              )}
              <td><b>{c.handle}</b></td>
              <td>{fmt(c.followers)}</td>
              <td>{c.engagement}%</td>
              <td>{fmt(c.medianViews)}</td>
              <td><span className="tag">{c.niche}</span></td>
              <td>{c.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
