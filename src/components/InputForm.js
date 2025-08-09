import React, { useState } from "react";
import InputImage from "../assets/Work-ezgif.com-gif-maker.gif";
import toast from "react-hot-toast";


const InputForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email:"",
    reviews:"",
    message:""
  });

  function changeHandler(event) {
 setFormData((prevFormData)=>({
    ...prevFormData,
    [event.target.name]:event.target.value,
 }))
  }


  function submitHandler(event){
event.preventDefault();
toast.success("Thanks for your responce");
console.log(formData)

  }

  return (
    <div className="mb-10">
      <div className="w-[70%]  rounded-lg flex mx-auto flex-col shadow-xl">
        <h2 className="w-[50%] text-white font-inter text-3xl ml-2 mt-4">
          Reviews Section
          <br></br>
          <span className="text-blue-100 text-sm">Write your review here...</span> 
        </h2>
        <img
          src={InputImage}
          alt="ReviewImage"
          width={300}
          className="mx-auto mt-5 rounded-lg"
        ></img>
        <form className="" onSubmit={submitHandler}>
          {/* First name and last name of the user. */}
          <div className="flex gap-x-5">
         
        
         <label className=" w-[50%]" htmlFor="firstName">
              <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem]">
                First Name <sup className="text-pink-200">*</sup>
              </p>
              
              <input
                className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-full p-[12px]  border-b border-white"
                type="text"
                name="firstname"
                id="firstName"
                placeholder="Enter your First Name"
                value={formData.firstname}
                onChange={changeHandler}
              />
        </label>
           

            {/* LastName */}
            <label className="w-[50%]">
              <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem]">
                Last Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-full p-[12px]  border-b border-white"
                type="text"
                name="lastname"
                placeholder="Enter your Last Name"
                value={formData.lastname}
                onChange={changeHandler}
              />
            </label>
          </div>

          {/* Email */}
          <label className="w-[full]">
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem] mt-3">
              Email Address<sup className=" text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-[50%] p-[12px]  border-b border-white"
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter email"
              value={formData.email}
            ></input>
          </label>

{/* Reviews type */}
          <label htmlFor="Review type">
          <p
           className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem] mt-3"
          >Reviews related to <sup className=" text-pink-200">*</sup></p>
          <select
          name="reviews"
          onChange={changeHandler}
          value={formData.reviews}
          className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-[70%] p-[12px]  border-b border-white"
          >
            <option>Related to Trains</option>
            <option>Related to Staff</option>
            <option>Related to Cleanliness</option>
          </select>
          </label>


          <label className="w-[full]">
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem] mt-3">
              Review<sup className=" text-pink-200">*</sup>
            </p>
            <textarea
              className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-[100%] h-28 p-[12px]  border-b border-white"
              required
              type="message"
              name="message"
              onChange={changeHandler}
              placeholder="Enter your Review..."
              value={formData.message}
            ></textarea>
          </label>

           <button className="bg-yellow-50 rounded-[8px] font-medium text-center text-richblack-900 px-[12px] py-[8px] mt-5">Submit</button>
        </form>
      </div>
    </div>
  );
};
 export default InputForm;
