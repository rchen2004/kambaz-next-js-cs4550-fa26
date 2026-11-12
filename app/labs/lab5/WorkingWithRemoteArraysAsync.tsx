"use client";
import { useEffect, useState } from "react";
import { FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";

type Todo = { id: number; title: string; completed: boolean; editing?: boolean };

export default function WorkingWithRemoteArraysAsync() {
    const [todos, setTodos] = useState<Todo[]>([]);
    useEffect(() => { client.fetchTodos().then(setTodos); }, []);
    const createNewTodo = async () => {
        setTodos(await client.createNewTodo());
    };
    const postNewTodo = async () => {
        const newTodo = await client.postNewTodo({
            title: "New Posted Todo",
            completed: false,
        });
        setTodos([...todos, newTodo]);
    };
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const deleteTodo = async (todo: Todo) => {
        try {
            await client.deleteTodo(todo);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            const err = error as { response?: { data?: { message?: string } } };
            setErrorMessage(err.response?.data?.message ?? "Failed to delete todo");
        }
    };
    const editTodo = (todo: Todo) => {
        setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
    };
    const updateTodo = async (todo: Todo) => {
        await client.updateTodo(todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    };
    return (
        <div id="wd-asynchronous-arrays">
            <h3>Working with Arrays Asynchronously</h3>
            <h4 className="flex items-center gap-2">
                Todos
                <FaPlusCircle onClick={createNewTodo} id="wd-create-todo"
                    className="cursor-pointer text-green-600" />
                <FaPlusCircle onClick={postNewTodo} id="wd-post-todo"
                    className="cursor-pointer text-blue-600" />
            </h4>
            {errorMessage && (
                <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
                    {errorMessage}
                </p>
            )}
            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center gap-2">
                        <input type="checkbox" checked={todo.completed}
                            onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} />
                        <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
                        <FaPencilAlt onClick={() => editTodo(todo)} className="cursor-pointer text-blue-600" />
                        <TiDelete onClick={() => deleteTodo(todo)} id="wd-delete-todo"
                            className="cursor-pointer text-2xl text-red-600" />
                    </li>
                ))}
            </ul>
            <hr className="my-4" />
        </div>
    );
}
