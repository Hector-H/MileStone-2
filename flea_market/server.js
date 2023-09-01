// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const pool = require("./server/db");
const db = require('./server/models')

// CONTROLLERS
const ProductController = require('./controllers/Product_Controller.js')
const ProfileController = require('./controllers/Profile_Controller.js')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(ProductController)
app.use(ProfileController)

// Root Route
app.get('/', (req, res) => {
    try {
        res.send('Welcome to the Flea Market!')
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
})

// Product Routes
const productsController = require('./controllers/Product_Controller.js')
app.use('/products', productsController)

// Profile Routes
const profilesController = require('./controllers/Profile_Controller.js')
app.use('/profiles', profilesController)

// 404 Error Route
app.get('*', (req, res) => {
    try {
        res.status(404).send({message: 'Page not found!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong', error: error.message })
    }
})

// LISTEN
db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
        console.log(`http://localhost:${process.env.PORT}`)
    })
})