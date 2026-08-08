const express = require('express');

const app = express();

const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Basic JSON response
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Food Delivery API!",
        status: "Active",
        timestamp: new Date()
    });
});

// Sending an array of JSON objects
app.get('/foods', (req, res) => {

    const foodList = [
        {
            id: 101,
            name: "Pizza",
            category: "Fast Food",
            price: 250
        },
        {
            id: 102,
            name: "Biryani",
            category: "Indian",
            price: 200
        },
        {
            id: 103,
            name: "Dosa",
            category: "South Indian",
            price: 80
        }
    ];

    res.json(foodList);
});

// Dynamic JSON response using route parameter
app.get('/food/:id', (req, res) => {

    const foodId = req.params.id;

    res.json({
        requestedId: foodId,
        category: "Fast Food",
        available: true,
        tags: ["popular", "best-seller"]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`JSON Food Server is running at http://localhost:${PORT}`);
});