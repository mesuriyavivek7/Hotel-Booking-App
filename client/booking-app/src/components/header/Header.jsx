import React, { useContext } from 'react'

//importing css
import './header.css'

import { useState } from 'react';
//importing icons
import HotelIcon from '@mui/icons-material/Hotel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import { DateRange } from 'react-date-range';
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';

//importing css for range to date ui
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { searchContext } from '../../context/searchContext';
import { AuthContext } from '../../context/AuthContext';



export default function Header({type}) {
  const {user}=useContext(AuthContext)
  const [openDate,setOpenDate]=useState(false)
  const [openOption,setOpenOption]=useState(false)
  const [destination,setDestination]=useState("")
  const [option,setOption]=useState(
    {
      adult:1,
      children:0,
      room:1
    }
  )
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const handeleOption=(name,operation)=>{
      setOption((prev)=>{
        return {
          ...prev,
          [name]:operation==="inc"?option[name]+1:option[name]-1
        }
      })
  }


  const navigate=useNavigate()
  const {dispatch}=useContext(searchContext)
  const handleSearch=()=>{
      dispatch({type:"NEW_SEARCH",payload:{destination,dates,option}})
      navigate("/hotels",{state:{destination,dates,option}})
  }
  
  return (
    <div className='header'>
     <div className={type==='list'?'headerContainer-listMode':'headerContainer'}>
        <div className='headerList'>
            <div className='headerListItem active'>
                <HotelIcon></HotelIcon>
                <span>Stays</span>
            </div>
            <div className='headerListItem'>
                <FlightTakeoffIcon></FlightTakeoffIcon>
                <span>Flights</span>
            </div>
            <div className='headerListItem'>
                <CarRentalIcon></CarRentalIcon>
                <span>Car Rental</span>
            </div>
            <div className='headerListItem'>
                <HotelIcon></HotelIcon>
                <span>Attractions</span>
            </div>
            <div className='headerListItem'>
                <LocalTaxiIcon></LocalTaxiIcon>
                <span>Airport Taxi</span>
            </div>
        </div>
        {
         type!=="list" &&
        <>
        <h1 className='headerTitle'>a lifetime of discount it's Genius</h1>
        <p className='headerDesc'>
          Get rewarded for your travel unlock instatnt 10% discount or more by making premium account
        </p>
        {!user && <button className='headerBtn'>Sign in / Register</button>}

        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <HotelIcon style={{color:"lightgray"}}></HotelIcon>
            <input type='text' onChange={(e)=>setDestination(e.target.value)} placeholder='where are you going?' className='headerSearchInput'></input>
          </div>
          <div className='headerSearchItem'>
             <CalendarTodayIcon style={{color:"lightgray"}}></CalendarTodayIcon>
            <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate,"MM/dd/yy")} to ${format(dates[0].endDate,"MM/dd/yy")}`}</span>
            {
              openDate &&
              <DateRange
                editableDateInputs={true} 
                onChange={item => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className='date'
                minDate={new Date()}
             />
            }
          </div>
          <div className='headerSearchItem'>
             <PersonIcon style={{color:"lightgray"}}></PersonIcon>
             <span onClick={()=>setOpenOption(!openOption)} className='headerSearchText'>{`${option.adult} adults . ${option.children} children . ${option.room} room `}</span>
             {
              openOption &&
              <div className='options'>
              <div className='optionsItem'>
                <span className='optionText'>Adult</span>
                <div className='optionsCounter'>
                  <button disabled={option.adult<=1} className='optionCounterBtn' onClick={()=>handeleOption('adult','dec')}>-</button>
                  <span className='optionsCounterNumber'>{option.adult}</span>
                  <button className='optionCounterBtn' onClick={()=>handeleOption('adult','inc')}>+</button>
                </div>
              </div>
              <div className='optionsItem'>
                <span className='optionText'>Children</span>
                <div className='optionsCounter'>
                  <button disabled={option.children<=0} className='optionCounterBtn' onClick={()=>handeleOption('children','desc')}>-</button>
                  <span className='optionsCounterNumber'>{option.children}</span>
                  <button className='optionCounterBtn' onClick={()=>handeleOption('children','inc')}>+</button>
                </div>
              </div>
              <div className='optionsItem'>
                <span className='optionText'>Room</span>
                <div className='optionsCounter'>
                  <button disabled={option.room<=1} className='optionCounterBtn' onClick={()=>handeleOption('room','desc')}>-</button>
                  <span className='optionsCounterNumber'>{option.room}</span>
                  <button className='optionCounterBtn' onClick={()=>handeleOption('room','inc')}>+</button>
                </div>
              </div>
             </div>
             }
          </div>
          <div className='headerBtn' onClick={()=>handleSearch()} style={{padding:'10px'}}>search</div>
        </div>
        </>}

      </div>
    </div>
  )
}
