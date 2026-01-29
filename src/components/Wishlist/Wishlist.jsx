
import React from 'react'
import Jacket from '../../assets/images/jacket.png'
import bag2 from '../../assets/images/bag2.png'
import cooler2 from '../../assets/images/cooler2.png'
import pad2 from '../../assets/images/pad2.png'


import Delete from '../../assets/images/delete.png'
import { BsTrash3 } from "react-icons/bs";

const Wishlist = () => {
  return (
    <>
    <section>
        <div className="container">
          <div className='pt-20 pb-20'>
            <p className='pb-15 font-poppins font-normal text-[20px] leading-[26px] text-[#000000]'>Wishlist (4)</p>
            <div className="grid grid-cols-4 gap-[30px]">
              <div className="item relative ">
                          <div className='py-[35px] px-10 bg-[#F5F5F5] rounded-sm  '>
                              <img className='mx-auto' src={Jacket} alt="" />
                           </div>
                            <h3  className=' pt-4 pb-2 font-poppins font-medium text-[16px] text-[#000000] leading-6'>Quilted Satin Jacket</h3>
                            <p className=' pb-2 font-poppins font-medium text-[16px] text-[#DB4444] leading-6'>$120 <del className='ps-3 text-[#000000] opacity-50'>$160</del></p>

                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm absolute flex items-center top-3 left-3 justify-center'>
                           <span className='font-poppins text-[12px] leadibg-[18px] text-[#FAFAFA]'>-35%</span>
                        </div>
                        <div className='w-[34px] h-[34px] bg-white rounded-full absolute flex items-center top-3 right-3 justify-center'>
                           <BsTrash3 />
                        </div>
              </div> 
              <div className="item relative ">
                          <div className='py-[35px] px-10 bg-[#F5F5F5] rounded-sm  '>
                              <img className='mx-auto' src={bag2} alt="" />
                           </div>
                            <h3  className=' pt-4 pb-2 font-poppins font-medium text-[16px] text-[#000000] leading-6'>Quilted Satin Jacket</h3>
                            <p className=' pb-2 font-poppins font-medium text-[16px] text-[#DB4444] leading-6'>$120 <del className='ps-3 text-[#000000] opacity-50'>$160</del></p>

                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm absolute flex items-center top-3 left-3 justify-center'>
                           <span className='font-poppins text-[12px] leadibg-[18px] text-[#FAFAFA]'>-35%</span>
                        </div>
                        <div className='w-[34px] h-[34px] bg-white rounded-full absolute flex items-center top-3 right-3 justify-center'>
                           <BsTrash3 />
                        </div>
              </div> 
              <div className="item relative ">
                          <div className='py-[35px] px-10 bg-[#F5F5F5] rounded-sm  '>
                              <img className='mx-auto' src={cooler2} alt="" />
                           </div>
                            <h3  className=' pt-4 pb-2 font-poppins font-medium text-[16px] text-[#000000] leading-6'>Quilted Satin Jacket</h3>
                            <p className=' pb-2 font-poppins font-medium text-[16px] text-[#DB4444] leading-6'>$120 <del className='ps-3 text-[#000000] opacity-50'>$160</del></p>

                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm absolute flex items-center top-3 left-3 justify-center'>
                           <span className='font-poppins text-[12px] leadibg-[18px] text-[#FAFAFA]'>-35%</span>
                        </div>
                        <div className='w-[34px] h-[34px] bg-white rounded-full absolute flex items-center top-3 right-3 justify-center'>
                           <BsTrash3 />
                        </div>
              </div> 
              <div className="item relative ">
                          <div className='py-[35px] px-10 bg-[#F5F5F5] rounded-sm  '>
                              <img className='mx-auto' src={pad2} alt="" />
                           </div>
                            <h3  className=' pt-4 pb-2 font-poppins font-medium text-[16px] text-[#000000] leading-6'>Quilted Satin Jacket</h3>
                            <p className=' pb-2 font-poppins font-medium text-[16px] text-[#DB4444] leading-6'>$120 <del className='ps-3 text-[#000000] opacity-50'>$160</del></p>

                        <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm absolute flex items-center top-3 left-3 justify-center'>
                           <span className='font-poppins text-[12px] leadibg-[18px] text-[#FAFAFA]'>-35%</span>
                        </div>
                        <div className='w-[34px] h-[34px] bg-white rounded-full absolute flex items-center top-3 right-3 justify-center'>
                           <BsTrash3 />
                        </div>
              </div> 
                
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Wishlist
