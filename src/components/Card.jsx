import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Card(props) {
  const navigate = useNavigate();
  const id = Cookies.get("id");
  const token = Cookies.get("token");

  function handlepayment() {
    if (!id && !token) {
      navigate('/signin');
    } else {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY, // Razorpay Dashboard key
        amount: props.data.price * 100,
        currency: "INR",
        name: "LMS",
        description: "Course Payment",
        handler: async function (response) {
          const payment_details = {
            course_name: props.data.course_name,
            price: props.data.price,
            payment_id: response.razorpay_payment_id,
            img: props.data.img
          };
          const res = await axios.put(
            `${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/payment/${id}`,
            payment_details,
            { withCredentials: true }
          );
          console.log(res);
          navigate('/invoice');
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  }

  return (
    <div className="bg-black bg-opacity-80 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
      <figure className="h-48 overflow-hidden">
        <img
          src={props.data.img}
          alt={props.data.course_name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-extrabold text-white mb-2">{props.data.course_name}</h2>
        <h3 className="text-yellow-300 font-semibold text-lg mb-4">{props.data.price} /- Rupees</h3>
        <p className="text-gray-300 flex-grow mb-6">
          {/* Placeholder description - you may replace with dynamic content */}
          A card component has a figure, a body part, and inside body there are title and actions parts
        </p>
        <div className="mt-auto">
          <button
            onClick={handlepayment}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl shadow-lg transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
