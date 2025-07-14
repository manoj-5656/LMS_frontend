import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Card(props) {
    const navigate=useNavigate()
const id=Cookies.get("id")
const token=Cookies.get("token")
function handlepayment(){
    if(!id && !token){
    navigate('/signin')
}
else{
    const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY, // from Razorpay Dashboard
          amount: props.data.price*100,
          currency: "INR",
          name: "LMS",
          description: "Course Payment",
          
          handler: async function (response){
            // Send payment info to your server for verification
            // alert("Payment successful",response.razorpay_payment_id);
            const payment_details= {
                course_name:props.data.course_name,
                price:props.data.price,
                payment_id:response.razorpay_payment_id,
                img:props.data.img

            }
                const res=await axios.put(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/auth/payment/${id}`,payment_details,{withCredentials:true})
                console.log(res)
                navigate('/invoice')

            
          },
}
  const rzp = new window.Razorpay(options);
        rzp.open();

}
}

  return (
    <div className="card w-[20%]  m-4">
  <figure>
    <img
      src={props.data.img}
      alt="Shoes" />
  </figure>
  <div className="card-body  bg-[black]">
    <h2 className="card-title">{props.data.course_name}</h2>
    <h2 className="card-title">{props.data.price}/- Rupees</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handlepayment}>Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card