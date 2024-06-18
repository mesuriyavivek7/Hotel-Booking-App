import React, { useContext, useState } from 'react'

//importing css
import './reserve.css'

//importing icons
import CancelIcon from '@mui/icons-material/Cancel';
import useFetch from '../../hooks/useFetch';
import { searchContext } from '../../context/searchContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Reserve({setModal,hotelId}) {
  const [selectedRoom,setSelectedRoom]=useState([])
  const {data,loading,err}=useFetch(`/hotels/room/${hotelId}`)

  const{dates}=useContext(searchContext)

  const handleSelect=(e)=>{
      const checked=e.target.checked
      const value=e.target.value
      setSelectedRoom(checked ? [...selectedRoom,value]:selectedRoom.filter((item)=> item!==value))
  }

  const getDatesInRange=(startDate,endDate)=>{
      const start=new Date(startDate)
      const end=new Date(endDate)

      const date=new Date(start.getTime())
      let datelist=[]
      while(date<=end){
        datelist.push(new Date(date).getTime())
        date.setDate(date.getDate()+1)
      }

      return datelist
      
  }
  const allDates=getDatesInRange(dates[0].startDate,dates[0].endDate)
  const isAvailable=(roomNUmber)=>{
      const isFound=roomNUmber.unavailableDates.some((date)=> allDates.includes(new Date(date).getTime()))

      return !isFound;
  }
  const navigate=useNavigate()
  const handleClick= async()=>{
  
    try{
        await Promise.all(selectedRoom.map((roomID)=>{
          const res=axios.put(`${process.env.REACT_APP_API_BASE_URL}rooms/availability/${roomID}`,{dates:allDates})
          return res.data
       }))
       setModal(false)
       navigate('/')
    }catch(err){

    }

      
  }
  return (
    <div className='reserve'>
      <div className='rContainer'> 
         <CancelIcon className='rClose' onClick={()=>setModal(false)}></CancelIcon>
         <span>Select your rooms</span>
         
         {
          data.map((item)=>(
            <>
            <div className='rItem'>
             <div className='rItemInfo'>
                 <div className='rTitle'>{item.title}</div>
                 <div className='rDesc'>{item.desc}</div>
                 <div className='rMax'>Max People: <b>{item.maxPeople}</b></div>
                 <div className='rPrice'></div>
             </div>
             
              <div className='rSelectRooms'>
                {item.roomNumber.map((roomNum,i)=>(
                  <div className='room' key={i}>
                    <label>{roomNum.number}</label>
                    <input type='checkbox' value={roomNum._id} onChange={handleSelect} disabled={!isAvailable(roomNum)}></input>
                  </div>
                ))}
              </div>

             </div>
            <button className='rBtn' onClick={handleClick} >Reserve Now!</button>
            </>
          ))
         }
      </div>
    </div>
  )
}
