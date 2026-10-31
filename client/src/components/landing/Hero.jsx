import Button from "../common/Button";
import ChatDemo from "./ChatDemo";

export default function Hero() {
  return (
    <header className="hero wrap hero-layout" id="top">
      <div className="hero-copy">
        <h1><span>Let creators</span><span>market for you</span></h1>
        <p className="lead">Find, research and reach out to creators for your app or brand, with AI-agent right inside ChatGPT, Claude and Hermes.</p>
        <div className="cta">
          <Button to="/register">Get Creators</Button>
          <div className="social-proof" aria-label="Join thousands of creator marketers">
            <span className="proof-avatars" aria-hidden="true">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=96&h=96&q=80" alt="" />
            </span>
            <b>Join 10,000+</b>
          </div>
        </div>
      </div>
      <div className="hero-demo"><ChatDemo /></div>
    </header>
  );
}
