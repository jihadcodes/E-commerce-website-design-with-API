
import React from 'react'
import Slider from "react-slick";

import apple from '../../assets/images/apple.png'
import iphone from '../../assets/images/iphone.png'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {

    var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  };
  return (
    <>
    <section>
        <div className="container">
            <div className="flex gap-[45px]">
                <div className="w-[20%] category pt-10  flex flex-col border-r border-[rgba(0,0,0,0.25)] gap-4 ">
                    <a href="">Woman’s Fashion</a>
                    <a href="">Men’s Fashion</a>
                    <a href="">Electronics</a>
                    <a href="">Home & Lifestyle</a>
                    <a href="">Medicine</a>
                    <a href="">Sports & Outdoor</a>
                    <a href="">Baby’s & Toys</a>
                    <a href="">Groceries & Pets</a>
                    <a href="">Health & Beauty</a>
                </div>
                <div className="w-[80%] pt-10">
                  <Slider {...settings}>
                  <div className="slider bg-[#000]">
                    <div>
                    <div className="flex">
                      <div className="w-[40%] pt-[58px] ps-16 ">
                        <div className="flex items-center gap-6 pb-5">
                          <img src={apple} alt="" />
                          <span className='text-[16px] font-poppins font-normal leading-6 text-[#FAFAFA]'>iPhone 14 Series</span>
                        </div>
                       <div>
                         <h2 className='font-inter font-semibold text-[48px] leading-[60px] text-[#FAFAFA] spacing-[4%] pr-2 pb-[21px]'>Up to 10% off Voucher</h2>
                       </div>
                       <div >
                        <p className="flex items-center gap-2">
                          <a href=""  className='text-[16px] font-poppins font-medium leading-6 text-[#FAFAFA] pb-[3px] border-b border-[#FAFAFA]'>Shop Now</a>
                          <HiOutlineArrowSmRight className='text-white h-7 w-7' />
                        </p>
                       </div>
                      </div>
                      <div className="w-[60%] pt-4">
                        <img src={iphone} alt="" />
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="slider bg-[#000]">
                    <div>
                    <div className="flex">
                      <div className="w-[40%] pt-[58px] ps-16 ">
                        <div className="flex items-center gap-6 pb-5">
                          <img src={apple} alt="" />
                          <span className='text-[16px] font-poppins font-normal leading-6 text-[#FAFAFA]'>iPhone 14 Series</span>
                        </div>
                       <div>
                         <h2 className='font-inter font-semibold text-[48px] leading-[60px] text-[#FAFAFA] spacing-[4%] pr-2 pb-[21px]'>Up to 10% off Voucher</h2>
                       </div>
                       <div >
                        <p className="flex items-center gap-2">
                          <a href=""  className='text-[16px] font-poppins font-medium leading-6 text-[#FAFAFA] pb-[3px] border-b border-[#FAFAFA]'>Shop Now</a>
                          <HiOutlineArrowSmRight className='text-white h-7 w-7' />
                        </p>
                       </div>
                      </div>
                      <div className="w-[60%] pt-4">
                        <img src={iphone} alt="" />
                      </div>
                    </div>
                  </div>
                  </div>
                  </Slider>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner
