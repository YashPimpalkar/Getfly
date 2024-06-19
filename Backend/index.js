import express from "express";
import cors from "cors"
import bodyParser from 'body-parser';
import dotenv from "dotenv"
import { connection } from "./config/dbConfig.js";

import multer from "multer";
// const { login, signUp,super_login,admin_login } = require('./controllers/authControllers');
import path from "path";

import registerRoute from "./routes/stu_register.js"

const app =express()

const port = 8000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads/',express.static('./uploads/'))


app.use("/api/register",registerRoute)
app.listen(port, () => {
    console.log("Server is Running on PORT :", port);
  });
  