import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="bigfoot">
      <div className="wrap bigfoot-inner">
        <div className="footer-top">
          <Logo />
          <nav aria-label="Footer navigation">
            <a href="/#how">How it works</a>
            <a href="/#creators">Niches</a>
            <a href="/#agents">Agents</a>
            <a href="/#compare">Compare</a>
            <a href="/#faq">FAQ</a>
          </nav>
        </div>
        <div className="wordmark" aria-hidden="true">CreatorHuntor</div>
        <div className="footer-bottom">
          <small>Copyright © 2026 CreatorHuntor<br />All rights reserved.</small>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <div className="footer-contact" aria-label="Social and contact">
            <span aria-label="X">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.4l4.4 6.9L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" /></svg>
            </span>
            <span aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8.1L19.6 7H4.4l7.6 6.1ZM4 17h16V8.3l-7.4 5.9a1 1 0 0 1-1.2 0L4 8.3V17Z" /></svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
