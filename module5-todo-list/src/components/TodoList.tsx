interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="card">
          <p className={todo.completed ? "completed" : ""}>{todo.text}</p>
          <button onClick={() => toggleTodo(todo.id)}>Complete</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
