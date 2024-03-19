import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { usePathname } from 'next/navigation'
//===== Component
import usePopup from '@/app/configs/store/Popup';
//===== CSS
import styles from './banner.module.css'
// ===== Images
import BannerLogos from "media/video-explainer/bnr-logo.png"
import chatIcon from "media/video-explainer/chat-icon.png"
import { CheckCircle } from 'heroicons-react'

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
            <section className='bg-cover bg-center bg-[#003465f0] lg:bg-[url("../../public/video-explainer/banner.jpg")] h-[100%] pt-[180px] lg:pt-[265px] pb-[60px] md:pb-[100px] mt-[-85px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-12">
                        <div className="col-span-12 lg:col-span-6">
                            <h1 className='text-white text-[20px] md:text-[25px] lg:text-[30px] font-[700] uppercase montserrat lg:w-10/12 md:leading-[35px] '>EXPAND YOUR BRAND’S REACH WITH AN ENGAGING CUSTOM EXPLAINER VIDEO</h1>
                            <p className='text-white text-[18px] font-[400] montserrat lg:w-11/12 leading-[25px] py-[25px]'>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.</p>
                            <ul>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-white' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'> Full HD Animations</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-white' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Appealing Designs</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-white' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Latest Technology</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-white' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Award-Winning Agency</span>
                                </li>
                            </ul>
                            <Image src={BannerLogos} alt='banner-logos' className='object-contain mt-4 mb-6' />
                            <div className="flex gap-4 md:gap-2">
                                <div className="btn">
                                    <button onClick={popupHandle} className='flex items-center text-[16px] text-black font-[700] montserrat bg-[#f6c501] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                        Get Started
                                    </button>
                                </div>
                                <a href="javascript:$zopim.livechat.window.show();" className="chat flex items-center gap-2">
                                    <Image src={chatIcon} alt='chat-icon' className='w-[25px] ml-[10px]' />
                                    <div className="text">
                                        <span className='block montserrat text-[14px] font-[400] text-[#ffcb05] leading-[14px]'>Talk to our Expert</span>
                                        <span className='text-white text-[16px] montserrat font-[700]'>Live Chat</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <form action="javascript:;" className='bg-[#003465] pt-[20px] md:mr-[98px] md:ml-[40px] relative border-[6px] border-white lg:w-8/12 h-full'>
                                <h3 className='text-white text-[20px] md:text-[25px] leading-[30px] montserrat font-[700] text-left py-[10px] px-[20px]'>Share Your <br className='block' />
                                    <strong className='text-[30px] text-[#f6c501] md:ml-[2rem] font-extrabold '>
                                        Animation Idea
                                    </strong>
                                </h3>

                                <div className="form pt-[5px] px-[20px] pb-[30px]">
                                    <input type="text" name="name" placeholder='Enter your name' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                                    {errors.name && (
                                        <span className="text-[12px] block p-2 font-medium text-white">
                                            {errors.name}
                                        </span>
                                    )}

                                    <input type="email" name='email' placeholder='Enter Email' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                                    {errors.email && (
                                        <span className="text-[12px] block p-2 font-medium text-white">
                                            {errors.email}
                                        </span>
                                    )}


                                    <input type="tel" name='phone' minLength="10"
                                        maxLength="13"
                                        pattern="[0-9]*" placeholder='Enter Phone Number' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                                    {errors.phone && (
                                        <span className="text-[12px] block p-2 font-medium text-white">
                                            {errors.phone}
                                        </span>
                                    )}

                                    <textarea name='message' type="text" placeholder='Message' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] montserrat placeholder:text-[#858585] focus:outline-0 text-black' required onChange={handleDataChange}></textarea>

                                    <button type='submit' className='bg-[#231f20] hover:bg-[#1c2a49] text-white text-[16px] font-[700] montserrat uppercase mt-[10px] py-[13px] px-[8px] shadow-lg w-full duration-700 transition-all hover:duration-700 hover:transition-all' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                                </div>

                                <div className={`form_partical absolute top-[-7px] right-[42px] md:right-[12px] ${styles.discountbg}`}>
                                    <h6 className={`absolute font-[700] text-right uppercase left-[-33px] m-auto text-white top-[-20px] z-[1] text-[13px] rotate-[-8deg] right-[-58px] montserrat before:content-[''] before:absolute before:w-[135px] before:h-[52px] before:top-[-15px] before:left-[-17px] before:right-0 ${styles.headingParticle} before:rotate-[10deg] before:bg-cover before:bg-center before:z-[-1] w-[110px]`}>Special Offer</h6>
                                    <h4 className={`text-black relative m-0 top-[-2px] text-[30px] font-[700] right-[-32px] rotate-[-18deg] montserrat`}>50%</h4>
                                    <h5 className='m-0 text-black relative z-1 top-[-13px] text-[11px] montserrat font-[700] right-[-42px] rotate-[-18deg]'>Discount</h5>
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
