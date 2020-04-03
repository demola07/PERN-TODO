const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

///midleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
