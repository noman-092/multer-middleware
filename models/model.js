const { name } = require('ejs');
const mongoose = require('mongoose');
const SChema = new mongoose.Schema({
    Poster:{
        type:String,
        required:true,

    },
    price:{
        type:String,
        required:true,
        minLength:[3]

    },
});
const collection = mongoose.model("file",SChema);
module.exports=collection;