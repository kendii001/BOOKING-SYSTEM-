const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
PORT = process.env.PORT;
app.get( "/",  (req, res)=>{
    res.json({message:"Welcome to online booking platform"})
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
