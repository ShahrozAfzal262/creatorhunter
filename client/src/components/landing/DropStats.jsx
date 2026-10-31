import Button from "../common/Button";
import useCountdown from "../../hooks/useCountdown";

const CREATORS = [
  ["photo-1534528741775-53994a69daeb", "Creator profile 1"],
  ["photo-1500648767791-00dcc994a43e", "Creator profile 2"],
  ["photo-1531123897727-8f129e1688ce", "Creator profile 3"],
  ["photo-1506794778202-cad84cf45f1d", "Creator profile 4"],
  ["photo-1524504388940-b1c1722653e1", "Creator profile 5"],
];

export default function DropStats() {
  const countdown = useCountdown(true);

  return (
    <section className="drop-stats" aria-label="CreatorHuntor stats and next drop">
      <div className="drop-stats-inner">
        <div className="drop-stat">
          <strong>5.1M+</strong>
          <span>Profiles Scanned</span>
        </div>
        <div className="drop-stat">
          <strong>20,000+</strong>
          <span>Accepted so far</span>
        </div>
        <article className="next-drop-card">
          <h2>Next Drop:</h2>
          <strong className="next-drop-countdown" aria-live="off">{countdown}</strong>
          <div className="next-drop-bottom">
            <div className="next-drop-creators">
              <div className="next-drop-avatars">
                {CREATORS.map(([photo, name]) => (
                  <img
                    key={name}
                    src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=80&h=80&q=80`}
                    alt=""
                    title={name}
                    loading="lazy"
                  />
                ))}
              </div>
              <b>800 Creators</b>
            </div>
            <Button to="/register">Get Creators</Button>
          </div>
        </article>
      </div>
    </section>
  );
}
