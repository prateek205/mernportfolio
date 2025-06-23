const Auth = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const {username, email, password } = req.body;

  try {
    const existingUser = await Auth.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: "User Already Exist" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const newUser = new Auth({username, email, password: hashed });
    await newUser.save();

    res.status(201).json({ msg: "User register successfully!!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Auth.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Credientials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credientials" });

    const token = jwt.sign({ id: user._id }, process.env.TOKEN, {
      expiresIn: "1d",
    });

    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { register, login };
