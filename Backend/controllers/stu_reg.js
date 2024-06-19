import dotenv from "dotenv"
dotenv.config();
import asyncHand from "express-async-handler";
import bcrypt from "bcrypt";
import {connection as db} from "../config/dbConfig.js"
import multer from  "multer"
import path from "path"




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // File naming convention
    },
  });
  
  const upload = multer({ storage: storage });

export  const register =asyncHand(async(req,res)=>{
    
    const email=req.body.email;
    const pass=req.body.pass;
    console.log(email,pass);
    const q ="SELECT * FROM student_details where email_id = (?)"
    db.query(q,[email],(err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("user allready exist!")   
        
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(pass,salt);


        const q= "INSERT INTO student_details (`email_id`,`pass`) VALUES (?)";
        const values =[
            email,
            hash
        ]
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("User has been created.");
        })

    })
})


export const form1 = (req,res)=>{
    const email=req.params.id;
    
    const q ="UPDATE student_details SET "
} 


