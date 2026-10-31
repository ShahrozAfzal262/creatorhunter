import Button from "../common/Button";

const CREATORS = [
  ["photo-1534528741775-53994a69daeb", "Creator profile 1"],
  ["photo-1500648767791-00dcc994a43e", "Creator profile 2"],
  ["photo-1531123897727-8f129e1688ce", "Creator profile 3"],
  ["photo-1506794778202-cad84cf45f1d", "Creator profile 4"],
  ["photo-1524504388940-b1c1722653e1", "Creator profile 5"],
];

export default function FinalCta() {
  return (
    <section className="subscription-cta" id="join">
      <div className="subscription-inner">
        <h2>One Subscription, Endless<br className="subscription-break" /> Supply Of Creators</h2>
        <div className="subscription-content">
          <div className="subscription-pitch">
            <h3>Never scroll for good creators again</h3>
            <Button to="/register">Get Creators</Button>
          </div>
          <article className="drop-card">
            <div className="drop-card-top">
              <b>Your next drop</b>
              <span className="match-badge"><i />Matched to your brief</span>
            </div>
            <h3>Monday</h3>
            <p>Every week at 09:00 UTC · new creators for your app, vetted and ready to email</p>
            <div className="drop-card-creators">
              <div className="drop-avatars" aria-label="Creator examples">
                {CREATORS.map(([photo, name]) => (
                  <img
                    key={name}
                    src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=80&h=80&q=80`}
                    alt={name}
                    loading="lazy"
                  />
                ))}
              </div>
              <b>800 Creators</b>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
