const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB is Connected!");
  } catch (error) {
    console.log("MongoDB is failed");
  }
};

module.exports = connectDB;
