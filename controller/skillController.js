const Skill = require("../models/skills")

const skill = async (req, res)=>{
    try {
        const skills = await Skill.find()
        // res.status(200).json({message:"Data Fetch Successfully"})
        res.json(skills)
    } catch (error) {
        res.status(500).json({message:"Failed to fetch data"})
    }
}

module.exports = {skill}