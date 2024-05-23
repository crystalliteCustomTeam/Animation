import React from 'react'
// css
import styles from "./Animations.module.css"

const Animations = () => {
    return (
        <>
            <section className='pb-[120px] relative'>
                <div className='px-4 sm:px-8 lg:max-w-7xl mx-auto '>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 mb-[40px]">
                            <h2 className='text-[#003262] text-center font-[600] poppins text-[20px] md:text-[30px] lg:text-[36px]'>Proven Statistics of Infinity Animations</h2>
                            <p className='text-[#231f20] text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] text-center lg:w-11/12 mx-auto leading-[22px]'>There is an immense amount of product animation & graphic content out there but here at Video Explain Art, <br /> we make sure our animation service & work stands out.</p>
                        </div>
                    </div>
                    <div className='px-[20px] rounded-[10px] relative'>
                        <div className="grid grid-cols-12 gap-6">
                            <div className={`${styles.counter} col-span-12 sm:col-span-6 lg:col-span-3`}>
                                <h4 className='text-[#003262] leading-[70px] text-[35px] md:text-[50px] lg:text-[70px] font-[700] montserrat text-center relative'>12 <sup className='text-[36px] font-[700] top-[20px] absolute'>+</sup></h4>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px] mt-4'>Years Of <br />
                                    Experience</p>
                            </div>
                            <div className={`${styles.counter} col-span-12 sm:col-span-6 lg:col-span-3`}>
                                <h4 className='text-[#003262] leading-[70px] text-[35px] md:text-[50px] lg:text-[70px] font-[700] montserrat text-center relative'>1600 <sup className='text-[36px] font-[700] top-[20px] absolute'>+</sup></h4>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px] mt-4'>Videos <br />
                                    Delivered</p>
                            </div>
                            <div className={`${styles.counter} col-span-12 sm:col-span-6 lg:col-span-3`}>
                                <h4 className='text-[#003262] leading-[70px] text-[35px] md:text-[50px] lg:text-[70px] font-[700] montserrat text-center relative'>1200 <sup className='text-[36px] font-[700] top-[20px] absolute'>+</sup></h4>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px] mt-4'>Clients <br />
                                    Across The World</p>
                            </div>
                            <div className={`${styles.counter} col-span-12 sm:col-span-6 lg:col-span-3`}>
                                <h4 className='text-[#003262] leading-[70px] text-[35px] md:text-[50px] lg:text-[70px] font-[700] montserrat text-center relative'>15 <sup className='text-[36px] font-[700] top-[20px] absolute'>+</sup></h4>
                                <p className='text-[#231f20] text-center font-[700] montserrat text- text-[18px] leading-[25px] mt-4'>Million <br /> Views</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Animations
