const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://rishivm09:Rishi1234@cluster0.esjyarj.mongodb.net/your-database');
const db = mongoose.connection;

// Define user schema and model
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static('public'));

// Registration endpoint
app.post('/register', async (req, res) => {
    // ... (rest of your registration code)
});

// Login endpoint
app.post('/login', async (req, res) => {
    // ... (rest of your login code)
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
