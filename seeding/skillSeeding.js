const Skill = require("../models/skills")
const Skills = require("../data/skills.json")
const dotenv = require("dotenv")
const connectDB = require("../config/db")


dotenv.config()
connectDB()


const importData = async()=>{
    try {
        await Skill.insertMany(Skills)
        console.log("Data imported Successfully")
        process.exit() 
    } catch (error) {
        console.error(`error${error}`)
        process.exit(1)
    }
}

importData()
