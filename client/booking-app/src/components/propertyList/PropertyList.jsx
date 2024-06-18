import React from 'react'

//importing css
import './propertylist.css'

//importing images
import Hotel from '../../assets/hotels.jpg'
import Villas from '../../assets/villa.jpg'
import Cabins from '../../assets/cabins.jpg'
import Apart from '../../assets/apartment.jpg'

//importing useFetch for api request
import useFetch from '../../hooks/useFetch'


export default function PropertyList() {
 const {data,loading,error}=useFetch('/hotels/countByType')
  const images=[
    Hotel,
    Villas,
    Cabins,
    Apart,
  ]

  return (
    <div className='pList'>
    <h1 className='homeTitle'>Browse by property type</h1>
     <div className='pListContainer'>
     { (loading)?("Loading please wait...."):(
        <>
        {
           data && images.map((img,i)=>(
                <div className='pListItem' key={i}>
                   <img src={img} className='pListImg' alt=''></img>
                   <div className='pListTitle'>
                     <h1>{data[i]?.type}</h1>
                     <h2>{data[i]?.count} {data[i]?.type}</h2>
                   </div>
                </div>
            ))
        }
        

        </>)
      }
      </div>
    </div>
  )
}
