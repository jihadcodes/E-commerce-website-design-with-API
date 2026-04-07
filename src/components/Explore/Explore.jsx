import React, { useEffect, useState } from 'react'
import explore from '../../assets/images/explore.png'
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import axios from 'axios';

const Explore = () => {

     const [product,setProduct] = useState([])

    useEffect(()=> {
        axios.get('https://dummyjson.com/products')
        .then(res => setProduct(res.data.products))
    }, [])
    console.log(product);
    

  return (
    <>
    <section>
            <div className="container border-b border-[rgba(0,0,0,0.25)] pb-[91px]">
                <div className='pb-[88px] text-center'>
                    <h3 className='font-inter text-[36px] leading-12 font-semibold text-black'>Explore Our Products</h3>
                </div>
                <div className="grid grid-cols-4 gap-x-[30px] gap-y-[60px] pb-[76px]">
                    <div className='product_item'>
                        <div className='bg-[#F5F5F5] p-[49px] rounded-sm'>
                            <img src={explore} alt="" />
                        </div>
                        <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>CANON EOS DSLR Camera</h3>
                        <div className='flex gap-2 pt-2'>
                            <p className='font-popins font-medium text-[16px] leading-6 flex gap-3'>
                                <span className='text-[#DB4444]'>$360</span> 
                            </p>
                            <div className='flex gap-1'>
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                            </div>
                            <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(88)</span>
                        </div>
                    </div>
                    <div className='product_item'>
                        <div className='bg-[#F5F5F5] p-[49px] rounded-sm'>
                            <img src={explore} alt="" />
                        </div>
                        <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>CANON EOS DSLR Camera</h3>
                        <div className='flex gap-2 pt-2'>
                            <p className='font-popins font-medium text-[16px] leading-6 flex gap-3'>
                                <span className='text-[#DB4444]'>$360</span> 
                            </p>
                            <div className='flex gap-1'>
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                            </div>
                            <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(88)</span>
                        </div>
                    </div>
                    <div className='product_item'>
                        <div className='bg-[#F5F5F5] p-[49px] rounded-sm'>
                            <img src={explore} alt="" />
                        </div>
                        <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>CANON EOS DSLR Camera</h3>
                        <div className='flex gap-2 pt-2'>
                            <p className='font-popins font-medium text-[16px] leading-6 flex gap-3'>
                                <span className='text-[#DB4444]'>$360</span> 
                            </p>
                            <div className='flex gap-1'>
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                            </div>
                            <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(88)</span>
                        </div>
                    </div>
                    <div className='product_item'>
                        <div className='bg-[#F5F5F5] p-[49px] rounded-sm'>
                            <img src={explore} alt="" />
                        </div>
                        <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>CANON EOS DSLR Camera</h3>
                        <div className='flex gap-2 pt-2'>
                            <p className='font-popins font-medium text-[16px] leading-6 flex gap-3'>
                                <span className='text-[#DB4444]'>$360</span> 
                            </p>
                            <div className='flex gap-1'>
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                            </div>
                            <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(88)</span>
                        </div>
                    </div>
                    <div className='product_item'>
                        <div className='bg-[#F5F5F5] p-[49px] rounded-sm'>
                            <img src={explore} alt="" />
                        </div>
                        <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>CANON EOS DSLR Camera</h3>
                        <div className='flex gap-2 pt-2'>
                            <p className='font-popins font-medium text-[16px] leading-6 flex gap-3'>
                                <span className='text-[#DB4444]'>$360</span> 
                            </p>
                            <div className='flex gap-1'>
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                            </div>
                            <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(88)</span>
                        </div>
                    </div>
                    <div className='product_item'>
                        <div className='bg-[#F5F5F5] p-[49px] rounded-sm'>
                            <img src={explore} alt="" />
                        </div>
                        <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>CANON EOS DSLR Camera</h3>
                        <div className='flex gap-2 pt-2'>
                            <p className='font-popins font-medium text-[16px] leading-6 flex gap-3'>
                                <span className='text-[#DB4444]'>$360</span> 
                            </p>
                            <div className='flex gap-1'>
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                            </div>
                            <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(88)</span>
                        </div>
                    </div>
                    <div className='product_item'>
                        <div className='bg-[#F5F5F5] p-[49px] rounded-sm'>
                            <img src={explore} alt="" />
                        </div>
                        <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>CANON EOS DSLR Camera</h3>
                        <div className='flex gap-2 pt-2'>
                            <p className='font-popins font-medium text-[16px] leading-6 flex gap-3'>
                                <span className='text-[#DB4444]'>$360</span> 
                            </p>
                            <div className='flex gap-1'>
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                            </div>
                            <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(88)</span>
                        </div>
                    </div>
                    <div className='product_item'>
                        <div className='bg-[#F5F5F5] p-[49px] rounded-sm'>
                            <img src={explore} alt="" />
                        </div>
                        <h3 className='font-popins font-medium text-[16px] text-black leading-6 pt-4'>CANON EOS DSLR Camera</h3>
                        <div className='flex gap-2 pt-2'>
                            <p className='font-popins font-medium text-[16px] leading-6 flex gap-3'>
                                <span className='text-[#DB4444]'>$360</span> 
                            </p>
                            <div className='flex gap-1'>
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[#FFAD33]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                                <TiStarFullOutline className='text-[20px] text-[rgba(0,0,0,0.5)]' />
                            </div>
                            <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]'>(88)</span>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <a href="" className='font-popins text-[#FAFAFA] text-[16px] leading-6 font-medium bg-[#DB4444] py-4 px-12 rounded-sm'>View All Products</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Explore