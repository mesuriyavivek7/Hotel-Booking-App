import express from "express";


const router=express.Router()

//import cntrollers
import { register } from "../controllers/authController.js"; 
import { login  } from "../controllers/authController.js";

router.post('/register',register)
router.post('/login',login)
export default router