// movies-backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5050;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
