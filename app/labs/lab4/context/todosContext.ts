import { createContext, createElement, useContext, useState, type ReactNode } from "react";

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

export function addTodo(todos: Todo[], newTodo: Todo): Todo[] {
    return [...todos, newTodo];
}

export function updateTodo(todos: Todo[], updatedTodo: Todo): Todo[] {
    return todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo));
}

export function deleteTodo(todos: Todo[], todoId: number): Todo[] {
    return todos.filter(todo => todo.id !== todoId);
}

type TodosContextValue = {
    todos: Todo[];
    addTodo: (title: string) => void;
    updateTodo: (todo: Todo) => void;
    deleteTodo: (todoId: number) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, title: "Learn React Context", completed: false },
        { id: 2, title: "Compare with Redux and Zustand", completed: false },
    ]);
    const value: TodosContextValue = {
        todos,
        addTodo: (title) => setTodos((t) => addTodo(t, { id: Date.now(), title, completed: false })),
        updateTodo: (todo) => setTodos((t) => updateTodo(t, todo)),
        deleteTodo: (todoId) => setTodos((t) => deleteTodo(t, todoId)),
    };
    // .ts file, so no JSX
    return createElement(TodosContext.Provider, { value }, children);
}

export function useTodosContext() {
    const value = useContext(TodosContext);
    if (!value) {
        throw new Error("useTodosContext must be used inside TodosProvider");
    }
    return value;
}
