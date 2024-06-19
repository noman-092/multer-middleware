const mongoose=require("mongoose");
mongoose
.connect(process.env.mongoURl)
.then(()=>{console.log("connected");})
.catch((err)=>{});