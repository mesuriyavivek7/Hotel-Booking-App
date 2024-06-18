import React from 'react'

//importing sass
import './single.scss'

//importing components
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import TableList from '../../components/table/Table'
//importing images
import GirlPic from '../../assets/girlpic.jpg'

export default function Single() {
  return (
    <div className='single'>
     <SideBar></SideBar>
     <div className='singleContainer'>
        <Navbar></Navbar>
        <div className='top'>
           <div className='left'>
              <span className='editBtn'>Edit</span>
              <h1 className='title'>Information</h1>
              <div className='item'>
                 <img src={GirlPic} alt='' className='itemImg'></img>
                 <div className='details'>
                   <h1 className='itemTitle'>Shreya Dae</h1>
                   <div className='detailItem'>
                     <span className='itemKey'>Email:</span>
                     <span className='itemVal'>daeshray@gmail.com</span>
                   </div>
                   <div className='detailItem'>
                     <span className='itemKey'>Phone:</span>
                     <span className='itemVal'>+91 7687789746</span>
                   </div>
                   <div className='detailItem'>
                     <span className='itemKey'>Address:</span>
                     <span className='itemVal'>Elton st. navy Delhi</span>
                   </div>
                   <div className='detailItem'>
                     <span className='itemKey'>Country</span>
                     <span className='itemVal'>India</span>
                   </div>
                 </div>
              </div>
           </div>
           <div className='right'>
             <Chart aspect={3/1} title="User Spending (Last 6 Months)"></Chart>
           </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transaction</h1>
          <TableList></TableList>
        </div>
     </div>

    </div>
  )
}
