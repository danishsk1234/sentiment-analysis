import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = () => {
    const {isLoggedIn,setIsLoggedIn}=useContext(AppContext);
  return (
    <div >
    <nav className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto' >


      <nav>
          <ul className='flex gap-x-6 text-white '>
          {isLoggedIn &&
            <li>
                  <Link to="/">Home</Link>
              </li>
          }
          
          </ul>
      </nav>


      {/* Buttons */}

      <div className='flex items-center gap-x-4 '>

          {/* We have to show the Admin register button only in log in page */}
          {!isLoggedIn &&
          <Link to="/Admin">
              <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Admin Register</button>
          </Link>
      }

      

      {/* We have to show the log in button only when the user is not logged in */}
      {/* {!isLoggedIn &&
          <Link to="/Login">
              <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'> Log In</button>
          </Link>
      } */}

      {/* Same to Sign up button,we have to show the sign up button only when the user is not logged in */}
      {!isLoggedIn &&
          <Link to="/SignUp">
              <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Sign Up</button>
          </Link>
      }

      {/* If the user is logged in we have to not show log in button but we have to show the log out button */}
      {isLoggedIn&&
          <Link to="/">
              <button
              className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
               onClick={()=>{
                  setIsLoggedIn(false);
                  toast.success("Logged out")
              }}>Log out</button>
          </Link>
      }

      {/* If the user is logged in we have to not show sign up button but we have to show the inputpage button */}
      {isLoggedIn&&
          <Link to="/inputpage">
              <button 
              className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
              >InputPage</button>
          </Link>
      }
      </div>
    </nav>
  </div>
  )
}

export default Navbar
