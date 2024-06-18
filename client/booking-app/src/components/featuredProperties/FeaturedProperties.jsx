import React from 'react'

//importing css
import './featuredproperties.css'

//importing images
import Hotel1 from '../../assets/hotel1.jpg'
import Hotel2 from '../../assets/hotel2.jpg'
import Hotel3 from '../../assets/hotel3.jpg'
import Hotel4 from '../../assets/hotel4.jpg'
import useFetch from '../../hooks/useFetch'



export default function FeaturedProperties() {
  const {data,loading,error}=useFetch('/hotels?featured=true&limit=4')

  const photoes=[Hotel1,Hotel2,Hotel3,Hotel4]
  return (
    <div className='fp'>
     <h1 className='homeTitle'>
            Homes guests love
       </h1>
    <div className='fpContainer'>
    { (loading)?("Loading please wait"):(<>

      {
         data.map((item,i)=>(

         <div className='fpItem' key={item._id}>
            <img src={photoes[i]} className='fpImage' alt=''></img>
            <span className='fpName'>{item.name}</span>
            <span className='fpCity'>{item.city}</span>
            <span className='fpPrice'>Starting from {item.cheapestPrice}</span>
            {item.rating && 
               <div className='fpRating'>
                <button>8.9</button>
               <span>Excellent</span>
            </div>
            }
         </div>

         ))
      }    
      
     </>
    )
    }
    
     </div>
    </div>
  )
}
