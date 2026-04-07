import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

import coat from '../../assets/images/coat.png'
import bag from '../../assets/images/bag.png'
import cooler from '../../assets/images/cooler.png'
import desk from '../../assets/images/desk.png'

const products = [
  { img: coat, name: 'The north coat', price: '$120', old: '$160', rating: 5 },
  { img: bag, name: 'Gucci duffle bag', price: '$960', old: '$1160', rating: 4 },
  { img: cooler, name: 'RGB liquid CPU Cooler', price: '$160', old: '$170', rating: 5 },
  { img: desk, name: 'Small BookSelf', price: '$360', old: '$400', rating: 3 },
]

const StarRating = ({ rating, total = 5 }) => (
  <div className="flex gap-[3px]">
    {[...Array(total)].map((_, i) => (
      <TiStarFullOutline
        key={i}
        className={i < rating ? 'text-[#FFAD33]' : 'text-[rgba(0,0,0,0.5)]'}
      />
    ))}
  </div>
)

const ProductCard = ({ img, name, price, old, rating }) => (
  <div className="item">
    <div className="py-[35px] px-6 xl:px-10 bg-[#F5F5F5]">
      <img className="mx-auto max-h-[180px] xl:max-h-none object-contain" src={img} alt={name} />
    </div>
    <h3 className="pt-4 pb-2 font-poppins font-medium text-[14px] xl:text-[16px] text-[#000000] leading-6">
      {name}
    </h3>
    <p className="pb-2 font-poppins font-medium text-[14px] xl:text-[16px] text-[#DB4444] leading-6">
      {price} <del className="ps-2 xl:ps-3 text-[#000000] opacity-50">{old}</del>
    </p>
    <StarRating rating={rating} />
  </div>
)

const BestSelling = () => {
  return (
    <section className="pt-10 xl:pt-[70px]">
      <div className="container pb-16 xl:pb-[150px]">

        <div className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center pb-8 xl:pb-15">
          <h2 className="font-inter font-semibold text-[24px] xl:text-[36px] text-[#000000] leading-tight xl:leading-12">
            Best Selling Products
          </h2>
          <button className="w-fit py-3 xl:py-4 px-8 xl:px-12 text-[#FAFAFA] bg-[#DB4444] font-poppins font-medium text-[14px] xl:text-[16px] leading-6 rounded-sm">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-[30px]">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default BestSelling