import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Axios from "axios";
import { usePathname } from 'next/navigation'
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
    const [formStatus, setFormStatus] = useState(" Get Started");
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
                    Brand: "Infinity Animation",
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

    return (
        <>
            <section className='bg-cover bg-right bg-primary-100/60 lg:bg-[url("../../public/video-explainer2/banner.png")] h-[100%] pt-[150px] lg:pt-[190px] pb-[60px] md:pb-[100px] mt-[-85px] xl:mt-[-75px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-12">
                        <div className="col-span-12 lg:col-span-6">
                            <h1 className='text-white text-[20px] md:text-[25px] lg:text-[30px] font-[700] uppercase montserrat lg:w-10/12 md:leading-[35px]'>UNLOCK YOUR STORY WITH CAPTIVATING EXPLAINER VIDEO THAT SPEAK VOLUMES!</h1>
                            <p className='text-white text-[17px] font-[400] montserrat lg:w-11/12 leading-[25px] py-[25px]'>Spark interest and drive action! Elevate your brand with our vibrant explainer video services. Memorable storytelling, impact guaranteed – unleash your narrative today.</p>
                            <ul>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Product Explainer Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Animated Business Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Animated Marketing Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Corporate Animated Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Commercial Animations</span>
                                </li>
                            </ul>
                            <Image src={BannerLogos} alt='banner-logos' className='object-contain mt-4 mb-6' />
                            <div className="flex gap-4 md:gap-2">
                                <div className="btn">
                                    <button onClick={popupHandle} className='flex items-center text-[14px] text-white font-[700] montserrat bg-[#A70A0E] py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                        Get Started
                                    </button>
                                </div>
                                <a href="javascript:$zopim.livechat.window.show();" className="chat flex items-center gap-2">
                                    <Image src={chatIcon} alt='chat-icon' className='w-[25px] ml-[10px]' />
                                    <div className="text">
                                        <span className='block montserrat text-[14px] font-[400] text-white leading-[14px]'>Talk to our Expert</span>
                                        <span className='text-white text-[16px] montserrat font-[700]'>Live Chat</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <form action="javascript:;" className={`${styles.banForm} pt-[20px] md:mr-[98px] md:ml-[40px] relative border-[1px] border-white lg:w-8/12`}>
                                <h3 className='text-white text-[20px] md:text-[25px] leading-[30px] montserrat font-[700] text-left py-[10px] px-[20px]'>Share Your <br className='block' />
                                    <strong className='text-[30px] font-extrabold '>
                                        Animation Idea
                                    </strong>
                                </h3>

                                <div className="form pt-[5px] px-[20px] pb-[30px]">
                                    <input type="text" name="name" placeholder='Enter your name' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-black' onChange={handleDataChange} required />
                                    {errors.name && (
                                        <span className="text-[12px] block p-2 font-medium text-white">
                                            {errors.name}
                                        </span>
                                    )}

                                    <input type="email" name='email' placeholder='Enter Email' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-black' onChange={handleDataChange} required />
                                    {errors.email && (
                                        <span className="text-[12px] block p-2 font-medium text-white">
                                            {errors.email}
                                        </span>
                                    )}

                                    <input type="tel" name='phone' minLength="10"
                                        maxLength="13"
                                        pattern="[0-9]*" placeholder='Enter Phone Number' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-black' onChange={handleDataChange} required />
                                    {errors.phone && (
                                        <span className="text-[12px] block p-2 font-medium text-white">
                                            {errors.phone}
                                        </span>
                                    )}

                                    <textarea name='message' type="text" placeholder='Message' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-black' required onChange={handleDataChange}></textarea>

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
