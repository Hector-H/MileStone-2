//Dependencies
const express = require('express');
const products = require('express').Router();
const pool = require("../db");


//Index Route
products.get('/', async (req, res) => {
    try {
        res.json({message: 'Products Index'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong', error: error.message })
    }
});

// Find one product by id
products.get('/:id', async (req, res) => {
    try {
        res.json({message: 'Products Show'})
        const { id } = req.params;

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong', error: error.message })
    }
});

// Create a product
products.post('/', async (req, res) => {
    try {
        const { description } = req.body;
        const newProduct = await pool.query(
            "INSERT INTO products (description) VALUES($1)", 
            [description] 
            );

            res.json(newProduct);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong', error: error.message })
    }
});

// Update a product
products.put('/:id', async (req, res) => {
    try {
        res.json({message: 'Products Update'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong', error: error.message })
    }
});

// Delete a product
products.delete('/:id', async (req, res) => {
    try {
        res.json({message: 'Products Delete'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong', error: error.message })
    }
});

// Export the Router
module.exports = products;