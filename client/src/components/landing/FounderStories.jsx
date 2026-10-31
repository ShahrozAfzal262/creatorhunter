const STORY_COLUMNS = [
  [
    {
      image: "/founder-story-1.png",
      alt: "Founder story card: a successful app growth day with campaign results",
    },
    {
      image: "/founder-story-2.png",
      alt: "Founder story card: organic TikTok video generated recurring revenue",
    },
    {
      image: "/founder-story-3.png",
      alt: "Founder post with an actionable marketing checklist and advice",
    },
  ],
  [
    {
      image: "/founder-story-4.png",
      alt: "Founder story card showing an app's daily active users growing",
    },
    {
      image: "/founder-story-5.png",
      alt: "Founder story card about a creator-led TikTok promotion",
    },
    {
      image: "/founder-story-6.png",
      alt: "Founder story card showing campaign reach and audience results",
    },
  ],
  [
    {
      image: "/founder-story-7.png",
      alt: "Founder story card about a creator video bringing app downloads",
    },
    {
      image: "/founder-story-10.png",
      alt: "Founder story card explaining how influencer marketing helped grow a startup",
    },
    {
      image: "/founder-story-11.png",
      alt: "Founder story card about consumer mobile apps and creator marketing",
    },
  ],
];

export default function FounderStories() {
  return (
    <section className="founder-stories" aria-label="Founder and creator stories">
      <div className="founder-stories-grid">
        {STORY_COLUMNS.map((column, index) => (
          <div className="founder-stories-column" key={`column-${index}`}>
            {column.map(({ image, alt }) => (
              <article className="founder-story-card" key={image}>
                <img src={image} alt={alt} loading="lazy" />
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
