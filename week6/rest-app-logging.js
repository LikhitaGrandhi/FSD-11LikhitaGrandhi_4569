const express = require('express');

const app = express();

const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// 1. CUSTOM LOGGING MIDDLEWARE
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} Request: ${req.originalUrl}`);
    next();
});

// 2. CUSTOM SECURITY MIDDLEWARE
app.use((req, res, next) => {
    const userAgent = req.get('User-Agent');

    if (!userAgent) {
        return res.status(400).json({
            error: "Browser identification missing"
        });
    }

    next();
});

// MOCK DATABASE
let foods = [
    { id: 1, name: "Pizza", price: 250 },
    { id: 2, name: "Biryani", price: 200 }
];

// 3. GET - Read all foods
app.get('/foods', (req, res) => {
    res.json(foods);
});

// 4. POST - Create a new food
app.post('/foods', (req, res) => {

    const newFood = {

        // If user provides ID, use it; otherwise generate ID
        id: req.body.id != null ? req.body.id : foods.length + 1,

        // Accessing data sent by the user
        name: req.body.name,

        price: req.body.price
    };

    foods.push(newFood);

    res.status(201).json(newFood);
});

// 5. PUT - Update a food (Dynamic URL)
app.put('/foods/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const food = foods.find(f => f.id === id);

    if (food) {

        food.name = req.body.name;

        food.price = req.body.price;

        res.json({
            message: "Food updated successfully",
            food: food
        });

    } else {

        res.status(404).json({
            error: "Food not found"
        });

    }
});

// 6. DELETE - Remove a food (Dynamic URL)
app.delete('/foods/:id', (req, res) => {

    const id = parseInt(req.params.id);

    foods = foods.filter(f => f.id !== id);

    res.json({
        message: `Food ${id} deleted`,
        remainingFoods: foods
    });
});

// START SERVER
app.listen(PORT, () => {

    console.log(`REST Food Delivery API Server running at http://localhost:${PORT}`);

});