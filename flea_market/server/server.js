// DEPENDENCIES
const express = require('express')
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})