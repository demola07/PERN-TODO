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

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
