import { useState } from "react";
import Button from "../common/Button";
import useInView from "../../hooks/useInView";

const MATCHES = [
  ["photo-1534528741775-53994a69daeb", "StudyTok", "Study creator"],
  ["photo-1524504388940-b1c1722653e1", "Mia Studies", "Student life"],
  ["photo-1500648767791-00dcc994a43e", "Learn with Alex", "Education"],
];

export default function Showcase() {
  const [ref, seen] = useInView(0.1);
  const [easyMode, setEasyMode] = useState(true);
  const [brief, setBrief] = useState("");

  return (
    <section className="showcase-section">
      <div className="showcase-heading" id="how">
        <h2>Do 800 hours of<br />work in minutes</h2>
        <div className="easy-mode">
          <button
            type="button"
            className={"mode-switch" + (easyMode ? " on" : "")}
            role="switch"
            aria-checked={easyMode}
            aria-label="Easy Mode"
            onClick={() => setEasyMode((enabled) => !enabled)}
          >
            <span />
          </button>
          <b>Easy Mode</b>
          <p>{easyMode
            ? "Agents do the scrolling, research and outreach instead."
            : "You stay in control of every creator search and outreach step."}</p>
        </div>
      </div>

      <div ref={ref} className={"showcase-panels" + (seen ? " in" : "")}>
        <article className="showcase-panel startup-panel">
          <div>
            <h3>Tell us about<br />your startup</h3>
          </div>
          <label className="brief-label" htmlFor="creator-brief">What are you building?</label>
          <textarea
            id="creator-brief"
            value={brief}
            onChange={(event) => setBrief(event.target.value)}
            placeholder="A language learning app..."
            maxLength={240}
          />
          <Button to="/register">Find Creator Matches</Button>
        </article>

        <article className="showcase-panel matches-panel">
          <div>
            <h3>Get creators<br />that match</h3>
            <p>100s sent every week</p>
          </div>
          <div className="matches-card">
            <span className="matches-caption">156,000 profiles scanned</span>
            <strong>1,349 matches found</strong>
            <div className="match-photos">
              {MATCHES.map(([photo, name, category]) => (
                <figure key={name}>
                  <img
                    src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=320&h=420&q=80`}
                    alt={name}
                    loading="lazy"
                  />
                  <figcaption>{category}</figcaption>
                </figure>
              ))}
            </div>
            <div className="match-avatars" aria-hidden="true">
              {MATCHES.map(([photo, name]) => (
                <img
                  key={name}
                  src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=80&h=80&q=75`}
                  alt=""
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </article>

        <article className="showcase-panel agents-panel">
          <div>
            <h3>AI agents email<br />them for you</h3>
            <p>Until they’re onboard</p>
          </div>
          <div className="reach-card">
            <b>Reach</b>
            <div className="reach-total"><span>Accounts reached</span><strong>127</strong></div>
            <div className="reach-stat">
              <div><span>Followers</span><b>81.9%</b></div>
              <span className="reach-track"><i style={{ width: "81.9%" }} /></span>
            </div>
            <div className="reach-stat">
              <div><span>Non-followers</span><b>18.1%</b></div>
              <span className="reach-track"><i style={{ width: "18.1%" }} /></span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
