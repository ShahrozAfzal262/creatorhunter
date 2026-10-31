const STEPS = [
  ["Find", "Vetted, actively-posting creators, searchable by niche, platform, size, engagement and location."],
  ["Outreach", "AI writes every email from the creator's own videos and sends it from your Gmail."],
  ["Follow-Up", "No reply after 3 days? It follows up in the same thread. You approve every answer."],
  ["Onboard", "Every creator's status sits in one list, until they're on board."],
];

const CREATORS = [
  ["M", "maya.studies", "212,400", "14.0%", "Onboarded"],
  ["S", "studywithleo", "88,900", "11.0%", "Onboarded"],
  ["N", "notesbynina", "41,300", "9.0%", "Negotiating"],
  ["E", "ella.learns", "506,000", "7.0%", "Replied"],
  ["J", "jay.revises", "1,120,000", "6.0%", "Follow-up sent"],
];

export default function CreatorDirectory() {
  return (
    <section className="niche-preview" aria-label="Creator workflow preview">
      <div className="niche-preview-inner">
        <div className="niche-steps">
          {STEPS.map(([title, description]) => (
            <article className="niche-step" key={title}>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="niche-app" aria-label="Creator Hunter dashboard preview">
          <aside className="niche-app-sidebar">
            <div className="niche-app-brand"><span aria-hidden="true">▶</span> Creator Hunter</div>
            <nav aria-label="Dashboard preview navigation">
              <span>♙ <b>Creators</b></span>
              <span className="selected">☷ <b>Lists</b></span>
              <span>✉ <b>Outreach</b></span>
              <span>✧ <b>AI Agent</b></span>
            </nav>
            <div className="niche-next-drop">Next drop<strong>Monday</strong></div>
          </aside>
          <div className="niche-app-main">
            <header className="niche-app-header"><strong>Lists</strong><span>20,000+ creators</span></header>
            <div className="niche-list-content">
              <div className="niche-list-heading">
                <div><h3>students</h3><span>Private list · 71 creators</span></div>
                <div className="niche-actions"><button type="button">Export CSV</button><button type="button">Outreach</button></div>
              </div>
              <div className="niche-table-scroll">
                <table className="niche-table">
                  <thead><tr><th>Creator</th><th>Followers</th><th>Engagement</th><th>Status</th></tr></thead>
                  <tbody>
                    {CREATORS.map(([initial, name, followers, engagement, status]) => (
                      <tr key={name}>
                        <td><span className="niche-avatar">{initial}</span><b>{name}</b></td>
                        <td>{followers}</td>
                        <td><span className="niche-engagement">{engagement}</span></td>
                        <td><span className={`niche-status ${status.toLowerCase().replaceAll(" ", "-")}`}>{status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
