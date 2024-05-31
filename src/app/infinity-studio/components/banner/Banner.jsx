import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Axios from "axios";
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ===== Images
import BannerLogos from "media/infinity-studio/bannerLogos.png"
import BannerLogosReel from "media/infinity-studio/play.png"
import Discount from "media/infinity-studio/offer.png"
import Check from "media/infinity-studio/check.png"

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
            <section className='bg-[#003465f0] lg:bg-[url("../../public/infinity-studio/banner.webp")] bg-[length:100%_100%] bg-center bg-no-repeat h-full 3xl:h-[100vh] pt-[115px] md:pt-[150px] 3xl:pt-[230px] pb-[60px] md:pb-[100px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-12 items-end ">
                        <div className="col-span-12 lg:col-span-8">
                            <h1 className='text-white text-[20px] md:text-[25px] lg:text-[28px] xl:text-[36px] font-[600] poppins lg:w-10/12 md:leading-[50px]'>Expand Your Brand’s Reach With An Engaging Custom <span className='text-[#f6c501] '> Explainer Video</span></h1>
                            <p className='text-white text-[16px] font-[400] poppins lg:w-11/12 leading-[25px] py-[20px]'>A leading Video Animation Production Company that helped thousands of Brands to broaden their product reach by Top Notch Custom Explainer Animated Videos.</p>
                            <div className="grid grid-cols-12 gap-y-6 items-end pb-0 pt-[25px] md:py-[25px]">
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2 rounded-full w-[100%] sm:w-[90%] md:w-[250px] h-[40px]'>
                                        <div className='w-[38px] h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild'/>
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins pt-[8px]'> Full HD Animations</span>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2  rounded-full w-[100%] sm:w-[90%] md:w-[250px] h-[40px]'>
                                        <div className='w-[38px] h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild'/>
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins pt-[8px]'> Appealing Designs</span>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2  rounded-full w-[100%] sm:w-[90%] md:w-[250px] h-[40px]'>
                                        <div className='w-[38px] h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild'/>
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins pt-[8px]'> Latest Technology</span>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                                    <div className='flex items-center gap-x-2 border-l-0 border-2  rounded-full w-[100%] sm:w-[90%] md:w-[250px] h-[40px]'>
                                        <div className='w-[38px] h-[37px]'>
                                            <Image src={Check} alt='banner-logos' className='img-fuild'/>
                                        </div>
                                        <span className='text-white font-[400] pb-[10px] poppins pt-[8px]'> Award-Winning Agency</span>
                                    </div>
                                </div>

                            </div>
                            <div className="hidden md:flex items-start gap-4 md:gap-10 mt-6">
                                <div className='w-[60%] h-auto'>
                                    <Image src={BannerLogos} alt='banner-logos' className='w-full' />
                                </div>
                                <div className='w-[85px] h-auto text-center'>
                                    <Image src={BannerLogosReel} alt='banner-logos' className='mb-2 mx-auto' />
                                    <span className='text-white font-normal poppins pt-[8px]'>Play Reels</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <form action="javascript:;" className='bg-[#003465] relative border-[3.5px] rounded-xl border-white w-full mx-auto'>
                                <div className=' w-[70%] top-0 mx-auto '>
                                    <Image src={Discount} />
                                </div>
                                <h3 className='text-white text-[20px] md:text-[22px] leading-[30px] poppins font-[700] text-center pt-[20px] pb-[10px] px-[20px]'>Share Your <span className='text-[#f6c501] '> Animation Idea </span>
                                </h3>
                                <div className="form pt-[5px] px-[20px] pb-[30px]">
                                    <div className="relative">
                                        <input type="text" name="name" placeholder='Enter your name' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black rounded-md' onChange={handleDataChange} required />
                                        {errors.name && (
                                            <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-40%] z-50">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="email" name='email' placeholder='Enter Email' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black rounded-md' onChange={handleDataChange} required />
                                        {errors.email && (
                                            <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-38%] z-50">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="tel" name='phone' minLength="10"
                                            maxLength="13"
                                            pattern="[0-9]*" placeholder='Enter Phone Number' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black rounded-md' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[12px] block p-2 font-bold poppins text-primary-100 absolute left-0 bottom-[-38%] z-50">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <textarea name='message' type="text" placeholder='Message' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none bg-[#f1f0f0] poppins placeholder:text-[#858585] focus:outline-0 text-black resize-none rounded-md' required onChange={handleDataChange}></textarea>

                                    <button type='submit' className='bg-[#ffcb05] text-black text-[16px] font-[700] rounded-md poppins uppercase mt-[10px] py-[13px] px-[8px] shadow-lg w-full duration-700 transition-all hover:duration-700 hover:transition-all' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
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
