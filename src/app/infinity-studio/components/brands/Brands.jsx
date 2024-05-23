import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ==== Images 
import ctaImg from "media/infinity-studio/ctaImg.png"

const Brands = ({ content }) => {
    const { title, subTitle, desc, isBtn } = content;
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    return (
        <>
            <section className='pt-[50px] lg:pt-[80px] relative'>
                <div className='px-5 sm:px-8 lg:max-w-7xl mx-auto bg-cover bg-center bg-no-repeat bg-[url("../../public/infinity-studio/brand.png")] rounded-xl py-[50px]'>
                    <div className="grid grid-cols-12">
                        <div className='col-span-12 lg:col-span-6'>
                            <div className="content">
                                <h2 className='text-[#fff] font-[700] poppins text-[20px] md:text-[25px] lg:text-[36px] leading-[28px] lg:leading-[56px]'>
                                    {title} <br />
                                </h2>
                                <p className='text-[#fff] text-[16px] lg:text-[18px] poppins font-[400] py-[20px] leading-[28px]'>
                                    {desc}
                                </p>
                            </div>
                            <div className="btns flex-wrap flex items-center justify-center md:justify-start gap-5 mt-0">
                                <div className="btn">
                                    <button onClick={popupHandle} className='flex items-center text-[16px] text-[#003262] font-[600] poppins bg-[#FFCC00] py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='absolute top-[1%] w-[43.5%] h-auto'>
                                <Image src={ctaImg} alt='Infinity Animations' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brands
