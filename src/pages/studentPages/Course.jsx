import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import axios from 'axios'

function Course() {
    const [course,setcourse]=useState([])
    async function all_course(){
        const response=await axios.get(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/course/get-all-courses`,{withCredentials:true})
        setcourse(response?.data?.data)
    }

    useEffect(()=>{
        all_course()
    },[])
  return (
    <div className='flex flex-wrap'>
        {
          course.map((x,index)=>{
            return <Card key={index} data={x}/>
          })
          
        }
    </div>
  )
}

export default Course