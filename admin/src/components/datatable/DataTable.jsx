import React, { useEffect, useState } from 'react'

//importing sass
import './datatable.scss'

import { DataGrid } from '@mui/x-data-grid';

import useFetch from '../../hooks/useFetch'

import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function DataTable({columns}) {
  const location=useLocation()
  const path=location.pathname.split("/")[1];
  const [list,setList]=useState([]);
  const {data,loading,err}=useFetch(`/${path}`)
  useEffect(()=>{
      setList(data)
  },[data])
  const handleDelete=async (id)=>{
     try{
       await axios.delete(`/${path}/${id}`)
       setList(list.filter((item)=> item._id!==id))
     }catch(err){

     }
     
  }
  
  const actionCol=[{field:'action' ,headerName:'Action',width:200,
   renderCell:(params)=>{
    return (
      <div className='cellAction'>
        <Link to='/users/232' style={{textDecoration:'none'}}>
          <span className='viewBtn'>View</span>
        </Link>
         <span className='deleteBtn' onClick={()=>handleDelete(params.row._id)}>Delete</span>
      </div>
    )
   }
  }
]
  return (
    <div className='datatable'>
        <div className='dataTabelTitle'>
          {path}
          <Link to={`/${path}/new`} style={{textDecoration:'none'}} className='link'>Add New</Link>
        </div>
        {
          loading?("Loading Please wait....."):(
           <DataGrid
           className='dataGrid'
           rows={list}
           columns={columns.concat(actionCol)}
           initialState={{
           pagination: {
              paginationModel: { page: 0, pageSize: 10 },
           },
           }}
           pageSize={8}
           pageSizeOptions={[5,10]}
           checkboxSelection
           getRowId={row=>row._id}
           />
          )
        }
       
    </div>
  )
}
