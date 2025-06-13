import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Student_dashBoard() {
    const routes=[
       
        {
            path:'/student-dashboard/recordings',
            name:"Recordings"
        },
        {
            path:'/student-dashboard/profile',
            name:"profile"
        }
    ]
        
    
  return (
    <div className='flex '>
        <div className="w-[20%] fixed bg-slate-400  h-[100vh]  text-[white] bg-[gray]">
            {
            routes.map((x,index)=>{
               return <Link key={index} className='p-[10px] text-center  ' to={x.path}><button className='w-[90%] rounded-[4px] text-start p-2 mt-[20px] bg-black cursor-pointer'>{x.name}</button></Link>
            })
            }
            

        </div>
        <div className="w-[80%] ms-73 bg-slate-600 h-[100vh]  p-4">
        <Outlet />
         </div>
    </div>
  )
}

export default Student_dashBoard 