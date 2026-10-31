import { Link } from "react-router-dom";

export default function Logo({ to = "/", brandName = "CreatorHuntor", className = "" }) {
  return (
    <Link className={`logo ${className}`.trim()} to={to}>
      <svg className="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M7 3.5a2 2 0 0 1 3-.8l24 14a3.8 3.8 0 0 1 0 6.6l-24 14a2 2 0 0 1-3-1.8V3.5Zm6 5.2v18.1l15.6-9.1L13 8.7Z" fill="currentColor" fillRule="evenodd" />
        <path d="M4 22h13l9 5.2-15 8.7a2 2 0 0 1-3-1.8V22Z" fill="currentColor" />
      </svg>
      {brandName}
    </Link>
  );
}
