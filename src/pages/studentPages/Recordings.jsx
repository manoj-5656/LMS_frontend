import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from "js-cookie"


function Recordings() {
  const [course,setcourse]=useState("")
  const id=Cookies.get("id")
  async function get_user() {
    const result = await axios.get(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/get-user/${id}`,{ withCredentials: true });
    setcourse(result.data.data.purchased_courses.length)
  }
  console.log(course)
  useEffect(()=>{
    get_user()
  },[])
  
  return (
    <>
    
      <div className='ml-3 flex flex-wrap'>
      <iframe width="560" height="315" className='m-2' src="https://www.youtube.com/embed/K5KVEU3aaeQ?si=6MbDewzQ9HJ9WJuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
      <iframe width="560" height="315" className='m-2' src="https://www.youtube.com/embed/eIrMbAQSU34?si=NXZwvTWdjbd-4sng" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
      <iframe width="560" height="315" className='m-2' src="https://www.youtube.com/embed/qz0aGYrrlhU?si=yGR1NIly_rSZsUde" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
      <iframe width="560" height="315" className='m-2' src="https://www.youtube.com/embed/wRNinF7YQqQ?si=jkXbcTzJEkr30sjH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
    </div>
    
    </>
    
  )
}

export default Recordings