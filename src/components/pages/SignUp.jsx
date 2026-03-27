import React from 'react'
import login_img from "../../assets/images/login.png";
import google from '../../assets/images/google.png'
import { Link } from 'react-router';

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center xl:justify-between mt-[40px] xl:mt-[107px] mb-[60px] xl:mb-[246px] gap-10 xl:gap-0 px-4 xl:px-0">
          
          {/* Image */}
          <div className="hidden md:flex justify-center md:w-[45%] xl:w-auto">
            <img src={login_img} alt="" className="w-[220px] md:w-[280px] lg:w-[340px] xl:w-auto object-contain" />
          </div>

          {/* Form */}
          <div className="w-full max-w-[371px] xl:w-[371px]">
            <form action="">

              <h3 className="text-[#000000] tracking-[4%] leading-7.5 text-2xl md:text-4xl font-inter font-medium mb-4 xl:mb-6">
                Create an account
              </h3>
              <p className="para-text mb-8 xl:mb-12">Enter your details below</p>

              <input type="text" className="form-input" placeholder="Name" />
              <input type="text" className="form-input" placeholder="Email or Phone Number" />
              <input type="password" className="form-input" placeholder="Password" />

              <div className="flex items-center flex-col mb-8">
                <button className="button w-full mb-4">Create Account</button>

                <div className="py-4 w-full px-4 md:px-[86px] flex items-center justify-center gap-4 border mb-8 border-[#00000066] text-center rounded-sm">
                  <span>
                    <img src={google} alt="" />
                  </span>
                  <a href="">Sign up with Google</a>
                </div>

                <a href="" className="text-[16px] text-[#000000] text-center leading-6 font-poppins font-normal">
                  Already have account?
                  <Link className="ml-4 pb-1 border-b border-[#000000] font-medium text-[#DB4444]" to="/login">
                    Log in
                  </Link>
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