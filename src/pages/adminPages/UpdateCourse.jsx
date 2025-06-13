import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import updatecoursevalidate from "../../validate/updatecoursevalidate";

function UpdateCourse() {
  const navigate = useNavigate();

  const [updatecoursedata, setupdatecoursedata] = useState({
    course_name: "",
    img: "",
    duration: "",
    price: "",
    mode: "",
    road_map_id: "",
  });
  const { id } = useParams();
  const [error, seterror] = useState("");
  const [color, setcolor] = useState("red");
  async function getcourse() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ORIGIN}/api/course/get-course/${id}`,
      { withCredentials: true }
    );
    setupdatecoursedata({
      ...updatecoursedata,
      course_name: response?.data?.data?.course_name,
      img: response?.data?.data?.img,
      duration: response?.data?.data?.duration,
      price: response?.data?.data?.price,
      mode: response?.data?.data?.mode,
      road_map_id: response?.data?.data?.road_map_id,
    });
  }

  useEffect(() => {
    getcourse();
  }, []);

  async function handleupdatecourse() {
    const result = updatecoursevalidate(
      updatecoursedata.course_name,
      updatecoursedata.img,
      updatecoursedata.duration,
      updatecoursedata.price,
      updatecoursedata.mode,
      updatecoursedata.road_map_id
    );
    if (result) {
      seterror(result);
      setcolor("red");
    } else {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_ORIGIN}/api/course/update-course/${id}`,
          updatecoursedata,
          { withCredentials: true }
        );
        if (response) {
          seterror(response?.data?.message);
          setcolor("green");
          setTimeout(() => {
            navigate("/admin-dashboard/all-courses");
          }, 2000);
        } else {
          seterror("error while fetching api update course");
        }
      } catch {
        seterror("internal server error");
      }
    }
  }

  return (
    <div className="flex mt-2 ">
      <div className="bg-gray-800 p-5 mx-auto rounded-[10px] text-white w-[400px]">
        <h1 className="text-2xl">Update the Course😊</h1>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            What is the Course Name?
          </legend>
          <input
            type="text"
            className="input text-black w-[100%]"
            placeholder="Type here"
            value={updatecoursedata.course_name}
            onChange={(x) =>
              setupdatecoursedata({
                ...updatecoursedata,
                course_name: x.target.value,
              })
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
            value={updatecoursedata.img}
            onChange={(x) =>
              setupdatecoursedata({ ...updatecoursedata, img: x.target.value })
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
            value={updatecoursedata.duration}
            onChange={(x) =>
              setupdatecoursedata({
                ...updatecoursedata,
                duration: x.target.value,
              })
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
            value={updatecoursedata.price}
            onChange={(x) =>
              setupdatecoursedata({
                ...updatecoursedata,
                price: x.target.value,
              })
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
            value={updatecoursedata.road_map_id}
            onChange={(x) =>
              setupdatecoursedata({
                ...updatecoursedata,
                road_map_id: x.target.value,
              })
            }
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white ">
            Mode of the course?
          </legend>
          <select
            value={updatecoursedata.mode}
            onChange={(x) =>
              setupdatecoursedata({ ...updatecoursedata, mode: x.target.value })
            }
            className="input text-black w-[100%]"
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="both">Both</option>
          </select>
        </fieldset>

        <p className={`text-center text-[${color}]`}>{error}</p>
        <button className="btn mt-3 w-[100%] " onClick={handleupdatecourse}>
          Update Course
        </button>
      </div>
    </div>
  );
}

export default UpdateCourse;
