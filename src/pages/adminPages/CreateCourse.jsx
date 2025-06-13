import React, { useState } from "react";
import axios from "axios";

import CreateCoursevalidate from "../../validate/CreateCourseValidate";

function CreateCourse() {
  const [error, seterror] = useState("");
  const [color, setcolor] = useState("red");
  const [coursedata, setcoursedata] = useState({
    course_name: "",
    img: "",
    duration: "",
    price: "",
    mode: "",
    road_map_id: "",
  });
  async function handlecreatecourse() {
    const result = CreateCoursevalidate(
      coursedata.course_name,
      coursedata.img,
      coursedata.duration,
      coursedata.price,
      coursedata.mode,
      coursedata.road_map_id
    );
    if (result) {
      seterror(result);
      setcolor("red");
    } else {
        try{
            const response=await axios.post(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/course/create-course`,coursedata,{withCredentials:true})
      if (response) {
        
        seterror(response?.data?.message);
        setcolor("green");
      }
      else{
        seterror("error while fetching the api")
        setcolor('red')
      }
        }
        catch{
            seterror("internal server error")
            setcolor('red')
        }
      
    }
  }

  return (
    <div className="flex mt-2 ">
      <div className="bg-gray-800 p-5 mx-auto rounded-[10px] text-white w-[400px]">
        <h1 className="text-2xl">Create Course😊</h1>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            What is the Course Name?
          </legend>
          <input
            type="text"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={coursedata.course_name}
            onChange={(x) =>
              setcoursedata({ ...coursedata, course_name: x.target.value })
            }
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            what is the Image url?
          </legend>
          <input
            type="text"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={coursedata.img}
            onChange={(x) =>
              setcoursedata({ ...coursedata, img: x.target.value })
            }
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            What is the Duration of the course?(In months)
          </legend>
          <input
            type="number"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={coursedata.duration}
            onChange={(x) =>
              setcoursedata({ ...coursedata, duration: x.target.value })
            }
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            Price of the course?
          </legend>
          <input
            type="text"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={coursedata.price}
            onChange={(x) =>
              setcoursedata({ ...coursedata, price: x.target.value })
            }
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            Road Map Id of the course?
          </legend>
          <input
            type="text"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={coursedata.road_map_id}
            onChange={(x) =>
              setcoursedata({ ...coursedata, road_map_id: x.target.value })
            }
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            Mode of the course?
          </legend>
          <select
            value={coursedata.mode}
            onChange={(x) =>
              setcoursedata({ ...coursedata, mode: x.target.value })
            }
            className="input text-black w-[100%]"
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="both">Both</option>
          </select>
        </fieldset>

        <p className={`text-center text-[${color}]`}>{error}</p>
        <button className="btn mt-3 w-[100%] " onClick={handlecreatecourse}>
          Create Course
        </button>
      </div>
    </div>
  );
}

export default CreateCourse;
