import React from 'react'

//importing sass
import './widgets.scss'

//importing icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';


export default function Widgets({type}) {

  let data;

  switch(type){
     case 'user':
      data={
        title:'USERS',
        ismoney:false,
        link:'See all uesrs',
        icon:(<PersonOutlineOutlinedIcon className='icon'></PersonOutlineOutlinedIcon>)
      }
     break;


     case 'order':
      data={
        title:'ORDERS',
        ismoney:false,
        link:'See all orders',
        icon:(<LocalMallOutlinedIcon className='icon'></LocalMallOutlinedIcon>)
      }
     break;


     case 'earning':
      data={
        title:'EARNING',
        ismoney:true,
        link:'View net earnings',
        icon:(<CurrencyRupeeOutlinedIcon className='icon'></CurrencyRupeeOutlinedIcon>)
      }
     break;


     case 'balance':
      data={
        title:'BALANCE',
        ismoney:true,
        link:'See details',
        icon:(<AccountBalanceOutlinedIcon className='icon'></AccountBalanceOutlinedIcon>)
      }
     break;



     default:
      break;
  }
  return (
    <div className='widget'>
        <div className='left'>
          <span className='title'>{data.title}</span>
          <span className='counters'>{data.ismoney && 'Rs. '} 230</span>
          <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
          <div className='percentage positive'>
            <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
            20%
          </div>
          {data.icon}
        </div>
    </div>
  )
}
