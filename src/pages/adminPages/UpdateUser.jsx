import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import UserValidate from "../../validate/UpdateUserValidate";

function UpdateUser() {
  const [error, seterror] = useState("");
  const [color, setcolor] = useState("red");
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateddata, setupdateddata] = useState({
    name: "",
    email: "",
    ph_no: "",
    university_name: "",
  });

  async function getuser() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/get-user/${id}`,
      { withCredentials: true }
    );
    // console.log(response)

    setupdateddata({
      ...updateddata,
      name: response?.data?.data?.name,
      email: response?.data?.data?.email,
      ph_no: response?.data?.data?.ph_no,
      university_name: response?.data?.data?.university_name,
    });
  }

  useEffect(() => {
    getuser();
  }, []);

  async function handleupdate() {
    const result = UserValidate(
      updateddata.name,
      updateddata.email,
      updateddata.ph_no,
      updateddata.university_name
    );

    if (result) {
      seterror(result);
      setcolor("red");
    } else {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/update-users/${id}`,
          updateddata,
          { withCredentials: true }
        );
        seterror(response?.data?.message);
        setcolor("green");
        setTimeout(() => {
          navigate("/admin-dashboard/all-users");
        }, 3000);
      } catch {
        seterror("update error");
      }
    }
  }

  return (
    <div className="flex mt-2 ">
      <div className="bg-gray-800 p-5 mx-auto rounded-[10px] text-white w-[400px]">
        <h1 className="text-2xl">Update User Data😊</h1>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            What is your name?
          </legend>
          <input
            type="text"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={updateddata.name}
            onChange={(x) =>
              setupdateddata({ ...updateddata, name: x.target.value })
            }
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
            value={updateddata.email}
            onChange={(x) =>
              setupdateddata({ ...updateddata, email: x.target.value })
            }
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
            value={updateddata.ph_no}
            onChange={(x) =>
              setupdateddata({ ...updateddata, ph_no: x.target.value })
            }
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            University Name?
          </legend>
          <input
            type="text"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={updateddata.university_name}
            onChange={(x) =>
              setupdateddata({
                ...updateddata,
                university_name: x.target.value,
              })
            }
          />
        </fieldset>

        <p className={`text-center text-[${color}]`}>{error}</p>
        <button className="btn mt-3 w-[100%] " onClick={handleupdate}>
          Update Account
        </button>
      </div>
    </div>
  );
}

export default UpdateUser;
