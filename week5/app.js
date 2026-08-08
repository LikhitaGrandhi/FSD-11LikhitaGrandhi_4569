const express = require('express');

const app = express();

const PORT = 3000;

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Student Management System!');
});

// Students Route
app.get('/students', (req, res) => {
    res.send('Here are the student details.');
});

// About Route
app.get('/about', (req, res) => {
    res.send('This application manages student information.');
});

// Route Parameter
app.get('/student/:id', (req, res) => {
    const id = req.params.id;
    
      const marks = 85;
     res.send(`Student ID: ${id}, Marks: ${marks}`);
});

// Query Parameter
app.get('/search', (req, res) => {
    const name = req.query.name;
    res.send(`Searching for student: ${name}`);
});

// POST Route
app.post('/student', (req, res) => {
    res.send('New student added successfully!');
});
// 6. JSON Data Route
app.get('/student', (req, res) => {
    const student = {
        id: 101,
        name: 'Likhita',
        marks: 85,
        branch: 'AI & DS'
    };

    res.json(student);
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});