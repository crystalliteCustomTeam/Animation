import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Axios from "axios";
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { ChatAlt2, Globe, Phone, User } from 'heroicons-react'
// ==== Images 
import Payment from "media/video-explainer2/payment-img.png"
import UpArrow from "media/video-explainer2/up-arrow.png"
import facebook from "media/icons/fb.png";
import twitter from "media/icons/x.png";
import youtube from "media/icons/youtube.png";
import instagram from "media/icons/insta.png";
import linkedin from "media/icons/linkedin.png";
import vimeo from "media/icons/vemio.png";

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
        link: "https://www.instagram.com/infinityanimationsofficials"
    },
    {
        icon: linkedin,
        link: "https://www.linkedin.com/company/infinity-animations/"
    },
    {
        icon: youtube,
        link: "https://www.youtube.com/@Infinity-Animations"
    },
    {
        icon: vimeo,
        link: "https://www.vimeo.com/infinityanimations"
    },
]

const Contact = () => {

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
            <section className='py-[50px] bg-[#000]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-4 my-auto">
                            <div className="address_detail ">
                                <ul>
                                    <li className='py-[10px]'>
                                        <a href="tel:833-666-6689" className='text-[16px] text-white montserrat flex items-center gap-2'>
                                            <Phone className='bg-[#fff] text-[#000] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> +1-000-000-0000
                                        </a>
                                    </li>
                                    <li className='py-[10px]'>
                                        <a href="mailto:queries@infinityanimations.com" className='text-[16px] text-white montserrat flex items-center gap-2'>
                                            <EnvelopeIcon className='bg-[#fff] text-[#000] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> sales.infinityanimations.com
                                        </a>
                                    </li>
                                    <li className='py-[10px]'>
                                        <a href="https://infinityanimations.com" className='text-[16px] text-white montserrat flex items-center gap-2'>
                                            <Globe className='bg-[#fff] text-[#000] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> www.infinityanimations.com
                                        </a>
                                    </li>
                                </ul>
                                <Image src={Payment} alt='Payment-Methods' className='w-5/12 lg:w-full my-3 object-contain' />
                            </div>
                        </div>
                        <div className=" lg:col-span-2 relative before:absolute before:my-auto before:inset-0 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-[70%] before:w-[0.3px] before:bg-[#FFCC00]">
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <h2 className='text-[#fff] font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>Get in Touch Now!</h2>
                            <p className='text-[#fff] text-[16px] lg:text-[18px] montserrat font-[400] pt-[10px] leading-[22px] pb-[30px]'>Its High Time to Showcase Your Store to the World</p>
                            <div className="form">
                                <form action="javascript:;">
                                    <div className="flex flex-col lg:flex-row items-center lg:gap-4 ">
                                        <div className="name relative w-full ">
                                            <User className='text-[#FFCC00] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                            <input type="text" name="name" placeholder='Enter your name' className='text-[14px] text-[#fff] placeholder:text-[#fff] montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500] bg-[#121212]' onChange={handleDataChange} required />
                                            {errors.name && (
                                                <span className="text-[11px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-15%] z-50">
                                                    {errors.name}
                                                </span>
                                            )}
                                        </div>
                                        <div className="email relative w-full">
                                            <EnvelopeIcon className='text-[#FFCC00] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                            <input type="email" name="email" placeholder='Enter Your Email' className='text-[14px] text-[#fff] placeholder:text-[#fff] montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500] bg-[#121212]' onChange={handleDataChange} required />
                                            {errors.email && (
                                                <span className="text-[11px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-15%] z-50">
                                                    {errors.email}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="phone relative">
                                        <Phone className='text-[#FFCC00] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                        <input type="phone" name="phone" minLength={7} maxLength={15} placeholder='Enter Phone Number' className='text-[14px] text-[#fff] placeholder:text-[#fff] montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500] bg-[#121212]' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[11px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-15%] z-50">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="message relative">
                                        <ChatAlt2 className='text-[#FFCC00] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                        <textarea name='message' placeholder='Type Message' rows={4} className='text-[14px] text-[#fff] placeholder:text-[#fff] montserrat py-[10px] px-[35px] w-full mb-[10px] font-[500] resize-none bg-[#121212]' onChange={handleDataChange}></textarea>
                                    </div>
                                    <div className="btn mt-3">
                                        <button type='submit' className='py-[10px] px-[30px] border-0 text-white text-[16px] uppercase font-[600] bg-[#004E98] hover:bg-[#1C2A49] poppins rounded-[5px]' onClick={handleFormSubmit} disabled={isDisabled}>
                                            {formStatus}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="copyright py-[20px] bg-[#000] border-t-[0.5px] border-[#fff]">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto relative">
                    <p className='text-[14px] text-[#fff] montserrat text-center'>Copyright © 2024,  <Link target="_blank" className="no-underline" href="https://bhaooinc.com/">Infinity Animations All Rights Reserved</Link></p>
                    <div className="top-icon absolute right-0 top-[-60px]">
                        <Link href="#" className='bg-black w-[80px] h-[80px] text-center text-white font-[500] uppercase rounded-[60%] align-middle border-[5px] border-[#FFCC00] absolute right-0 lg:flex flex-col justify-center items-center md:block hidden'>
                            <Image src={UpArrow} alt='upArrow' className='mx-auto' />
                            <p className='text-[14px] text-center poppins'>Top</p>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact


// "use client"
// // Imports Components
// import Image from "next/image";
// import Link from "next/link";
// import { EnvelopeIcon } from '@heroicons/react/24/solid'
// import { ChatAlt2, Globe, Phone, User } from 'heroicons-react'
// // Import Images
// import logo from "media/images/black-logo.gif";
// import Payment from "media/video-explainer/payment-img.png"
// import UpArrow from "media/video-explainer/up-arrow.png"
// import facebook from "media/icons/fb.png";
// import twitter from "media/icons/x.png";
// import youtube from "media/icons/youtube.png";
// import instagram from "media/icons/insta.png";
// import linkedin from "media/icons/linkedin.png";
// import vimeo from "media/icons/vemio.png";
// import { useEffect, useState } from "react";


// const Footer = () => {
//     const quickLinks = [
//         {
//             text: "Home",
//             link: "javascript:;"
//         },
//         {
//             text: "Why Us",
//             link: "javascript:;"
//         },
//         {
//             text: "Portfolio",
//             link: "javascript:;"
//         },
//         {
//             text: "Process",
//             link: "javascript:;"
//         },
//         {
//             text: "Career",
//             link: "javascript:;"
//         },
//         {
//             text: "Pricing",
//             link: "javascript:;"
//         },
//         {
//             text: "Case Studies",
//             link: "javascript:;"
//         },
//         {
//             text: "Contact Us",
//             link: "javascript:;"
//         },
//         {
//             text: "Get Quote",
//             link: "javascript:;"
//         }
//     ];
//     const servicesLinks = [
//         {
//             text: "3D Animation",
//             link: "javascript:;"
//         },
//         {
//             text: "2D Animation",
//             link: "javascript:;"
//         },
//         {
//             text: "Whiteboard",
//             link: "javascript:;"
//         },
//         {
//             text: "Motion Graphics",
//             link: "javascript:;"
//         },
//         {
//             text: "Video Editing",
//             link: "javascript:;"
//         },
//         {
//             text: "Logo Animation",
//             link: "javascript:;"
//         },
//         {
//             text: "Architectural ",
//             link: "javascript:;"
//         },
//         {
//             text: "Visualization",
//             link: "javascript:;"
//         },
//         {
//             text: "CGI-VFX",
//             link: "javascript:;"
//         },
//         {
//             text: "Infographics",
//             link: "javascript:;"
//         },
//         {
//             text: "Hybrid & Cel",
//             link: "javascript:;"
//         },
//     ];
//     const resourceLinks = [
//         {
//             text: "Hire 2D Animator",
//             link: "javascript:;"
//         },
//         {
//             text: "Hire 3D Animator",
//             link: "javascript:;"
//         },
//         {
//             text: "Hire Animator",
//             link: "javascript:;"
//         },
//         {
//             text: "Hire Game Designer",
//             link: "javascript:;"
//         },
//         {
//             text: "Hire UI/UX Designer",
//             link: "javascript:;"
//         }
//     ];
//     const otherLinks = [
//         {
//             text: "Terms of Services",
//             link: "/terms-and-conditions",
//         },
//         {
//             text: "Privacy Policy",
//             link: "/privacy-policy",
//         },
//     ];
//     const socialLinks = [
//         {
//             icon: facebook,
//             link: "https://www.facebook.com/infinityanimationsofficial"
//         },
//         {
//             icon: twitter,
//             link: "https://twitter.com/infinityan_/"
//         },
//         {
//             icon: instagram,
//             link: "https://www.instagram.com/infinityanimationsofficials"
//         },
//         {
//             icon: linkedin,
//             link: "https://www.linkedin.com/company/infinity-animations/"
//         },
//         {
//             icon: youtube,
//             link: "https://www.youtube.com/@Infinity-Animations"
//         },
//         {
//             icon: vimeo,
//             link: "https://www.vimeo.com/infinityanimations"
//         },
//     ];
//     // form Start
//     let newDate = new Date();
//     let date = newDate.getDate();
//     let month = newDate.getMonth() + 1;
//     let year = newDate.getFullYear();
//     // For Time
//     let today = new Date();
//     let setTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     let setDate = `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`;

//     const [ip, setIP] = useState("");
//     //creating function to load ip address from the API
//     const getIPData = async () => {
//         const res = await Axios.get(
//             "https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8"
//         );
//         setIP(res.data);
//     };
//     useEffect(() => {
//         getIPData();
//     }, []);
//     // For Page
//     const [pagenewurl, setPagenewurl] = useState(null);
//     useEffect(() => {
//         setPagenewurl(window.location.href);
//     }, [setPagenewurl]);
//     const [data, setData] = useState({
//         name: "",
//         phone: "",
//         email: "",
//         message: "",
//         botchecker: null,
//     });
//     const handleDataChange = (e) => {
//         setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };
//     const [formStatus, setFormStatus] = useState("Submit");
//     const [errors, setErrors] = useState({});
//     const [isDisabled, setIsDisabled] = useState(false);
//     const formValidateHandle = () => {
//         let errors = {};
//         // Name validation
//         if (!data.name.trim()) {
//             errors.name = "Name is required";
//         }
//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!data.email.match(emailRegex)) {
//             errors.email = "Valid email is required";
//         }
//         // Phone validation
//         const phoneRegex = /[0-9]/i;
//         if (!data.phone.match(phoneRegex)) {
//             errors.phone = "Valid phone is required";
//         }
//         return errors;
//     };
//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         setFormStatus("Processing...");
//         setIsDisabled(true);

//         const errors = formValidateHandle();
//         setErrors(errors);

//         if (Object.keys(errors).length === 0) {
//             if (data.botchecker === null) {
//                 let headersList = {
//                     Accept: "*/*",
//                     "Content-Type": "application/json",
//                 };

//                 let bodyContent = JSON.stringify({ ...data, pageURL: pagenewurl });
//                 let reqOptions = {
//                     url: "/api/email",
//                     method: "POST",
//                     headers: headersList,
//                     data: bodyContent,
//                 };
//                 await Axios.request(reqOptions);
//             } else {
//                 setFormStatus("Failed...");
//                 setIsDisabled(false);
//             }
//         } else {
//             setFormStatus("Failed...");
//             setIsDisabled(false);
//         }

//         if (Object.keys(errors).length === 0) {
//             if (data.botchecker === null) {


//                 let headersList = {
//                     Accept: "*/*",
//                     Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
//                     "Content-Type": "application/json",
//                 };

//                 let bodyContent = JSON.stringify({
//                     "IP": `${ip.ip} - ${ip.country_name} - ${ip.city_name}`,
//                     "Brand": "Infinity Animations",
//                     "Page": pagenewurl,
//                     "Date": setDate,
//                     "Time": setTime,
//                     "JSON": { ...data, pageURL: pagenewurl },
//                 });
//                 let reqOptions = {
//                     url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
//                     method: "POST",
//                     headers: headersList,
//                     data: bodyContent,
//                 };
//                 await Axios.request(reqOptions);
//                 window.location.href = "/thank-you";
//             }
//         }
//     };
//     return (
//         <>
//             <footer className="bg-[#00C6F9] pt-[70px] pb-[70px] 3xl:mt-0 relative z-[999]">
//                 <div className="px-5 lg:max-w-7xl mx-auto">
//                     <div className="grid grid-cols-12 gap-4">
//                         <div className="col-span-12 lg:col-span-4">
//                             <Link href="javascript:;" className="lg:w-[25%]">
//                                 <Image src={logo} width={150} height={54} className="pb-3" alt="Animation Studio" />
//                             </Link>
//                             <div className="col-span-12 lg:col-span-4">
//                                 <div className="address_detail">
//                                     <ul>
//                                         <li className='py-[10px]'>
//                                             <a href="tel:833-666-6689" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
//                                                 <Phone className='bg-[#ffffff] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> 833-666-6689
//                                             </a>
//                                         </li>
//                                         <li className='py-[10px]'>
//                                             <a href="mailto:queries@infinityanimations.com" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
//                                                 <EnvelopeIcon className='bg-[#ffffff] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> queries@infinityanimations.com
//                                             </a>
//                                         </li>
//                                         <li className='py-[10px]'>
//                                             <a href="https://infinityanimations.com" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
//                                                 <Globe className='bg-[#ffffff] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> www.infinityanimations.com
//                                             </a>
//                                         </li>
//                                     </ul>
//                                     <Image src={Payment} alt='Payment-Methods' className='w-5/12 lg:w-full my-3 object-contain' />
//                                     <div>
//                                         <ul className="flex items-center gap-4 mt-4 md:mt-6">
//                                             {
//                                                 socialLinks.map((e, i) => {
//                                                     return (
//                                                         <li key={i} className="bg-transparent border border-[#ffffff] w-[45px] h-[45px] rounded-[5px] flex items-center justify-center p-1 hover:bg-second">
//                                                             <Link target="_blank" href={e.link}>
//                                                                 <Image src={e.icon} className="w-[20px]" alt="Infinity Animation" />
//                                                             </Link>
//                                                         </li>
//                                                     );
//                                                 })
//                                             }
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="lg:col-span-2"></div>
//                         <div className="col-span-12 lg:col-span-6">
//                             <h2 className='text-white font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>
//                                 Get A Free Consultation with An Experienced Animation Expert
//                             </h2>
//                             <p className='text-white text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] leading-[22px] pb-[60px]'>Book a meeting with a member of our team to learn more and get a quote today!</p>
//                             <div className="form">
//                                 <form action="javascript:;">
//                                     <div className="flex-wrap flex items-center">
//                                         <div className="name relative w-full">
//                                             <User className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
//                                             <input type="text" name="name" placeholder='Enter your name' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500]' onChange={handleDataChange} required />
//                                             {errors.name && (
//                                                 <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-16%]">
//                                                     {errors.name}
//                                                 </span>
//                                             )}
//                                         </div>
//                                         <div className="email relative w-full">
//                                             <EnvelopeIcon className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
//                                             <input type="email" name="email" placeholder='Enter Email' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500]' onChange={handleDataChange} required />
//                                             {errors.email && (
//                                                 <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-16%]">
//                                                     {errors.email}
//                                                 </span>
//                                             )}
//                                         </div>
//                                     </div>
//                                     <div className="phone relative">
//                                         <Phone className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
//                                         <input type="phone" name="phone" minLength={7} maxLength={15} placeholder='Enter Phone Number' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500]' onChange={handleDataChange} required />
//                                         {errors.phone && (
//                                             <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-16%]">
//                                                 {errors.phone}
//                                             </span>
//                                         )}
//                                     </div>
//                                     <div className="message relative">
//                                         <ChatAlt2 className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
//                                         <textarea name='message' placeholder='Message' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[10px] font-[500] resize-none' onChange={handleDataChange}></textarea>
//                                     </div>
//                                     <div className="btn mt-3">
//                                         <button type='submit' className='py-[10px] px-[30px] border-0 text-white text-[16px] uppercase font-[600] bg-[#fff] poppins' onClick={handleFormSubmit} disabled={isDisabled}>
//                                             {formStatus}
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//             <div className="copyright">
//                 <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto relative">
//                     <div className="flex gap-x-5 py-3 flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0 items-center border-t border-[#ffffff]">
//                         <div className="basis-full sm:basis-1/2">
//                             <p className="text-sm poppins text-black leading-6 text-center sm:text-left">
//                                 © Copyright 2024 - Infinity Animations
//                             </p>
//                         </div>
//                         <div className="basis-full sm:basis-1/2">
//                             <ul className="flex items-center justify-center sm:justify-end gap-4">
//                                 {
//                                     otherLinks.map((e, i) => {
//                                         return (
//                                             <li key={i}>
//                                                 <Link href={e.link} className="text-[16px] text-black poppins font-normal hover:opacity-50 leading-[30px]">
//                                                     {e.text}
//                                                 </Link>
//                                             </li>
//                                         );
//                                     })
//                                 }
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Footer;