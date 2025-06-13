import React, { useState } from 'react'

function AlertComponent(props) {
    const [showdisplay,setshowdisplay]=useState('block')

    function handlealertremove(){
        setshowdisplay('hidden')
        window.location.reload()
    }

    
  return (
    <div className={`flex items-center  bg-[green] text-white fixed bottom-0 right-0 py-3 px-[20px] me-[10px] m-4 ${showdisplay}`}>
        <h1>{props.data}</h1>
        <button className=' ms-[20px] text-end cursor-pointer' onClick={()=>{
            handlealertremove()
        }}>x</button>
    </div>
  )
}

export default AlertComponent