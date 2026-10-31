import { useEffect, useState } from "react";

// Next drop: every Monday 09:00 UTC
function nextDrop() {
  const n = new Date();
  const t = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 9));
  t.setUTCDate(t.getUTCDate() + ((8 - t.getUTCDay()) % 7));
  if (t <= n) t.setUTCDate(t.getUTCDate() + 7);
  return t;
}

const pad = (v) => String(v).padStart(2, "0");

// compact=true -> "06:18:27:10" (like the original), otherwise "06d 18h 27m 10s"
export default function useCountdown(compact = false) {
  const [s, setS] = useState(0);
  useEffect(() => {
    const tick = () => setS(Math.max(0, Math.floor((nextDrop() - new Date()) / 1000)));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const [d, h, m, x] = [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60].map(pad);
  return compact ? `${d}:${h}:${m}:${x}` : `${d}d ${h}h ${m}m ${x}s`;
}
