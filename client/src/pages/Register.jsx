import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [f, setF] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    try { await register(f); nav("/dashboard"); } catch (x) { setErr(x.response?.data?.message || "Sign up failed"); }
  };
  return (
    <main className="wrap auth">
      <h1>Create your account</h1>
      <form onSubmit={submit}>
        <label>Name<input required value={f.name} onChange={set("name")} /></label>
        <label>Email<input type="email" required value={f.email} onChange={set("email")} /></label>
        <label>Password (6+ characters)<input type="password" minLength={6} required value={f.password} onChange={set("password")} /></label>
        {err && <p className="err">{err}</p>}
        <button className="btn">Create account</button>
      </form>
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </main>
  );
}
