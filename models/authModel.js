const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema(
  {
    username:{
      type:String,
      require:true
    },
    email:{
      type:String,
      unique: true,
      require:true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Auth = mongoose.model("Auth", AuthSchema)

module.exports = Auth
