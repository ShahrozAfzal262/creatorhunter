const BRANDS = ["trailblazer", "△ delta", "◧", "HeyGen", "serif", "◯ leadbeam"];

const VETTING_SIGNALS = [
  "Actively posting",
  "Niched",
  "Favored by algorithm",
  "Human-vetted",
  "AI analysed",
  "Contact found",
];

export default function CreatorProof() {
  return (
    <section className="creator-proof" aria-label="Human-vetted creator database">
      <div className="creator-proof-inner">
        <div className="creator-proof-brands">
          <p>used by teams for<br />creator-marketing at scale</p>
          <div className="creator-proof-brand-list" aria-label="Teams and platforms">
            {BRANDS.map((brand) => <span key={brand}>{brand}</span>)}
          </div>
        </div>

        <header className="creator-proof-heading">
          <h2>Not Another Irrelevant API-Scraped Database</h2>
          <p>we don't mindlessly scrape API's. we dig out gold</p>
        </header>

        <div className="creator-proof-content">
          <ul className="creator-proof-points">
            <li><span aria-hidden="true">✓</span>Human &amp; AI Scan Millions Of Profiles</li>
            <li><span aria-hidden="true">✓</span>Hand Pick The Best Creators For You</li>
            <li><span aria-hidden="true">✓</span>Get 100s Of New Creators Every Week</li>
            <li><span aria-hidden="true">✓</span>Outreach And Grow Your Creator Army On Autopilot</li>
          </ul>

          <article className="creator-proof-profile" aria-label="Example vetted creator profile">
            <header className="creator-proof-profile-header">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80" alt="" loading="lazy" />
              <div>
                <strong>isabellamjohn <span aria-label="TikTok">♪</span></strong>
                <p>guess where 40 countries and counting</p>
                <div><b>Travel</b><span>in TravelBFF</span></div>
              </div>
            </header>
            <div className="creator-proof-metrics">
              <div><span>Followers</span><strong>161.7K</strong></div>
              <div><span>Median views</span><strong>10.9K</strong></div>
              <div><span>Engagement</span><strong>32.0%</strong></div>
            </div>
            <div className="creator-proof-vetting">
              <strong>Vetting</strong>
              <ul>
                {VETTING_SIGNALS.map((signal) => (
                  <li key={signal}><span aria-hidden="true">✓</span>{signal}</li>
                ))}
              </ul>
            </div>
            <footer>
              <span>Add to list</span>
              <span>Outreach</span>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
