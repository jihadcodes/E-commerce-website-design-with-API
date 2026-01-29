
import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

import p1 from '../../assets/images/p1.png'
import keyboard from '../../assets/images/keyboard.png'
import monitor3 from '../../assets/images/monitor3.png'
import chair from '../../assets/images/chair.png'

const NewArrival = () => {
  return (
    <>
    <section className='pt-24'>
        <div className="container pb-[102px] border-b border-[rgba(0,0,0,0.3)]">
          <div className='pt-6 pb-[31px]'>
            <h2 className='font-inter font-semibold text-[36px] text-[#000000] leading-12'>New Arrivals</h2>
          </div>
          <div className="grid grid-cols-4 gap-[30px]">
            <div className="item relative">
              <div className='py-[35px] px-10 bg-[#F5F5F5]  '>
                <img className='mx-auto' src={p1} alt="" />
              </div>
              
               <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm absolute flex items-center top-3 left-3 justify-center'>
                      <span className='font-poppins text-[12px] leadibg-[18px] text-[#FAFAFA]'>-40%</span>
                </div>

              <h3  className=' pt-4 pb-2 font-poppins font-medium text-[16px] text-[#000000] leading-6'>HAVIT HV-G92 Gamepad</h3>
              <p className=' pb-2 font-poppins font-medium text-[16px] text-[#DB4444] leading-6'>$120 <del className='ps-3 text-[#000000] opacity-50'>$160</del></p>
              <div className="flex gap-[3px]">
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
              </div>
            </div>
            <div className="item relative">
              <div className='py-[35px] px-10 bg-[#F5F5F5]  '>
                <img className='mx-auto' src={keyboard} alt="" />
              </div>
              
               <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm absolute flex items-center top-3 left-3 justify-center'>
                      <span className='font-poppins text-[12px] leadibg-[18px] text-[#FAFAFA]'>-40%</span>
                </div>

              <h3  className=' pt-4 pb-2 font-poppins font-medium text-[16px] text-[#000000] leading-6'>HAVIT HV-G92 Gamepad</h3>
              <p className=' pb-2 font-poppins font-medium text-[16px] text-[#DB4444] leading-6'>$120 <del className='ps-3 text-[#000000] opacity-50'>$160</del></p>
              <div className="flex gap-[3px]">
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
              </div>
            </div>
            <div className="item relative">
              <div className='py-[35px] px-10 bg-[#F5F5F5]  '>
                <img className='mx-auto' src={monitor3} alt="" />
              </div>
              
               <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm absolute flex items-center top-3 left-3 justify-center'>
                      <span className='font-poppins text-[12px] leadibg-[18px] text-[#FAFAFA]'>-40%</span>
                </div>

              <h3  className=' pt-4 pb-2 font-poppins font-medium text-[16px] text-[#000000] leading-6'>HAVIT HV-G92 Gamepad</h3>
              <p className=' pb-2 font-poppins font-medium text-[16px] text-[#DB4444] leading-6'>$120 <del className='ps-3 text-[#000000] opacity-50'>$160</del></p>
              <div className="flex gap-[3px]">
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
              </div>
            </div>
            <div className="item relative">
              <div className='py-[35px] px-10 bg-[#F5F5F5]  '>
                <img className='mx-auto' src={chair} alt="" />
              </div>
              
               <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm absolute flex items-center top-3 left-3 justify-center'>
                      <span className='font-poppins text-[12px] leadibg-[18px] text-[#FAFAFA]'>-40%</span>
                </div>

              <h3  className=' pt-4 pb-2 font-poppins font-medium text-[16px] text-[#000000] leading-6'>HAVIT HV-G92 Gamepad</h3>
              <p className=' pb-2 font-poppins font-medium text-[16px] text-[#DB4444] leading-6'>$120 <del className='ps-3 text-[#000000] opacity-50'>$160</del></p>
              <div className="flex gap-[3px]">
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
                <TiStarFullOutline className='text-[#FFAD33]' />
              </div>
            </div>
           
          </div>
          <div className='pt-[102px] w-full '>
            <div className="">
              <button  className='block  py-4 px-12 text-[#FAFAFA] bg-[#DB4444] font-poppins font-medium text-[16px] leading-6 mx-auto rounded-sm '>View All Products</button>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default NewArrival
