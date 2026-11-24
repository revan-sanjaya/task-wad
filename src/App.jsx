import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import FetchData from "./components/FetchData";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 p-6 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold">Study Lofi</h1>
      <div className="mx-auto grid max-w-3xl gap-4">
        <Counter />
        <TodoList />
        <FetchData />
      </div>
    </div>
  );
}
