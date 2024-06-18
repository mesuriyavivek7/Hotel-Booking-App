import User from "../models/User.js";

export const updateUser=async (req,res,next)=>{

    try{
        const updateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body})
        console.log(updateUser)
        res.status(200).json(updateUser)
     }catch(err){
        next(err)
     }
}

export const deleteUser= async (req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
     }catch(err){
        next(err)
     }
}

export const getUser = async (req,res,next)=>{
    try{
        const userdata=await User.findById(
            req.params.id
        )
         res.status(200).json(userdata)
        }catch(err){
            next(err)
        }
}

export const getAllUsers=async (req,res,next)=>{
    try{
        const allusersdata=await User.find();
        res.status(200).json(allusersdata)
     }catch(err){
         next(err)
     }
}