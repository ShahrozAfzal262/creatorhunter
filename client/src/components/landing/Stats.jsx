function Count({ to, suffix = "" }) {
  return <strong>{to.toLocaleString()}{suffix}</strong>;
}

export default function Stats() {
  return (
    <section className="impact-stats" aria-label="CreatorHuntor impact">
      <div className="impact-stats-inner">
        <div className="impact-hours">
          <Count to={800} suffix="+" />
          <span>Hours saved per week</span>
        </div>
        <div className="impact-secondary">
          <div><Count to={532} suffix="k" /><span>Emails Sent</span></div>
          <div><Count to={42} suffix="M" /><span>Views generated</span></div>
        </div>
      </div>
    </section>
  );
}
