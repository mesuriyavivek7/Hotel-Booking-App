import React, { useState } from 'react'

//importing sass
import './newroom.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'


import { roomInputs } from '../../formSource'


import useFetch from '../../hooks/useFetch'
import axios from 'axios'

export default function NewRoom() {
  const [info,setInfo]=useState({});
  const [hotelId,setHotelId]=useState(undefined);
  const [rooms,setRooms]=useState([])

  const {data,loading,error}=useFetch("/hotels")

  const handleChange=(e)=>{
      setInfo((prev)=>({...prev,[e.target.id]:e.target.value}))
  }

  const handleClick=async (e)=>{
    e.preventDefault()

    const roomNumbers=rooms.split(",").map((room)=>({number:room}))
    try{
      await axios.post(`/rooms/${hotelId}`,{...info,roomNumber:roomNumbers})
      console.log("New room created sucessfully")
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
           <h1>Add New Rooms</h1>
         </div>
         <div className='bottom'>
           
            <div className='right'>
               <form>
                 
                  {
                    roomInputs.map((input)=>(
                      <div className='formInput' key={input.id}>
                       <label>{input.label}</label>
                       <input type={input.type} onChange={handleChange} id={input.id} placeholder={input.placeholder}></input>
                      </div>
                    ))
                  }
                    <div className='formInput'>
                      <label>Rooms</label>
                      <textarea className='textArea' onChange={e=>setRooms(e.target.value)} placeholder='Give roomnumber with comma seperated..'></textarea>
                    </div>
                    <div className='formInput'>
                      <label>Choose a Hotel</label>
                      <select id='hotelId' onChange={e=>setHotelId(e.target.value)}>
                         {
                            loading ? "Loading please wait....":
                            data && data.map((hotel)=>(
                              <option  value={hotel._id} key={hotel._id}>{hotel.name}</option>
                            ))
                         }
                      </select>
                    </div>
                  <button onClick={handleClick} className='formBtn'>Send</button>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}
