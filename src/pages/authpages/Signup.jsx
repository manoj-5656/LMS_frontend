import React, { useState } from "react";
import axios from 'axios'
import validation from "../../validate/Signupvalidate";
import { Link } from "react-router-dom";

function Signup() {
  const [signupData,setsignupData]=useState({
    name:"",
    email:"",
    ph_no:"",
    pwd:"",
    confirm_pwd:""
  })
  const [error,seterror]=useState("")
  const [color,setcolor]=useState("red")
  
  


 async function handleSignUp(){
  const result=validation(signupData.name,signupData.email,signupData.ph_no,signupData.pwd,signupData.confirm_pwd)
  if(result){
    seterror(result)
    setcolor("red")
  }
  else{
    try{
      const response=await axios.post(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/signup`,signupData)
    console.log(response)
    if(response){
    setcolor("green")
    seterror(response?.data?.message)
    }
    else{
    seterror("signup failed")
    setcolor("red")
    }
    }
    catch{
      seterror("frontend error!")
    }
    
    
  }
 }
  return (
    <div className="flex mt-2 ">
      <div className="w-[50%] rounded-[10px]  ml-3">
        <div className="relative overflow-hidden rounded-2xl shadow-xl p-10 text-gray-900">
          {/* Fancy Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white/70 to-purple-50 opacity-90"></div>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col justify-between gap-10">
            {/* Logo */}
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text drop-shadow-md">
              EduMaster
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-start max-w-xl mx-auto gap-6">
              <h1 className="text-5xl font-extrabold leading-tight drop-shadow-sm text-gray-800">
                Your Future. <br />
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                  Your Platform.
                </span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Discover powerful tools and personalized learning to help you
                grow smarter, faster, and better — all in one place.
              </p>

              <div className="space-y-4 text-base text-gray-800">
                {[
                  {
                    icon: "📚",
                    text: "Access 1000+ premium courses anytime, anywhere",
                  },
                  {
                    icon: "🎯",
                    text: "Track your progress and earn verified certificates",
                  },
                  {
                    icon: "🧑‍🏫",
                    text: "Learn directly from expert instructors",
                  },
                  {
                    icon: "⏰",
                    text: "Flexible learning to match your schedule",
                  },
                ].map(({ icon, text }, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="text-yellow-500 text-xl hover:scale-110 transition-transform">
                      {icon}
                    </span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="text-sm text-center text-gray-500 pt-6 border-t border-gray-200">
              <p>
                Need help?{" "}
                <a
                  href="/support"
                  className="underline text-yellow-500 hover:text-yellow-600 transition-colors"
                >
                  Contact Support
                </a>
              </p>
              <p className="mt-1">
                By signing up, you agree to our{" "}
                <a
                  href="/terms"
                  className="underline text-yellow-500 hover:text-yellow-600 transition-colors"
                >
                  Terms
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[100%] w-[5px]"></div>
      <div className="w-[50%] bg-gray-800 p-5 rounded-[10px] text-white mr-4">
        <h1 className="text-2xl">Lets get signup🤩</h1>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            What is your name?
          </legend>
          <input
            type="text"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={signupData.name}
            onChange={(x)=>{setsignupData({...signupData,name:x.target.value})}}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            What is your Email?
          </legend>
          <input
            type="email"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={signupData.email}
            onChange={(x)=>{setsignupData({...signupData,email:x.target.value})}}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            What is your Number?
          </legend>
          <input
            type="number"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={signupData.ph_no}
            onChange={(x)=>{setsignupData({...signupData,ph_no:x.target.value})}}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            Create your Password?
          </legend>
          <input
            type="password"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={signupData.pwd}
            onChange={(x)=>{setsignupData({...signupData,pwd:x.target.value})}}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            Confirm your Password?
          </legend>
          <input
            type="password"
            className="input text-[black] w-[100%]"
            placeholder="Type here"
            value={signupData.confirm_pwd}
            onChange={(x)=>{setsignupData({...signupData,confirm_pwd:x.target.value})}}

          />
        </fieldset>
        <p className={`text-[${color}]`}>{error}</p>
        <button className="btn mt-3 w-[100%] " onClick={handleSignUp}>Create Your Account</button>
        <p className="mt-2">
          Already having Account? <Link className="text-[red]" to='/signin'>Signin</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
