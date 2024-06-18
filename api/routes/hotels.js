import express from "express";


//importing controllers
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, getHotelRooms, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router()

//create 

router.post('/',verifyAdmin, createHotel)

//update
router.put('/:id',verifyAdmin,updateHotel)

//delete
router.delete('/:id',verifyAdmin, deleteHotel)

//get 

router.get('/find/:id',getHotel)

//get all
router.get('/',getAllHotels)

router.get('/countByCity',countByCity)
router.get('/countByType',countByType)
router.get('/room/:id',getHotelRooms)

export default router