const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const skillRoute = require("./routes/skillRoute")
const projectRoute = require("./routes/projectRoute")
const contactRoute = require("./routes/contactRoute")
const authRoute = require("./routes/authRoute")
const path = require("path")

require("dotenv").config()
connectDB()

PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

app.use("/images", express.static(path.join(__dirname, "public/images")))
app.use("/projectImg", express.static(path.join(__dirname, "public/projectImg")))

app.use("/api/skill", skillRoute)
app.use("/api/project", projectRoute)
app.use("/api/contact", contactRoute)
app.use("/api/auth", authRoute)

app.listen(PORT,()=>{
    console.log(`App is Listening on ${PORT}`)
})