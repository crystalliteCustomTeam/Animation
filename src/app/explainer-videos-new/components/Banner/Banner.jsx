"use client"

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import usePopup from '@/app/configs/store/Popup';
import Axios from "axios";
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
    const { bannerImage } = content;

    // Form Code Start
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    // form Start 
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    // For Time
    let today = new Date();
    let setTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let setDate = `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`;

    const [ip, setIP] = useState("");
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get(
            "https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8"
        );
        setIP(res.data);
    };
    useEffect(() => {
        getIPData();
    }, []);
    // For Page
    let page = usePathname();
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        botchecker: null,
        pageURL: page
    });
    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [formStatus, setFormStatus] = useState("GET IN TOUCH");
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const formValidateHandle = () => {
        let errors = {};
        // Name validation
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = "Valid email is required";
        }
        // Phone validation
        const phoneRegex = /[0-9]/i;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = "Valid phone is required";
        }
        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");
        setIsDisabled(true);

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            if (data.botchecker === null) {
                let headersList = {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                };

                let bodyContent = JSON.stringify(data);
                let reqOptions = {
                    url: "/api/email",
                    method: "POST",
                    headers: headersList,
                    data: bodyContent,
                };
                await Axios.request(reqOptions);
            } else {
                setFormStatus("Failed...");
                setIsDisabled(false);
            }
        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
        }
        if (Object.keys(errors).length === 0) {
            if (data.botchecker === null) {
                let headersList = {
                    Accept: "*/*",
                    Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                    "Content-Type": "application/json",
                };
                let bodyContent = JSON.stringify({
                    IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
                    Brand: "Infinity ANimation",
                    Page: `${page}`,
                    Date: setDate,
                    Time: setTime,
                    JSON: data,
                });
                let reqOptions = {
                    url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
                    method: "POST",
                    headers: headersList,
                    data: bodyContent,
                };
                await Axios.request(reqOptions);
                window.location.href = "/thank-you";
            }
        }
    };

    // Form Code End
    return (
        <>
            <section className="bg-[url('../../public/explainer-videos-new/banner-bg.png')] bg-cover bg-center bg-no-repeat relative py-[80px] xl:py-[0px] xl:h-[90vh] 2xl:h-screen flex items-center justify-center min-h-[646px] overflow-hidden mt-[60px] md:mt-[66px]">
                <div className="particals">
                    <Image src={Particle1} alt='Infinity Animations' className='absolute top-[4rem] left-[4rem] z-[999] rotate' />
                    <Image src={Particle2} alt='Infinity Animations' className='absolute top-[4rem] left-0 right-0 m-auto z-[999] rotate' />
                    <Image src={Particle3} alt='Infinity Animations' className='absolute left-[2rem] z-[999] rotate' />
                    <Image src={Particle4} alt='Infinity Animations' className='absolute left-0 bottom-0 z-[999] md:block hidden' />
                    <Image src={Particle5} alt='Infinity Animations' className='absolute left-0 right-[10rem] bottom-[1rem] m-auto z-[999] rotate' />
                    <Image src={Particle6} alt='Infinity Animations' className='absolute right-[4rem] bottom-[3rem] z-[999] rotate' />
                    <Image src={Particle7} alt='Infinity Animations' className='absolute right-[-16rem] left-0 bottom-[70px] m-auto z-[999] rotate' />
                    <Image src={Particle8} alt='Infinity Animations' className='absolute left-[53rem] top-[4rem] z-[999] rotate' />
                    <Image src={Particle9} alt='Infinity Animations' className='absolute right-[13px] lg:right-[70px] top-[1rem] z-[999] lg:z-[9991] rotate md:block hidden' />
                    <Image src={Particle10} alt='Infinity Animations' className='absolute bottom-[30%] right-[45rem] z-[999] rotate' />
                </div>
                <div className="lg:block hidden video-div w-full h-auto absolute z-[9] overflow-hidden before:content-[''] before:bg-[#442891] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[90] before:opacity-[0.7]">
                    <video src={bannerImage} autoPlay={true} loop={true} muted={true} className='relative h-full xl:left-0 inline-block'>
                    </video>
                </div>
                <div className="xxl:container max-w-7xl mx-auto px-5 lg:px-8 xl:px-0 relative z-[999]">
                    <div className="grid grid-cols-12 gap-y-6">
                        <div className="col-span-12 lg:col-span-6">
                            <div className='lg:mt-[50px]'>
                                <span className='text-[20px] font-[700] font-sans text-white bg-[#f36e16] py-[5px] px-[10px] inline-block'>GET 60 SECONDS</span>
                                <h1 className='text-[50px] md:text-[70px] font-[700] text-white poppins leading-[1.1] lg:w-8/12 mb-2'>Animated
                                    Video <span className='bg-[#f36e16] px-[10px] relative font-[600] inline-block h-[55px] md:h-[75px]'>$165</span>
                                </h1>
                                <p className='text-white text-[16px] md:text-[19px] mb-[20px] poppins xl:w-10/12 2xl:w-full'>We Deliver Professional Video Solutions and production strategies to deliver impactful and eye-catching videos</p>
                            </div>
                            <div className="btns flex items-center justify-between md:w-8/12 pt-2 mb-[35px]">
                                <div className="btn1">
                                    <button onClick={popupHandle} className='btn_shadow text-[16px] md:text-[18px] text-[#9a9a9a] bg-white py-[10px] px-[25px] md:px-[40px] relative poppins cursor-pointer font-[700] rounded-[30px] uppercase'>
                                        LET'S
                                        <span className='text-[#f36e16]'> ANIMATE</span>
                                    </button>
                                </div>
                                <div className="chat">
                                    <Link href="javascript:$zopim.livechat.window.show();" className='text-[#f36e16] font-[700] text-[20px] leading-[1.2] inline-block cursor-pointer poppins text-center'>
                                        <span className='text-white block text-[13px]'>24/7 Available </span>
                                        Live Chat
                                    </Link>
                                </div>
                            </div>
                            <div className="brands">
                                <Image src={Brands} alt='' />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="form_wrapper px-4 md:px-6 py-6 lg:py-14 rounded-2xl xl:hidden block bg-[#f36e16]">
                                <div className="content">
                                    <h2 className='text-[33px] md:text-[42px] font-[700] text-white xl:text-black poppins leading-[35px] md:leading-[42px] mb-3'>Let’s <br /> Conceptualize</h2>
                                    <p className='text-[17px] md:text-[20px] mb-[25px] leading-[1.2] md:leading-[1.43] font-sans text-white xl:text-[#292b2c]'>Your idea and animate it with creative expertise</p>
                                </div>
                                <form action="javascript:;">
                                    <div className="relative">
                                        <input type="text" name='name' placeholder='Full Name *' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-4' onChange={handleDataChange} required />

                                        {errors.phone && (
                                            <span className="absolute left-[5px] bottom-[-1px] text-[11px] block font-medium lg:text-[12px] text-[#EF0707] poppins">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="email" name="email" placeholder='Email Address' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-4' onChange={handleDataChange} required />

                                        {errors.phone && (
                                            <span className="absolute left-[5px] bottom-[-1px] text-[11px] block font-medium lg:text-[12px] text-[#EF0707] poppins">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="phone" name="phone" placeholder='Phone No' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-4' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="absolute left-[5px] bottom-[-1px] text-[11px] block font-medium lg:text-[12px] text-[#EF0707] poppins">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <textarea name='message' placeholder='Brief Description' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[8px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-2 md:mb-4 resize-none border' onChange={handleDataChange}></textarea>
                                    </div>
                                    <button type='submit' className='bg-[#442891] text-white rounded-[6px] md:rounded-[30px] py-[8px] px-[35px] btn_shadow border-0 text-[18px] relative poppins cursor-pointer font-[700] uppercase' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Part Start */}
                <div className="form_bg bg-[url('../../public/explainer-videos-new/form-bg.png')] bg-cover bg-center w-[755px] xl:w-[805px] 3xl:w-[955px] h-screen absolute right-0 top-0 z-[999] xl:block hidden">
                    <div className="form_wrapper pt-[11rem] xxl:pt-[15rem] 3xl:pt-[20rem] pr-[7rem] pb-[6rem] pl-[14rem]">
                        <div className="content">
                            <h2 className='text-[42px] font-[700] text-black poppins leading-[42px] mb-3'>Let’s <br /> Conceptualize</h2>
                            <p className='text-[20px] mb-[25px] leading-[1.43] font-sans text-[#292b2c]'>Your idea and animate it with creative expertise</p>
                        </div>
                        <form action="javascript:;">
                            <div className="relative">
                                <input type="text" name='name' placeholder='Full Name *' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-2 md:mb-4' onChange={handleDataChange} required />

                                {errors.phone && (
                                    <span className="absolute left-[17px] bottom-[-1px] text-[11px] lg:text-[13px] block font-medium text-[#EF0707] poppins">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                            <div className="relative">
                                <input type="email" name="email" placeholder='Email Address' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-2 md:mb-4' onChange={handleDataChange} required />

                                {errors.phone && (
                                    <span className="absolute left-[17px] bottom-[-1px] text-[11px] lg:text-[13px] block font-medium text-[#EF0707] poppins">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                            <div className="relative">
                                <input type="phone" name="phone" placeholder='Phone No' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[13px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-2 md:mb-4' onChange={handleDataChange} required />
                                {errors.phone && (
                                    <span className="absolute left-[17px] bottom-[-1px] text-[11px] lg:text-[13px] block font-medium text-[#EF0707] poppins">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                            <div className="relative">
                                <textarea name='message' placeholder='Brief Description' className='bg-white rounded-[6px] md:rounded-[30px] border-none w-full text-[14px] text-[#999] pt-[15px] pr-[15px] pb-[8px] pl-[25px] poppins focus:outline-none placeholder:text-[#3b3b3b] mb-2 md:mb-4 resize-none border' onChange={handleDataChange}></textarea>
                            </div>
                            <button type='submit' className='bg-[#442891] text-white rounded-[6px] md:rounded-[30px] py-[8px] px-[35px] btn_shadow border-0 text-[18px] relative poppins cursor-pointer font-[700] uppercase' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                        </form>
                    </div>
                </div>
                {/* Form Part End */}
            </section>
            {/* Brands Section */}
            <section className='py-[50px]'>
                <div className="max-w-7xl mx-auto">
                    <Image src={Partners} alt='Infinity Animations' className='mx-auto' />
                </div>
            </section>
            {/* Brands Section */}
        </>
    )
}

export default Banner
