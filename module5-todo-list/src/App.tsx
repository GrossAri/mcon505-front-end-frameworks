import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  const addTodo = () => {
    if (!task.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Interactive To-Do List</h1>

      <TodoForm task={task} setTask={setTask} addTodo={addTodo} />

      <h2>Total Tasks: {todos.length}</h2>

      {todos.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      )}
    </div>
  );
}

export default App;
