const NICHES = [
  { count: "+152", icon: "📚", name: "Student", days: "7 days ago", creators: ["photo-1524504388940-b1c1722653e1", "photo-1517841905240-472988babdf9"] },
  { count: "+305", icon: "🤖", name: "AI", days: "2 days ago", creators: ["photo-1500648767791-00dcc994a43e", "photo-1531123897727-8f129e1688ce", "photo-1534528741775-53994a69daeb"] },
  { count: "+100", icon: "🛠️", name: "Productivity", days: "8 days ago", creators: ["photo-1494790108377-be9c29b29330", "photo-1529139574466-a303027c1d8b"] },
  { count: "+45", icon: "💸", name: "Crypto", days: "6 days ago", creators: ["photo-1506794778202-cad84cf45f1d", "photo-1544005313-94ddf0286df2"] },
  { count: "+352", icon: "💪", name: "Fitness", days: "4 days ago", creators: ["photo-1534528741775-53994a69daeb", "photo-1507003211169-0a1dd7228f2d", "photo-1524504388940-b1c1722653e1"] },
  { count: "+92", icon: "👨‍💻", name: "Dev", days: "5 days ago", creators: ["photo-1500648767791-00dcc994a43e", "photo-1506794778202-cad84cf45f1d"] },
  { count: "+56", icon: "✈️", name: "Travel", days: "6 days ago", creators: ["photo-1517841905240-472988babdf9", "photo-1531123897727-8f129e1688ce", "photo-1494790108377-be9c29b29330"] },
  { count: "+63", icon: "📊", name: "Finance", days: "3 days ago", creators: ["photo-1524504388940-b1c1722653e1", "photo-1500648767791-00dcc994a43e", "photo-1544005313-94ddf0286df2"] },
  { count: "+72", icon: "🏢", name: "Corporate", days: "9 days ago", creators: ["photo-1506794778202-cad84cf45f1d", "photo-1517841905240-472988babdf9"] },
  { count: "+86", icon: "📣", name: "Marketing", days: "3 days ago", creators: ["photo-1494790108377-be9c29b29330", "photo-1529139574466-a303027c1d8b", "photo-1534528741775-53994a69daeb"] },
  { count: "+101", icon: "🤝", name: "Business", days: "6 days ago", creators: ["photo-1500648767791-00dcc994a43e", "photo-1531123897727-8f129e1688ce"] },
];

const CREATORS = [
  ["isabellamjohn", "161.7K", "10.9K", "32.0%", "guess where 40 countries and counting", "photo-1534528741775-53994a69daeb"],
  ["bonniengaii", "129.0K", "1.9K", "21.0%", "24 brb seeing the world", "photo-1517841905240-472988babdf9"],
  ["travelingwithtals", "120.4K", "10.3K", "9.0%", "Me 🤝 solo traveling", "photo-1494790108377-be9c29b29330"],
  ["annelienoa", "76.8K", "7.1K", "22.0%", "my solo travel life 🌍", "photo-1524504388940-b1c1722653e1"],
  ["girlgoingtravel", "67.0K", "18.9K", "1.0%", "🌍 experiencing the world ✨ travel insp...", "photo-1529139574466-a303027c1d8b"],
  ["abbietravellin", "54.2K", "6.5K", "6.0%", "Surf & Yoga lifestyle + Digital Nomad", "photo-1531123897727-8f129e1688ce"],
];

function NicheActivityList() {
  return (
    <aside className="vetted-activity" aria-label="Recently vetted creator niches">
      {NICHES.map((niche) => (
        <article className="vetted-activity-item" key={niche.name}>
          <div className="vetted-avatars" aria-hidden="true">
            {niche.creators.map((photo, index) => (
              <img key={`${photo}-${index}`} src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=96&h=96&q=80`} alt="" loading="lazy" />
            ))}
          </div>
          <div className="vetted-niche">
            <strong>{niche.count}</strong>
            <span>{niche.icon} {niche.name}</span>
          </div>
          <time>{niche.days}</time>
        </article>
      ))}
    </aside>
  );
}

function CreatorDirectoryPreview() {
  return (
    <div className="vetted-directory">
      <header className="vetted-directory-header">
        <h3>TravelBFF</h3>
        <button type="button">Recalibrate</button>
        <button type="button" className="vetted-export">Export <b>806</b></button>
      </header>
      <div className="vetted-directory-filters">
        <div><span className="travel-chip">Travel</span><span className="student-chip">Student</span></div>
        <span>Showing 1-30 of 806 creators</span>
      </div>
      <div className="vetted-table-scroll">
        <table className="vetted-table">
          <thead>
            <tr><th>Creator</th><th>Followers ↕</th><th>Views ↕</th><th>Engagement ↕</th><th>Bio</th></tr>
          </thead>
          <tbody>
            {CREATORS.map(([name, followers, views, engagement, bio, photo], index) => (
              <tr key={name}>
                <td><img className="vetted-profile" src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=96&h=96&q=80`} alt="" loading="lazy" /><strong>{name}<small>{index % 2 ? "◎" : "♪"}</small></strong></td>
                <td>{followers}</td><td>{views}</td>
                <td><span className={`vetted-engagement${index === 2 || index === 4 || index === 5 ? " warm" : ""}`}>{engagement}</span></td>
                <td className="vetted-bio">{bio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function VettedCreators() {
  return (
    <section className="vetted-creators" aria-labelledby="vetted-creators-title">
      <h2 id="vetted-creators-title">We vetted millions of creators so you don't have to</h2>
      <div className="vetted-product">
        <NicheActivityList />
        <CreatorDirectoryPreview />
      </div>
    </section>
  );
}
