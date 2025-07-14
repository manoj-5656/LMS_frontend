import React from "react";
import AppLayout from "./components/AppLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Recordings from "./pages/studentPages/Recordings";
import Cookies from "js-cookie";
import Signin from "./pages/authpages/Signin";
import Signup from "./pages/authpages/Signup";
import Admin_DashBoard from "./pages/adminPages/AdminDashBoard";
import Student_dashBoard from "./pages/adminPages/Student_dashboard";
import AllUsers from "./pages/adminPages/AllUsers";
import AllCourses from "./pages/adminPages/AllCourses";
import UpdateUser from "./pages/adminPages/UpdateUser";
import CreateCourse from "./pages/adminPages/CreateCourse";
import UpdateCourse from "./pages/adminPages/UpdateCourse";
import Profile from "./pages/studentPages/Profile";
import axios from "axios";
import Course from "./pages/studentPages/Course";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Invoice from "./pages/studentPages/Invoice";
import Home from "./pages/studentPages/Home";
import ContactUs from "./pages/studentPages/ContactUs";


function AdminRoute({ children }) {
  const [role, setrole] = useState(null);
  const token = Cookies.get("token");
    const id = Cookies.get("id");
  

  async function get_user() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/get-user/${id}`,
      { withCredentials: true }
    );
    setrole(response?.data?.data?.role);
  }
  useEffect(() => {
    get_user();
  }, []);
  if (token) {
    if (role == 1) {
      return children;
    } else {
      return <Navigate to="/admin-dashboard" />;
    }
  } else {
    <Navigate to="/signin" />;
  }
}
function StudentRoute({ children }) {
  const [role, setrole] = useState(null);
  const token = Cookies.get("token");
  const id = Cookies.get("id");
  
  async function get_user() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/get-user/${id}`,
      { withCredentials: true }
    );
    setrole(response?.data?.data?.role);
  }
  useEffect(() => {
    get_user();
  }, []);
  if (token) {
    if (role == 0) {
      return children;
    }
  } else {
    <Navigate to="/signin" />;
  }
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="courses" element={<Course/>} />
          <Route path="home" element={<Home/>} />
          <Route path="invoice" element={<Invoice/>} />
          <Route path="contact-us" element={<ContactUs/>} />
          <Route
            path="admin-dashboard"
            element={
              <AdminRoute>
                <Admin_DashBoard />
              </AdminRoute>
            }
          >
            <Route path="all-users" element={<AllUsers />} />
            <Route path="updateuser/:id" element={<UpdateUser />} />
            <Route path="create-course" element={<CreateCourse />} />
            <Route path="update-course/:id" element={<UpdateCourse />} />
            <Route path="all-courses" element={<AllCourses />} />

          </Route>
          <Route
            path="student-dashboard"
            element={
              <StudentRoute>
                <Student_dashBoard />
              </StudentRoute>
            }
          >
            <Route path="recordings" element={<Recordings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
