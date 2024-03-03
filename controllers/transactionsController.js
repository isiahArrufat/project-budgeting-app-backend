const express = require("express");

// my custom controllers
// const validateForm = (req, res, next) => {
//     if(!req.body.item_name || !req.body.amount || !req.body.date || !req.body.from || !req.body.category)
//         res.status(400).json({ message: "invalid Inputs" });
//     else next();
// }

const transactions = express.Router()


const transactionsArray = require("../models/transactionsModel");



transactions.get('/', (req, res) => {
    res.json({ transactions: transactionsArray })
})

module.exports = transactions