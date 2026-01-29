
import React from 'react'

import Qrcode from '../../assets/images/Qrcode.png'
import Gplay from '../../assets/images/gplay.png'
import Appstore from '../../assets/images/appstore.png'

const Footer = () => {
  return (
    
    <>
    <section className='bg-[#000000] pt-20 pb-20 border-b border-[rgba(255,255,255,0.4)] '>
        <div className="container">
            <div className="flex gap-[87px]">
                <div className="w-[25%]">
                <h3 className='pb-6 font-inter font-bold text-[24px] leading-6 text-[#FAFAFA]'><a href="">Exclusive </a></h3>
                <p className='pb-6 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]'><a href="">Subscribe</a></p>
                <p><a href=""  className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]'>Get 10% off your first order</a></p>
                </div>
                <div className="w-[16%]">
                <h3 className='pb-6 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]'>Support</h3>
                <p className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] pb-4'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p  className='pb-4 font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]'>exclusive@gmail.com</p>
                <p  className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]'>+88015-88888-9999</p>
                </div>
                <div className="w-[16%]">
                   <h3 className='pb-6 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]'>Account</h3>
                   <p className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] pb-4'><a href="">My Account</a></p>
                   <p className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] pb-4'><a href="">Login / Register</a></p>
                   <p className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] pb-4'><a href="">Cart</a></p>
                   <p className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] pb-4'><a href="">Wishlist</a></p>
                </div>
                <div className="w-[18%]">
                   <h3 className='pb-6 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]'>Quick Link</h3>
                   <p className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] pb-4'><a href="">Privacy Policy</a></p>
                   <p className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] pb-4'><a href="">Terms Of Use</a></p>
                   <p className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] pb-4'><a href="">FAQ</a></p>
                   <p className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA] pb-4'><a href="">Contact</a></p>
                </div>
                <div className="w-[18%]">
                   <h3 className='pb-6 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]'>Download</h3>
                   <div className='flex items-center gap-2.5'>
                    <div>
                      <a href="">
                        <img src={Qrcode} alt="" />
                      </a>
                    </div>
                    <div >
                      <a href="" className=''><img src={Gplay} alt="" className='pb-[9px]' /></a>
                      <a href=""><img src={Appstore} alt="" /></a>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </section>

    <section className='bg-[#000000]'>
      <div className="container">
        <div className='text-center pb-6 pt-4 '>
          <p className='font-poppins font-normal text-[16px] leading-6 text-[rgba(255,255,255,0.25)]'><span className='pe-1.5'>&copy;</span>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer
