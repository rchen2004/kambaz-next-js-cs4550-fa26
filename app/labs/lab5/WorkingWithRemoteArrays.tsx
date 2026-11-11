 "use client";
 import { useState } from "react";
 
 export default function WorkingWithRemoteArrays() {
    const [todo, setTodo] = useState({ id: "1", title: "Learn React", completed: false, description: "Learn how to use React" });
    const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
    const API = `${HTTP_SERVER}/lab5/todos`;
    const input = "rounded border border-gray-300 px-2 py-1";
    const button = "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700";
    const row = "my-2 flex flex-wrap items-center gap-2";
    return (
        <div id="wd-working-with-remote-arrays">
            <h3>Working With Remote Arrays</h3>
            <h4> Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className={button} href={API}>Get Todos</a>

            <h4> Retrieving an Item from an Array by ID</h4>
            <div className={row}>
                <input id="wd-todo-id" value={todo.id}
                className={input}
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
                <a id="wd-retrieve-todo-by-id" className={button} href={`${API}/${todo.id}`}>
                Get Todo by ID
                </a>
            </div>

            <h4> Filtering Array Items </h4>
            <a id="wd-retrieve-completed-todos" className={button} href={`${API}?completed=true`}>
            Get Completed Todos
            </a>

            <h4> Creating an Item in an Array </h4>
            <a id="wd-create-todo" className={button} href={`${API}/create`}>Create Todo</a>

            <h4> Removing an Item from an Array </h4>
            <a id="wd-remove-todo" className={button} href={`${API}/${todo.id}/delete`}>
            Remove Todo with ID = {todo.id}
            </a>

            <h4> Updating an Item in an Array </h4>
            <div className={row}>
                <input value={todo.title} className={input} onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
                <a href={`${API}/${todo.id}/title/${todo.title}`} className={button} id="wd-update-todo-title">
                Update Todo
                </a>
            </div>
            <div className={row}>
                <label className="flex items-center gap-1">
                    <input type="checkbox" checked={todo.completed} onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
                    Completed
                </label>
                <a href={`${API}/${todo.id}/completed/${todo.completed}`} className={button} id="wd-update-todo-completed">
                Update Todo Completion
                </a>
            </div>
            <div className={row}>
                <input value={todo.description} className={`${input} w-72`} onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
                <a href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`} className={button} id="wd-update-todo-description">
                Update Todo Description
                </a>
            </div>
            <hr className="my-4" />
        </div>
    );
 }