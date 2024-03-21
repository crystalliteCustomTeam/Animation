import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Images 
import Brands from "media/explainer-videos-new/brands.png"
import Partners from "media/explainer-videos-new/partners.png"
import Particle1 from "media/explainer-videos-new/particle1.png"
import Particle2 from "media/explainer-videos-new/particle2.png"
import Particle3 from "media/explainer-videos-new/particle3.png"
import Particle4 from "media/explainer-videos-new/particle4.png"
import Particle5 from "media/explainer-videos-new/particle5.png"
import Particle6 from "media/explainer-videos-new/particle6.png"
import Particle7 from "media/explainer-videos-new/particle7.png"
import Particle8 from "media/explainer-videos-new/particle8.png"
import Particle9 from "media/explainer-videos-new/particle9.png"
import Particle10 from "media/explainer-videos-new/particle10.png"

const Banner = ({ content }) => {
    const { bannerImage } = content
    return (
        <>
            <section className="bg-[url('../../public/explainer-videos-new/banner-bg.png')] bg-cover bg-center bg-no-repeat relative h-screen flex items-center justify-center min-h-[646px] overflow-hidden mt-[66px]">
                <div className="particals">
                    <Image src={Particle1} alt='Infinity Animations' className='absolute top-[4rem] left-[4rem] z-[999] rotate' />
                    <Image src={Particle2} alt='Infinity Animations' className='absolute top-[4rem] left-0 right-0 m-auto z-[999] rotate' />
                    <Image src={Particle3} alt='Infinity Animations' className='absolute left-[2rem] z-[999] rotate' />
                    <Image src={Particle4} alt='Infinity Animations' className='absolute left-0 bottom-0 z-[999]' />
                    <Image src={Particle5} alt='Infinity Animations' className='absolute left-0 right-[10rem] bottom-[1rem] m-auto z-[999] rotate' />
                    <Image src={Particle6} alt='Infinity Animations' className='absolute right-[4rem] bottom-[3rem] z-[999] rotate' />
                    <Image src={Particle7} alt='Infinity Animations' className='absolute right-[-16rem] left-0 bottom-[70px] m-auto z-[999] rotate' />
                    <Image src={Particle8} alt='Infinity Animations' className='absolute left-[53rem] top-[4rem] z-[999] rotate' />
                    <Image src={Particle9} alt='Infinity Animations' className='absolute right-[70px] top-[1rem] z-[9991] rotate' />
                    <Image src={Particle10} alt='Infinity Animations' className='absolute bottom-[30%] right-[45rem] z-[999] rotate' />
                </div>
                <div className="video-div w-full h-auto absolute z-[9] overflow-hidden before:content-[''] before:bg-[#442891] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[90] before:opacity-[0.7]">
                    <video src={bannerImage} autoPlay={true} loop={true} muted={true} className='relative left-[-37%] inline-block'>
                    </video>
                </div>
                <div className="max-w-7xl mx-auto relative z-[999]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            <div className='lg:mt-[50px]'>
                                <span className='text-[20px] font-[700] font-sans text-white bg-[#f36e16] py-[5px] px-[10px] inline-block'>GET 60 SECONDS</span>
                                <h1 className='text-[70px] font-[700] text-white poppins leading-[1.1] lg:w-8/12 mb-2'>Animated
                                    Video <span className='bg-[#f36e16] px-[10px] relative font-[600] inline-block h-[75px]'>$165</span>
                                </h1>
                                <p className='text-white text-[19px] mb-[20px] poppins'>We Deliver Professional Video Solutions and production strategies to deliver impactful and eye-catching videos</p>
                            </div>
                            <div className="btns flex items-center justify-between w-8/12 pt-2 mb-[35px]">
                                <div className="btn1">
                                    <Link href="javacript:;" className='btn_shadow text-[18px] text-[#9a9a9a] bg-white py-[10px] px-[40px] relative poppins cursor-pointer font-[700] rounded-[30px] uppercase'>
                                        LET'S
                                        <span className='text-[#f36e16]'> ANIMATE</span>
                                    </Link>
                                </div>
                                <div className="chat">
                                    <Link href="javascript:;" className='text-[#f36e16] font-[700] text-[20px] leading-[1.2] inline-block cursor-pointer poppins text-center'>
                                        <span className='text-white block text-[13px]'>24/7 Available </span>
                                        Live Chat
                                    </Link>
                                </div>
                            </div>
                            <div className="brands">
                                <Image src={Brands} alt='' />
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="form_bg bg-[url('../../public/explainer-videos-new/form-bg.png')] bg-cover bg-center w-[755px] h-screen absolute right-[-124px] top-[-128px] z-[999]">
                                <div className="form_wrapper pt-[11rem] pr-[7rem] pb-[6rem] pl-[14rem]">
                                    <div className="content">
                                        <h2 className='text-[42px] font-[700] text-black poppins leading-[42px] mb-3'>Let’s <br /> Conceptualize</h2>
                                        <p className='text-[20px] mb-[25px] leading-[1.43] font-sans text-[#292b2c]'>Your idea and animate it with creative expertise</p>
                                    </div>
                                    <form action="javascript:;">
                                        <input type="text" placeholder='Full Name *' className='bg-white rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-4' required />

                                        <input type="text" placeholder='Email Address' className='bg-white rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-4' required />

                                        <input type="text" placeholder='Phone No' className='bg-white rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-4' required />

                                        <textarea placeholder='Brief Description' className='bg-white rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[8px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-4 resize-none border'></textarea>

                                        <button className='bg-[#442891] text-white rounded-[30px] py-[8px] px-[35px] btn_shadow border-0 text-[18px] relative poppins cursor-pointer font-[700] uppercase'>GET IN TOUCH</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Brands Section */}
            <section className='py-[50px]'>
                <div className="max-w-7xl mx-auto">
                    <Image src={Partners} alt='Infinity Animations'  className='mx-auto'/>
                </div>
            </section>
            {/* Brands Section */}
        </>
    )
}

export default Banner
