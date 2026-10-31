import { Link } from "react-router-dom";

export default function Button({ to, href, ghost, children, ...rest }) {
  const cls = "btn" + (ghost ? " ghost" : "");
  if (to) return <Link className={cls} to={to} {...rest}>{children}</Link>;
  if (href) return <a className={cls} href={href} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}
