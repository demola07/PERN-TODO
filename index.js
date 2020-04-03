const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const PORT = 5000;

///midleware
app.use(cors());
app.use(express.json());

//Routes

//create  a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [
      description
    ]);
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//get all todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//get a todo

//update a todo

//delete a todo

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
