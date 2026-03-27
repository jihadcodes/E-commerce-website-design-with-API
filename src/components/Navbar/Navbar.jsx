import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import logo from "../../assets/images/logo.png.png";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-[rgba(0,0,0,0.25)]">
        {/* Top Bar */}
        <div className="pt-3 pb-3 bg-[#000000]">
          <div className="container">
            <div className="flex items-center">
              <div className="w-full md:w-[80%] flex items-center justify-center md:justify-end">
                <p className="font-poppins font-regular leading-[21px] text-[12px] md:text-[14px] text-[#FAFAFA] text-center">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                </p>
                <a
                  href=""
                  className="font-poppins font-semibold leading-6 text-[12px] md:text-[14px] text-[#FAFAFA] underline pl-2 whitespace-nowrap"
                >
                  ShopNow
                </a>
              </div>
              <div className="hidden md:flex w-[20%] justify-end">
                <div className="relative w-24 items-center">
                  <select className="appearance-none w-full px-3 py-2 outline-0 font-poppins font-regular leading-[21px] text-[14px] text-[#FAFAFA] bg-transparent">
                    <option className="text-black">English</option>
                    <option className="text-black">Bangla</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#FAFAFA]">
                    <IoIosArrowDown className="mt-[0.7px]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container">
          <div className="relative flex items-center justify-between pt-5 pb-4 md:pt-10">
            {/* Mobile: Hamburger */}
            <div className="flex md:hidden w-[40px]">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[26px] text-[#000000]"
              >
                {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
            {/* Logo */}
            {/* Mobile: absolute center | md+: static normal flow */}
            
            <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0 md:w-[120px] md:mx-6 lg:mx-10 lg:w-auto">
              <Link to="/">
                <img
                  src={logo}
                  className="cursor-pointer w-[100px] md:w-full"
                  alt=""
                />
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden xl:flex flex-1 justify-center">
              <ul className="flex main_menu gap-12">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
            {/* Desktop: Search + Icons */}
            <div className="hidden md:flex items-center gap-3 ml-auto xl:ml-0">
              <div className="w-[180px] lg:w-[243px] relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-[#F5F5F5] py-2.5 ps-5 pe-8 w-full font-poppins font-normal text-[12px] text-[#000000] leading-[18px] rounded-sm outline-0"
                />
                <FiSearch className="absolute top-[50%] translate-y-[-50%] right-3" />
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 flex justify-center items-center group rounded-full hover:bg-red-500">
                  <Link to="Wishlist">
                    <IoHeartOutline className="text-[18px] cursor-pointer text-[#000000] group-hover:text-white" />
                  </Link>
                </div>
                <div className="w-8 h-8 flex justify-center items-center group rounded-full hover:bg-red-500">
                  <Link to="Cart">
                    <IoCartOutline className="cursor-pointer text-[18px] text-[#000000] group-hover:text-white" />
                  </Link>
                </div>
                <div className="w-8 h-8 flex justify-center items-center group rounded-full hover:bg-red-500">
                  <FiUser className="text-[18px] text-[#000000] group-hover:text-white" />
                </div>
              </div>
            </div>
            {/* Mobile: Cart icon (right) */}
            <div className="flex md:hidden w-[40px] justify-end">
              <div className="w-8 h-8 flex justify-center items-center group rounded-full hover:bg-red-500">
                <Link to="Cart">
                  <IoCartOutline className="cursor-pointer text-[20px] text-[#000000] group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden pb-5 flex flex-col items-center gap-4">
              <div className="relative w-full max-w-[300px]">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-[#F5F5F5] py-2.5 ps-5 pe-8 w-full font-poppins font-normal text-[12px] text-[#000000] leading-[18px] rounded-sm outline-0"
                />
                <FiSearch className="absolute top-[50%] translate-y-[-50%] right-3" />
              </div>
              <ul className="flex flex-col items-center gap-4 text-[15px]">
                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <a href="" onClick={() => setMenuOpen(false)}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="" onClick={() => setMenuOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <Link to="/signup" onClick={() => setMenuOpen(false)}>
                    Sign Up
                  </Link>
                </li>
              </ul>
              <div className="flex gap-4 items-center justify-center">
                <div className="w-8 h-8 flex justify-center items-center group rounded-full hover:bg-red-500">
                  <Link to="Wishlist">
                    <IoHeartOutline className="text-[20px] cursor-pointer text-[#000000] group-hover:text-white" />
                  </Link>
                </div>
                <div className="w-8 h-8 flex justify-center items-center group rounded-full hover:bg-red-500">
                  <FiUser className="text-[20px] text-[#000000] group-hover:text-white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
