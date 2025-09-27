const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/userModel");

dotenv.config();
// Signup Controller
exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({ name, email, password: hash });

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: newUser,
    });
  } catch (err) {
    console.error("Registration Error:", err.message);
    return res.status(500).json({ message: "Server error. Please try again." });
  }
};



