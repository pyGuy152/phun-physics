const express = require('express');
const app = express();
const port = 8000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// A simple GET endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// A POST endpoint to handle JSON data
app.post('/data', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Data received!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});