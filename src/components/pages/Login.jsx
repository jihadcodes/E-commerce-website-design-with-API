import login_img from "../../assets/images/login.png";

const Login = () => {
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
              Log in to Exclusive
            </h3>
            <p className="para-text mb-12">Enter your details below</p>
            <input type="text" className="form-input "  placeholder="Email or Phone Number" />
            <input type="password" className="form-input"  placeholder="Password" />
            <div className="flex items-center gap-[87px]">
                <button className="button">Log In</button>
                <a  href="" className="text-[16px] text-[#DB4444] leading-6 font-poppins font-normal ">Forget Password?</a>
            </div>

            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
