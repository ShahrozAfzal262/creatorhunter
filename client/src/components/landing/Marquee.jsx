const CREATORS = [
  {
    name: "Study creator",
    image: "photo-1534528741775-53994a69daeb",
    label: "human-vetted",
  },
  {
    name: "Tech creator",
    image: "photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Language creator",
    image: "photo-1531123897727-8f129e1688ce",
    label: "Language",
  },
  {
    name: "Lifestyle creator",
    image: "photo-1524504388940-b1c1722653e1",
  },
  {
    name: "AI creator",
    image: "photo-1506794778202-cad84cf45f1d",
    label: "AI analysed",
  },
  {
    name: "Student creator",
    image: "photo-1529139574466-a303027c1d8b",
  },
  {
    name: "Fitness creator",
    image: "photo-1534528741775-53994a69daeb",
    label: "creator match",
  },
];

function CreatorCards({ copy }) {
  return CREATORS.map((creator, i) => (
    <article
      className="creator-reel-card"
      key={`${copy ? "copy-" : ""}${creator.name}`}
      aria-label={copy ? undefined : creator.name}
    >
      <img
        src={`https://images.unsplash.com/${creator.image}?auto=format&fit=crop&w=520&h=720&q=80`}
        alt=""
        loading={copy ? "lazy" : i < 4 ? "eager" : "lazy"}
      />
      {creator.label && <span className="creator-reel-label">{creator.label}</span>}
    </article>
  ));
}

export default function Marquee() {
  return (
    <section className="creator-reel" aria-label="Creator discovery preview">
      <div className="creator-reel-track">
        <div className="creator-reel-group">
          <CreatorCards />
        </div>
        <div className="creator-reel-group" aria-hidden="true">
          <CreatorCards copy />
        </div>
      </div>
    </section>
  );
}
