import React, { useEffect, useState } from 'react'
import phone from '../../assets/images/phone.png'
import monitor from '../../assets/images/monitor.png'
import watch from '../../assets/images/watch.png'
import camera from '../../assets/images/camera.png'
import headphone from '../../assets/images/headphone.png'
import gamepad from '../../assets/images/gamepad.png'
import axios from 'axios'

const categories = [
  { img: phone, label: 'Phones' },
  { img: monitor, label: 'Computers' },
  { img: watch, label: 'SmartWatch' },
  { img: camera, label: 'Camera' },
  { img: headphone, label: 'HeadPhones' },
  { img: gamepad, label: 'Gaming' },
]

const Category = () => {



  return (
    <section className="pt-12 xl:pt-20">
      <div className="container pb-16 xl:pb-[130px] border-b border-[rgba(0,0,0,0.3)]">

        <div className="pb-8 xl:pb-[60px]">
          <h2 className="font-inter font-semibold text-[24px] xl:text-[36px] text-[#000000] leading-tight xl:leading-12">
            Browse By Category
          </h2>
        </div>

        <div className="grid grid-cols-3 xl:grid-cols-6 gap-3 xl:gap-[30px]">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="item pt-4 xl:pt-[25px] px-4 xl:px-[57px] border border-[rgba(0,0,0,0.3)] rounded-sm flex flex-col items-center xl:items-start"
            >
              <img src={cat.img} alt={cat.label} className="pb-3 xl:pb-4 w-10 xl:w-auto mx-auto" />
              <p className="pb-4 xl:pb-6 font-poppins font-normal text-[13px] xl:text-[16px] leading-6 text-[#000000] text-center xl:text-left">
                {cat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Category