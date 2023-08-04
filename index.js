const express = require("express")
const app = express()


const homeRoute = require("./routes/home")
const loginRoute = require("./routes/login")
app.use("/", homeRoute)
app.use("/login", loginRoute)
const port = 3001;
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})