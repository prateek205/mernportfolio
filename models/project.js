const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    techStack: [{ type: String }],
    liveLink: { type: String },
    codeLink: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const project = mongoose.model("project", projectSchema);

module.exports = project;
