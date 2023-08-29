// DEPENDENCIES
const express = require('express')
const app = express();
const cors = require('cors');
const pool = require('./db');
// const { Sequelize } = require('sequelize');
// const path = require('path');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

//Routes//



//create listing

app.post("/listings", async (req, res) => {
    try {
        const { description } = req.body;
        const newListing = await pool.query(
            "INSERT INTO listings (description) VALUES($1) RETURNING *",
        [description]
        );
        res.json(newListing.rows[0])
    } catch(err) {
        console.error(err.message);
    }
})

//get all listings

app.get("/listings", async(req, res) => {
    try {
        const allListings = await pool.query("SELECT * FROM listings");
        res.json(allListings.rows);
    } catch (err) {
        console.log(err.message)
    }
})

//get a listing

app.get("/listings/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await pool.query("SELECT * FROM listings WHERE listing_id = $1", [id])

        res.json(listing.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//update listing

app.put("/listings/:id", async(req, res) =>{
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateListing = await pool.query(" UPDATE listings SET description = $1 WHERE listing_id = $2", 
        [ description, id ]
        );

        res.json("Listings was updated")
    } catch (err) {
        console.error(err.message)
    }
})

//delete listing

app.delete("/listings/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteListing = await pool.query(" DELETE FROM listings WHERE listing_id = $1", [
            id]
            );
            res.json("listing deleted")
    } catch (error) {
        
    }
})

// LISTEN
app.listen(5000, () => {
    console.log(`🎸 Rockin' on port: ${5000}`)
})