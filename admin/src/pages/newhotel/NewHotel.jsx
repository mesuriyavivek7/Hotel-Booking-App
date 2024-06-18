import React, { useState } from 'react'

//importing sass
import './newhotel.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'

//importing images
import NOIMG from '../../assets/noimg.jpg'

import { hotelInputs } from '../../formSource'

//importing icons
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import useFetch from '../../hooks/useFetch'
import axios from 'axios'

export default function NewHotel() {

  const [files,setFiles]=useState("")
  const [info,setInfo]=useState({})
  const [rooms,setRooms]=useState([])

  const {data,loading,error}=useFetch("/rooms/")

  const handleChange=(e)=>{
    setInfo((prev)=>({...prev,[e.target.id]:e.target.value}))
  }

  const handleSelect=(e)=>{
     const value=Array.from(e.target.selectedOptions,(option)=>option.value)
     setRooms(value)
  }

  const handleClick=async (e)=>{
     e.preventDefault()
     try{
       const list=await Promise.all(Object.values(files).map(async(file)=>{
          const data=new FormData()
          data.append("file",file)
          data.append("upload_preset","upload")

          const uploadRes=await axios.post('https://api.cloudinary.com/v1_1/djxavfpqc/image/upload',data)
          const {url}=uploadRes.data

          return url
       }))
       const newhotel={
         ...info,
         rooms,
         photoes:list
       }
       console.log(newhotel)
       await axios.post("/hotels",newhotel)

       console.log("Sucessfully hotel created")
     }catch(err){
       console.log(err)
     }
  }
  return (
    <div className='new'>
      <SideBar></SideBar>

      <div className='newContainer'>
         <Navbar></Navbar>
         <div className='top'>
           <h1>Add New Hotel</h1>
         </div>
         <div className='bottom'>
            <div className='left'>
                 <img src={files?URL.createObjectURL(files[0]):NOIMG} alt=''></img>
            </div>
            <div className='right'>
               <form>
                  <div className='formInput'>
                    <label htmlFor='file' >Image: <DriveFolderUploadIcon className='icon'></DriveFolderUploadIcon></label>
                    <input type='file' multiple id='file' onChange={e=>setFiles(e.target.files)} style={{display:"none"}}></input>
                  </div>
                 
                  {
                    hotelInputs.map((input)=>(
                      <div className='formInput' key={input.id}>
                       <label>{input.label}</label>
                       <input required id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder}></input>
                      </div>
                    ))
                  }
                    <div className='formInput'>
                      <label>Featured</label>
                      <select id='featured' onChange={handleChange}>
                        <option value={false}>NO</option>
                        <option value={true}>Yes</option>
                      </select>
                    </div>
                    <div className='selectRooms'>
                     <label>Rooms</label>
                     <select id='rooms' multiple onChange={handleSelect}>
                       {
                         loading?"Loading please wait....":
                          data && data.map((room)=>(
                            <option key={room._id} value={room._id}>{room.title}</option>
                          ))
                       }
                     </select>
                    </div>
                  <button className='formBtn' onClick={handleClick}>Send</button>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}
