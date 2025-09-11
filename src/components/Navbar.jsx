import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function Navbar() {
  const token = Cookies.get("token");
  const id = Cookies.get("id");
  const navigate = useNavigate();

  const [role, setrole] = useState(null);
  async function handlelogout() {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/signout`,
      {},
      { withCredentials: true }
    );
    if (response) {
      navigate("/");
    }
  }
  async function get_user() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/get-user/${id}`,
      { withCredentials: true }
    );
    // console.log(response)
    setrole(response?.data?.data?.role);
  }
  useEffect(() => {
    get_user();
  }, []);
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white shadow-sm fixed top-0 z-[10] mb-[40px]">
        <div className="flex-1 flex items-center">
          <Link to="/" className="ml-[10px] text-4xl font-extrabold tracking-wide text-yellow-300">
            LMS
          </Link>
          <div className="ms-[300px] text-[20px]">
            <Link
              to="/home"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </Link>
          </div>
          <div className="ms-[30px] text-[20px] cursor-pointer">
            <Link
              to="/courses"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Courses
            </Link>
          </div>
          <div className="ms-[30px] text-[20px] cursor-pointer">
            <Link
              to="/contact-us"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex">
          {token ? (
            <div className="">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar ring-2 ring-yellow-300 hover:ring-yellow-400 transition"
                >
                   <div className="bg-neutral text-neutral-content w-8 rounded-full">
    <span className="text-xs">UI</span>
  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-black text-white rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
                >
                  <li>
                    <Link
                      to={role == 1 ? "/admin-dashboard" : "/student-dashboard"}
                      className="justify-between hover:text-yellow-300 transition-colors"
                    >
                      DashBoard
                    </Link>
                  </li>
                  <li>
                    <a className="hover:text-yellow-300 transition-colors">Settings</a>
                  </li>
                  <li>
                    <a
                      onClick={handlelogout}
                      className="hover:text-yellow-300 transition-colors cursor-pointer"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="button">
              <Link to="/signup">
                <button className="btn bg-yellow-400 hover:bg-yellow-300 text-black mr-3 transition">
                  Signup
                </button>
              </Link>
              <Link to="/signin">
                <button className="btn bg-indigo-700 hover:bg-indigo-600 text-white mr-3 transition">
                  Signin
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
