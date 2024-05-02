import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import Css
import styles from "./portfolio.module.css"
// Import Images
import Thumbnail1 from "media/illustration-experts/profolio-img-1.webp"
import Thumbnail2 from "media/illustration-experts/profolio-img-2.png"
import Thumbnail3 from "media/illustration-experts/profolio-img-3.webp"
import Thumbnail4 from "media/illustration-experts/profolio-img-4.png"
import Thumbnail5 from "media/illustration-experts/profolio-img-5.png"
import Thumbnail6 from "media/illustration-experts/profolio-img-6.png"
import Thumbnail7 from "media/illustration-experts/profolio-img-7.png"
import Thumbnail8 from "media/illustration-experts/profolio-img-8.png"
import Thumbnail9 from "media/illustration-experts/profolio-img-9.png"
import PlayIcon from "media/icons/play.png"
import { FaEye } from "react-icons/fa";


const tabContents = [
    [
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/1.webp",
            thumbnail: Thumbnail1
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/2.png",
            thumbnail: Thumbnail2
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/3.webp",
            thumbnail: Thumbnail3
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/4.png",
            thumbnail: Thumbnail4
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/5.png",
            thumbnail: Thumbnail5
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/6.png",
            thumbnail: Thumbnail6
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/7.png",
            thumbnail: Thumbnail7
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/8.png",
            thumbnail: Thumbnail8
        },
        {
            image: "https://www.illustrationexperts.com/images/portfolio/home-port/9.png",
            thumbnail: Thumbnail9
        },
    ],

];
const Portfolio = () => {

    //Tabs
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    // Fancy box
    function Fancybox(props) {
        const containerRef = useRef(null);
        useEffect(() => {
            const container = containerRef.current;
            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};
            NativeFancybox.bind(container, delegate, options);
            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });
        return <div ref={containerRef}>{props.children}</div>;
    }
    // ====== Responsive Slider 
    const testiSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    return (
        <>
            <section className={` ${styles.portfolioSec} py-[50px] lg:pt-[100px] lg:pb-[40px]`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 justify-content-center ">
                            <h2 className='text-[#231f20] text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>Our Portfolio</h2>
                            <p className='text-[#231f20] text-center text-[15px] font-[300] montserrat leading-[25px] py-[25px]'>Whether you're preparing for new advertising materials or looking to upgrade your book covers, we’ve got you covered! Check out our exciting illustration portfolio for book covers, cartoons, children books, mascots, storyboards, and more.</p>
                            <div className={styles.folioBox}>
                                <div className="tabs-content pt-7 md:pt-12 hidden md:block">
                                    <Fancybox options={{
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}>
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
                                            {tabContents[activeTab].map((item, index) => (
                                                <Link key={index} href={item.image} datafancybox="gallery" className={`${styles.shadow} w-full h-full group`}>
                                                    <div className={` ${styles.box18}`}>
                                                        <Image src={item.thumbnail} alt="Infinity Animations" width={468} height={263} className='min-h-[263px]' />
                                                        <div className={styles.boxContent}> <FaEye size={34} /> </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </Fancybox>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 md:gap-8 justify-center py-[35px]">
                        <div className="btn">
                            <button className='flex items-center text-[16px] text-white hover:text-black font-[700] montserrat bg-[#fa690c] hover:bg-[#ffffff] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-full leading-[20px] shadow-2xl border-[1.5px] border-[#fa690c]  hover:border-black'>
                                Get Started
                            </button>
                        </div>
                        <div className="btn">
                            <button className='flex items-center text-[16px] text-black hover:text-white font-[700] montserrat bg-[#ffffff] hover:bg-[#fa690c] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-full leading-[20px] shadow-2xl border-[1.5px] border-[#000000] hover:border-[#fa690c]'>
                                Live Chat
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio 
