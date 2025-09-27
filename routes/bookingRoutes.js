const express = require("express");

const router= express.Router();

router.post("/booking", (req, res)=>{
    res.status(201).json({message:"Booking created successfully"});
})

module.exports = router;

