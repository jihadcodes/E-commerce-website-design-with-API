import React from 'react'


const Checkout = () => {
  return (
    <>
    <section className='pt-[181px] pb-[188px]'>
        <div className="container">
            <div className='pb-12'>
                <h3 className='font-inter font-medium text-[36px] leading-[30px] text-black'>Billing Details</h3>
            </div>
            <div className="flex gap-[173px]">
                <div className="w-[40%] flex flex-col gap-8 [&>div>label]:font-popins [&>div>label]:text-[16px] [&>div>label]:text-[rgba(0,0,0,0.4)] [&>div>label]:font-normal [&>div>label]:leading-6 [&>div>input]:py-3 [&>div>input]:bg-[#F5F5F5] [&>div>input]:font-popins [&>div>input]:text-[16px] [&>div>input]:text-[rgba(0,0,0,0.4)] [&>div>input]:font-normal [&>div>input]:leading-6 [&>div>input]:outline-0 [&>div>input]:px-3 [&>div>input]:rounded-sm [&>div>input]:mt-2 [&>div>label>span]:text-[rgba(219,68,68,0.4)]">
                    <div>
                        <label className=''>First Name<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Company Name</label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Street Address<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Apartment, floor, etc. (optional)</label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Town/City<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Phone Number<span>*</span></label>
                        <input type="text" className='w-full' />
                    </div>
                    <div>
                        <label className=''>Email Address<span>*</span></label>
                        <input type="email" className='w-full' />
                    </div>
                </div>
                
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Checkout