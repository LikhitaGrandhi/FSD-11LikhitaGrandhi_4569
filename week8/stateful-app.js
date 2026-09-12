const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    secret: 'movie-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));

const authMiddleware = (req, res, next) => {
    if (req.session.isLoggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
};

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login', {
        error: null
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'movieuser' && password === 'movie123') {
        req.session.isLoggedIn = true;
        req.session.username = username;

        res.cookie('lastBooking', new Date().toLocaleTimeString(), {
            maxAge: 60000
        });

        res.redirect('/dashboard');
    } else {
        res.render('login', {
            error: 'Invalid username or password!'
        });
    }
});

app.get('/dashboard', authMiddleware, (req, res) => {
    const lastBooking = req.cookies.lastBooking || 'No previous booking';

    res.render('dashboard', {
        user: req.session.username,
        lastBooking: lastBooking
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Unable to logout');
        }

        res.clearCookie('connect.sid');
        res.clearCookie('lastBooking');

        res.redirect('/login');
    });
});

app.listen(3000, () => {
    console.log('Movie Server running at http://localhost:3000/login');
});