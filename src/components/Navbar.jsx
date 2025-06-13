import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function Navbar() {
  const token = Cookies.get("token");
  const id = Cookies.get("id");
 const navigate=useNavigate()

 
  const [role,setrole]=useState(null)
 async  function handlelogout() {
    const response=await axios.post(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/signout`,{},{withCredentials:true})
    if (response){
      navigate('/')
    }
   
  }
  async function get_user(){
    const response=await axios.get(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/get-user/${id}`,{withCredentials:true})
    setrole(response?.data?.data?.role)
  }
  useEffect(()=>{
    get_user()
  },[])
  return (
    <div> 
      <div className="navbar bg-fuchsia-400  text-white shadow-sm fixed top-0 z-[10] mb-[40px]">
        <div className="flex-1 flex items-center">
          <Link to="/" className="ml-[10px] text-4xl ">
            LMS
          </Link>
          <div className="ms-[300px] text-[20px]">
           <Link to="/home">Home</Link> 
          </div>
          <div className="ms-[30px] text-[20px] cursor-pointer">
            <Link to='/courses'>Courses</Link>
          </div>
          <div className="ms-[30px] text-[20px] cursor-pointer">
            <Link to='/contact-us'>Contact Us</Link>
          </div>

        </div>
        <div className="flex">
          {token ? (
            <div className="">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2wMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEAQUH/8QALBABAAICAAQFAwMFAAAAAAAAAAECAxEEITFhIjJBUXESFFITQoEzU5Ghsf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAArvffKAdtfXTqrmZnq4AAAAAAAHwAJ1yekrIUJVtNfgFw5E7jcOgAAAAAAAAAAAjadV7gjkt6QrAAAAAARvkpTzWjfsr+5x71qwLhXGfHadb18ws+AAAAASpb6Z7LY5qFmO3pILAAAAAAAAAAFOSd217LbcolRPUAAAABmz5piZrSfmVua/0Y/nkw/IHrv1AVBZiy2xzHPdfZWA9GtotETXpLrLwlvH9PpLUigABE6nfqAL45w6hjnlzTAAAAAAAABDJPhVLcvRUAAAADNxn7Y7szTxn7GZQAEAATwzrLXXu3+rBi/qV+W8ABFAASx+bS5RTzwvAAAAAAAABXl6QrW5PKqAAAABTxNPqxxP4yxvSnpqejFnxfpzy51noCoBUAdrWbTqOoLOGr9WWOzbKGLHGONdZ9ZTRQAAAHa+aF6nH51wAAAAAAAAOX8s/ChoU3jVpj+QRAAAAcmImOetd1d+Ix1nVd2nsqnirftpEfMgnfhqzO6TrtKueFv7xo+6v+NT7q/41B2vC8/Fbl2aKY60jwxHyzfdX/Gp91k/Gv8g1jPXiYmfFXXeJX1vW0eG24B0AADsCzEscrGodAAAAAAAAAQyRuNpgM4leuuaIOT0Y8+b9SdRyrH+1vF31WtI9ecsoACoAAAAJVvak/VVEBvxZK5I3HKfWE2HBf6MkT6Tylu/4iiWOu7bRiNyvrGoB0AAAAAAAAAAAHJjcalVasxPTcLnJ6A8viZ3lntyVNfE8NaJm9N23PPsyKgAAAAAAAB0ehi3bHWddYY8WC+WfDyj3elixxjrFY569QdpXSYIoAAAAAAAAAAAAAApy8NjydY1PvC4B5uThMtPLq0dlNqWr5qzD2HJjfoDxh6tsGO086V/w59th/two8sjn05vU+3xR0xwsrStfLEQg82nDZb9K67y04uCpXnk8UtYDkRFY1Eah0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[black] text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={role==1?"/admin-dashboard":"/student-dashboard"} className="justify-between">
                    DashBoard
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handlelogout}>Logout</a>
                </li>
              </ul>
            </div>
            </div>
          ) : (
            <div className="button">
              <Link to="/signup">
                <button className="btn btn-primary mr-3">Signup</button>
              </Link>
              <Link to="/signin">
                <button className="btn btn-secondary mr-3">signin</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
