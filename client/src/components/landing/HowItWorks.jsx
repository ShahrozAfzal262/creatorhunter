import useInView from "../../hooks/useInView";

const STEPS = [
  ["Find", "Vetted, actively posting creators, searchable by niche, platform, size, engagement and location."],
  ["Outreach", "AI writes every email from the creator’s own videos and sends it from your Gmail."],
  ["Follow up", "No reply after 3 days? It follows up in the same thread."],
  ["Onboard", "Every creator’s status sits in one list until they’re on board."],
];

export default function HowItWorks() {
  const [ref, seen] = useInView(0.2);
  return (
    <section id="how">
      <div className="wrap">
        <h2>From search to signed creator, on autopilot</h2>
        <p className="lead">Four steps, one list. You approve every reply before it goes out.</p>
        <div ref={ref} className={"steps" + (seen ? " in" : "")}>
          {STEPS.map(([t, d], i) => (
            <div className="step" style={{ "--i": i }} key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
