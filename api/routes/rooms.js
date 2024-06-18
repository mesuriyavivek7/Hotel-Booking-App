import express from "express";

import { createRoom,updateRoom,deleteRoom,getRoom,getAllRooms, updateRoomAvailability } from "../controllers/roomController.js";

const router=express.Router()

import { verifyAdmin } from "../utils/verifyToken.js";


//create 

router.post('/:hotelId',verifyAdmin, createRoom)

//update
router.put('/:id',verifyAdmin,updateRoom)
router.put('/availability/:id',updateRoomAvailability)

//delete
router.delete('/:id/:hotelId',verifyAdmin, deleteRoom)

//get room data

router.get('/:id',getRoom)

//get all
router.get('/',getAllRooms)


export default router