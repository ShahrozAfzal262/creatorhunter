const reels = [
  { label: "review", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
  { label: "insta360", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80" },
  { label: "step by step tutorial", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" },
  { label: "check out more tutorials", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" },
  { label: "studying with me", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80" },
  { label: "micro trends", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80" },
];

function ReelCards() {
  return reels.map((item, index) => (
    <article className="video-card" key={`${item.label}-${index}`}>
      <img src={item.image} alt="" loading="lazy" />
      <div className="video-caption">{item.label}</div>
    </article>
  ));
}

export default function FooterShowcase() {
  return (
    <section className="footer-showcase" aria-label="Creator video reel">
      <div className="video-marquee" aria-hidden="true">
        <div className="video-track">
          <ReelCards />
          <ReelCards />
        </div>
      </div>
    </section>
  );
}
