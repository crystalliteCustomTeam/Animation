import React, { useState } from 'react';
// CSS
import styles from "./explainer.module.css";
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// usePopup
import usePopup from '@/app/configs/store/Popup';

const Explainer = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const cards = [
        {
            title: 'Brand Video',
            content: 'We craft animated videos to improve your brand’s presence and it requires a different approach to adopt.',
        },
        {
            title: '2D, 3D Animated Videos',
            content: 'We make compelling and highly engaging 2D and 3D videos in a variety of styles and at various levels of difficulty.',
        },
        {
            title: 'Commercial Videos',
            content: 'We produce exceptional commercial videos that will keep your clients hooked and boost your brand engagement.',
        },
    ];

    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }

    // Slider Setting
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
            <section className='pt-[50px] pb-[80px] md:py-[80px]'>
                <div className='px-4 sm:px-8 lg:max-w-7xl mx-auto'>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 mb-[30px]">
                            <h2 className='text-[#A70A0E] text-center font-[600] poppins text-[15px] md:text-[20px] lg:text-[25px]'>Why Explainer Videos</h2>
                            <h2 className='text-[#003262] text-center font-[600] poppins text-[20px] md:text-[30px] lg:text-[36px]'>Are Key to <span className='font-[700]'>Digital Branding</span></h2>
                            <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px]'>
                                Simple words or symbols do not attract as many people as video animation does. If you're <br className='hidden lg:block' /> about to introduce a product or service, animated videos are the perfect way to make a shout <br className='hidden lg:block' /> out on the digital landscapes.
                            </p>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {cards.map((card, index) => (
                                <div key={index} className={`${index === activeIndex ? styles.cardActive : styles.card1} pt-[50px] pb-[30px] px-3 rounded-[20px]`}>
                                    <div className={`card flex flex-col items-center justify-between`}>
                                        <div className={`pt-2 ${styles.iconImg1}`}></div>
                                        <h3 className='text-[#231f20] text-[20px] md:text-[24px] font-[700] pt-[20px] pb-[10px] text-center poppins'>{card.title}</h3>
                                        <p className='text-[#333333] opacity-[0.9] mb-6 text-[16px] poppins w-[90%] mx-auto text-center leading-[1.42857143]'>{card.content}</p>
                                        <button onClick={popupHandle} className='flex items-center text-[15px] text-[#003262] font-[500] poppins bg-[#FFCC00] ml-[10px] py-[10px] px-[40px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all mt-3'>
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:hidden block">
                        <Slider {...testiSlider} className="explainSlider">
                            {cards.map((card, index) => (
                                <div key={index} className={`${styles[`card${index + 1}`]} py-[25px] px-3 rounded-[20px]`}>
                                    <div className={`card flex flex-col items-center`}>
                                        <div className={`pt-2 ${styles[`iconImg${index + 1}`]}`}></div>
                                        <h3 className='text-[#231f20] text-[20px] md:text-[24px] font-[700] pt-[20px] pb-[10px] text-center poppins'>{card.title}</h3>
                                        <p className='text-[#333333] opacity-[0.9] mb-6 text-[16px] poppins w-[90%] mx-auto text-center leading-[1.42857143]'>{card.content}</p>
                                        <button onClick={popupHandle} className='flex items-center text-[15px] text-[#003262] font-[500] poppins bg-[#FFCC00] ml-[10px] py-[10px] px-[40px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all mt-3'>
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Explainer;
