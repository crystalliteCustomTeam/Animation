
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ==== Images 
import BrandLogos from "media/animating-studio/brand-logo.svg"
import BtnMsg from "media/animating-studio/btn-message.svg"

const BrandsThree = ({ content }) => {
    const { title, subTitle, desc, isBtn } = content;
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    return (
        <>
            <section className='pt-[50px] lg:pt-[80px] lg:relative px-4 xl:px-0 '>
                <div className='px-5 sm:px-8 xl:max-w-7xl mx-auto bg-cover bg-center bg-no-repeat bg-[url("../../public/animating-studio/brand-bg.svg")] rounded-xl pt-[25px] md:pt-[5px]'>
                    <div className="grid grid-cols-12">
                        <div className='col-span-12 pb-4 pt-2 lg:py-[25px] xl:py-[30px]'>
                            <div className="content">
                                <h3 className='text-[#fff] font-[600] poppins text-[15px] lg:text-[20px] xl:text-[30px] leading-[35px] xl:leading-[56px]'>
                                    {subTitle} <br />
                                </h3>
                                <h2 className='text-[#fff] font-[600] poppins text-[35px] lg:text-[40px] xl:text-[50px] leading-[32px] lg:leading-[40px] xl:leading-[60px]'>
                                    {title} <br />
                                </h2>
                                <p className='text-[#fff] text-[16px] xl:text-[18px] poppins font-[400] pt-[13px] pb-[20px] xl:pt-[20px] xl:pb-[30px] leading-[25px]'>
                                    {desc}
                                </p>
                            </div>
                            <div className='w-[95%] '>
                            <Image src={BrandLogos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrandsThree