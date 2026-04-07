import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import apple from "../../assets/images/apple.png";
import iphone from "../../assets/images/iphone.png";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router";

const SlideContent = () => (
  <div className="slider bg-[rgb(0,0,0)]">
    <div className="flex flex-col md:flex-row min-h-[280px] md:min-h-[unset]">
      <div className="w-full xl:w-[40%] pt-6 xl:pt-[58px] px-6 xl:ps-16 xl:pr-2 flex flex-col justify-center">
        <div className="flex items-center gap-3 xl:gap-6 pb-3 xl:pb-5">
          <img
            src={apple}
            alt="Apple"
            className="w-6 h-6 xl:w-auto xl:h-auto"
          />
          <span className="text-[13px] xl:text-[16px] font-poppins font-normal leading-6 text-[#FAFAFA]">
            iPhone 14 Series
          </span>
        </div>
        <div>
          <h2 className="font-inter font-semibold text-[26px] xl:text-[48px] leading-[34px] xl:leading-[60px] text-[#FAFAFA] pb-4 xl:pb-[21px]">
            Up to 10% off Voucher
          </h2>
        </div>
        <div>
          <p className="flex items-center gap-2">
            <a
              href=""
              className="text-[14px] xl:text-[16px] font-poppins font-medium leading-6 text-[#FAFAFA] pb-[3px] border-b border-[#FAFAFA]"
            >
              Shop Now
            </a>
            <HiOutlineArrowSmRight className="text-white h-6 w-6 xl:h-7 xl:w-7" />
          </p>
        </div>
      </div>
      <div className="w-full xl:w-[60%] pt-4 flex justify-center xl:justify-end">
        <img
          src={iphone}
          alt="iPhone"
          className="max-h-[200px] xl:max-h-none object-contain"
        />
      </div>
    </div>
  </div>
);

const Banner = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((response) => {
        setCategories(response.data);
      });
  },[]);
  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <section>
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-0 xl:gap-[45px]">
          {/* Category Sidebar — hidden on mobile, visible on xl */}
          <div className="hidden xl:flex w-[20%] category pt-10 flex-col border-r border-[rgba(0,0,0,0.25)] gap-4">
            <Link href="">Woman's Fashion</Link>
            {categories.slice(0, 9).map((cat, index) => (
              <Link key={index} href="" className="capitalize">
                {cat}
              </Link>
            ))}
          </div>

          {/* Slider — full width on mobile, 80% on xl */}
          <div className="w-full xl:w-[80%] pt-4 xl:pt-10">
            <Slider {...settings}>
              <SlideContent />
              <SlideContent />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
