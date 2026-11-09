import "./style.css";
import { getUsers } from "./api.js";
import { formatUser, countUsers } from "./utils.js";

const summary = document.querySelector("#summary");
const results = document.querySelector("#results");
const usersContainer = document.querySelector("#users");

const renderUserCard = (user) => {
  const { name, username, email } = user;

  return `
    <div class="card">
      <h3>${name}</h3>
      <p><span class="label">Name:</span> ${name}</p>
      <p><span class="label">Username:</span> ${username}</p>
      <p><span class="label">Email:</span> ${email}</p>
      <p class="formatted">${formatUser(user)}</p>
    </div>
  `;
};

async function loadUsers() {
  usersContainer.innerHTML = `<p>Loading users...</p>`;

  try {
    const users = await getUsers();

    // map(): list of all usernames
    const usernames = users.map((user) => user.username);

    // filter(): users whose usernames contain the letter "e"
    const filteredUsers = users.filter((user) =>
      user.username.includes("e")
    );

    // reduce(): total characters across all usernames
    const totalCharacters = users.reduce(
      (total, user) => total + user.username.length,
      0
    );

    // Spread operator: copy the array, then add a custom user
    const copiedUsers = [...users];
    const extendedUsers = [
      ...copiedUsers,
      {
        id: 999,
        name: "Sample User",
        username: "sampleuser",
        email: "sample@example.com",
      },
    ];

    summary.innerHTML = `
      <h2>Dashboard Summary</h2>
      <div class="stats">
        <div class="stat">
          <span class="stat-value">${countUsers(users)}</span>
          <span class="stat-label">Total Users</span>
        </div>
        <div class="stat">
          <span class="stat-value">${filteredUsers.length}</span>
          <span class="stat-label">Filtered Users (username contains "e")</span>
        </div>
        <div class="stat">
          <span class="stat-value">${totalCharacters}</span>
          <span class="stat-label">Total Username Characters</span>
        </div>
        <div class="stat">
          <span class="stat-value">${countUsers(extendedUsers)}</span>
          <span class="stat-label">New User Count After Spread Operator</span>
        </div>
      </div>
    `;

    results.innerHTML = `
      <h2>Array Method Results</h2>
      <div class="result-columns">
        <div>
          <h3>Usernames (map)</h3>
          <ul>
            ${usernames.map((username) => `<li>${username}</li>`).join("")}
          </ul>
        </div>
        <div>
          <h3>Filtered Users (filter)</h3>
          <ul>
            ${filteredUsers
              .map(({ name, username }) => `<li>${name} — ${username}</li>`)
              .join("")}
          </ul>
        </div>
      </div>
    `;

    usersContainer.innerHTML = `
      <h2>User List</h2>
      <div class="card-grid">
        ${users.map(renderUserCard).join("")}
      </div>
    `;
  } catch (error) {
    console.error(error);

    summary.innerHTML = "";
    results.innerHTML = "";
    usersContainer.innerHTML = `
      <p class="error">Error loading data: ${error.message}. Please try again later.</p>
    `;
  }
}

loadUsers();
