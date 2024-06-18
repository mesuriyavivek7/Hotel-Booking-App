import React from 'react'

//import sass
import './chart.scss'


//impoting charts
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data=[
  {name:'January',Total:1200},
  {name:'February',Total:2100},
  {name:'March',Total:800},
  {name:'April',Total:900},
  {name:'May',Total:1900}
]

export default function Chart({aspect,title}) {
  return (
    <div className='chart'>
        <span className='title'>{title}</span>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
       <defs>
      <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#50727B" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#50727B" stopOpacity={0}/>
      </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray'/>
  
  <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#50727B" fillOpacity={1} fill="url(#total)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
