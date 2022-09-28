const express = require("express");
const bcrypt = require("bcrypt")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")

dotenv.config();

app.use(express.json())

const connect = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("connected to db");
    }).catch(err=> {
        throw err;
    })
}

app.use("/api/auth", authRoute)

app.listen("5000", () => {
    connect()
    console.log("Backend is running")
})