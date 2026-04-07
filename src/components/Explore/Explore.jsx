import React from 'react'
import explore from '../../assets/images/explore.png'
import { TiStarFullOutline } from "react-icons/ti";

const products = [
  { id: 1, name: "CANON EOS DSLR Camera", price: 360, rating: 3, reviews: 88, image: explore },
  { id: 2, name: "CANON EOS DSLR Camera", price: 360, rating: 3, reviews: 88, image: explore },
  { id: 3, name: "CANON EOS DSLR Camera", price: 360, rating: 3, reviews: 88, image: explore },
  { id: 4, name: "CANON EOS DSLR Camera", price: 360, rating: 3, reviews: 88, image: explore },
  { id: 5, name: "CANON EOS DSLR Camera", price: 360, rating: 3, reviews: 88, image: explore },
  { id: 6, name: "CANON EOS DSLR Camera", price: 360, rating: 3, reviews: 88, image: explore },
  { id: 7, name: "CANON EOS DSLR Camera", price: 360, rating: 3, reviews: 88, image: explore },
  { id: 8, name: "CANON EOS DSLR Camera", price: 360, rating: 3, reviews: 88, image: explore },
];

const StarRating = ({ rating, total = 5 }) => {
  return (
    <div className='flex gap-[2px] sm:gap-1'>
      {[...Array(total)].map((_, i) => (
        <TiStarFullOutline
          key={i}
          className={`text-[16px] sm:text-[18px] md:text-[20px] ${
            i < rating ? 'text-[#FFAD33]' : 'text-[rgba(0,0,0,0.5)]'
          }`}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className='product_item'>
      <div className='bg-[#F5F5F5] p-[24px] sm:p-[36px] md:p-[49px] rounded-sm flex items-center justify-center'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full max-w-[140px] sm:max-w-[160px] md:max-w-full object-contain'
        />
      </div>
      <h3 className='font-popins font-medium text-[14px] sm:text-[15px] md:text-[16px] text-black leading-6 pt-3 md:pt-4'>
        {product.name}
      </h3>
      <div className='flex flex-wrap items-center gap-1 sm:gap-2 pt-1 md:pt-2'>
        <p className='font-popins font-medium text-[14px] md:text-[16px] leading-6'>
          <span className='text-[#DB4444]'>${product.price}</span>
        </p>
        <StarRating rating={product.rating} />
        <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[12px] sm:text-[13px] md:text-[14px] leading-[21px]'>
          ({product.reviews})
        </span>
      </div>
    </div>
  );
};

const Explore = () => {
  return (
    <>
      <section>
        <div className="container border-b border-[rgba(0,0,0,0.25)] pb-[60px] md:pb-[91px]">

          {/* Section Title */}
          <div className='pb-10 md:pb-[88px] text-center'>
            <h3 className='font-inter text-[24px] sm:text-[30px] md:text-[36px] leading-tight md:leading-12 font-semibold text-black'>
              Explore Our Products
            </h3>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[16px] sm:gap-x-[20px] lg:gap-x-[30px] gap-y-[36px] md:gap-y-[60px] pb-[48px] md:pb-[76px]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View All Button */}
          <div className='text-center'>
            <a
              href=""
              className='inline-block font-popins text-[#FAFAFA] text-[14px] sm:text-[15px] md:text-[16px] leading-6 font-medium bg-[#DB4444] py-3 sm:py-4 px-8 sm:px-10 md:px-12 rounded-sm'
            >
              View All Products
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Explore;