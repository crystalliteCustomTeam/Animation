"use client"
import React from 'react'
import Image from 'next/image'
// Images
import HeadingParticle from "media/game-lp/heading-particle.png";
import TestimonialsSlider from './TestimonialsSlider';
const Testimonials = () => {
    return (
        <section className='pb-[50px] md:py-[50px] xl:py-[90px] relative'>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="txt text-center">
                            <h2 className='text-[30px] sm:text-[50px] lg:text-[60px] leading-[70px] sm:leading-[80px] lg:leading-[90px] font-semibold text-white poppins md:mb-3 relative w-full md:w-7/12 lg:w-8/12 xl:w-6/12 mx-auto'>
                                <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute left-[-45px] lg:left-[15px] top-[50%] translate-y-[-50%]' />
                                Testimonials
                                <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute right-[-45px] lg:right-[15px] top-[50%] translate-y-[-50%] rotate-180' />
                            </h2>
                            <p className='text-[13px] sm:text-[15px] xl:text-[18px] leading-[25px] sm:leading-[30px] xl:leading-[33px] text-white poppins md:w-10/12 lg:w-9/12 mx-auto xl:px-4 mb-7 xl:mb-14'>At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,</p>
                        </div>
                    </div>
                </div>
            </div>
            <TestimonialsSlider  />
        </section>
    )
}

export default Testimonials
