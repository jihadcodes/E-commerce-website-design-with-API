import React, { useState } from 'react'
import check1 from '../../assets/images/check1.png'
import check2 from '../../assets/images/check2.png'

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('')

  return (
    <>
    <section className='pt-15 xl:pt-[181px] pb-15 xl:pb-[188px]'>
        <div className="container">
            <div className='pb-6 xl:pb-12'>
                <h3 className='font-inter font-medium text-[24px] xl:text-[36px] leading-[30px] text-black'>Billing Details</h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-[173px]">

                {/* Left — Billing Form */}
                <div className="w-full xl:w-[40%] flex flex-col gap-6 xl:gap-8 [&>div>label]:font-popins [&>div>label]:text-[16px] [&>div>label]:text-[rgba(0,0,0,0.4)] [&>div>label]:font-normal [&>div>label]:leading-6 [&>div>input]:py-3 [&>div>input]:bg-[#F5F5F5] [&>div>input]:font-popins [&>div>input]:text-[16px] [&>div>input]:text-[rgba(0,0,0,0.4)] [&>div>input]:font-normal [&>div>input]:leading-6 [&>div>input]:outline-0 [&>div>input]:px-3 [&>div>input]:rounded-sm [&>div>input]:mt-2 [&>div>label>span]:text-[rgba(219,68,68,0.4)]">
                    <div>
                        <label>First Name<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label>Company Name</label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label>Street Address<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label>Apartment, floor, etc. (optional)</label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label>Town/City<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label>Phone Number<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label>Email Address<span>*</span></label>
                        <input type="email" className='w-full' />
                    </div>
                </div>

                {/* Right — Order Summary */}
                <div className="w-full xl:w-[60%]">
                    <div className='w-full xl:w-[80%] flex flex-col gap-6 xl:gap-8'>

                        {/* Items */}
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4 xl:gap-6'>
                                <img src={check1} alt="" className='w-10 h-10 xl:w-auto xl:h-auto object-contain' />
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>LCD Monitor</span>
                            </div>
                            <div>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>$650</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4 xl:gap-6'>
                                <img src={check2} alt="" className='w-10 h-10 xl:w-auto xl:h-auto object-contain' />
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>H1 Gamepad</span>
                            </div>
                            <div>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>$1100</span>
                            </div>
                        </div>

                        {/* Totals */}
                        <div>
                            <div className='flex items-center justify-between gap-6 border-b border-[rgba(0,0,0,0.4)] pb-4 pt-4'>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>Subtotal:</span>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>$1750</span>
                            </div>
                            <div className='flex items-center justify-between gap-6 border-b border-[rgba(0,0,0,0.4)] pb-4 pt-4'>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>Shipping:</span>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>Free</span>
                            </div>
                            <div className='flex items-center justify-between gap-6 pb-4 pt-4'>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>Total:</span>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>$1750</span>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div>
                            <div
                                className='flex items-center gap-4 pb-6 xl:pb-8 cursor-pointer'
                                onClick={() => setPaymentMethod('stripe')}
                            >
                                <span className='w-6 h-6 inline-flex items-center justify-center rounded-full border border-black'>
                                    {paymentMethod === 'stripe' && (
                                        <span className='w-3 h-3 rounded-full bg-black inline-block'></span>
                                    )}
                                </span>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>Stripe</span>
                            </div>
                            <div
                                className='flex items-center gap-4 pb-6 xl:pb-8 cursor-pointer'
                                onClick={() => setPaymentMethod('cash')}
                            >
                                <span className='w-6 h-6 inline-flex items-center justify-center rounded-full border border-black'>
                                    {paymentMethod === 'cash' && (
                                        <span className='w-3 h-3 rounded-full bg-black inline-block'></span>
                                    )}
                                </span>
                                <span className='font-popins text-[16px] leading-6 font-normal text-black'>Cash on delivery</span>
                            </div>
                        </div>
                    </div>

                    {/* Coupon */}
                    <div className='flex flex-col xl:flex-row gap-4 xl:gap-0 justify-between pt-6 xl:pt-8'>
                        <input
                            type="text"
                            className='w-full xl:w-[60%] py-4 px-6 border border-[#000000] rounded-sm font-popins text-[16px] leading-6 font-normal text-[rgba(0,0,0,0.5)]'
                            placeholder="Coupon Code"
                        />
                        <button className='bg-[#DB4444] py-4 px-12 font-popins font-medium text-[#FAFAFA] leading-6 rounded-sm'>Apply Coupon</button>
                    </div>

                    {/* Place Order */}
                    <div className='pt-8 xl:pt-12'>
                        <button className='w-full xl:w-auto bg-[#DB4444] py-4 px-12 font-popins font-medium text-[#FAFAFA] leading-6 rounded-sm'>Place Order</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Checkout