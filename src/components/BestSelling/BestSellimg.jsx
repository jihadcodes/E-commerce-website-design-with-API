
import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

import coat from '../../assets/images/coat.png'
import bag from '../../assets/images/bag.png'
import cooler from '../../assets/images/cooler.png'
import desk from '../../assets/images/desk.png'

const BestSellimg = () => {
  return (
    <>
    <section className='pt-[70px]'>
            <div className="container pb-[150px] ">
              <div className="flex justify-between items-center  pb-15">
                <div className=''>
                      <h2 className='font-inter font-semibold text-[36px] text-[#000000] leading-12'>Best Selling Products</h2>
                </div>
              <div className="">
                  <button  className='block  py-4 px-12 text-[#FAFAFA] bg-[#DB4444] font-poppins font-medium text-[16px] leading-6 mx-auto rounded-sm'>View All</button>
               </div>
              </div>
              <div className="grid grid-cols-4 gap-[30px]">
                <div className="item ">
                  <div className='py-[35px] px-10 bg-[#F5F5F5]  '>
                    <img className='mx-auto' src={coat} alt="" />
                  </div>
                  <h3  className=' pt-4 pb-2 font-poppins font-medium text-[16px] text-[#000000] leading-6'>The north coat</h3>
                  <p className=' pb-2 font-poppins font-medium text-[16px] text-[#DB4444] leading-6'>$120 <del className='ps-3 text-[#000000] opacity-50'>$160</del></p>
                  <div className="flex gap-[3px]">
                    <TiStarFullOutline className='text-[#FFAD33]' />
                    <TiStarFullOutline className='text-[#FFAD33]' />
                    <TiStarFullOutline className='text-[#FFAD33]' />
                    <TiStarFullOutline className='text-[#FFAD33]' />
                    <TiStarFullOutline className='text-[#FFAD33]' />
                  </div>
                </div>
                <div className="item">
                  <div className='py-[35px] px-10 bg-[#F5F5F5]  '>
                    <img className='mx-auto' src={bag} alt="" />
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
                <div className="item ">
                  <div className='py-[35px] px-10 bg-[#F5F5F5]  '>
                    <img className='mx-auto' src={cooler} alt="" />
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
                <div className="item ">
                  <div className='py-[35px] px-10 bg-[#F5F5F5]  '>
                    <img className='mx-auto' src={desk} alt="" />
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
            </div>
        </section>
    </>
  )
}

export default BestSellimg
