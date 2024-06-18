import { createError } from "../utils/error.js";
import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export  const createRoom= async (req,res,next)=>{
     const hotelId=req.params.hotelId
     const newRoom=new Room(req.body)

     try{
      const savedRoom=await newRoom.save()

      //this try catch block update hotel data(like adding room into hotel room array)
      try{
        await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})

      }catch(err){
        next(err)
      }
      res.status(200).json(savedRoom)
     }catch(err){
       next(err)
     }
}

export const updateRoom=async (req,res,next)=>{
    try{
      const updateRoom=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
      res.status(200).json(updateRoom)
    }catch(err){
      next(err)
    }
}

export const updateRoomAvailability=async (req,res,next)=>{
  try{
    await Room.updateOne({"roomNumber._id":req.params.id},{
      "roomNumber.$.unavailableDates":req.body.dates
    })
    res.status(200).json(updateRoom)
  }catch(err){
    next(err)
  }
}

export const deleteRoom=async (req,res,next)=>{
  const hotelId=req.params.hotelId
  try{
     await Room.findByIdAndDelete(req.params.id)

     try{
        await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}});
     }catch(err){
       next(err)
     }
   res.status(200).json("Room deleted!")
  }catch(err){
     next(err)
  }
}

export const getRoom=async (req,res,next)=>{
   try{
      const room=await Room.findByID(req.params.id)
      res.status(200).json(room)
   }catch(err){
      next(err)
   }
}

export const getAllRooms=async (req,res,next)=>{
   try{
    const rooms=await Room.find();
    res.status(200).json(rooms)
   }catch(err){
    next(err)
   }
}


