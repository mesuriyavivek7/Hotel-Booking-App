import React from 'react'

//importing css
import './searchitem.css'

//importing images
import Room from '../../assets/room.jpg'

import { Link } from 'react-router-dom'

export default function SearchListItem({item}) {
  return (
    <div className='searchItem'>
    <img src={Room}  alt='' className='siImg'></img>
    <div className='siDesc'>
      <h1 className='siTitle'>{item.name}</h1>
      <span className='siDistance'>{item.distance}m from center</span>
      <span className='siTaxiOp'>Free Airport Taxi</span>
      <span className='siSubtitle'>
         {item.title}
      </span>
      <span className='siFeatures'>
        {item.desc}
      </span>
      <span className='siCancelOp'>Free Cancelationing</span>
      <span className='siCancelOpSubtitle'>
        You can cancel later, so lock in this great price today
      </span>
    </div>
    <div className='siDetails'> 
       {
         item.rating &&
         <div className='siRating'>
           <span>Excellent</span>
           <button>8.9 </button>
         </div>
       }
       <div className='siDetailTexts'>
         <span className='siPrice'>$123</span>
         <span className='siTaxOp'>Includes taxes and fees</span>
         <Link to={`/hotels/${item._id}`}>
           <button className='siCheckBtn'>See Availability</button>
         </Link>
       </div>
    </div>
</div>
  )
}
