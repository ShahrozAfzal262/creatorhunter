import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import useCountdown from "../../hooks/useCountdown";
import Button from "../common/Button";
import Logo from "../common/Logo";

export default function Navbar() {
  const { user } = useAuth();
  const drop = useCountdown(true);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="site-nav">
      <div className="wrap bar">
        <Logo />
        <div className="nav-links">
          <a className="l" href="/#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a className="l" href="/#creators" onClick={() => setMenuOpen(false)}>Niches</a>
          <a className="l" href="/#agents" onClick={() => setMenuOpen(false)}>Agents</a>
          <a className="l" href="/#compare" onClick={() => setMenuOpen(false)}>Compare</a>
          <a className="l" href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <Link className="l" to="/login" onClick={() => setMenuOpen(false)}></Link>
          <Link className="mobile-menu-cta" to={user ? "/dashboard" : "/register"} onClick={() => setMenuOpen(false)}>
            {user ? "Dashboard" : "Get Creators"}
          </Link>
        </div>
        <span className="nextdrop">Next creator drop <b>{drop}</b></span>
        {user ? (
          <Button to="/dashboard">Dashboard</Button>
        ) : (
          <Button to="/register">Get Creators</Button>
        )}
        <button
          type="button"
          className={"menu-toggle" + (menuOpen ? " open" : "")}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={"nav-links mobile-links" + (menuOpen ? " open" : "")} id="primary-navigation">
        <a className="l" href="/#how" onClick={() => setMenuOpen(false)}>How it works</a>
        <a className="l" href="/#creators" onClick={() => setMenuOpen(false)}>Niches</a>
        <a className="l" href="/#agents" onClick={() => setMenuOpen(false)}>Agents</a>
        <a className="l" href="/#compare" onClick={() => setMenuOpen(false)}>Compare</a>
        <a className="l" href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <Link className="l" to="/login" onClick={() => setMenuOpen(false)}>Log in</Link>
      </div>
    </nav>
  );
}
