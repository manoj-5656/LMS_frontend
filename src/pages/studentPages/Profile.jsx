import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import validateupdateprofile from "../../validate/Validateupdateprofile";

function Profile() {
    
  const [userdata, setuserdata] = useState({
    name: "",
    ph_no: "",
    university_name: "",
  });
  const id = Cookies.get("id");

  const [error, seterror] = useState("");
  const [color, setcolor] = useState("red");
  async function handleprofile() {
    const data = validateupdateprofile(
      userdata.name,
      userdata.ph_no,
      userdata.university_name
    );
    if (data) {
      seterror(data);
      setcolor("red");
    } else {
      try{const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/update-users/${id}`,userdata,
        { withCredentials: true }
      );
      if(response){
        seterror(response?.data?.message)
        setcolor('green')
        

      }
      else{
        seterror("frontend error!")
        setcolor('red')
      }}
      catch{
        seterror("error while fetching api's")
        setcolor('red')
      }
     
    }
  }
  async function get_user() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/get-user/${id}`,
      { withCredentials: true }
    );
    setuserdata({...userdata,name:response?.data?.data?.name,ph_no:response?.data?.data?.ph_no,university_name:response?.data?.data?.university_name})
  }
  useEffect(() => {
    get_user();
  }, []);

  return (
    <div className="ml-[100px] w-[30%]  p-[10px] bg-rose-800 text-white rounded-[5px] mt-[20px]">
        <h1>Lets Update Profile💙</h1>
      <fieldset className="fieldset  ">
        <legend className="fieldset-legend text-white">
          What is your Name?
        </legend>
        <input
          type="text"
          className="input text-black w-[100%]"
          placeholder="Name"
          value={userdata.name}
          onChange={(x) => {
            setuserdata({ ...userdata, name: x.target.value });
          }}
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-white">
          What is your Phone Number?
        </legend>
        <input
          type="text"
          className="input text-black w-[100%]"
          placeholder="phone number"
          value={userdata.ph_no}
          onChange={(x) => {
            setuserdata({ ...userdata, ph_no: x.target.value });
          }}
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-white">
          What is your University Name?
        </legend>
        <input
          type="text"
          className="input text-black w-[100%]"
          placeholder="university name"
          value={userdata.university_name}
          onChange={(x) => {
            setuserdata({ ...userdata, university_name: x.target.value });
          }}
        />
      </fieldset>
      <p className={`ms-9 text-[${color}]`}>{error}</p>
      <button
        className="btn btn-secondary w-[100%] mt-[10px]"
        onClick={handleprofile}
      >
        Update Profile
      </button>
    </div>
  );
}

export default Profile;
