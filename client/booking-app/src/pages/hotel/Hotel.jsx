import React, { useState } from 'react'
import { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { searchContext } from '../../context/searchContext'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Reserve from '../../components/reserve/Reserve'
//importing css
import "./hotel.css"

import { useLocation } from 'react-router-dom'

//importing icons
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';


//importing images
import Himg1 from '../../assets/hotel-room-1.jpg'
import Himg2 from '../../assets/hotel-room-2.jpg'
import Himg3 from '../../assets/hotel-room-3.jpg'
import Himg4 from '../../assets/hotel-room-4.jpg'
import Himg5 from '../../assets/hotel-room-5.jpg'
import Himg6 from '../../assets/hotel-room-6.jpg'
import useFetch from '../../hooks/useFetch'


export default function Hotel() {
  const photoes=[Himg1,Himg2,Himg3,Himg4,Himg5,Himg6]
  const [slideNumber,setSlideNumber]=useState(0)
  const [slideOpen,setSlideOpen]=useState(false)
  const [openModal,setOpenModal]=useState(false)
  const navigate=useNavigate()
  //get user data
  const {user}=useContext(AuthContext)

  //fetching dates of staying into hotel usin searchcontext
  const {dates,option}=useContext(searchContext)
  console.log(dates,option)
  const MILLISECONDS_PER_DAY=1000*60*60*24
  //function for finding days different
  function dayDifferent(date1,date2){
     const timeDiff=Math.abs(date2.getTime() - date1.getTime())
     const diffDays=Math.ceil(timeDiff/MILLISECONDS_PER_DAY)
     return diffDays
  }
  
  const days=dayDifferent(dates[0].endDate,dates[0].startDate)
  console.log(days)

  const path=useLocation().pathname
  const id=path.split("/")[2]
  
  const {data,loading,error,reFetch}=useFetch(`/hotels/find/${id}`)

  
  const handleOpen=(i)=>{
    setSlideNumber(i)
    setSlideOpen(true)
  }
  const handleMove=(move)=>{
      let newslidenumber

      if(move==='b'){
         newslidenumber=slideNumber===0?5:slideNumber-1
      }else{
         newslidenumber=slideNumber===5?0:slideNumber+1
      }

      setSlideNumber(newslidenumber)
  }
  const handleClick=()=>{

    if(user){
     setOpenModal(true)
    }else{
      navigate('/login')
    }
    
  }
  return (
    
    <>
       <Navbar></Navbar>
       <Header type='list'></Header>
       { loading?("Please wait Loading...."):(
       <div className='hotelContainer'>
       {
         slideOpen && 
         <div className='Slider'>
            <ArrowBackIosIcon className='arrow arrow-left' onClick={()=>handleMove("back")}></ArrowBackIosIcon>
            <ArrowForwardIosIcon className='arrow arrow-right' onClick={()=>handleMove("next")}></ArrowForwardIosIcon>
            <div className='sliderWrapper'>
              <img src={photoes[slideNumber]} className='sliderImg' alt=''></img>
            </div>
            <CloseIcon onClick={()=>setSlideOpen(!slideOpen)} className='close'></CloseIcon>
        </div>
       }
        <div className='hotelWrapper'>
          <h1 className='hotelTitle'>{data.name}</h1>
          <div className='hotelAdress'>
              <FmdGoodIcon></FmdGoodIcon>
              <span>{data.address}</span>
          </div>
          <span className='hotelDistance'>
             Excellent location - {data.distance}m from center 
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {
              photoes.map((photo,i)=>(
                <div className='hotelImgWrapper'>
                    <img onClick={()=>handleOpen(i)} src={photo} className='hotelImg' alt=''></img>
                </div>
              ))
            }
          </div>
          <div className='hotelDetails'>
             <div className='hotelDetailsText'>
               <button className='booknow'>Reserve or Book Now!</button>
               <h1 className='hotelTitle'>{data.title}</h1>
               <p className='hotelDesc'>
                {data.desc}
               </p>
             </div>
             <div className='hotelDetailsPrice'>
              <h1>Perfect for {days}-night stay!</h1>
              <span>
                Located at real heart of kronk, this propertyes 
                has an excellent location score of 9.8
              </span>
              <h2>
                <b>${days*data.cheapestPrice*option.room}</b> ({days} night)
              </h2>
              <button onClick={handleClick} style={{cursor:"pointer"}}>Reserve or Book Now!</button>
             </div>
          </div>
        </div>
       </div>

        
       )
       }
       <MailList></MailList>
       <Footer></Footer>
      {openModal  && <Reserve setModal={setOpenModal}  hotelId={id}></Reserve> } 
       
    </>
  )
}
