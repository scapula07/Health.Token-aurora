const catchAsync = require('../utils/catchAsync');
const fs = require('fs')
const { groth16 } = require("snarkjs");
const { plonk } = require("snarkjs");
const snarkjs = require("snarkjs");
const vKey = JSON.parse(fs.readFileSync("controllers/verification_key.json"));
const tesseract = require("node-tesseract-ocr")
const  { mkdir, rm } =require( 'node:fs/promises')
    path = require('path');



   
 

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
 
function unstringifyBigInts(o) {
  if ((typeof(o) == "string") && (/^[0-9]+$/.test(o) ))  {
      return BigInt(o);
  } else if ((typeof(o) == "string") && (/^0x[0-9a-fA-F]+$/.test(o) ))  {
      return BigInt(o);
  } else if (Array.isArray(o)) {
      return o.map(unstringifyBigInts);
  } else if (typeof o == "object") {
      if (o===null) return null;
      const res = {};
      const keys = Object.keys(o);
      keys.forEach( (k) => {
          res[k] = unstringifyBigInts(o[k]);
      });
      return res;
  } else {
      return o;
  }
}

exports.upload= async (req, res, next) => {
  const uploadDir = path.join('uploads',req.file.originalname)
  var matches
    const config = {
      lang: "eng",
      oem: 1,
      psm: 3,
    }
    
    tesseract
      .recognize(uploadDir, config)
      .then((text) => {
        console.log("Result:", text.trim())
      
       
        const regex = /\b\d{4}-\d{2}-\d{2}\b/g;
        matches =text.trim().match(regex);
      
        if(!matches){
        
          const regex = /\b\d{2}\/\d{2}\/\d{4}\b/g; 
    
          matches =text.trim().match(regex);
          }
        console.log(matches)
        res.status(200).json({
          status: 'success',
          age:matches[0]
        });
      })
      .catch((error) => {
        console.log(error.message)
      })

}

exports.verifier= async (req, res, next) => {
  const {dateString} = req.body;
    try{
     
      // var parts = dateString?.split('/');
      var parts = dateString?.split('/');
      var birthDate = new Date(parts[2], parts[1] - 1, parts[0]);
      var today = new Date();

      var age = today.getFullYear() - birthDate.getFullYear();
      const ageLimit =18
      console.log(age);
      const { proof, publicSignals } = await snarkjs.groth16.fullProve({"in":[age, ageLimit]}, 'controllers/circuit.wasm', 'controllers/circuit_0001.zkey');
  
      const response = await snarkjs.groth16.verify(vKey, publicSignals, proof);
          console.log(res,"ress")
        if (response === true) {
          console.log("Verification OK");
          res.status(200).json({
            status: 'success',
            proof:"Verification OK"
          });
        } else {
          console.log("Invalid proof");
          res.status(200).json({
            status: 'success',
            proof:"Invalid proof"
          });
        }
      }catch(e){
          console.log(e)
          res.status(200).json({
            status: 'success',
            proof:"Invalid proof"
          });
      }
      
    


} 


