import { useState } from "react";

function TodoList({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);
  const [search, setSearch] = useState("");

  const toggleDone = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) =>
    todo.name.toLowerCase().includes(search.toLowerCase())
  );

  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div>
      <h2>Todo List</h2>

      <input
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>
        Total : {todos.length} | Terminées : {doneCount}
      </p>

      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            {todo.name} ({todo.priority})
            <button onClick={() => toggleDone(index)}>
              {todo.done ? "❌" : "✔"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
