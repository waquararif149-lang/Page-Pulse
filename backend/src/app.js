import express from "express"
import dotenv from "dotenv"
import auditRouter from "./routes/audit.routes.js";
import cors from "cors";
import errorHandler from "./midleware/errorHandler.js";
dotenv.config()

const app=express();
app.use(cors({
    origin:[
       "http://127.0.0.1:5500",
       "https://page-pulse-zeta-bice.vercel.app"
    ]

}));

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("app is running perfectly");
})
app.use("/api/audit",auditRouter);

app.use(errorHandler);

export default app;