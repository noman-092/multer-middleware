var express = require('express');
var router = express.Router();
const collection = require('../models/model');
const upload = require('../utils/multer');
const { checkPrice } = require('../middlewares/middlewares.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', upload.single('Poster'), checkPrice,
  async (req,res,next)=>{
  try{
  const file = await collection(req.body);
  file.Poster=req.file.filename
  await file.save();
  res.redirect('/')
  console.log(file);
  }catch(err){
  res.send(err.message);
  }
 
})
module.exports = router;
