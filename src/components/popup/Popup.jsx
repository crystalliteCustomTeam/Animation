"use client"
import Axios from "axios";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
// pupup
import { Dialog } from "@material-tailwind/react";
import usePopup from '@/app/configs/store/Popup';
// Images
import btnClose from 'media/video-explainer/popup-btn.png'


const Popup = ({ }) => {

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
    const [formStatus, setFormStatus] = useState("Submit");
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
            <Dialog open={popup} handler={popupHandle} className='popup h-full w-full' style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(8px)' }}>
                <section className='h-full lg:w-full py-12 px-4 md:px-6'>
                    <div className='popupBg bg-none lg:bg-[url("../../public/video-explainer/popup-bg.png")] bg-[length:100%_100%] bg-center bg-no-repeat max-w-4xl lg:max-w-3xl xl:max-w-4xl 3xl:max-w-5xl mx-auto relative top-[50px] md:top-[100px] lg:top-[0%] xl:top-[35px] 3xl:top-[75px] bottom-0 left-0 right-0 h-[78%] md:h-auto lg:h-[110%] xl:lg:h-[90%] 3xl:h-[660px] w-full'>
                        <div className='w-[40px] xl:w-[50px] h-[40px] xl:h-[50px] absolute top-[2%] right-[2%] flex items-center justify-center text-center rounded-[50%] border-0 cursor-pointer'>
                            <Image onClick={popupHandle} src={btnClose} className="w-full" alt='Infinity Animations' />
                        </div>
                        <div className="grid grid-cols-12 lg:w-5/12 lg:absolute right-[5%] top-[12%] xxl:top-[15%] pt-14 md:pt-20 lg:pt-0">
                            <div className="col-span-12">
                                <h3 className='text-[24px] xl:text-[26px] leading-[42px] text-black text-center font-bold montserrat mb-0'>
                                    Get A Free Quote Today!
                                </h3>
                                <form action="javascript:;" className='mx-auto px-5 mt-3 md:mt-5 h-full'>
                                    <div className="name mt-1 relative w-full">
                                        <input type="text" name="name" placeholder='Enter Your Name' className='text-[14px] text-black placeholder:text-[#D5D5D5] focus:outline-none montserrat px-[18px] h-[45px] md:h-[50px] lg:h-[40px] xl:h-[50px] w-full mb-[10px] font-[500] rounded-[6px] shadow-md' onChange={handleDataChange} required />
                                        {errors.name && (
                                            <span className="absolute left-[5px] bottom-[-5px] text-[11px] block font-medium text-[#EF0707]">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="email mt-1 relative w-full">
                                        <input type="email" name="email" placeholder='Enter Email Address' className='text-[14px] text-black placeholder:text-[#D5D5D5] focus:outline-none montserrat px-[18px] h-[45px] md:h-[50px] lg:h-[40px] xl:h-[50px] w-full mb-[10px] font-[500] rounded-[6px] shadow-md' onChange={handleDataChange} required />
                                        {errors.email && (
                                            <span className="absolute left-[5px] bottom-[-5px] text-[11px] block font-medium text-[#EF0707]">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className="phone mt-1 relative w-full">
                                        <input type="phone" name="phone" placeholder='Enter Phone Number' minLength={7} maxLength={15} className='text-[14px] text-black placeholder:text-[#D5D5D5] focus:outline-none montserrat px-[18px] h-[45px] md:h-[50px] lg:h-[40px] xl:h-[50px] w-full mb-[10px] font-[500] rounded-[6px] shadow-md' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="absolute left-[5px] bottom-[-5px] text-[11px] block font-medium text-[#EF0707]">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="message mt-1 relative w-full">
                                        <textarea name='message' placeholder='Message' className='text-[14px] text-black placeholder:text-[#D5D5D5] focus:outline-none montserrat px-[18px] py-[12px] h-[60px] md:h-[100px] w-full font-[500] rounded-[6px] shadow-md resize-none' onChange={handleDataChange}></textarea>
                                    </div>
                                    <div className="btn mt-2 w-full text-end">
                                        <button type='submit' className='h-[45px] w-max px-[50px] lg:px-[25px] border-0 bg-black text-white text-[15px] font-[600] poppins rounded-[6px] ml-auto' onClick={handleFormSubmit} disabled={isDisabled}>
                                            {formStatus}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='w-[50%] md:w-[30%] lg:w-[20%] h-[40px] absolute top-[0%] left-[25%] md:left-[35%] lg:left-[65%] flex items-center justify-center text-center border-0 bg-[#EF0707] text-white text-[14px] font-bold montserrat uppercase rounded-t-none rounded-[10px]'>
                            <span>Get A Call</span>
                        </div>
                    </div>
                </section>
            </Dialog>
        </>
    )
}

export default Popup