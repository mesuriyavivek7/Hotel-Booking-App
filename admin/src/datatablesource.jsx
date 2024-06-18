//importing images
import User from './assets/user.jpg'
import NOIMG from './assets/noimg.jpg'
export const usersCol=[
    { field: 'id', headerName: 'ID', width: 70 },
    {field:'username',headerName:'User',width:230,
     renderCell:(params)=>{
        return (
            <div className='cellWithImg'>
                <img src={params.row.img || NOIMG} className='cellImg' alt=""></img>
                <span>{params.row.username}</span>
            </div>
        )
     }
    },
    {field:'email',headerName:'Email',width:230},
    {field:'country',headerName:'Country',width:100},
    {field:'city',headerName:'City',width:100},
    {field:'phone',headerName:'Phone',width:100},
    

]


export const hotelsCol=[
    {field:"_id",headerName:'ID',width:250},
    {
        field:"name",
        headerName:'Name',
        width:150
    },
    {
        field:'type',
        headerName:"Type",
        width:150
    },
    {
       field:"title",
       headerName:"Title",
       width:150
    },
    {
        field:'city',
        headerName:"city",
        width:150
    }
]

export const roomsCol=[
    {
        field:"_id",
        headerName:"Id",
        width:200
    },
    {
        field:'title',
        headerName:'Title',
        width:230
    },
    {
        field:'desc',
        headerName:"Description",
        width:200
    },
    {
        field:'price',
        headerName:'Price',
        width:100
    },
    {
        field:'maxPeople',
        headerName:'Max People',
        width:100
    }
]

