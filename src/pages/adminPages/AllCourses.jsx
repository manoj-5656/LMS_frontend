import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlertComponent from "../../components/AlertComponent";

function AllCourses() {
  const [courses, setcourses] = useState([]);
  const [show, setshow] = useState("hidden");
  const [error, seterror] = useState("");
  const [id,setid]=useState('')

  function handleid(i){
    setid(i)
  }

  async function get_all_courses() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ORIGIN}/api/course/get-all-courses`,{withCredentials:true}
    );
    setcourses(response?.data?.data);
  }
  useEffect(() => {
    get_all_courses();
  }, []);
  
  async function handlecoursedelete(id) {
    console.log(id)
    const response=await axios.delete(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/course/delete-course/${id}`,{withCredentials:true})
    console.log(response)
    if(response){
      setshow('block')
      seterror(response?.data?.message)
    }
    else{
      alert("problem with deleting the course");
    }


    
    
  }
  if (show == "block") {
    setTimeout(() => {
      setshow("hidden");
      window.location.reload();
    }, 3000);
  }
if(courses.length==0){
  return <h1 className="text-center mt-[20px]"> No courses Found </h1>
}
else{
   return (
    <div className="flex flex-wrap bg-slate-600">
      {courses.map((x,index) => {
        return (
          
          <div key={index} className="grid grid-cols-1  w-[30%]   p-6">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={x.img}
                alt="Course Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-bold text-gray-800">
                  {x.course_name}
                </h2>
                <p className="text-sm text-gray-600">
                  Duration: <span className="font-medium">{x.duration}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Price: <span className="font-medium">{x.price}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Mode: <span className="font-medium">{x.mode}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Roadmap ID:{" "}
                  <span className="font-medium">{x.road_map_id}</span>
                </p>
                <Link to={`/admin-dashboard/update-course/${x.id}`}>
                  
                  <button className="mt-2 me-2 px-3 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                  Update Course
                  </button>
                </Link>
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                  onClick={() =>{document.getElementById("my_modal_3").showModal(),handleid(x.id)}
                    
                  }
                >
                  Delete Course
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-[black]">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">
                      ARE YOU SURE TO DELETE THE COURSE?🤔
                    </h3>

                    <div className="flex">
                      <form method="dialog">
                        <p className="py-4 me-4">
                          <button
                            className="btn btn-sm  btn-ghost bg-[blue] text-[white]"
                            onClick={() => {
                              handlecoursedelete(id)
                            }}
                          >
                            CONFIRM
                          </button>
                        </p>
                      </form>
                      <form method="dialog">
                        <p className="py-4">
                          <button className="btn btn-sm  btn-ghost bg-[blue] text-[white]">
                            CANCEL
                          </button>
                        </p>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
            <span className={`${show}`}>
              <AlertComponent data={error} />
            </span>
          </div>
        );
      })}
    </div>
  );

}

 
}

export default AllCourses;
