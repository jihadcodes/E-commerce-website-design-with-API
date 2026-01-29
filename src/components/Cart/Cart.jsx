
import React, { useState } from 'react'

import monitor2 from'../../assets/images/monitor2.png'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Cart = () => {

  const [count, setCount] = useState(1);
const handleOnClick = () => {
  setCount((count) => count + 1);
}
  return (
    <>
      <section className='pt-20 pb-20'>
        <div className="container ">
            <div className="grid grid-cols-4 mb-10 px-10 py-6  [&>div>h3]:text-black [&>div>h3]:text-[16px] [&>div>h3]:font-poppins [&>div>h3]:font-normal [&>div>h3]:leading-6 shadow-cart rounded-sm  ">
               
                <div>
                  <h3>Product</h3>
                </div>
                <div>
                  <h3 className='text-center'>Price</h3>
                </div>
                <div>
                  <h3 className='text-center'>Quantity</h3>
                </div>
                <div>
                  <h3 className='text-end'>Subtotal</h3>
                </div>
            </div>

            <div className="grid grid-cols-4 px-10 py-6  [&>div>h3]:text-black [&>div>h3]:text-[16px] [&>div>h3]:font-poppins [&>div>h3]:font-normal [&>div>h3]:leading-6 shadow-cart rounded-sm  ">
               
                <div className="flex gap-5 items-center">
                    <img src={monitor2} alt="" />
                    <h3>LCD Monitor</h3>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                    <h3>650$</h3>
                </div>
                <div className="grid grid-cols-2 gap-5 items-center justify-center">
                    <div className=' flex gap-4 w-[72px] h-11 px-3 py-1.5 border border-[rgba(0,0,0,0.4)] rounded-sm items-center'>
                      <div>{count}</div>
                      <div>
                        <MdOutlineKeyboardArrowUp onClick={handleOnClick} />
                        <MdOutlineKeyboardArrowDown />
                      </div>
                    </div>
                </div>
                <div className=" flex gap-5 items-center justify-end">
                    <h3>650$</h3>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Cart
