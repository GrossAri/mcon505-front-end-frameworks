# Module 5 — Interactive To-Do List

MCON 505: Front-End Frameworks. An interactive to-do list built with React, TypeScript and Vite, deployed to Vercel.

**Live app:** _Vercel URL goes here_

## What it demonstrates

- **TypeScript interfaces:** `Todo` models each task; `TodoFormProps` and `TodoListProps` type the component props
- **Typed state with `useState`:** `useState<Todo[]>` for the task list, `useState<string>` for the input
- **Controlled form component:** `TodoForm` input value comes from state and updates via `onChange`
- **Event handling:** add, complete (toggle) and delete tasks
- **List rendering:** `TodoList` maps over `todos` with a unique `key` per task
- **Conditional rendering:** "No tasks available." when the list is empty; completed tasks are struck through
- **Deployment:** hosted on Vercel from the `module5-todo-list` folder of the course repo

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
```

## Structure

```
src/
├── components/
│   ├── TodoForm.tsx
│   └── TodoList.tsx
├── App.tsx
├── App.css
└── main.tsx
```

## Screenshots

See the `screenshots/` folder: empty app, five or more tasks, completed tasks, and the successful Vercel deployment.
