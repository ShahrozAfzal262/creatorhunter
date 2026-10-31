import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useCountdown from "../../hooks/useCountdown";
import Logo from "../common/Logo";

const LINKS = [["dashboard", "Dashboard"], ["creators", "Creators"], ["lists", "Lists"], ["outreach", "Outreach"], ["agent", "AI Agent"]];

export default function DashLayout() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const drop = useCountdown(true);
  return (
    <div className="shell">
      <aside className="side">
        <Logo to="/dashboard" brandName="CreatorHunter" className="dashboard-logo" />
        {LINKS.map(([p, t]) => <NavLink key={p} to={"/" + p}>{t}</NavLink>)}
        <span className="sp" />
        <a href="/">Back to website</a>
      </aside>
      <div>
        <div className="topbar">
          <span className="who">Hi, {user.name}</span>
          <span className="nextdrop">Next creator drop <b>{drop}</b></span>
          <button className="btn ghost" onClick={() => { logout(); nav("/"); }}>Log out</button>
        </div>
        <div className="content"><Outlet /></div>
      </div>
    </div>
  );
}
