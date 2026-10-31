const FIRST_ROW = [
  {
    title: "Match against a brief",
    description: "Rank creators for any brand or campaign, each with a fit score and the signals it matched on.",
    preview: (
      <>
        <div className="feature-preview-label">Brief · study app for US students</div>
        <div className="brief-creator-list">
          {[["M", "maya.studies", "study vlogs", "94"], ["S", "studywithleo", "exam tips", "88"], ["N", "notesbynina", "note-taking", "81"]].map(([initial, name, topic, score]) => (
            <div className="brief-creator" key={name}>
              <span className="feature-avatar">{initial}</span><b>{name}</b>
              <span className="feature-topic">{topic}</span><strong>{score}</strong>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "Hunt niche talent on demand",
    description: "Send it after hard-to-find creators in a niche; it keeps hunting until it hits your count.",
    preview: (
      <>
        <div className="feature-preview-label">Hunting · indie game devs on TikTok</div>
        <div className="hunt-progress-card">
          <div className="hunt-progress-heading"><span>Found</span><b>37 of 50</b></div>
          <div className="feature-progress"><i style={{ width: "74%" }} /></div>
          <div className="hunt-creators"><span>R</span><span>P</span><span>D</span><span>T</span><span>+33 more, still hunting</span></div>
        </div>
        <div className="hunt-latest"><span>Latest</span><b className="feature-avatar">R</b><strong>rae.builds</strong><span>22.4K followers</span><em>12.0%</em></div>
      </>
    ),
  },
  {
    title: "Search the full directory",
    description: "Filter by category, platform, follower tier, follower range and engagement.",
    preview: (
      <>
        <div className="feature-preview-label">Directory filters</div>
        <div className="directory-chips"><b>Student</b><span>TikTok</span><span>All Sizes</span><span>United States</span></div>
        <div className="directory-total"><strong>71</strong><span>creators match</span></div>
      </>
    ),
  },
];

const SECOND_ROW = [
  {
    title: "Analyze your matches",
    description: "Reason over engagement, median views and hidden-gem score to decide who to prioritize.",
    preview: (
      <>
        <div className="feature-preview-label">M <b>maya.studies · why first</b></div>
        <div className="analysis-card">
          {[["Engagement", "14.0%", "82%"], ["Median views", "48.2K", "58%"], ["Hidden-gem score", "9.1", "91%"]].map(([label, value, width]) => (
            <div className="analysis-metric" key={label}>
              <div><span>{label}</span><b>{value}</b></div>
              <div className="feature-progress"><i style={{ width }} /></div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "Draft & send outreach",
    description: "Personalized emails in your brand's voice, saved to drafts or sent live, with a daily cap.",
    preview: (
      <>
        <div className="feature-preview-label outreach-preview-label">Outreach <span><i />Draft mode</span></div>
        <div className="outreach-preview-card">
          <div><span className="feature-avatar">S</span><b>studywithleo</b><span>Your exam tips + our app</span></div>
          <p>Hi Leo, your exam-tips videos are exactly how our students plan their week...</p>
          <div className="outreach-sent"><span>Sent today</span><b>18 / 25</b></div>
          <div className="feature-progress"><i style={{ width: "72%" }} /></div>
        </div>
      </>
    ),
  },
  {
    title: "Save into your lists",
    description: "Drop the best finds straight into your lists, de-duplicated, ready to action in the app.",
    preview: (
      <>
        <div className="feature-preview-label">Lists · students</div>
        <div className="list-added-card"><span>✓</span><div><b>12 creators added</b><p>3 already on the list, skipped</p></div></div>
        <div className="list-total"><strong>83</strong><span>creators in the list</span></div>
      </>
    ),
  },
];

function FeatureRow({ features, label }) {
  return (
    <div className="feature-row" aria-label={label}>
      {features.map(({ title, description, preview }) => (
        <article className="feature-card" key={title}>
          <div className="feature-preview" aria-hidden="true">{preview}</div>
          <h2>{title}</h2>
          <p>{description}</p>
        </article>
      ))}
    </div>
  );
}

export default function FeatureHighlights() {
  return (
    <section className="feature-highlights" aria-label="Creator Hunter features">
      <div className="feature-highlights-inner">
        <FeatureRow features={FIRST_ROW} label="Creator discovery features" />
        <FeatureRow features={SECOND_ROW} label="Creator outreach features" />
      </div>
    </section>
  );
}
