import Image from 'next/image'
import React from 'react'

// ==== Images 
import InnerImage from "media/infinity-studio/howBg.png"


const Work = () => {
    return (
        <>
            <section className='py-[50px] relative bg-[#F2F2F2] h-[74vh]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            <h3 className='text-[#003262] font-[600] poppins text-[20px] md:text-[30px] lg:text-[36px]'>How We Work</h3>
                            <p className='text-[#231f20] text-justify text-[16px] lg:text-[18px] poppins font-[400] py-[17px] leading-[30px]'>There is an immense amount of product animation & graphic content out there but here at Video Explain Art , we make sure our animation service & work stands out.</p>
                        </div>
                        <div className="col-span-6">
                            <div className='absolute right-[-2%] top-0 w-[50%]'>
                                <Image src={InnerImage} alt='Inner Image' className='w-11/12 mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work
