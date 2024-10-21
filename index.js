const express = require("expressjs")
const app = express()


app.listen(process.env.PORT || 5000, () => {
    console.log("Server has been connected")
})