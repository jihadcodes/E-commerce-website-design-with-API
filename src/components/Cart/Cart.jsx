import React from 'react'
import cart1 from '../../assets/images/cart1.png'
import cart2 from '../../assets/images/cart2.png'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from 'react-router';

const Cart = () => {
  return (
    <>
      <section className='pt-[181px] pb-20'>
        <div className="container">

          {/* Header Row */}
          <div className="grid grid-cols-4 px-10 py-6 [&>div>h3]:text-black [&>div>h3]:text-[16px] [&>div>h3]:font-popins [&>div>h3]:font-normal [&>div>h3]:leading-6 shadow-cart rounded-sm mb-10">
            <div><h3>Product</h3></div>
            <div className='text-center'><h3>Price</h3></div>
            <div className='text-center'><h3>Quantity</h3></div>
            <div className='text-end'><h3>Subtotal</h3></div>
          </div>

          {/* Cart Item 1 */}
          <div className="grid grid-cols-4 px-10 py-6 [&>div>h3]:text-black [&>div>h3]:text-[16px] [&>div>h3]:font-popins [&>div>h3]:font-normal [&>div>h3]:leading-6 shadow-cart rounded-sm mb-10">
            <div className='flex gap-5 items-center'>
              <img src={cart1} alt="" />
              <h3>LCD Monitor</h3>
            </div>
            <div className='flex gap-5 items-center justify-center'>
              <h3>$650</h3>
            </div>
            <div className='flex gap-5 items-center justify-center'>
              <div className='grid grid-cols-2 gap-4 w-[72px] h-11 border border-[rgba(0,0,0,0.4)] rounded-sm px-3 py-1.5 items-center'>
                <div>
                  <span className='font-popins font-normal text-black text-[16px] leading-6'>1</span>
                </div>
                <div>
                  <MdKeyboardArrowUp className='text-black text-[16px] cursor-pointer' />
                  <MdKeyboardArrowDown className='text-black text-[16px] cursor-pointer' />
                </div>
              </div>
            </div>
            <div className='flex gap-5 items-center justify-end'>
              <h3>$650</h3>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="grid grid-cols-4 px-10 py-6 [&>div>h3]:text-black [&>div>h3]:text-[16px] [&>div>h3]:font-popins [&>div>h3]:font-normal [&>div>h3]:leading-6 shadow-cart rounded-sm mb-10">
            <div className='flex gap-5 items-center'>
              <img src={cart2} alt="" />
              <h3>H1 Gamepad</h3>
            </div>
            <div className='flex gap-5 items-center justify-center'>
              <h3>$550</h3>
            </div>
            <div className='flex gap-5 items-center justify-center'>
              <div className='grid grid-cols-2 gap-4 w-[72px] h-11 border border-[rgba(0,0,0,0.4)] rounded-sm px-3 py-1.5 items-center'>
                <div>
                  <span className='font-popins font-normal text-black text-[16px] leading-6'>1</span>
                </div>
                <div>
                  <MdKeyboardArrowUp className='text-black text-[16px] cursor-pointer' />
                  <MdKeyboardArrowDown className='text-black text-[16px] cursor-pointer' />
                </div>
              </div>
            </div>
            <div className='flex gap-5 items-center justify-end'>
              <h3>$550</h3>
            </div>
          </div>

          {/* Buttons */}
          <div className='flex justify-between'>
            <a href="" className='font-popins text-[16px] text-black leading-6 font-medium border border-[rgba(0,0,0,0.5)] rounded-sm py-4 px-12 hover:bg-[#DB4444] duration-500 hover:text-white hover:border-[#DB4444]'>Return To Shop</a>
            <a href="" className='font-popins text-[16px] text-black leading-6 font-medium border border-[rgba(0,0,0,0.5)] rounded-sm py-4 px-12 hover:bg-[#DB4444] duration-500 hover:text-white hover:border-[#DB4444]'>Update Cart</a>
          </div>

          {/* Cart Total */}
          <div className='flex justify-end pt-28'>
            <div className='w-[470px] border border-[#000000] px-[22px] pt-8 pb-12 rounded-sm'>
              <h3 className='font-popins font-medium text-[20px] leading-7 text-[#000000] pb-6'>Cart Total</h3>

              <div className='flex justify-between font-popins text-[16px] text-black leading-6 font-normal py-4 border-b border-[rgba(0,0,0,0.4)]'>
                <span>Subtotal:</span>
                <span>$1200</span>
              </div>
              <div className='flex justify-between font-popins text-[16px] text-black leading-6 font-normal py-4 border-b border-[rgba(0,0,0,0.4)]'>
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className='flex justify-between font-popins text-[16px] text-black leading-6 font-normal py-4'>
                <span>Total:</span>
                <span>$1200</span>
              </div>

              <div className='pt-8 text-center'>
                <Link to="/checkout" className='font-popins text-[16px] text-white leading-6 font-medium rounded-sm py-4 px-12 bg-[#DB4444]'>Procees to checkout</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Cart