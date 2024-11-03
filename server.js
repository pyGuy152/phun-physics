const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8000;

app.get('/data', (req, res) => {
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});