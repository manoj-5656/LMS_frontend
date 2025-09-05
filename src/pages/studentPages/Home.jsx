import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600 text-white font-sans relative overflow-hidden">
      {/* Top Decorative Circles */}
      <div className="absolute top-0 left-0 w-full flex justify-between pointer-events-none z-0">
        <div className="w-32 h-32 bg-yellow-300 opacity-30 rounded-full blur-2xl animate-pulse"></div>
        <div className="w-28 h-28 bg-white opacity-20 rounded-full blur-lg animate-spin-slow"></div>
        <div className="w-24 h-24 bg-yellow-300 opacity-25 rounded-full blur-2xl animate-pulse"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow">
            Elevate Your Learning <br />
            with <span className="text-yellow-300 animate-pulse">Smart LMS</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 font-light max-w-lg">
            Explore curated courses, track progress, and grow your knowledge anytime, anywhere.
          </p>
          {/* Feature Cards */}
          <div className="flex gap-5 mb-8">
            <div className="bg-indigo-700/70 backdrop-blur-lg border border-white border-opacity-10 rounded-xl p-4 shadow-xl flex flex-col items-start hover:scale-105 transition-transform">
              <span className="text-yellow-300 text-xl font-bold mb-2">✨ Personalized</span>
              <span className="text-white">Courses and progress tracking just for you.</span>
            </div>
            <div className="bg-blue-700/70 backdrop-blur-lg border border-white border-opacity-10 rounded-xl p-4 shadow-xl flex flex-col items-start hover:scale-105 transition-transform">
              <span className="text-yellow-300 text-xl font-bold mb-2">⚡ Fast Access</span>
              <span className="text-white">Instant dashboard and seamless experience.</span>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-6">
            <Link
              to="/courses"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-8 rounded-full transition shadow-lg transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/courses"
              className="border border-white py-3 px-8 rounded-full hover:bg-white hover:text-indigo-600 transition shadow-lg"
            >
              Browse Courses
            </Link>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCuk6kKUMTBg0Mj7Jc0TxHzc6alicAZuP3envh-cmKlzPAyNc34KYk3rU&s"
            alt="Learning Illustration"
            className="w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-300"
          />
          {/* Animated Card below image */}
          <div className="mt-8 px-6 py-3 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg text-white text-center shadow-xl animate-fade-in">
            <span className="text-yellow-300 font-semibold">New!</span> Live webinars every month.
          </div>
        </div>
      </div>
      {/* Bottom Waves */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
