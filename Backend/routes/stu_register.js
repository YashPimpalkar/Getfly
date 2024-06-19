import express, { Router } from "express";
const router =express.Router();
import {register} from "../controllers/stu_reg.js"


router.post("/",register);


export default router;