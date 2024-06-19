const multer = require('multer');
const path = require ('path')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/images");
    },
    
   
    filename:(req,file,cb)=>{ 
        const modified = Date.now()+ path.extname(file.originalname);
        cb(null,modified);
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

// copy paste 17 to 28 line

    limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB size limit
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif|mp4|avi|mov/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: File type not supported!');
        }
    }


});

const upload = multer({storage:storage});
module.exports=upload;
