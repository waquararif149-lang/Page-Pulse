import express from "express"
import dotenv from "dotenv"
import auditRouter from "./routes/audit.routes.js";
import cors from "cors";
dotenv.config()

const app=express();
app.use(cors({
    origin:[
       "http://127.0.0.1:5500",
       "https://page-pulse-q81jq9li3-learning-e689.vercel.app"
    ]

}));

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("app is running perfectly");
})
app.use("/api/audit",auditRouter);

export default app;