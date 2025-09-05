import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import axios from 'axios';

function Course() {
  const [course, setcourse] = useState([]);

  async function all_course() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ORIGIN}/api/course/get-all-courses`,
      { withCredentials: true }
    );
    setcourse(response?.data?.data);
  }

  useEffect(() => {
    all_course();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-4xl font-extrabold mb-12 text-center drop-shadow-lg">
          Available Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {course.map((x, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ animation: `fadeInUp 0.5s ease forwards`, animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <Card data={x} />
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in animation keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
            from {
              opacity: 0;
              transform: translateY(20px);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Course;
