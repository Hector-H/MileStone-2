// Dependencies
const express = require('express');
const profiles = require('express').Router();

//Index Route
profiles.get('/', async (req, res) => {
    try {
        res.json({message: 'Profiles Index'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong', error: error.message })
    }
});

// Find one profile by id
profiles.get('/:id', async (req, res) => {
    try {
        res.json({message: 'Profiles Show'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong', error: error.message })
    }
});

// Create a profile
profiles.post('/', async (req, res) => {
    try {
        res.json({message: 'Profiles Create'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong', error: error.message })
    }
});

// Update a profile
profiles.put('/:id', async (req, res) => {
    try {
        res.json({message: 'Profiles Update'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong', error: error.message })
    }
});

// Delete a profile
profiles.delete('/:id', async (req, res) => {
    try {
        res.json({message: 'Profiles Delete'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong', error: error.message })
    }
});

// Export the Router
module.exports = profiles;