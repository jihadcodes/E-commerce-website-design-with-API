
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";



import logo from '../../assets/images/logo.png.png'
import { Link } from 'react-router';


const Navbar = () => {
  return (
    <>
    <nav  className=' border-b border-[rgba(0,0,0,0.25)]'>
        <div className='pt-3 pb-3 bg-[#000000]'>
            <div className="container">
            <div className="flex">
                <div className="w-[80%] flex items-center justify-end">
                    <p className='font-poppins font-regular leading-[21px] text-[14px] text-[#FAFAFA]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <a href="" className=' font-poppins font-semibold leading-6 text-[14px] text-[#FAFAFA] undrline pl-2'>ShopNow</a>
                </div>
                <div className="w-[20%] text-end">
                    <div className="flex justify-end gap-[9px] relative">
                        <div className="relative w-24 items-center">
                            <select className='appearance-none w-full px-3 py-2 outline-0 font-poppins font-regular leading-[21PX] text-[14px] text-[#FAFAFA]'>
                                <option className='text-black' >English</option>
                                <option className='text-black' >Bangla</option>
                            </select>
                            <span className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#FAFAFA] '>
                            <IoIosArrowDown className='mt-[0.7px]'/>
                            </span>
                        </div>
                    </div>
                   
                </div>


            </div>
        </div>
        </div>
        <div className="container">
            <div className="flex pt-10 pb-4">
                <div className="w-[10%]">
                    <Link to="/"><img src={logo} className='cursor-pointer' alt="" /></Link>
                </div>
                <div className="w-[60%]">
                    <ul className='flex main_menu justify-center gap-12'>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Sign Up</a></li>
                    </ul>
                </div>
                <div className="w-[30%] flex justify-center items-center ">
                    <div className='w-[243px] relative me-3'>
                        <input type="text"placeholder='What are you looking for?' className=' bg-[#F5F5F5] py-2.5 ps-5 pe-3 w-full font-poppins font-normal text-[12px] text-[#000000] leading-[18px] rounded-sm outline-0'   />
                        <FiSearch className='absolute top-[50%] translate-y-[-50%] right-3' />
                        
                        
                    </div>
                    <div className='flex gap-3 justify-end items-end'>
                        <div className='w-8 h-8 flex justify-center items-center group rounded-full hover:bg-red-500  '>
                            <Link to="Wishlist"><IoHeartOutline className='text-[18px] cursor-pointer text-[#000000] group hover:text-white'  /></Link>
                        </div>
                        <div className='w-8 h-8 flex justify-center items-center group rounded-full hover:bg-red-500 '>
                            <Link to="Cart"><IoCartOutline className=' cursor-pointer text-[18px] text-[#000000] group  hover:text-white'  /></Link>
                        </div>
                        <div className='w-8 h-8 flex justify-center items-center group rounded-full hover:bg-red-500 '>
                            <FiUser className='text-[18px] text-[#000000] group hover:text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
