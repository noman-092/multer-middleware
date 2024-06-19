exports.checkPrice=(req,res,next)=>{
    if (req.body.price < 500) {
        console.log('price too much low')
    }else{
        next()
    }
}
// exp