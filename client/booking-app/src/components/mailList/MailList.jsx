import React from 'react'


//importing css
import './maillist.css'

export default function MailList() {
  return (
    <div className='mail'>
      <div className='mailContainer'>
        <h1 className='mailTitle'>Save time , save money!</h1>
        <span className='mailDesc'>Sign up and we will send you the best deal!</span>
        <div className='mailInputContainer'>
            <input type='text' placeholder='enter your mail'></input>
            <button>Subscribe</button>
        </div>
       </div>
    </div>
  )
}
