const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const cors = require("cors");
const authRouter = require("./routes/authroutes");
const bookingRouter = require("./routes/bookingRoutes");

const connectDB = async() => {
    try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo db connected");
}catch(err){
    console.log("Mongo db failed", err.message);
}
}

dotenv.config();
app.use(cors());
app.use(express.json());
PORT = process.env.PORT;
app.get( "/",  (req, res)=>{
    res.json({message:"Welcome to online booking platform"})
})

app.use("/api/auth", authRouter);
app.use("/api/bookRouter", bookingRouter);
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
connectDB();

