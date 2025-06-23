const dotenv = require("dotenv")
const connectDB = require("../config/db")
const projects = require("../models/project")
const project = require("../data/project.json")


dotenv.config()
connectDB()

const importData = async ()=>{
    try {
        await projects.insertMany(project)
        console.log("Data imported Successfully!")
        process.exit()
    } catch (error) {
        console.error(`error${error}`)
        process.exit(1)
    }
}

importData()