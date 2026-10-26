import './style.css'

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone?: string;
}

const app = document.querySelector<HTMLDivElement>('#app');

type Status = "active" | "inactive";
const status: Status = "active";

let userIdentifier: number | string;

function formatUser(user: User): string {
  return `${user.name} (${user.email})`;
}

function getFirstItem<T>(items: T[]): T {
  return items[0];
}

const response = await fetch('https://jsonplaceholder.typicode.com/users');

const users: User[] = await response.json();

const firstNumber = getFirstItem([10, 20, 30]);
const firstFruit = getFirstItem(["Apple", "Banana", "Cherry"]);
const firstUser = getFirstItem(users);

userIdentifier = 1

if (app) {
  users.forEach((user) => {
    const userDiv = document.createElement('div');
    userDiv.textContent = `${formatUser(user)} | Username: ${user.username} | Phone: ${user.phone ?? 'Not available'} | Status: ${status}`;
    app.appendChild(userDiv);
  });

  const firstNumberDiv = document.createElement('div');
  firstNumberDiv.textContent = `First Number: ${firstNumber}`;
  app.appendChild(firstNumberDiv);

  const firstFruitDiv = document.createElement('div');
  firstFruitDiv.textContent = `First Fruit: ${firstFruit}`;
  app.appendChild(firstFruitDiv);

  const firstUserDiv = document.createElement('div');
  firstUserDiv.textContent = `First User: ${firstUser.name}`;
  app.appendChild(firstUserDiv);

  const identifierNumberDiv = document.createElement('div');
  identifierNumberDiv.textContent = `User Identifier: ${userIdentifier}`;
  app.appendChild(identifierNumberDiv);

  userIdentifier = "user-1";

  const identifierStringDiv = document.createElement('div');
  identifierStringDiv.textContent = `User Identifier: ${userIdentifier}`;
  app.appendChild(identifierStringDiv);
}
