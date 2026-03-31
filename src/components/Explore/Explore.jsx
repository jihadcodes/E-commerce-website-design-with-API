import React from 'react'
import Jacket from '../../assets/images/jacket.png'
import bag2 from '../../assets/images/bag2.png'
import cooler2 from '../../assets/images/cooler2.png'
import pad2 from '../../assets/images/pad2.png'
import { BsTrash3 } from "react-icons/bs";

const Wishlist = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className='pt-10 md:pt-20 pb-10 md:pb-20 px-4 xl:px-0'>
            <p className='pb-8 md:pb-15 font-poppins font-normal text-[20px] leading-[26px] text-[#000000]'>Wishlist (4)</p>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px]">

              {[
                { img: Jacket, name: 'Quilted Satin Jacket', price: '$120', old: '$160', discount: '-35%' },
                { img: bag2, name: 'Quilted Satin Jacket', price: '$120', old: '$160', discount: '-35%' },
                { img: cooler2, name: 'Quilted Satin Jacket', price: '$120', old: '$160', discount: '-35%' },
                { img: pad2, name: 'Quilted Satin Jacket', price: '$120', old: '$160', discount: '-35%' },
              ].map((item, i) => (
                <div key={i} className="item relative">
                  <div className='py-[25px] md:py-[35px] px-6 md:px-10 bg-[#F5F5F5] rounded-sm'>
                    <img
                      className='mx-auto max-h-[120px] md:max-h-[180px] xl:max-h-none object-contain'
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <h3 className='pt-4 pb-2 font-poppins font-medium text-[14px] md:text-[16px] text-[#000000] leading-6'>
                    {item.name}
                  </h3>
                  <p className='pb-2 font-poppins font-medium text-[14px] md:text-[16px] text-[#DB4444] leading-6'>
                    {item.price} <del className='ps-3 text-[#000000] opacity-50'>{item.old}</del>
                  </p>
                  <div className='w-[55px] h-[26px] bg-[#DB4444] rounded-sm absolute flex items-center top-3 left-3 justify-center'>
                    <span className='font-poppins text-[12px] text-[#FAFAFA]'>{item.discount}</span>
                  </div>
                  <div className='w-[34px] h-[34px] bg-white rounded-full absolute flex items-center top-3 right-3 justify-center'>
                    <BsTrash3 />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Wishlist