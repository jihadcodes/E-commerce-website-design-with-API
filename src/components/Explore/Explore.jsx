import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

import px1 from '../../assets/images/px1.png'
import px2 from '../../assets/images/px2.png'
import px3 from '../../assets/images/px3.png'
import px4 from '../../assets/images/px4.png'
import px5 from '../../assets/images/px5.png'
import px6 from '../../assets/images/px6.png'
import px7 from '../../assets/images/px7.png'
import px8 from '../../assets/images/px8.png'

const products = [
  { img: px1, name: 'Breed Dry Dog Food', price: '$100' },
  { img: px2, name: 'CANON EOS DSLR Camera', price: '$360' },
  { img: px3, name: 'ASUS FHD Gaming Laptop', price: '$700' },
  { img: px4, name: 'Curology Product Set', price: '$500' },
  { img: px5, name: 'Kids Electric Car', price: '$960' },
  { img: px6, name: 'Jr. Zoom Soccer Cleats', price: '$1160' },
  { img: px7, name: 'GP11 Shooter USB Gamepad', price: '$660' },
  { img: px8, name: 'Quilted Satin Jacket', price: '$660' },
]

const ProductCard = ({ img, name, price }) => (
  <div className="item">
    <div className="py-[35px] px-6 xl:px-10 bg-[#F5F5F5]">
      <img className="mx-auto max-h-[150px] xl:max-h-none object-contain" src={img} alt={name} />
    </div>
    <h3 className="pt-4 pb-2 font-poppins font-medium text-[14px] xl:text-[16px] text-[#000000] leading-6">
      {name}
    </h3>
    <div className="flex items-center gap-2">
      <p className="font-poppins font-medium text-[14px] xl:text-[16px] text-[#DB4444] leading-6">
        {price}
      </p>
      <div className="flex gap-[3px]">
        {[...Array(5)].map((_, i) => (
          <TiStarFullOutline key={i} className="text-[#FFAD33]" />
        ))}
      </div>
    </div>
  </div>
)

const Explore = () => {
  return (
    <section>
      <div className="container pb-16 xl:pb-[75px]">

        <div className="pb-10 xl:pb-[88px]">
          <h2 className="text-center font-inter font-semibold text-[24px] xl:text-[36px] text-[#000000] leading-tight xl:leading-12">
            Explore Our Products
          </h2>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-[30px]">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="pt-16 xl:pt-[102px] w-full">
          <button className="block py-3 xl:py-4 px-8 xl:px-12 text-[#FAFAFA] bg-[#DB4444] font-poppins font-medium text-[14px] xl:text-[16px] leading-6 mx-auto rounded-sm">
            View All Products
          </button>
        </div>

      </div>
    </section>
  )
}

export default Explore