import  React,{ useState,useContext } from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';
import SignUp from '../pages/SignUp';
import SignUpImage from "../assets/SignUpImage.png"
import toast from 'react-hot-toast';

const SignUpForm = () => {


  const navigate = useNavigate();

  const {isLoggedIn,setIsLoggedIn}=useContext(AppContext);

  // It stores the input data in formData and also returns it in the form of Object.
  const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // It is used to show or not to show the password
  const [showPassword, setshowPassword] = useState(false);


   // This is function is used when if any changes in the input field occurs and it fetches the data by using (event.target.value)
  function changeHandler(event) {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    }


    function submitHandler(event){
      event.preventDefault();
      
      if(formData.password != formData.confirmPassword){
        toast.error("Passwords do not match");
        return;
      }
      setIsLoggedIn(true);
      toast.success("Account created successfully");
      const accountData={
        ...formData
      }
      console.log(accountData);
      navigate("/inputpage")
        }




  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto  gap-y-0">
    <div className="w-11/12 max-w-[450px]">
      <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.35rem]">User-SignUp</h1>

      <p className="text-[1.125rem] leading-[1.625rem] mt-4">
        <span className="text-richblack-100">Register for writing the reviews</span>
        <br></br>
        <span className="text-blue-100 italic">We provide analysis of your reviews</span>
      </p>

      <div>
  

      <form onSubmit={submitHandler}>
        {/* First name and last name div */}
        <div className="flex gap-x-5">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem]">
              First Name<sup className=" text-pink-200">*</sup>
            </p>
            <input
             className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-full p-[12px]  border-b border-white"
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.firstname}
            ></input>
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem]">
              Last Name<sup className=" text-pink-200">*</sup>
            </p>
            <input
            className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-full p-[12px]  border-b border-white"
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter last name"
              value={formData.lastname}
            ></input>
          </label>
        </div>

        {/* Email */}
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem] mt-3">
            Email Address<sup className=" text-pink-200">*</sup>
          </p>
          <input
          className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-full p-[12px]  border-b border-white"
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email"
            value={formData.email}
          ></input>
        </label>

        {/* createPassword amd confirm password */}
        <div className="flex gap-5">
          <label className=" relative w-full" >
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem] mt-3">
              Create Password<sup className=" text-pink-200">*</sup>
            </p>
            <input
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b border-white"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            ></input>

            <span className="absolute right-3 top-[56px] cursor-pointer" onClick={() => setshowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
            </span>
          </label>

          <label className=" relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem] mt-3">
              Confirm Password<sup className=" text-pink-200">*</sup>
            </p>
            <input
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b border-white"
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            ></input>

            <span className="absolute right-3 top-[56px] cursor-pointer" onClick={() => setshowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
            </span>
          </label>
        </div>

        <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7">Create Account</button>
      </form>
    </div>

      <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
      </div>

      <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
      <FcGoogle />
          <p>Sign Up with Google</p>
      </button>


    </div>

     <div className="relative w-11/12 max-w-[600px] mt-[100px]">
      <img src={SignUpImage} alt="students" width={558} height={490} loading="lazy" className=" absolute -top-4 right-4"></img>
    </div> 
  </div>
  )
}

export default SignUpForm
