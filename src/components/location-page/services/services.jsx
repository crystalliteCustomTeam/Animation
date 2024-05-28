import Image from 'next/image'
import React from 'react'

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ===== Images 
import ServiceImg1 from "media/location-page/service-img-1.png"
import ServiceImg2 from "media/location-page/service-img-2.png"


const Services = () => {
    const tabInfo = [
        { image: ServiceImg1, title: "2D Animations", para: `Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin, we redefine narratives through animations and innovation.` },
        { image: ServiceImg2, title: "3D Animation", para: `Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin, we redefine narratives through animations and innovation.` },
        { image: ServiceImg1, title: "Architectural Animation", para: `Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin, we redefine narratives through animations and innovation.` },
        { image: ServiceImg1, title: "CGI & VFX", para: `Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin, we redefine narratives through animations and innovation.` },
        { image: ServiceImg2, title: "Infographics", para: `Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin, we redefine narratives through animations and innovation.` },
        { image: ServiceImg1, title: "Motion Graphics", para: `Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin, we redefine narratives through animations and innovation.` },
    ];

    // Slider Setting
    const testiSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                }
            }
        ]
    };

    return (
        <>
            <section className=' py-[50px] lg:py-[80px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 text-center">
                        <p className='text-[#fff] text-[16px] lg:text-[30px] montserrat font-[400] py-[12px] text-center lg:w-10/12 mx-auto leading-none '>Visuals to Entice & Excite</p>
                            <h1 className={`leading-[6rem] text-[40px] md:text-[50px] xl:text-[75px] text-[#FF2D4A] font-bold font-sans  pb-[20px] sm:pb-[40px] capitalize`}>
                                our service
                            </h1>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <div className="grid grid-cols-12 gap-6">
                            {tabInfo.map((items, i) => (
                                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                    <div className="card rounded-[10px] bg-black shadow-2xl pt-[5px] px-[20px] pb-[35px] h-full">
                                        <Image src={items.image} alt='card' />
                                        <div className="content">
                                            <h3 className='text-[#fff] text-[20px] md:text-[25px] font-[800] montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] text-center lg:h-[76px] hover:text-[#FF2D4A]'>{items.title}</h3>
                                            <p className='text-[11px] sm:text-[14px] montserrat text-[#fff] font-[300] h-[125px] leading-[1.52857143] md:pr-[17px] lg:h-[125px] text-center '>{items.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:hidden block">
                        <Slider {...testiSlider} className="typeSlider">
                            {tabInfo.map((items, i) => (
                                <div className='p-3'>
                                    <div className="card rounded-[10px] bg-black shadow-2xl pt-[25px] px-[20px] pb-[35px] h-[375px]">
                                        <Image src={items.image} alt='card-1' />
                                        <div className="content">
                                            <h3 className='text-[#fff] text-[20px] md:text-[27px] font-[900] montserrat pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] text-center lg:h-[96px]'>{items.title}</h3>
                                            <p className='text-[11px] sm:text-[13px] montserrat text-[#fff] font-light h-[125px] leading-[1.42857143] md:pr-[17px] lg:h-[125px] text-center '>{items.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
