import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput("");
  };

  const removeTodo = (i) => setTodos(todos.filter((_, idx) => idx !== i));

  return (
    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
      <h2 className="mb-4 text-xl font-semibold">Tugas Belajar</h2>
      <div className="mb-4 flex gap-2">
        <input
          className="flex-1 rounded-lg bg-white/20 px-3 py-2 outline-none placeholder:text-white/50"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Mau belajar apa?"
        />
        <button className="rounded-lg bg-purple-500 px-4 py-2" onClick={addTodo}>Tambah</button>
      </div>
      <ul className="space-y-2">
        {todos.map((t, i) => (
          <li key={i} className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2">
            {t}
            <button className="text-red-300" onClick={() => removeTodo(i)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
