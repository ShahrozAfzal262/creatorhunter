const PROMISES = [
  "Cure scroll brainrot",
  "Fire your agency",
  "Leave the email threads",
  "Drop outdated databases",
];

export default function FooterPromises() {
  return (
    <section className="promise-footer" aria-label="CreatorHuntor promises">
      <div className="wrap bigfoot-inner">
        <div className="bigfoot-top promise-footer-top">
          <h2>Your tireless search for<br />creators ends here</h2>
          <div className="socials" aria-label="Social networks">
            <span aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.6 7.2a6.8 6.8 0 0 1-4.2-1.5v8.1a6.1 6.1 0 1 1-5.3-6V12a2.1 2.1 0 1 0 1.4 2V2h4a6.8 6.8 0 0 0 4.1 4.2v1Z" /></svg>
            </span>
            <span aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-dot" cx="17.5" cy="6.8" r="1" /></svg>
            </span>
            <span aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.4V8.6l5.9 3.4-5.9 3.4Z" /></svg>
            </span>
            <span className="linkedin" aria-label="LinkedIn">in</span>
            <span className="coming-soon">Coming Soon</span>
          </div>
        </div>
        <ul className="footer-promises">
          {PROMISES.map((promise) => (
            <li key={promise}><span aria-hidden="true">×</span>{promise}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
