const HEADERS = ["Top Features", "CreatorHunter", "Other Tools", "Agencies", "Do It Yourself"];

const ROWS = [
  ["Searchable Records", "2B+", "5M-2B", "~1K-10K", "-"],
  ["Hand Picked Lists", "✓", "×", "×", "×"],
  ["Hours Saved", "800/mo", "50/mo", "500/mo", "×"],
  ["AI Agents", "✓", "×", "×", "×"],
  ["0-100KM/h", "10 mins", "24 hours", "4 weeks", "months"],
  ["Made for Founders", "✓", "×", "×", "×"],
  ["Constant Updates", "✓", "?", "?", "×"],
  ["Monthly Cost", "starts at $67", "$300-2,000", "$2,000-20,000", "800 hours; $4k/mo VA costs"],
  ["Quality Creators", "1,000's/mo", "~50", "~10", "1000's of hours"],
];

const PAIN_POINTS = [
  "98% Fashion + Beauty",
  "Made for big ecom brands",
  "10 in 10,000 creators actually relevant",
  "Cost $499–4,999 per month for simple database access",
];

const SPREADSHEET_ROWS = [
  ["2", "maya.studies", "212k?", "???", "DM'd, no reply"],
  ["3", "studywithleo", "88,900", "in bio", "emailed wk 2"],
  ["4", "notesbynina", "41k", "", "ghosted"],
  ["5", "ella.learns", "506K", "ask agency", "follow up??"],
  ["6", "jay.revises", "1.1M", "", "too pricey"],
];

export default function Compare() {
  return (
    <section id="compare" className="compare-section" aria-labelledby="compare-title">
      <header className="compare-intro">
        <h2 id="compare-title">Some Painful*Alternatives</h2>
        <p>before, creator hunter, there was pain</p>
      </header>
      <h3 className="compare-choice-heading">Choose your path</h3>
      <div className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              {HEADERS.map((header, index) => (
                <th className={index === 1 ? "compare-highlight" : ""} scope="col" key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([feature, ...values]) => (
              <tr key={feature}>
                <th scope="row">{feature}</th>
                {values.map((value, index) => (
                  <td className={index === 0 ? "compare-highlight" : ""} key={`${feature}-${index}`}>
                    {value === "✓" ? <span className="compare-check" aria-label="Included">✓</span> : value === "×" ? <span className="compare-cross" aria-label="Not included">×</span> : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="compare-pain-panels">
        <article className="compare-pain-tools">
          <h3>“Other tools<br />out there”</h3>
          <div className="compare-tool-logos" aria-label="Creator search tools">
            <span>MO</span><span className="compare-tool-mark" aria-hidden="true" />
          </div>
          <div className="compare-found"><span>Found <b>1</b> profiles.</span><strong>SELECT ALL</strong></div>
          <ul>
            {PAIN_POINTS.map((point) => <li key={point}><span aria-hidden="true">×</span>{point}</li>)}
          </ul>
        </article>
        <article className="compare-pain-manual">
          <h3>“I'll do it myself”</h3>
          <ul>
            <li><span aria-hidden="true">×</span>Scroll 300+ hours</li>
            <li><span aria-hidden="true">×</span>Send email one by one for weeks</li>
            <li><span aria-hidden="true">×</span>Hope creator brings results</li>
          </ul>
          <div className="compare-sheet">
            <div className="compare-sheet-title"><strong>creators_FINAL_v3 (2).xlsx</strong><span>Last edit 3:12 AM</span></div>
            <div className="compare-sheet-scroll">
              <table>
                <thead><tr><th></th><th>handle</th><th>followers</th><th>email?</th><th>status</th></tr></thead>
                <tbody>
                  {SPREADSHEET_ROWS.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) => <td className={row[0] === "2" && index === 4 ? "compare-sheet-selected" : ""} key={`${row[0]}-${index}`}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
