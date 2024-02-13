"use client"
import Image from "next/image";
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = ({ content }) => {
    const { title, para, testiContent } = content;
    // Slider Setting
    const testiSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
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
            <section className={`w-full flex py-8 md:py-12 lg:py-16`}>
                <div className="container">
                    <div className='flex items-start justify-between'>
                        <div className='w-full text-center'>
                            <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-none mb-3">
                                {title}
                            </h1>
                            <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className={`w-full md:w-[75%] lg:w-[60%] 3xl:w-[50%] mx-auto bg-[url("../../public/images/testimonial-bg.png")] bg-no-repeat bg-center bg-cover p-[30px] lg:py-[60px] xl:py-[90px] 2xl:py-[115px] 3xl:p-[71px] pb-[70px] slideBg`}>
                        <Slider {...testiSlider} className="testiSlider">
                            {testiContent.map((testimonial, index) => (
                                <div key={index} className="h-full">
                                    <div className="flex flex-col items-center">
                                        <Image src={testimonial.profile} className="w-[10%] mb-3" alt='Infinity Animation' />
                                        <Image src={testimonial.stars} className="w-[16%] mb-3" alt='Infinity Animation' />
                                        <h3 className="text-[24px] font-semibold font-sans leading-tight mb-3">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                            {testimonial.message}
                                        </p>
                                        {/* <h5 className="text-[20px] font-semibold font-sans leading-tight mb-3">
                                            {testimonial.company}
                                        </h5> */}
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

export default Testimonial
