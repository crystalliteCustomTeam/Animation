
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ==== Images 
import ctaImg from "media/animating-studio/brand-4.svg"
import BtnMsg from "media/animating-studio/btn-message.svg"

const BrandsFour = ({ content }) => {
    const { title, subTitle, desc, isBtn } = content;
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    return (
        <>
            <section className='pt-0 md:pt-[50px] lg:pt-[130px] lg:relative px-4 xl:px-0 mt-[70px] mb-[25px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='px-10 bg-cover bg-center bg-no-repeat bg-[url("../../public/infinity-studio/brand.svg")] rounded-xl  pt-[35px] md:pt-[5px]'>
                        <div className="grid grid-cols-12">
                        <div className='col-span-12 lg:col-span-7 pb-4 lg:py-[30px] '>
                                <div className="content">
                                    <h2 className='text-[#fff] font-[700] poppins text-[20px] lg:text-[25px] xl:text-[36px] leading-[22px] lg:leading-[30px] xl:leading-[50px]'>
                                        {title} <br />
                                    </h2>
                                    <p className='text-[#fff] text-[16px] xl:text-[18px] poppins font-[400] pt-[5px] pb-[7px] xl:pt-[12px] xl:pb-[22px] leading-[25px]'>
                                        {desc}
                                    </p>
                                </div>
                                <div className="btns flex-wrap flex items-center justify-center lg:justify-start gap-5 mt-0">
                                    <div className="btn">
                                        <button onClick={popupHandle} className='flex items-center justify-center text-[16px] text-[#003262] font-[600] poppins bg-[#FFCC00] py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl md:min-w-[180px]'>
                                            Get Started
                                        </button>
                                    </div>
                                    <div className="btn">
                                        <a href='tel:833-666-6689' className='flex items-center justify-center text-[15px] text-white font-[700] font-sans bg-transparent ml-[10px] border border-white py-[12px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl md:min-w-[180px]'>
                                            <span className='mr-[15px]'><Image src={BtnMsg} /></span>  Live Chat
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-5 flex justify-center'>
                                <div className='lg:absolute lg:bottom-[-9%] w-[400px] lg:w-[42%] xl:w-[42%] 2xl:w-[36%] xxl:w-[31%] 3xl:w-[28%] h-full lg:h-auto mb-0 flex items-end bottom-0  right-0 xl:me-[-45px] xl:right-auto'>
                                    <Image src={ctaImg} alt='Infinity Animations ' className='img-fluid mb-0' />
                                </div>
                                {/* <div className='lg:absolute lg:top-[1%] w-[400px] lg:w-[46%] xl:w-[46%] 2xl:w-[40%] xxl:w-[35%] 3xl:w-[32%] h-full lg:h-auto mb-0 flex items-end bottom-0 right-0 xl:right-auto'>
                                    <Image src={ctaImg} alt='Infinity Animations ' className='img-fluid mb-0' />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrandsFour