import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { Star } from 'heroicons-react'
// ===== Images 
import Review1 from "media/explainer-videos/review1.png"
import Review2 from "media/explainer-videos/review2.png"
import Review3 from "media/explainer-videos/review3.png"
import clutchReview from "media/explainer-videos/clutchReview.PNG"

// Images 
import HandAnimation from "media/explainer-videos/hand-animation.gif"

const Form = () => {
    // For Date
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    // For Time
    let today = new Date();
    let setTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    let setDate = `${month < 10 ? `0${month}` : month}-${date}-${year}`;
    const [ip, setIP] = useState("");
    //creating function to load IP address from the API
    const getIPData = async () => {
        const res = await Axios.get(
            "https://api.ip2location.io/?key=F9B01293761EF666EB54678698AC8682"
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
    }, []);
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
        const phoneRegex = /^[0-9]+$/;
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
                    IP: `${ip.ip} - ${ip.country_name} - ${ip.city_name}`,
                    Brand: "Infinity Animations",
                    Page: pagenewurl,
                    Date: setDate,
                    Time: setTime,
                    JSON: { ...data, pageURL: pagenewurl },
                });
                let reqOptions = {
                    url: "https://sheetdb.io/api/v1/e9jx941paxuo0i",
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
            <section className={`pt-[20px] pb-[50px]`} id='portfolio'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="form bg-[#F5090B] rounded-xl px-4 md:px-6 py-4">
                        <h2 className='text-[18px] md:text-[24px] font-sans font-bold leading-[25px] md:leading-[60px] text-white'>🔥 Get Special Offer On Video Animation and So Much More! </h2>
                        <form action="#" className='pt-5' onSubmit={handleFormSubmit}>
                            <div className="lg:flex flex-wrap items-center gap-3">
                                <div className="name">
                                    <input type="text" name="name" placeholder='Name' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[370px] xl:w-[385px] focus:outline-none text-black mb-[15px] lg:mb-0' onChange={handleDataChange} />
                                    {errors.name && (
                                        <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-35%]">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>
                                <div className="phone-number">
                                    <input type="text" name="phone" placeholder='Phone Number' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[370px] xl:w-[385px] focus:outline-none text-black mb-[15px] lg:mb-0' onChange={handleDataChange} />
                                    {errors.phone && (
                                        <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-35%]">
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>
                                <div className="email">
                                    <input type="email" name="email" placeholder='Email' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[370px] xl:w-[385px] focus:outline-none text-black mb-[15px] lg:mb-0' onChange={handleDataChange} />
                                    {errors.email && (
                                        <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-35%]">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                                <div className="description">
                                    <textarea name="message" placeholder='Description' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] leading-[45px] text-center font-sans w-full lg:w-[750px] xl:w-[783px] focus:outline-none text-black mb-[15px] lg:mb-0 resize-none' onChange={handleDataChange}></textarea>
                                </div>
                                <button type="submit" className='w-full lg:w-[370px] xl:w-[385px] h-[45px] bg-gradient-to-r from-[#363636] to-[#000000] poppins rounded-[5px] font-semibold text-white relative' disabled={isDisabled}>
                                    <Image src={HandAnimation} alt='Animating Studio' className='absolute top-[-104px] right-0 ml-auto lg:block hidden' />
                                    <span>{formStatus}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form
