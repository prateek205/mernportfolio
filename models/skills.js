const mongoose = require("mongoose");

const skillSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const skill = mongoose.model("skill", skillSchema);

module.exports = skill;
