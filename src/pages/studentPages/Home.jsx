import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Elevate Your Learning <br />
            with <span className="text-yellow-300">Smart LMS</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore curated courses, track progress, and grow your knowledge anytime, anywhere.
          </p>
          <div className="flex gap-6">
            <Link
              to="/courses"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/courses"
              className="border border-white py-3 px-6 rounded-full hover:bg-white hover:text-indigo-600 transition duration-300"
            >
              Browse Courses
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCuk6kKUMTBg0Mj7Jc0TxHzc6alicAZuP3envh-cmKlzPAyNc34KYk3rU&s"
            alt="Learning Illustration"
            className="w-full max-w-md mx-auto drop-shadow-xl"
          />
        </motion.div>
      </div>

      {/* Bottom Waves */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
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
