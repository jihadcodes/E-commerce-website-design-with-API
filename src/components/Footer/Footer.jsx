import React from 'react'
import Qrcode from '../../assets/images/Qrcode.png'
import Gplay from '../../assets/images/gplay.png'
import Appstore from '../../assets/images/appstore.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
      <footer className='bg-[#0D0D0D] pt-14 md:pt-20 pb-10 md:pb-16 border-t border-[rgba(255,255,255,0.08)]'>
        <div className="container px-4 xl:px-0">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-12 pb-12 border-b border-[rgba(255,255,255,0.08)]">

            {/* Exclusive */}
            <div className="col-span-2 md:col-span-3 xl:col-span-1">
              <Link to="/" className='pb-3 font-inter font-bold text-[22px] text-[#FAFAFA] tracking-wide cursor-pointer'>
                Exclusive
              </Link>
              <p className='pb-2 font-poppins font-medium text-[15px] text-[rgba(255,255,255,0.6)] uppercase tracking-widest'>
                Subscribe
              </p>
              <p className='pb-5 font-poppins font-normal text-[14px] text-[rgba(255,255,255,0.45)]'>
                Get 10% off your first order
              </p>
              <div className='flex items-center border border-[rgba(255,255,255,0.2)] rounded-sm overflow-hidden'>
                <input
                  type="email"
                  placeholder='Enter your email'
                  className='bg-transparent flex-1 px-3 py-2.5 text-[13px] text-[#FAFAFA] placeholder:text-[rgba(255,255,255,0.3)] outline-none font-poppins'
                />
                <button className='px-3 py-2.5 bg-[#DB4444] text-white text-[13px] font-poppins whitespace-nowrap hover:bg-[#c13333] transition-colors'>
                  Subscribe
                </button>
              </div>
              {/* Social Icons */}
              <div className='flex gap-3 mt-6'>
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                  
                  <a  key={i}
                    href=""
                    className='w-8 h-8 rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-[rgba(255,255,255,0.6)] hover:border-[#DB4444] hover:text-[#DB4444] transition-colors'
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className='pb-5 font-poppins font-semibold text-[15px] text-[#FAFAFA] uppercase tracking-widest'>
                Support
              </h3>
              <div className='flex flex-col gap-3'>
                <p className='font-poppins font-normal text-[13px] leading-6 text-[rgba(255,255,255,0.5)]'>
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </p>
                <a href="" className='font-poppins font-normal text-[13px] text-[rgba(255,255,255,0.5)] hover:text-[#DB4444] transition-colors'>
                  exclusive@gmail.com
                </a>
                <a href="" className='font-poppins font-normal text-[13px] text-[rgba(255,255,255,0.5)] hover:text-[#DB4444] transition-colors'>
                  +88015-88888-9999
                </a>
              </div>
            </div>

            {/* Account */}
            <div>
              <h3 className='pb-5 font-poppins font-semibold text-[15px] text-[#FAFAFA] uppercase tracking-widest'>
                Account
              </h3>
              <div className='flex flex-col gap-3'>
                {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((link, i) => (
                  <a key={i} href="" className='font-poppins font-normal text-[13px] text-[rgba(255,255,255,0.5)] hover:text-[#DB4444] transition-colors'>
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Link */}
            <div>
              <h3 className='pb-5 font-poppins font-semibold text-[15px] text-[#FAFAFA] uppercase tracking-widest'>
                Quick Link
              </h3>
              <div className='flex flex-col gap-3'>
                {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((link, i) => (
                  <a key={i} href="" className='font-poppins font-normal text-[13px] text-[rgba(255,255,255,0.5)] hover:text-[#DB4444] transition-colors'>
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Download */}
            <div>
              <h3 className='pb-5 font-poppins font-semibold text-[15px] text-[#FAFAFA] uppercase tracking-widest'>
                Download App
              </h3>
              <p className='text-[12px] text-[rgba(255,255,255,0.35)] font-poppins pb-4'>
                Save $3 with App New User Only
              </p>
              <div className='flex items-center gap-3'>
                <a href="">
                  <img src={Qrcode} alt="QR Code" className='w-[72px] md:w-[80px] rounded-sm' />
                </a>
                <div className='flex flex-col gap-2'>
                  <a href="" className='hover:opacity-80 transition-opacity'>
                    <img src={Gplay} alt="Google Play" className='h-[30px] object-contain' />
                  </a>
                  <a href="" className='hover:opacity-80 transition-opacity'>
                    <img src={Appstore} alt="App Store" className='h-[30px] object-contain' />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className='flex flex-col md:flex-row items-center justify-center pt-6 gap-2'>
            <p className='font-poppins font-normal text-[13px] text-[rgba(255,255,255,0.2)]'>
              <span className='pe-1'>&copy;</span>Copyright Rimel 2022. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer