import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


import AlertComponent from "../../components/AlertComponent";

function AllUsers() {
  const [data, setdata] = useState([]);
  const [show, setshow] = useState("hidden");
  const [error, seterror] = useState("");
  const [id,setid]=useState('')

  async function allusers() {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/getusers`,{withCredentials:true});
    setdata(response?.data?.data);
   
  }
  useEffect(() => {
    allusers();
  }, []);
  function handleid(i){
    setid(i)
  }

  async function handledelete(id) {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/deleteuser/${id}`,{withCredentials:true}
      );
      if (response) {
        setshow("block");
        seterror(response?.data?.message);
      } else {
        alert("problem with deleting the user");
      }
    } catch {
      alert("Something went wrong while api calling");
    }
  }
  if (show == "block") {
    setTimeout(() => {
      setshow("hidden");
      window.location.reload();
    }, 3000);
  }

  if (data.length == 0) {
    return <h1 className="text-center mt-[20px]">No Users Found</h1>;
  } else {
    return (
      <div className="">
        <div className="overflow-x-auto ">
          <table className="table table-xs">
            <thead className="text-[lime]">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Ph_No</th>
                <th>Role</th>
                <th>University Name</th>
                <th>Created_at</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((x, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.ph_no}</td>
                    <td>{x.role}</td>
                    <td>{x.university_name}</td>
                    <td>{x.created_at}</td>
                    <td>
                     
                    <Link to={`/admin-dashboard/updateuser/${x.id}`}> <button className="cursor-pointer text-[white] h-[30px] w-[65px] bg-[green]">
                        UPDATE
                      </button></Link>
                    </td>
                    <td>
                      <button
                        className="cursor-pointer text-[white] h-[30px] w-[65px] bg-[red]"
                        onClick={() =>{handleid(x.id),
                          document.getElementById("my_modal_3").showModal()
                        }
                          
                          
                        }
                      >
                        DELETE
                      </button>
                    </td>
                    <td><dialog id="my_modal_3" className="modal">
                      <div className="modal-box bg-[black]">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg">ARE YOU SURE TO DELETE THE RECORD?</h3>
                        
                        <div className="flex">
                          <form method="dialog">
                        <p className="py-4 me-4">
                          <button className="btn btn-sm  btn-ghost bg-[blue] text-[white]"
                          onClick={()=>{
                            handledelete(id)
                          }}>CONFIRM</button>
                        </p>
                        </form>
                        <form method="dialog" >
                        <p className="py-4">
                          <button className="btn btn-sm  btn-ghost bg-[blue] text-[white]">CANCEL</button>
                        </p>
                        </form>
                        </div>
                      </div>
                    </dialog></td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-[lime]">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Ph_No</th>
                <th>Role</th>
                <th>University Name</th>

                <th>Created_at</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <span className={`${show}`}>
          <AlertComponent data={error} />
        </span>
      </div>
    );
  }
}

export default AllUsers;
