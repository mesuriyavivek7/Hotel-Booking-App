import React from 'react'

//importing components
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'

//impoting sass
import './home.scss'
import Table from '../../components/table/Table'

//importing icons



export default function Home() {
  return (
    <div className='home'>
        <SideBar></SideBar>
        <div className='homeContainer'>
          <Navbar></Navbar>
          <div className='widgets'>
             <Widgets type='user'></Widgets>
             <Widgets type='order'></Widgets>
             <Widgets type='earning'></Widgets>
             <Widgets type='balance'></Widgets>
          </div>
          <div className='charts'>
             <Featured></Featured>
             <Chart aspect={2/1} title="Last 6 Months (Revenue)"></Chart>
          </div>
          <div className='listContainer'>
             <span className='listTitle'>Latest Transaction</span>
             <Table></Table>
          </div>
        </div>
    </div>
  )
}
