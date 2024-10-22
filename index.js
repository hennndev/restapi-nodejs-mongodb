const express = require("express")
const mongoose = require("mongoose")
const booksRoutes = require("./routers/books.routes")
require("dotenv").config({})
const app = express()

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URI).then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log("Server and MongoDB has connected")
    })
}).catch(() => {
    console.log("Server and MongoDB fail connected")
})

app.use(express.json())
app.use(booksRoutes)