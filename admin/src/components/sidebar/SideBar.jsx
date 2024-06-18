import React, { useContext } from 'react'

//importing sass
import './sidebar.scss'

//importing icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import LivingIcon from '@mui/icons-material/Living';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
export default function SideBar() {

  const {dispatch}=useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to='/' style={{textDecoration:'none'}}>
              <span className='logo'>Vivekadmin</span>
            </Link>
            
        </div>
        <hr></hr>
        <div className='center'>
            <ul>
                <p className='title'>Main</p>
                <li>
                    <DashboardIcon className='icon'></DashboardIcon>
                    <span>Dashboard</span>
                </li>
                <p className='title'>Lists</p>
                <Link style={{textDecoration:'none'}} to='/users'>
                 <li>
                     <GroupIcon className='icon'></GroupIcon>
                     <span>Users</span>
                 </li>
                </Link>
                <Link style={{textDecoration:'none'}} to='/hotels'>
                 <li>
                     <OtherHousesIcon className='icon'></OtherHousesIcon>
                     <span>Hotels</span>
                 </li>
                </Link>
                <Link style={{textDecoration:'none'}} to='/rooms'>
                <li>
                    <LivingIcon></LivingIcon>
                    <span>Rooms</span>
                </li>
                </Link>
                <li>
                    <LocalShippingIcon className='icon'></LocalShippingIcon>
                    <span>Delivery</span>
                </li>
                <p className='title'>USEFUL</p>
                <li>
                    <AnalyticsIcon className='icon'></AnalyticsIcon>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon className='icon'></NotificationsIcon>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                   <HealthAndSafetyIcon className='icon'></HealthAndSafetyIcon>
                    <span>System Health</span>
                </li>
                <li>
                    <SignalCellularAltIcon className='icon'></SignalCellularAltIcon>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon'></SettingsIcon>
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                    <AccountCircleIcon className='icon'></AccountCircleIcon>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'></LogoutIcon>
                    <span>LogOut</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className='colorOption' onClick={()=>dispatch({type:'LIGHT'})}></div>
            <div className='colorOption' onClick={()=>dispatch({type:'DARK'})}></div>
        </div>
    </div>
  )
}
