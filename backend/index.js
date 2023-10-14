import express from "express";
// import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./mongodb/connect.js";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoutes from "./Routes/doctor.js";
import reviewRoutes from "./Routes/review.js";
import bodyParser from "body-parser";



dotenv.config();

const app=express();
const port=5000;

const corsOptons={
    origin:true,
};
//Middleware=============
// app.use(express.json());
app.use(bodyParser.json());
// app.use(cookieParser());
app.use(cors(corsOptons));
app.use("/api/v1/auth" , authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctor", doctorRoutes);
app.use("/api/v1/reviews", reviewRoutes);

app.get("/",(req,res)=>{
    res.send("Api is Running...");
});

const startServer=async()=>{
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8000,()=>console.log(`Server has been started at port ${port}`));
    } catch (error) {
        console.log(error);
    }
    
}
startServer();