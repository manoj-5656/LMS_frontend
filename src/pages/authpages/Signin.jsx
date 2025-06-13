import React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from'js-cookie'


import Signinvalidation from "../../validate/Signinvalidate";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [error,seterror]=useState("")
  const navigate=useNavigate()
  const [signindata,setsignindata]=useState({
    email:"",
    password:"" 
  })
  
  async function handlesignin(){
   const result=Signinvalidation(signindata.email,signindata.password)
   
   if (result){
    seterror(result)
   }
   else{
    try{
      const response=await axios.post(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/signin`,signindata,{withCredentials:true})
      console.log(response)
     if(response){
    seterror(response?.data?.message)
    setTimeout(()=>{navigate('/')
    window.location.reload()},3000)
    
    }
    else{
      seterror("signin failed")
    }

    }   
    catch{
      seterror("frontend error!")
    }
   }
  
  }
  
  return (
    <div className="ml-[100px] w-[30%]  p-[10px] bg-rose-800 text-white rounded-[5px] mt-[20px]">
      <fieldset className="fieldset  ">
        <legend className="fieldset-legend text-white">
          What is your Email?
        </legend>
        <input
          type="text"
          className="input text-black w-[100%]"
          placeholder="Email"
          onChange={(x)=>{setsignindata({...signindata,email:x.target.value})}}

          
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-white">
          What is your Password?
        </legend>
        <input
          type="text"
          className="input text-black w-[100%]"
          placeholder="Password"
          onChange={(x)=>{setsignindata({...signindata,password:x.target.value})}}

        />
      </fieldset>
      <p>{error}</p>
      <button className="btn btn-secondary w-[100%] mt-[10px]" onClick={handlesignin}>Sign In</button>
    </div>
  );
}

export default Signin;
