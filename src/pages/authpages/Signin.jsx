import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Signinvalidation from "../../validate/Signinvalidate";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const [signindata, setsignindata] = useState({
    email: "",
    password: "",
  });

  async function handlesignin() {
    const result = Signinvalidation(signindata.email, signindata.password);
    if (result) {
      seterror(result);
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/signin`,
          signindata,
          { withCredentials: true }
        );
        console.log(response);
        if (response) {
          seterror(response?.data?.message);
          setTimeout(() => {
            navigate("/student-dashboard");
            window.location.reload();
          }, 3000);
        } else {
          seterror("Signin failed");
        }
      } catch {
        seterror("Frontend error!");
      }
    }
  }

  // Placeholder Google sign-in handler
  function handleGoogleSignin() {
    alert("Google sign-in clicked - integrate your OAuth flow here.");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600 px-4">
      <div className="w-full max-w-md bg-black/70 backdrop-blur-md rounded-xl shadow-lg p-8 text-white">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Sign In to LMS</h2>
        <fieldset className="mb-6">
          <legend className="text-sm mb-2 font-semibold">Email Address</legend>
          <input
            type="text"
            className="input w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-300 transition"
            placeholder="Enter your email"
            value={signindata.email}
            onChange={(e) => setsignindata({ ...signindata, email: e.target.value })}
          />
        </fieldset>
        <fieldset className="mb-4">
          <legend className="text-sm mb-2 font-semibold">Password</legend>
          <input
            type="password"
            className="input w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-300 transition"
            placeholder="Enter your password"
            value={signindata.password}
            onChange={(e) => setsignindata({ ...signindata, password: e.target.value })}
          />
        </fieldset>
        {/* Error message */}
        {error && (
          <p className="mb-4 text-center text-red-500 font-semibold select-none">{error}</p>
        )}
        <button
          onClick={handlesignin}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl shadow-lg transition transform hover:scale-105 mb-6"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center text-gray-300 mb-6">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-3 text-sm select-none">Or continue with</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <button
          onClick={handleGoogleSignin}
          className="w-full flex justify-center items-center gap-3 border border-gray-400 rounded-xl py-3 hover:bg-white hover:text-indigo-700 transition font-semibold shadow-md"
          aria-label="Continue with Google"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            fill="currentColor"
          >
            <path d="M488 261.8c0-17.4-1.6-34.4-4.6-50.8H249v95.9h135.6c-5.8 31-23.2 57.3-49.7 75v62.1h80.3c47-43.2 74-107.2 74-182.2z" fill="#4285F4" />
            <path d="M249 512c67.7 0 124.8-22.4 166.4-60.9l-80.3-62.1c-21.1 14.2-48.3 22.6-86.2 22.6-66.2 0-122-44.7-142-104.6H25v65.7C69.7 460.9 153.2 512 249 512z" fill="#34A853" />
            <path d="M107 309.6c-8.7-25.8-8.7-53.7 0-79.5v-65.7H25c-35.4 68.7-35.4 150.7 0 219.4l82-74.2z" fill="#FBBC05" />
            <path d="M249 198.1c35.1 0 66.8 12 91.8 35.6l68.9-67c-46-43-105.3-69.5-160.7-69.5-73.8 0-136.3 50.3-158.8 118.2l82 74.2c13.2-39.7 50.9-91.5 177-91.5z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Signin;
