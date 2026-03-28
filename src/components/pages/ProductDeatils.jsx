import React, { useState } from 'react'
import preview from '../../assets/images/cons.png'
import gal1 from '../../assets/images/cons.png'
import gal2 from '../../assets/images/con1.png'
import gal3 from '../../assets/images/con2.png'
import product1 from '../../assets/images/product1.png'
import p2 from '../../assets/images/p2.png'
import p3 from '../../assets/images/p3.png'
import p4 from '../../assets/images/p4.png'
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { Link } from 'react-router'

const ProductDetails = () => {
    const gallery = [
        {thumbnail:gal1},
        {thumbnail:gal2},
        {thumbnail:gal3}
    ]
    const releted_products = [
        {id:1, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, image:product1, rating:65, discount:40},
        {id:2, name:'AK-900 Wired Keyboard', dprice:960, price:1160, image:p2, rating:50, discount:20},
        {id:3, name:'IPS LCD Gaming Monitor', dprice:370, price:400, image:p3, rating:75, discount:10},
        {id:4, name:'RGB liquid CPU Cooler', dprice:160, price:170, image:p4, rating:45, discount:15},
    ]
    const [previewImg, setPreviewImg] = useState(preview)
  return (
    <>
    <section className='pt-[109px] pb-[58px]'>
        <div className="container">
            <div className="flex">
                <div className="w-[60%]">
                    <div className="flex gap-[30px]">
                        <div className='flex w-[30%] flex-col gap-4 items-center'>
                            {
                                gallery.map((gal) => (
                                    <div onClick={() => setPreviewImg(gal.thumbnail)} className='bg-[#F5F5F5] py-3 px-6 rounded-sm'>
                                        <img src={gal.thumbnail} alt="" />
                                    </div>
                                ))
                            }
                            
                        </div>
                        <div className='bg-[#F5F5F5] flex items-center py-3 px-6 rounded-sm'>
                            <img src={previewImg} alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className="w-[40%]"></div>
            </div>
             
        </div>
    </section>
    </>
  )
}

export default ProductDetails