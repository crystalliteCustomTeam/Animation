"use client"

import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { usePathname } from 'next/navigation'
import Link from 'next/link';

// pupup
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const Popup = () => {

    // popup start
    const [open, setOpen] = React.useState(true);

    const handleOpen = () => setOpen(!open);

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

    return (
        <>
            <Dialog open={open} handler={handleOpen} className='popup h-full w-full' style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(8px)' }}>
                <section className='h-full lg:w-full py-12 px-6'>
                    <div className='bg-cover bg-center popupBg lg:bg-[url("../../public/video-explainer/popup-bg2.png")] max-w-5xl mx-auto relative top-0 bottom-0 left-0 right-0 pt-[40px] lg:pt-[90px] h-full w-full'>
                        <button
                            variant="text"
                            onClick={handleOpen}
                            className='w-[45px] h-[45px] absolute top-[-17px] lg:top-[80px] right-[-8px] lg:right-[120px] text-[18px] text-black bg-[#e9e9e9] text-center montserrat rounded-[50%] flex items-center justify-center borderinset'
                        >
                            <span>X</span>
                        </button>
                        <div className="grid grid-cols-12">
                            <div className="col-span-12">
                                <h3 className='text-[20px] md:text-[26px] text-white font-[500] text-center p-0 montserrat'>Fill This Form to Avail</h3>
                                <h2 className='text-[28px] md:text-[40px] text-white text-center font-[700] montserrat'>Amazing Discounts</h2>
                                <h4 className='text-[20px] md:text-[26px] text-white text-center font-[700] montserrat'>on Video Animation Services</h4>
                                <form action="javascript:;" className='mx-auto px-5 lg:w-6/12 mt-5 h-full'>
                                    <div className="name relative w-full">
                                        <input type="text" name="name" placeholder='Enter your name' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] lg:py-[15px] px-[18px] w-full mb-[10px] font-[500] rounded-[6px]' onChange={handleDataChange} required />
                                        {errors.name && (
                                            <span className="text-[12px] block font-medium text-white">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="email relative w-full">
                                        <input type="email" name="email" placeholder='Enter Email' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] lg:py-[15px] px-[18px] w-full mb-[10px] font-[500] rounded-[6px]' onChange={handleDataChange} required />
                                        {errors.email && (
                                            <span className="text-[12px] block font-medium text-white">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className="phone relative">
                                        <input type="phone" name="phone" minLength={7} maxLength={15} placeholder='Enter Phone Number' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] lg:py-[15px] px-[18px] w-full mb-[10px] font-[500] rounded-[6px]' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[12px] block font-medium text-white">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="message relative">
                                        <textarea placeholder='Message' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] lg:py-[15px] px-[18px] w-full font-[500] rounded-[6px]'></textarea>
                                    </div>
                                    <div className="btn mt-3">
                                        <button type='submit' className='py-[15px] px-[30px] border-0 text-black text-[16px] uppercase font-[600] bg-white poppins w-full rounded-[6px]' onClick={handleFormSubmit} disabled={isDisabled}>
                                            {formStatus}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Dialog>
        </>
    )
}

export default Popup
// bg-black/40 backdrop-blur-lg 