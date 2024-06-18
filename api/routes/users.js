import express from "express";


import { deleteUser,updateUser,getUser,getAllUsers } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router=express.Router()

//*-----this all routing for user verification---------*

// router.get('/checkauthentication',verifyToken,(req,res)=>{
//     res.send("Hello user, You are authenticated")
// })

// router.get('/checkuser/:id',verifyUser,(req,res)=>{
//     res.send("you are eligible for update and delete opearation")
// })

//  router.get('/checkadmin',verifyAdmin,(req,res)=>{
//      res.send("Hey admin, you can delete or update all account")
//  })

router.put('/:id',verifyUser,updateUser)

router.delete('/:id',verifyUser,deleteUser)

router.get('/:id',verifyUser,getUser)

router.get('/',verifyAdmin,getAllUsers)



export default router