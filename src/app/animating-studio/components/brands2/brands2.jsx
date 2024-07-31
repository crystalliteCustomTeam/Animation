import React from 'react'
import Image from 'next/image'
// ==== Images 
import ctaImg from "media/infinity-studio/ctaImg.png"
import BtnMsg from "media/animating-studio/btn-message.svg"

const Brands = ({ content }) => {
    const { title, desc } = content;

    return (
        <>
            <section className='pb-[30px] md:pb-0 pt[50px] lg:pt-[90px] lg:relative px-4 xl:px-0 bg-white'>
                <div className="sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='px-6 sm:px-10 bg-cover bg-center bg-no-repeat bg-[url("../../public/infinity-studio/brand.svg")] rounded-xl pt-[35px] lg:pt-0 relative'>
                        <div className="grid grid-cols-12">
                            <div className='col-span-12 lg:col-span-7 pb-4 lg:pt-[30px] '>
                                <div className="content">
                                    <h2 className='text-[#fff] font-[700] poppins text-[22px] md:text-[25px] lg:text-[30px] xl:text-[36px] leading-[35px] md:leading-[40px] xl:leading-[50px]'>
                                        {title} <br />
                                    </h2>
                                    <p className='text-[#fff] text-[16px] xl:text-[18px] poppins font-[400] pt-[5px] pb-[12px] xl:pt-[12px] xl:pb-[26px] leading-[25px]'>
                                        {desc}
                                    </p>
                                </div>
                                <div className="btns flex-wrap flex items-center justify-start sm:gap-5 my-2 sm:mt-0">
                                    <div className="btn">
                                        <a href="tel:833-666-6689" className='flex items-center justify-center text-[15px] text-[#003262] font-[600] poppins bg-[#FFCC00] py-[12px] px-[10px] sm:px-[15px] md:px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl md:min-w-[180px]'>
                                            Get Started
                                        </a>
                                    </div>
                                    <div className="btn">
                                        <a href='javascript:$zopim.livechat.window.show();' className='flex items-center justify-center text-[15px] text-white font-[700] font-sans bg-transparent ml-[10px] border border-white py-[12px] px-[10px] sm:px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl md:min-w-[180px]'>
                                            <span className='mr-[15px]'><Image src={BtnMsg} /></span>  Live Chat
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-5 flex justify-center'>
                                <div className='lg:absolute lg:top-[1%] w-[400px] lg:w-[480px] xl:w-[580px] h-full lg:h-auto mb-0 flex items-end bottom-0 right-0 '>
                                    <Image src={ctaImg} alt='Infinity Animations ' className='  mb-0' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brands