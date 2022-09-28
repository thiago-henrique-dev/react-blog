const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("connected to db");
    }).catch(err=> {
        throw err;
    })
}

app.listen("5000", () => {
    connect()
    console.log("Backend is running")
})