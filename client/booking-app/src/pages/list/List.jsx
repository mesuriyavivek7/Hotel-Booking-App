import React, { useState } from 'react'


import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'


import {format} from "date-fns"
//importing css
import './list.css'


import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range';

import SearchListItem from '../../components/searchItem/SearchListItem'

import useFetch from '../../hooks/useFetch'

export default function List() {
  const location=useLocation()
  
  const[destination,setDestination]=useState(location.state.destination.toLowerCase())
  const[dates,setDates]=useState(location.state.dates)
  const[options,setOptions]=useState(location.state.option)
  const[openDate,setOpenDate]=useState(false)
  const[min,setMin]=useState(undefined)
  const[max,setMax]=useState(undefined)

 const {loading,data,error,reFetch}=useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 10000}`)

 const handleSearchClick=()=>{
     reFetch()
 }
  return (
    <div>
      <Navbar></Navbar>
      <Header type="list"></Header>
      <div className='listContainer'>
          <div className='listWrapper'>
            <div className='listSearch'>
              <h1 className='listTitle'>
                Search
              </h1>
              <div className='lsItem'>
                <label>Destination</label>
                <input type='text' placeholder={destination}></input>
              </div>
              <div className='lsItem'>
                <label>Check-in Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(dates[0].startDate,"MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>
                {
                  openDate &&
                  <DateRange
                   onChange={(item)=>setDates([item.selection])}
                   minDate={new Date()}
                   ranges={dates}
                  ></DateRange>
                }
              </div>
              <div className='lsItem'>
                <label>Options</label>
                <div className='lsOptions'>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Min Price <small>per night</small>
                  </span>
                  <input min={0} onChange={e=>setMin(e.target.value)} type='number' className='lsOptionInput'></input>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Max Price <small>per night</small>
                  </span>
                  <input min={0} type='number' onChange={e=>setMax(e.target.value)} className='lsOptionInput'></input>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Adults
                  </span>
                  <input min={1} type='number' placeholder={options.adult} className='lsOptionInput'></input>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Children
                  </span>
                  <input min={0} type='number' placeholder={options.children} className='lsOptionInput'></input>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Room
                  </span>
                  <input min={1} type='number' placeholder={options.room} className='lsOptionInput'></input>
                </div>
              </div>
              </div>
              <button onClick={handleSearchClick}>Search</button>
            </div>
            <div className='listResult'>
               {
                (loading)?("Loading Please wait....."):(
                   <>
                    {
                     data.map((item)=>(
                       <SearchListItem key={item._id} item={item}></SearchListItem>
                     ))
                    }
                  </>
                )
               }
            </div>
          </div>
      </div>
    </div>
  )
}
