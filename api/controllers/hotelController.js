import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
export const createHotel= async (req,res,next)=>{
     
    const newHotel=new Hotel(req.body)
    try{
      
      const savedHotel=await newHotel.save()
      res.status(200).json(savedHotel)
      
    }catch(err){
        next(err)
    } 
}

export const updateHotel=async (req,res,next)=>{

    try{
        const updateHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body})
        console.log(updateHotel)
        res.status(200).json(updateHotel)
     }catch(err){
        next(err)
     }
}

export const deleteHotel= async (req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
     }catch(err){
        next(err)
     }
}

export const getHotel = async (req,res,next)=>{
    try{
        const hoteldata=await Hotel.findById(
            req.params.id
        )
         res.status(200).json(hoteldata)
        }catch(err){
            next(err)
        }
}

export const getAllHotels=async (req,res,next)=>{
    const {min,max,limit,...others}=req.query
    try{
        const allhoteldata=await Hotel.find({...others,cheapestPrice:{$gte:min || 1 ,$lte:max||10000}}).limit(limit)
        res.status(200).json(allhoteldata)
     }catch(err){
         next(err)
     }
}

export const countByCity=async (req,res,next)=>{
    const cities=req.query.cities.split(",")
    try{
     const list= await Promise.all(cities.map(city=>{
        return Hotel.countDocuments({city:city})
     }))
     res.status(200).json(list)
    }catch(err){
     next(err)
    }
}

export const countByType=async (req,res,next)=>{
    try{

     const countHotels=await Hotel.countDocuments({type:'hotel'})
     const countVillas=await Hotel.countDocuments({type:'villa'})
     const countApartment=await Hotel.countDocuments({type:'apartment'})
     const countCabins=await Hotel.countDocuments({type:'cabin'})
     res.status(200).json([
        {type:"hotels",count:countHotels},
        {type:"villas",count:countVillas},
        {type:"apartments",count:countApartment},
        {type:"cabins",count:countCabins}
    ])
    }catch(err){
        next(err)
    }
}
export const getHotelRooms=async(req,res,next)=>{

    try{
      const hotel=await Hotel.find(req.params.id)
      const list=await Promise.all(hotel.rooms.map(room=>{
        return Room.findById(room)
      }))
      res.status(200).json(list)
    }catch(err){
        next(err)
    }

}