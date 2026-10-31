import Button from "../common/Button";
import useInView from "../../hooks/useInView";

export default function OutreachDemo() {
  const [ref, seen] = useInView(0.3);
  return (
    <section>
      <div className="wrap two">
        <div>
          <h2>Emails that sound like you watched their videos</h2>
          <p className="lead">Drafts are written from each creator’s content. Save them to drafts, or send with a daily cap.</p>
          <div className="cta"><Button to="/register">Try outreach</Button></div>
        </div>
        <div ref={ref} className={"mail" + (seen ? " in" : "")}>
          <div className="f">From you@yourapp.com · To maya.studies<br />Subject: Your study vlogs + our app</div>
          <p style={{ margin: 0 }}>Hi Maya, your “study with me” videos are exactly how our students plan their week. Would you make one video showing how you use our app? We pay per video, plus a bonus if it takes off.</p>
          <div className="thread m" style={{ "--i": 1 }}>Thu 9:00 · Bumping this in case it got buried. Happy to send the brief!</div>
          <div className="thread m" style={{ "--i": 2 }}>maya.studies: Love this. What’s the budget for one video?</div>
          <div className="thread ai m" style={{ "--i": 3 }}>
            <span className="badge">Suggested reply · needs your OK</span><br />
            Thanks Maya! Here’s the brief and our rate for one video. Shall I book you in for next week?
          </div>
        </div>
      </div>
    </section>
  );
}
