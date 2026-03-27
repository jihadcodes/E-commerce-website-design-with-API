import login_img from "../../assets/images/login.png";

const Login = () => {
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
                Log in to Exclusive
              </h3>
              <p className="para-text mb-8 xl:mb-12">Enter your details below</p>

              <input
                type="text"
                className="form-input"
                placeholder="Email or Phone Number"
              />
              <input
                type="password"
                className="form-input"
                placeholder="Password"
              />

              <div className="flex items-center gap-6 md:gap-[87px] flex-wrap">
                <button className="button">Log In</button>
                
                 <a href=""
                  className="text-[16px] text-[#DB4444] leading-6 font-poppins font-normal"
                >
                  Forget Password?
                </a>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;