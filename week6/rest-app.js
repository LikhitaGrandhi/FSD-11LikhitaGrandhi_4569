const express = require('express');

const app = express();

const PORT = 3000;

// Middleware to read JSON data from POST and PUT requests
app.use(express.json());

// Mock database
let foods = [
    { id: 1, name: "Pizza", price: 250 },
    { id: 2, name: "Biryani", price: 200 }
];

// 1. GET - Read all foods
app.get('/foods', (req, res) => {
    res.json(foods);
});

// 2. POST - Add a new food
app.post('/foods', (req, res) => {

    const newFood = {
        id: req.body.id || foods.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    foods.push(newFood);

    res.status(201).json(newFood);
});

// 3. PUT - Update an existing food
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

// 4. DELETE - Remove a food
app.delete('/foods/:id', (req, res) => {

    const id = parseInt(req.params.id);

    foods = foods.filter(f => f.id !== id);

    res.json({
        message: `Food ${id} deleted`,
        remainingFoods: foods
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Food Delivery REST API running at http://localhost:${PORT}`);
});