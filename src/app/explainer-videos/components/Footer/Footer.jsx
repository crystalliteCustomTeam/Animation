"use client"
// Imports Components
import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { ChatAlt2, Globe, Phone, User } from 'heroicons-react'
// Import Images
import logo from "media/images/black-logo.gif";
import Payment from "media/video-explainer/payment-img.png"
import UpArrow from "media/video-explainer/up-arrow.png"
import facebook from "media/icons/fb.png";
import twitter from "media/icons/x.png";
import youtube from "media/icons/youtube.png";
import instagram from "media/icons/insta.png";
import linkedin from "media/icons/linkedin.png";
import vimeo from "media/icons/vemio.png";


const Footer = () => {
    const quickLinks = [
        {
            text: "Home",
            link: "javascript:;"
        },
        {
            text: "Why Us",
            link: "javascript:;"
        },
        {
            text: "Portfolio",
            link: "javascript:;"
        },
        {
            text: "Process",
            link: "javascript:;"
        },
        {
            text: "Career",
            link: "javascript:;"
        },
        {
            text: "Pricing",
            link: "javascript:;"
        },
        {
            text: "Case Studies",
            link: "javascript:;"
        },
        {
            text: "Contact Us",
            link: "javascript:;"
        },
        {
            text: "Get Quote",
            link: "javascript:;"
        }
    ];
    const servicesLinks = [
        {
            text: "3D Animation",
            link: "javascript:;"
        },
        {
            text: "2D Animation",
            link: "javascript:;"
        },
        {
            text: "Whiteboard",
            link: "javascript:;"
        },
        {
            text: "Motion Graphics",
            link: "javascript:;"
        },
        {
            text: "Video Editing",
            link: "javascript:;"
        },
        {
            text: "Logo Animation",
            link: "javascript:;"
        },
        {
            text: "Architectural ",
            link: "javascript:;"
        },
        {
            text: "Visualization",
            link: "javascript:;"
        },
        {
            text: "CGI-VFX",
            link: "javascript:;"
        },
        {
            text: "Infographics",
            link: "javascript:;"
        },
        {
            text: "Hybrid & Cel",
            link: "javascript:;"
        },
    ];
    const resourceLinks = [
        {
            text: "Hire 2D Animator",
            link: "javascript:;"
        },
        {
            text: "Hire 3D Animator",
            link: "javascript:;"
        },
        {
            text: "Hire Animator",
            link: "javascript:;"
        },
        {
            text: "Hire Game Designer",
            link: "javascript:;"
        },
        {
            text: "Hire UI/UX Designer",
            link: "javascript:;"
        }
    ];
    const otherLinks = [
        {
            text: "Terms of Services",
            link: "javascript:;",
        },
        {
            text: "Privacy Policy",
            link: "javascript:;",
        },
    ];
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

    return (
        <footer className="bg-[#00C6F9] pt-[70px] 3xl:mt-0 relative z-[999]">
            <div className="px-5 lg:max-w-7xl mx-auto">
                <div className="flex gap-x-5 pb-8 flex-wrap lg:flex-nowrap justify-between gap-y-5 lg:gap-y-0">
                    <div className="basis-full sm:basis-[55%] md:pr-[55px] lg:basis-[30%]">
                        <Link href="javascript:;" className="lg:w-[25%]">
                            <Image src={logo} width={150} height={54} className="pb-3" alt="Animation Studio" />
                        </Link>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="address_detail">
                                <ul>
                                    <li className='py-[10px]'>
                                        <a href="tel:833-666-6689" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                            <Phone className='bg-[#ffffff] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> 833-666-6689
                                        </a>
                                    </li>
                                    <li className='py-[10px]'>
                                        <a href="mailto:queries@infinityanimations.com" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                            <EnvelopeIcon className='bg-[#ffffff] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> queries@infinityanimations.com
                                        </a>
                                    </li>
                                    <li className='py-[10px]'>
                                        <a href="https://infinityanimations.com" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                            <Globe className='bg-[#ffffff] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> www.infinityanimations.com
                                        </a>
                                    </li>
                                </ul>
                                <Image src={Payment} alt='Payment-Methods' className='w-5/12 lg:w-full my-3 object-contain' />
                                <div>
                                    <ul className="flex items-center gap-4 mt-4 md:mt-6">
                                        {
                                            socialLinks.map((e, i) => {
                                                return (
                                                    <li key={i} className="bg-transparent border border-[#ffffff] w-[45px] h-[45px] rounded-[5px] flex items-center justify-center p-1 hover:bg-second">
                                                        <Link target="_blank" href={e.link}>
                                                            <Image src={e.icon} className="w-[20px]" alt="Infinity Animation" />
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-full sm:basis-[48%] lg:basis-[20%]">
                        <h4 className="text-[16px] font-semibold poppins text-white leading-none mb-3">Quick Links</h4>
                        <ul>
                            {
                                quickLinks.map((e, i) => {
                                    return (
                                        <li key={i}>
                                            <Link href={e.link} className="text-[16px] text-white poppins font-normal hover:opacity-50 leading-[30px]">
                                                {e.text}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="basis-full sm:basis-[48%] lg:basis-1/4">
                        <h4 className="text-[16px] font-semibold poppins text-white leading-none mb-3">Quick Links</h4>
                        <ul>
                            {
                                servicesLinks.map((e, i) => {
                                    return (
                                        <li key={i}>
                                            <Link href={e.link} className="text-[16px] text-white poppins font-normal hover:opacity-50 leading-[30px]">
                                                {e.text}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="basis-full sm:basis-[48%] lg:basis-1/4">
                        <h4 className="text-[16px] font-semibold poppins text-white leading-none mb-3">Resource Augmentation</h4>
                        <ul>
                            {
                                resourceLinks.map((e, i) => {
                                    return (
                                        <li key={i}>
                                            <Link href={e.link} className="text-[16px] text-white poppins font-normal hover:opacity-50 leading-[30px]">
                                                {e.text}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex gap-x-5 py-5 flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0 items-center border-t border-[#ffffff]">
                    <div className="basis-full sm:basis-1/2">
                        <p className="text-sm poppins text-white leading-6 text-center sm:text-left">
                            © Copyright 2024 - Animation Studio
                        </p>
                    </div>
                    <div className="basis-full sm:basis-1/2">
                        <ul className="flex items-center justify-center sm:justify-end gap-4">
                            {
                                otherLinks.map((e, i) => {
                                    return (
                                        <li key={i}>
                                            <Link href={e.link} className="text-[16px] text-white poppins font-normal hover:opacity-50 leading-[30px]">
                                                {e.text}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;