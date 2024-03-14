"use client"
import Image from "next/image";
import Link from "next/link";
import Axios from "axios";
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
// Import Images
import facebook from "media/icons/fb.png";
import twitter from "media/icons/x.png";
import youtube from "media/icons/youtube.png";
import instagram from "media/icons/insta.png";
import linkedin from "media/icons/linkedin.png";
const socialLinks = [
    {
        icon: facebook,
        link: "https://www.facebook.com/infinityanimationsofficial"
    },
    {
        icon: twitter,
        link: "https://twitter.com/infinityan_/"
    },
    {
        icon: instagram,
        link: "https://www.instagram.com/infinityanimationsofficials/"
    },
    {
        icon: linkedin,
        link: "https://www.linkedin.com/company/infinity-animations/"
    },
]
const Form = () => {
    // For Date
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
            "https://api.ip2location.io/?key=F9B01293761EF666EB54678698AC8682"
        );
        setIP(res);
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
                    IP: `${ip.ip} - ${ip.country_name} - ${ip.city_name}`,
                    Brand: "Infinity Animations",
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
            <form action="#" className="space-y-2 sm:space-y-4 md:space-y-8">
                <div>
                    <label htmlFor="subject" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal text-white">Full Name*</label>
                    <input type="text" id="name" name="name" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="Type Full Name" onChange={handleDataChange} />
                    {errors.name && (
                        <span className="text-[12px] block p-2 font-medium text-white">
                            {errors.name}
                        </span>
                    )}
                </div>
                <div>
                    <label htmlFor="subject" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal text-white">Phone*</label>
                    <input type="tel" id="phone" name="phone" minLength="10" maxLength="13" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="(000) 000-0000" onChange={handleDataChange} />
                    {errors.phone && (
                        <span className="text-[12px] block p-2 font-medium text-white">
                            {errors.phone}
                        </span>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal text-white">Email Address*</label>
                    <input type="email" id="email" name="email" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent" placeholder="Type Email" onChange={handleDataChange} />
                    {errors.email && (
                        <span className="text-[12px] block p-2 font-medium text-white">
                            {errors.email}
                        </span>
                    )}
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block sm:mb-2 font-sans tracking-wide text-[16px] font-normal text-white">Details*</label>
                    <textarea id="message" name="message" rows="2" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-0 border-b-2 focus:outline-none focus:border-primary-100 bg-transparent resize-none" placeholder="Type Full Details" onChange={handleDataChange} />
                </div>
                <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between pt-5">
                    <button type="submit" className="py-3 px-16 font-sans tracking-wide text-sm font-medium text-center text-white rounded-lg bg-prime w-full sm:w-fit hover:bg-primary-800 focus:outline-none" onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                    <ul className="flex items-center justify-center sm:justify-start gap-4">
                        {
                            socialLinks.map((e, i) => {
                                return (
                                    <li key={i} className="bg-second hover:bg-[#22212D] w-[45px] h-[45px] rounded-[5px] flex items-center justify-center p-1 hover:bg-second">
                                        <Link target="_blank" href={e.link}>
                                            <Image src={e.icon} className="w-[20px]" alt="Infinity Animation" />
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </form>
        </>
    )
}

export default Form
