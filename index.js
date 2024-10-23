const express = require('express');
const app = express();
const PORT = 3000;

// Dummy data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, profession: 'Engineer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25, profession: 'Doctor' },
];

// Middleware untuk parsing JSON
app.use(express.json());

// Route GET untuk mengambil semua data pengguna
app.get('/users', (req, res) => {
  res.json(users);
});

// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
