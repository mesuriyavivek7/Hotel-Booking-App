import React from 'react'

//importing images
import Austin from '../../assets/austin.jpg'
import Dublin from '../../assets/dublin.jpg'
import Rome from '../../assets/rome.jpg'

//importing css
import './featured.css'
import useFetch from '../../hooks/useFetch'

export default function Featured() {
  //in as argument of usefetch we only providing the endpoint of our http request cuase bydefault we set our start ppoint in package.json
  const {data,loading,error} =useFetch("/hotels/countByCity?cities=ahmedabad,dublin,austin,rome")
  
  return (
    <div className='featured'>
     <div className='featuredContainer'>
      {(loading)?"Loading please wait....":(
        <>
       <div className='featuredItem'>
         <img className='featuredImg' src={Dublin} alt=''></img>
         <div className='featuredTitles'>
            <h1>Ahmedabad</h1>
            <h2>{data[0]} poperties</h2>
         </div>
       </div>
       <div className='featuredItem'>
         <img className='featuredImg' src={Austin} alt=''></img>
         <div className='featuredTitles'>
            <h1>Dublin</h1>
            <h2>{data[1]} poperties</h2>
         </div>
       </div>
       <div className='featuredItem'>
         <img className='featuredImg' src={Rome} alt=''></img>
         <div className='featuredTitles'>
            <h1>Austin</h1>
            <h2>{data[2]} poperties</h2>
         </div>
       </div>
       </>)
      }
      </div>
    </div>
  )
}
