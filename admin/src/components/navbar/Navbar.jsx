import React, { useContext } from 'react'

//imporing sass
import './navbar.scss'

//importing images
import Person from '../../assets/pexels-nathan-cowley-1300402.jpg'

//importing icons
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListIcon from '@mui/icons-material/List';
import LightModeIcon from '@mui/icons-material/LightMode';

import { DarkModeContext } from '../../context/darkModeContext';
export default function Navbar() {
   const {darkMode,dispatch}=useContext(DarkModeContext)
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='search'>
                <input type='text' placeholder='search..'></input>
                <SearchIcon className='icon'></SearchIcon>
            </div>
            <div className='items'>
                <div className='item'>
                    <LanguageIcon className='icon'></LanguageIcon>
                    <span>English</span>
                </div>
                <div className='item'>
                    {
                        darkMode ? (<LightModeIcon className='icon'  onClick={()=>dispatch({type:'TOGGLE'})}></LightModeIcon>)
                        :(<DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:'TOGGLE'})}></DarkModeOutlinedIcon>)
                    }
                    
                </div>
                <div className='item'>
                    <FullscreenExitIcon className='icon'></FullscreenExitIcon>
                </div>
                <div className='item'>
                    <NotificationsNoneOutlinedIcon className='icon'></NotificationsNoneOutlinedIcon>
                    <span className='counter'>1</span>
                </div>
                <div className='item'>
                    <ChatBubbleOutlineOutlinedIcon className='icon'></ChatBubbleOutlineOutlinedIcon>
                    <span className='counter'>1</span>
                </div>
                <div className='item'>
                    <ListIcon className='icon'></ListIcon>
                </div>
                <div className='item'>
                   <img src={Person} alt='' className='avtar'></img>
                </div>
            </div>
        </div>
    </div>
  )
}
