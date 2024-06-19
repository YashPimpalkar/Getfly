import express, { Router } from "express";
const router =express.Router();
import {form1, form2, register, upload, uploadFile} from "../controllers/stu_reg.js"
import multer from "multer";





router.post("/",register);
router.put("/:email",form1);
router.put("/form2/:email",form2);
router.put('/upload/:email', upload.single('file'), uploadFile);

export default router;