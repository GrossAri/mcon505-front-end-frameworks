# Module 3 — Modern JavaScript Data Dashboard

A vanilla JavaScript dashboard built with Vite that retrieves user data from the JSONPlaceholder API and displays it using modern ES6+ features.

## Features

- **Modules:** code split across `api.js` (data service), `utils.js` (helpers), and `main.js` (app logic) using `import`/`export`
- **Arrow functions:** `formatUser`, `countUsers`, `renderUserCard`, and all array-method callbacks
- **Destructuring:** `const { name, username, email } = user` when rendering each user card
- **Template literals:** all on-page content is built with template literals (no string concatenation)
- **Array methods:**
  - `map()` — list of all usernames
  - `filter()` — users whose usernames contain the letter "e"
  - `reduce()` — total number of characters across all usernames
- **Spread operator:** copies the users array and adds a custom user (`id: 999`), then displays the new count
- **Async/await + Fetch API:** `loadUsers()` awaits `getUsers()`, which calls `fetch()`
- **Error handling:** `try/catch` around the API call; non-OK HTTP responses throw, and an error message is displayed on the page

## Project Structure

```
module-03-modern-js-dashboard/
├── index.html
├── package.json
├── src/
│   ├── main.js
│   ├── api.js
│   ├── utils.js
│   └── style.css
└── screenshots/
```

## Requirements

- Node.js
- npm

## Installation

```bash
npm install
```

## Running the Application

```bash
npm run dev
```

Open the local URL displayed by Vite (usually http://localhost:5173).

## Production Build

```bash
npm run build
```

## API

https://jsonplaceholder.typicode.com/users

## Screenshots

See the `screenshots/` folder:

- Running application
- User data displayed
- Summary statistics section
- Browser Developer Tools with no errors
