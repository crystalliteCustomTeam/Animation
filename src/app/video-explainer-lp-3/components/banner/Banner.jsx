import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Axios from "axios";
import { CheckCircle } from 'heroicons-react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
//===== CSS
import styles from './banner.module.css'
// ===== Images
import BannerLogos from "media/video-explainer2/bnr-logo.png"
import chatIcon from "media/video-explainer2/chatIcon.png"
import discount from "media/video-explainer2/bnr-form.png"

const Banner = () => {
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
    const [pagenewurl, setPagenewurl] = useState(null);
    useEffect(() => {
        setPagenewurl(window.location.href);
    }, [setPagenewurl]);
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        botchecker: null,
    });
    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [formStatus, setFormStatus] = useState("SUBMIT");
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

                let bodyContent = JSON.stringify({ ...data, pageURL: pagenewurl });
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
                    "IP": `${ip.ip} - ${ip.country_name} - ${ip.city_name}`,
                    "Brand": "Infinity Animations",
                    "Page": pagenewurl,
                    "Date": setDate,
                    "Time": setTime,
                    "JSON": { ...data, pageURL: pagenewurl },
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

    return (
        <>
            <section className='bg-cover bg-right bg-black/90 lg:bg-[url("../../public/video-explainer2/banner.png")] h-[100%] pt-[180px] lg:pt-[265px] pb-[60px] md:pb-[100px] mt-[-85px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-12">
                        <div className="col-span-12 lg:col-span-6">
                            <h1 className='text-white text-[20px] md:text-[25px] lg:text-[30px] font-[700] uppercase montserrat lg:w-10/12 md:leading-[35px]'>ANIMATED EXPLAINER VIDEOS THAT EXPAND YOUR BRAND REACH & INCREASE YOUR ROI</h1>
                            <p className='text-white text-[17px] font-[400] montserrat lg:w-11/12 leading-[25px] py-[25px]'>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.</p>
                            <ul>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Demo/Tutorial Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Training Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Animated commercial Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Promotional Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Marketing Videos</span>
                                </li>
                            </ul>
                            <Image src={BannerLogos} alt='banner-logos' className='object-contain mt-4 mb-6' />
                            <div className="flex gap-4 md:gap-2">
                                <div className="btn">
                                    <a href='tel:1-833-666-6689' className='flex items-center text-[14px] text-white font-[700] montserrat bg-[#A70A0E] py-[12px] px-[25px] md:px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                        Call Now
                                    </a>
                                </div>
                                <a href="javascript:$zopim.livechat.window.show();" className="chat flex items-center gap-2">
                                    <Image src={chatIcon} alt='chat-icon' className='w-[25px] ml-[10px]' />
                                    <div className="text">
                                        <span className='block montserrat text-[14px] font-[400] text-white leading-[14px]'>
                                            Chat Now to Avail 50% OFF
                                        </span>
                                        <span className='text-white text-[16px] montserrat font-[700]'>Live Chat</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <form action="javascript:;" className={`${styles.banForm} pt-[20px] md:mr-[98px] md:ml-[40px] relative border-[1px] border-[#A70A0E] md:border-white lg:w-8/12`}>
                                <h3 className='text-[20px] md:text-[30px] leading-[35px] montserrat font-[700] py-[10px] px-[20px] text-center'>
                                    Get a Free <br className='lg:block hidden' /> Consultation
                                </h3>
                                <div className="form pt-[5px] px-[20px] pb-[30px]">
                                    <div className="relative">
                                        <input type="text" name="name" placeholder='Enter your name' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-white' onChange={handleDataChange} required />
                                        {errors.name && (
                                            <span className="text-[10px] block p-2 font-medium font-sans text-white tracking-wider absolute left-0 bottom-[-38%]">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="email" name='email' placeholder='Enter Email' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-white' onChange={handleDataChange} required />
                                        {errors.email && (
                                            <span className="text-[10px] block p-2 font-medium font-sans text-white tracking-wider absolute left-0 bottom-[-36%]">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="tel" name='phone' minLength="10"
                                            maxLength="13"
                                            pattern="[0-9]*" placeholder='Enter Phone Number' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-white' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[10px] block p-2 font-medium font-sans text-white tracking-wider absolute left-0 bottom-[-36%]">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <textarea name='message' type="text" placeholder='Message' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-white resize-none' required onChange={handleDataChange}></textarea>

                                    <button type='submit' className='bg-[#A70A0E] hover:bg-[#1c2a49] text-white text-[16px] font-[700] montserrat uppercase mt-[10px] py-[13px] px-[8px] shadow-lg w-full duration-700 transition-all hover:duration-700 hover:transition-all' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                                </div>
                                <div>
                                    <Image src={discount} alt='Infinity Animation' className={`${styles.discountbg}`} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner
