import React from 'react'
import login_img from "../../assets/images/login.png";
import google from '../../assets/images/google.png'
import { Link } from 'react-router';
const SignUp = () => {
  return (
    <>
          <div className="container">
            <div className="flex items-center justify-between  mt-[107px] mb-[246px]">
              <div className="">
                <img src={login_img} alt="" />
              </div>
              <div className="w-[371px]">
                <form action="">
    
                <h3 className="text-[#000000] tracking-[4%] leading-7.5 text-4xl font-inter font-medium mb-6 ">
                  Create an account
                </h3>
                <p className="para-text mb-12">Enter your details below</p>
                <input type="text" className="form-input "  placeholder="Name" />
                <input type="text" className="form-input"  placeholder="Email or Phone Number" />
                <input type="password" className="form-input"  placeholder="Password" />
                <div className="flex items-center flex-col  mb-8">
                    <button className="button px-[122px]! mb-4">Create Account</button>
                    <div className='py-4 w-full px-[86px] flex items-center gap-4 border mb-8 border-[#00000066] text-center rounded-sm'>
                        <span >
                            <img src={google} alt="" />
                        </span>
                        <a href=""> Sign up with Google</a>
                      </div>
                      <a  href="" className="text-[16px] text-[#DB4444] text-center leading-6 font-poppins font-normal "> Already have account?
                        <Link className='ml-4 pb-1 border-b border-[#000000] font-medium' to="/login">Log in</Link>
                         </a>
                    
                </div>
                
                </form>
              </div>
            </div>
          </div>
        </>
  )
}

export default SignUp
