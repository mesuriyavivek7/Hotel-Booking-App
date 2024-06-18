import React, { useState } from 'react'

//importing sass
import './new.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'

//importing images
import NOIMG from '../../assets/noimg.jpg'

import axios from 'axios'

import { userInputs } from '../../formSource'

//importing icons
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export default function New() {

  const [file,setFile]=useState("")
  const [info,setInfo]=useState({})

  const handleChange=(e)=>{
     setInfo((prev)=>({...prev,[e.target.id]:e.target.value}))

  }
  const handleClick= async (e)=>{
    e.preventDefault();
     
   const data=new FormData()
   data.append("file",file)
   data.append("upload_preset","upload")

   try{
     const uploadRes=await axios.post('https://api.cloudinary.com/v1_1/djxavfpqc/image/upload',data)
     console.log(uploadRes)

     const {url}=uploadRes.data
     const newUser={
       ...info,
       img:url
     }
     await axios.post("/auth/register",newUser)
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
           <h1>Add New Users</h1>
         </div>
         <div className='bottom'>
            <div className='left'>
                 <img src={file?URL.createObjectURL(file):NOIMG} alt=''></img>
            </div>
            <div className='right'>
               <form>
                  <div className='formInput'>
                    <label htmlFor='file' >Image: <DriveFolderUploadIcon className='icon'></DriveFolderUploadIcon></label>
                    <input type='file' id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}></input>
                  </div>
                 
                  {
                    userInputs.map((input)=>(
                      <div className='formInput' key={input.id}>
                       <label>{input.label}</label>
                       <input type={input.type} id={input.id} onChange={handleChange} placeholder={input.placeholder}></input>
                      </div>
                    ))
                  }
                  <button onClick={handleClick} className='formBtn'>Send</button>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}
