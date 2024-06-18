import React from 'react'

//importing sass
import './table.scss'

//importing table components from mui icons
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


//importing image
import Laptop from '../../assets/laptop.jpg'

export default function TableList() {

const rows=[
    {
        id:1143155,
        product:'Mackbook Air',
        img:Laptop,
        customer:'Akshay Patel',
        date:'1 march',
        amount:78000,
        method:'cash on delivery',
        status:'Approved'
    },
    {
        id:1143156,
        product:'Mackbook Air',
        img:Laptop,
        customer:'Pinank Poshiya',
        date:'1 march',
        amount:78000,
        method:'cash on delivery',
        status:'Approved'
    },
    {
        id:1143157,
        product:'Mackbook Air',
        img:Laptop,
        customer:'Dhruv Kakadiya',
        date:'1 march',
        amount:78000,
        method:'cash on delivery',
        status:'Approved'
    },
    {
        id:1143158,
        product:'Mackbook Air',
        img:Laptop,
        customer:'Jay Patel',
        date:'1 march',
        amount:78000,
        method:'cash on delivery',
        status:'Pending'
    },
    {
        id:1143159,
        product:'Mackbook Air',
        img:Laptop,
        customer:'Rohit Chauhan',
        date:'1 march',
        amount:78000,
        method:'cash on delivery',
        status:'Pending'
    },

    

]
  return (

    <TableContainer component={Paper}>
      <Table className='table' sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className='tableCell'> {row.id} </TableCell>
              <TableCell className='tableCell'>
                  <div className='cellWrapper'>
                    <img className='image' src={row.img} alt=''></img>
                    {row.product}
                  </div>
                  
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                 <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}
