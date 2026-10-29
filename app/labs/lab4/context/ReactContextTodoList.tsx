import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");
  return (
    <div id="wd-context-todo-list">
      <h3>Todo List (Context)</h3>
      <div className="mb-2 flex max-w-sm gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
          id="wd-context-todo-title"
        />
        <button
          type="button"
          onClick={() => {
            if (!title.trim()) return;
            addTodo(title.trim());
            setTitle("");
          }}
          id="wd-context-add-todo-click"
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Add
        </button>
      </div>
      <ul className="m-0 max-w-sm list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-1 flex gap-2">
            <input
              value={todo.title}
              onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
              className="w-full rounded border border-neutral-300 px-3 py-1"
              id={`wd-context-todo-${todo.id}`}
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              id={`wd-context-delete-todo-${todo.id}-click`}
              className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
