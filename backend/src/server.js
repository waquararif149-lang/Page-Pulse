import app from "./app.js";

app.listen(4000,()=>{
    console.log(`app is listining on port ${process.env.PORT}`);
})