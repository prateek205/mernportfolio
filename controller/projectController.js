const Data = require("../models/project")


const dataList =  async ( req, res)=>{
    try {
        const project = await Data.find()
        res.json(project)
    } catch (error) {
        res.status(500).json({message:"Failed to fetch Data", error})
    }
}

module.exports = {dataList}
