"use client"
// Next
import { useEffect, useRef } from 'react';
// Components
import TestimonialCard from './TestimonialCard'
import { register } from 'swiper/element/bundle'
import styles from './Testimonials.module.css'


const TestimonialSlider = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        register();
        const params = {
            pagination: "false",
            loop: "true",
            direction: "vertical",
            slidesPerView: "3",
            centeredSlides: "true",
            spaceBetween: "20",
            speed: 5000,
            roundLengths: true,
            mousewheel: true,
            grabCursor: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: "false"
            },
            breakpoints: {
                576: {
                    slidesPerView: 3,
                },
                300: {
                    slidesPerView: 2,
                },
            },
        };
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);
    let testiCard = [
        {
            title: "Jennifer Albert",
            desc: " They once again proved to be the best illustration designers. I am genuinely delighted by their fantastic work. Their entire process was swift and smooth. "
        },
        {
            title: "Jennifer Albert",
            desc: " They once again proved to be the best illustration designers. I am genuinely delighted by their fantastic work. Their entire process was swift and smooth. "
        },
        {
            title: "Jennifer Albert",
            desc: " They once again proved to be the best illustration designers. I am genuinely delighted by their fantastic work. Their entire process was swift and smooth. "
        },
        {
            title: "Jennifer Albert",
            desc: " They once again proved to be the best illustration designers. I am genuinely delighted by their fantastic work. Their entire process was swift and smooth. "
        },
    ]
    return (
        <swiper-container ref={swiperRef} init={false} class="md:h-[700px] sm:h-[600px] xs:h-[400px]">
            {
                testiCard && testiCard.map((e, i) => (
                    <swiper-slide key={i}>
                        <TestimonialCard
                            title={e.title}
                            desc={e.desc}
                        />
                    </swiper-slide>
                ))
            }
            {/* <div class="swiper-pagination"></div> */}
            <swiper-pagination className="hidden"></swiper-pagination>
        </swiper-container>
    )
}

export default TestimonialSlider
