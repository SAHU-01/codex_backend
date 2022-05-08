const express =require("express");
const app=express();
const dotenv = require("dotenv");
require('./connection')

const communityRoute=require("./routes/community");
const eventRoute=require("./routes/event");
const aluminiRoute=require("./routes/alumini");

dotenv.config();
app.use(express.json());

app.use("/community",communityRoute);
app.use("/event",eventRoute);
app.use("/alumini",aluminiRoute);

app.listen(5050,()=>{
    console.log("Backend is running")
})