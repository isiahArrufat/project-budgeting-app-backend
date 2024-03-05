const express = require("express");


const validateForm = (req, res, next) => {
    if(!req.body.item_name || !req.body.amount || !req.body.date || !req.body.from || !req.body.category)
        res.status(400).json({ message: "invalid Inputs" });
    else next();
}

const transactions = express.Router()


const transactionsArray = require("../models/transactionsModel");



transactions.get('/', (req, res) => {
    res.json({ transactions: transactionsArray })
})

transactions.get('/:id', (req,res) =>{
    const { id } = req.params;

    const transaction = transactionsArray.find((transaction) => transaction.id === +id)

    res.json({ transaction })
});

transactions.post("/new", validateForm, (req, res) => {
    const newId = transactionsArray[transactionsArray.length - 1].id + 1;
    
    req.body.id = newId

    transactionsArray.push(req.body)
    res.json({ transactions: transactionsArray })
})



module.exports = transactions