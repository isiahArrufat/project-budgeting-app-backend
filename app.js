const express = require('express');
const cors = require('cors'); 

const app = express();
const transactionsController = require('./controllers/transactionsController');

// My middleware pkgs
app.use(cors());
app.use(express.json());

// my middleware for my controllers
app.use('/api/transactions', transactionsController);

app.get('/', (req, res) => {
  res.send('Welcome to Budgeting App!!!');
});



app.get('*', () => {
    res.json({ error: "page not found"})
})

module.exports = app;
