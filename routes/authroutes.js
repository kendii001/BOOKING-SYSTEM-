const express = require("express");
const router = express.Router();
const { signUp } = require("../controllers/authController");

// @desc    User login
// @route   POST /login
// @access  Public
router.post("/login", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "User logged in successfully",
  });
});

// @desc    User signup
// @route   POST /signup
// @access  Public
router.post("/signup", signUp);

module.exports = router;
