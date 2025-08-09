import React from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link} from "react-router-dom";
import { useState } from "react";
import LoginImage from "../assets/login-removebg-preview.png";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {


  // This are the props declerade in the AppContext which can be used by any of the components
  const {isLoggedIn,setIsLoggedIn}=useContext(AppContext);
  const navigate = useNavigate();



  // It returns/stores the input data of the form in the form of object.
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // This is function is used when if any changes in the input field occurs and it fetches the data by using (event.target.value)
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }



  // It is used to show or not to show the password
  const [showPassword, setshowPassword] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/admindatapage");
  }



  return (
    <div>
      <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto  gap-y-0 h-screen mt-[150px]">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.35rem]">Admin-Login</h1>

        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100">We provide analysis of the reviews for your company</span>
          <br></br>
          <span className="text-blue-100 italic">Login in write your review</span>
        </p>

        <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-2 mt-6"
      >
        <label className="w-full">
          <p className="tetx-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem]">
            Email Address<sup className=" text-pink-200">*</sup>
          </p>
          <input
            className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-full p-[12px]  border-b border-white"
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email address"
          ></input>
        </label>

        <label className="w-full relative">
          <p className="tetx-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem]">
            Password<sup className=" text-pink-200">*</sup>
          </p>
          <input
            className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-full p-[12px]  border-b border-white"
            required
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
          ></input>

          <span className="absolute right-3 top-[46px] cursor-pointer" onClick={() => setshowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
          </span>

          <Link to="#">
            <p className=" text-xs mt-3 text-blue-100 ml-auto max-w-max">Forgot Password</p>
          </Link>
        </label>

        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-5">Sign In</button>
      </form>

        <div className="flex w-full items-center my-4 gap-x-2">
            <div className="w-full h-[1px] bg-richblack-700"></div>
            <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
            <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>

<Link to="/AdminSignUpPage">
<button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
            <p>Sign Up</p>
        </button>
</Link>


      </div>

      <div className="relative w-11/12 max-w-[600px]">
        <img src={LoginImage} alt="students" width={558} height={550} loading="lazy" className=" absolute -top-4 right-4"></img>
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;
