const express = require('express')
const app = express();
const { Sequelize } = require('sequelize');


require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})