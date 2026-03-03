import React from "react";
import { Link, Links } from "react-router";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="  md:mb-6 text-[40px] md:text-[110px] text-[#000000] tracking-[3%] leading-[115px] font-inter font-medium ">
                404 Not Found
            </h1>
            <p className="para-text mb-10 md:mb-20 "> Your visited page not found. You may go home page.</p>
            <Link to="/">
            <button className="button">Back to home page</button>
            </Link>
      </div>
      </div>
    </>
  );
};

export default NotFound;
