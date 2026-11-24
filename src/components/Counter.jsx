import { useState } from "react";

export default function Counter() {
  const [sessions, setSessions] = useState(0);
  return (
    <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
      <h2 className="mb-2 text-xl font-semibold">Sesi Fokus Selesai</h2>
      <p className="mb-4 text-5xl font-bold">{sessions}</p>
      <div className="flex justify-center gap-2">
        <button className="rounded-lg bg-white/20 px-4 py-2" onClick={() => setSessions(sessions - 1)}>-</button>
        <button className="rounded-lg bg-white/20 px-4 py-2" onClick={() => setSessions(0)}>Reset</button>
        <button className="rounded-lg bg-purple-500 px-4 py-2" onClick={() => setSessions(sessions + 1)}>+</button>
      </div>
    </div>
  );
}
