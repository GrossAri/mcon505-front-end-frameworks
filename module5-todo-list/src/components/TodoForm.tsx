interface TodoFormProps {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
}

function TodoForm({ task, setTask, addTodo }: TodoFormProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
}

export default TodoForm;
