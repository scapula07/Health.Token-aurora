
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const kycRoutes = require('./routes/kycRoutes');




const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const multer = require('multer');
const path=require("path")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file,"file...")
      cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        console.log(file,"filenamen...")
      // cb(null, new Date().toISOString() + path.extname(file.originalname));
       cb(null,file.originalname);
   
      
    }
  });
  
  const fileFilter = (req, file, cb) => { 
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    }
    cb(null, false);
  };
  
  const upload = multer({
    storage: storage
    // limits: { fileSize: 5000000 },
    // fileFilter: fileFilter
  });
const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(cors({
  origin: '*'
}));
// app.options('*', cors());
app.use(express.static('./public'));

app.use('/api/v1/kyc',upload.single('file'),kycRoutes);




app.all('*', (req, res, next) => {
    const err = new AppError(`Can't find ${req.originalUrl} on this server`, 404);
    next(err);
  });
  
  app.use(globalErrorHandler);


module.exports = app;