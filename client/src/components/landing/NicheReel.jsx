function ReelImage({ copy = false }) {
  return (
    <img
      className="niche-reel-image"
      src="/niche-reel-reference.png"
      alt=""
      aria-hidden="true"
      loading={copy ? "lazy" : "eager"}
    />
  );
}

export default function NicheReel() {
  return (
    <section className="niche-reel" aria-label="Moving creator video reel">
      <div className="niche-reel-track">
        <ReelImage />
        <ReelImage copy />
      </div>
    </section>
  );
}
