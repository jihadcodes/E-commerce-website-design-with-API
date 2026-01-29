
import React from 'react'
import phone from '../../assets/images/phone.png'
import monitor from '../../assets/images/monitor.png'
import watch from '../../assets/images/watch.png'
import camera from '../../assets/images/camera.png'
import headphone from '../../assets/images/headphone.png'
import gamepad from '../../assets/images/gamepad.png'

const Category = () => {
  return (
    <>
    <section className='pt-20'>
        <div className="container pb-[130px] border-b border-[rgba(0,0,0,0.3)]">
            <div className=' pb-[60px]'>
              <h2 className='font-inter font-semibold text-[36px] text-[#000000] leading-12'>Browse By Category</h2>
            </div>
            <div className="grid grid-cols-6 gap-[30px]">
                <div className="item pt-[25px] px-[57px] border border-[rgba(0,0,0,0.3)] rounded-sm">
                    <img src={phone} alt="" className='pb-4' />
                    <p className=' pb-6 font-poppins font-normal text-[16px] leading-6 text-[#000000]'>Phones</p>
                </div>
                <div className="item pt-[25px] px-[57px] border border-[rgba(0,0,0,0.3)] rounded-sm">
                    <img src={monitor} alt="" className='pb-4' />
                    <p className=' pb-6 font-poppins font-normal text-[16px] leading-6 text-[#000000]'>Phones</p>
                </div>
                <div className="item pt-[25px] px-[57px] border border-[rgba(0,0,0,0.3)] rounded-sm">
                    <img src={watch} alt="" className='pb-4' />
                    <p className=' pb-6 font-poppins font-normal text-[16px] leading-6 text-[#000000]'>Phones</p>
                </div>
                <div className="item pt-[25px] px-[57px] border border-[rgba(0,0,0,0.3)] rounded-sm">
                    <img src={camera} alt="" className='pb-4' />
                    <p className=' pb-6 font-poppins font-normal text-[16px] leading-6 text-[#000000]'>Phones</p>
                </div>
                <div className="item pt-[25px] px-[57px] border border-[rgba(0,0,0,0.3)] rounded-sm">
                    <img src={headphone} alt="" className='pb-4' />
                    <p className=' pb-6 font-poppins font-normal text-[16px] leading-6 text-[#000000]'>Phones</p>
                </div>
                <div className="item pt-[25px] px-[57px] border border-[rgba(0,0,0,0.3)] rounded-sm">
                    <img src={gamepad} alt="" className='pb-4' />
                    <p className=' pb-6 font-poppins font-normal text-[16px] leading-6 text-[#000000]'>Phones</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Category
