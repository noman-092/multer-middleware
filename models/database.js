const mongoose=require("mongoose");
mongoose
.connect(process.env.urlM)
.then(()=>{console.log("connected");})
.catch((err)=>{});