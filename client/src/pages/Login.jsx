import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [f, setF] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try { await login(f); nav("/dashboard"); } catch (x) { setErr(x.response?.data?.message || "Login failed"); }
  };
  return (
    <main className="wrap auth">
      <h1>Log in</h1>
      <form onSubmit={submit}>
        <label>Email<input type="email" required value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></label>
        <label>Password<input type="password" required value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} /></label>
        {err && <p className="err">{err}</p>}
        <button className="btn">Log in</button>
      </form>
      <p>New here? <Link to="/register">Create an account</Link></p>
    </main>
  );
}
