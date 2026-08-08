const express = require('express');

const app = express();

const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Food Delivery System!');
});

// Restaurant route
app.get('/restaurants', (req, res) => {
    res.send('Available restaurants: Pizza Hut, Domino, Food Court');
});

// Menu route
app.get('/menu', (req, res) => {
    res.send('Available food: Pizza, Burger, Biryani, Dosa');
});

// Route parameter
app.get('/food/:id', (req, res) => {
    const id = req.params.id || '100';
    res.send(`You selected Food Item ID: ${id}`);
});

// Multiple route parameters
app.get('/order/:foodId/:quantity', (req, res) => {
    const foodId = req.params.foodId || '101';
    const quantity = req.params.quantity || '1';

    res.send(`Food ID: ${foodId}, Quantity: ${quantity}`);
});

// Delivery route with multiple parameters
app.get('/delivery/:location/:distance', (req, res) => {
    const location = req.params.location || 'Bhimavaram';
    const distance = req.params.distance || '5';

    res.send(`Delivery Location: ${location}, Distance: ${distance} km`);
});

// Query parameters
app.get('/search', (req, res) => {
    const food = req.query.food || 'Pizza';
    const category = req.query.category || 'FastFood';

    res.send(`Searching for ${food} in ${category} category`);
});

// Multiple query parameters
app.get('/filter', (req, res) => {
    const location = req.query.location || 'Bhimavaram';
    const type = req.query.type || 'Veg';
    const sort = req.query.sort || 'price';

    res.send(`Location: ${location}, Food Type: ${type}, Sort By: ${sort}`);
});

// JSON data with default values
app.get('/food-details', (req, res) => {
    const food = {
        id: req.query.id || 101,
        name: req.query.name || 'Pizza',
        restaurant: req.query.restaurant || 'Pizza Hut',
        price: req.query.price || 250,
        category: req.query.category || 'Fast Food',
        available: req.query.available || true
    };

    res.json(food);
});

// JSON array
app.get('/all-foods', (req, res) => {
    const foods = [
        {
            id: 101,
            name: 'Pizza',
            price: 250,
            category: 'Fast Food'
        },
        {
            id: 102,
            name: 'Biryani',
            price: 200,
            category: 'Indian'
        }
    ];

    res.json(foods);
});

// Dynamic restaurant route
app.get('/restaurant/:name', (req, res) => {
    const name = req.params.name || 'Food Court';

    res.send(`You are viewing the menu of ${name} restaurant.`);
});

// Order details using query parameters
app.get('/order-details', (req, res) => {
    const customer = req.query.customer || 'Guest';
    const food = req.query.food || 'Pizza';
    const quantity = req.query.quantity || 1;

    res.json({
        customer: customer,
        food: food,
        quantity: quantity,
        status: 'Order Placed'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});