import React from 'react'

//importing sass
import './featured.scss'

//importing icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


//import circuler progress bar
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Featured() {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 className='title'>Total Revenue</h1>
            <MoreVertIcon fontSize='small'></MoreVertIcon>
        </div>
        <div className='bottom'>
           <div className='featuredChart'>
             <CircularProgressbar value={70} text='70%' strokeWidth={5}></CircularProgressbar>
           </div>
           <p className='title'>Total Sales made today</p>
           <p className='amount'>$ 420</p>
           <p className='desc'>Previous transaction processing. Last payments may not be included</p>
           <div className='summary'>
             <div className='item'>
                <div className='itemTitle'>Target</div>
                <div className='itemResult negative'>
                    <KeyboardArrowDownIcon fontSize='small'></KeyboardArrowDownIcon>
                    <span className='resultAmount'>$12.4k</span>
                </div>
             </div>
             <div className='item'>
                <div className='itemTitle'>Target</div>
                <div className='itemResult positive'>
                    <KeyboardArrowUpIcon fontSize='small'></KeyboardArrowUpIcon>
                    <span className='resultAm
                    ount'>$12.4k</span>
                </div>
             </div>
             <div className='item'>
                <div className='itemTitle'>Target</div>
                <div className='itemResult negative'>
                    <KeyboardArrowDownIcon fontSize='small'></KeyboardArrowDownIcon>
                    <span className='resultAmount'>$12.4k</span>
                </div>
             </div>
           </div>
        </div>
    </div>
  )
}
