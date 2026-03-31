import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

import p1 from '../../assets/images/p1.png'
import keyboard from '../../assets/images/keyboard.png'
import monitor3 from '../../assets/images/monitor3.png'
import chair from '../../assets/images/chair.png'

const products = [
  { img: p1, name: 'HAVIT HV-G92 Gamepad', price: '$120', old: '$160', discount: '-40%' },
  { img: keyboard, name: 'AK-900 Wired Keyboard', price: '$960', old: '$1160', discount: '-35%' },
  { img: monitor3, name: 'IPS LCD Gaming Monitor', price: '$370', old: '$400', discount: '-30%' },
  { img: chair, name: 'S-Series Comfort Chair', price: '$375', old: '$400', discount: '-25%' },
]

const ProductCard = ({ img, name, price, old, discount }) => (
  <div className="item relative">
    <div className="py-[35px] px-6 xl:px-10 bg-[#F5F5F5]">
      <img className="mx-auto max-h-[180px] xl:max-h-none object-contain" src={img} alt={name} />
    </div>

    <div className="w-[55px] h-[26px] bg-[#DB4444] rounded-sm absolute flex items-center top-3 left-3 justify-center">
      <span className="font-poppins text-[12px] leading-[18px] text-[#FAFAFA]">{discount}</span>
    </div>

    <h3 className="pt-4 pb-2 font-poppins font-medium text-[14px] xl:text-[16px] text-[#000000] leading-6">
      {name}
    </h3>
    <p className="pb-2 font-poppins font-medium text-[14px] xl:text-[16px] text-[#DB4444] leading-6">
      {price}{' '}
      <del className="ps-2 xl:ps-3 text-[#000000] opacity-50">{old}</del>
    </p>
    <div className="flex gap-[3px]">
      {[...Array(5)].map((_, i) => (
        <TiStarFullOutline key={i} className="text-[#FFAD33]" />
      ))}
    </div>
  </div>
)

const NewArrival = () => {
  return (
    <section className="pt-12 xl:pt-24">
      <div className="container  pb-16 xl:pb-[102px] border-b border-[rgba(0,0,0,0.3)]">

        <div className="pt-4 xl:pt-6 pb-6 xl:pb-[31px]">
          <h2 className="font-inter font-semibold text-[24px] xl:text-[36px] text-[#000000] leading-tight xl:leading-12">
            New Arrivals
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

export default NewArrival