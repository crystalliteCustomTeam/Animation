"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

//   Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//==== Testimonial Images
import PlayIcon from "media/icons/play.png"
import icon2 from "media/infinity-studio-lp-new/stars.png";
import Grace from "media/thumbnails/grace.png";
import Alex from "media/thumbnails/alex.png";
import Olivia from "media/thumbnails/olivia.png";
import David from "media/thumbnails/david.jpg";
import Emma from "media/thumbnails/emma.jpg";
import Michael from "media/thumbnails/michael.jpg";
import Sarah from "media/thumbnails/sarah.png";
import clutchReview from "media/explainer-videos/clutchReview.PNG"
// Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

const OurClient = () => {
    const testiContentNew2 = [
        {
            stars: icon2,
            name: 'Anthony Viggiano',
            para: `I needed an animated video of our product and found Infinity Animation online. Chris Grayson had great reviews, so I hired them. They did a terrific job. Phil Johnson, the efficient team leader, promptly made all requested changes. I highly recommend this reasonably priced, excellent company. Good luck!`,
            video: "https://player.vimeo.com/progressive_redirect/playback/1002970096/rendition/1080p/file.mp4?loc=external&signature=fc8f804a99088eb6b9a5013b0b479804010f4ae592a1cb98f78c74548ef4207a",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/1002970096/rendition/1080p/file.mp4?loc=external&signature=fc8f804a99088eb6b9a5013b0b479804010f4ae592a1cb98f78c74548ef4207a",
        },
        {
            stars: icon2,
            name: 'Pat',
            para: `Hi, my name is Pat from Phoenix, Arizona. We recently completed a project with Nathan at Infinity Animation, and we couldn't be happier with the final product. Nathan was great to work with, provided clear directions, and we are really pleased with the outcome of our project. We give them five stars and hope you'll check them out.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/1004689419/rendition/1080p/file.mp4?loc=external&signature=aa0ecc4bb6f6ef34a7b5db3ae61b2417bf8b52c8b0529bad33d44a8c7ed1dfc1",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/1004689419/rendition/1080p/file.mp4?loc=external&signature=aa0ecc4bb6f6ef34a7b5db3ae61b2417bf8b52c8b0529bad33d44a8c7ed1dfc1",
        },
        {
            stars: icon2,
            name: 'Sylvia David',
            para: `I wanted to give a big shout-out to Infinity Animations, a top video animation company, for their outstanding work on our promotional video. Their team was easy to work with and delivered the project quickly and efficiently.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045737/rendition/1080p/file.mp4?loc=external&log_user=0&signature=85c3341b0d68f65b218956e9081d46bef4408f2e74e83148f4d3a83e34b79daf",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045737/rendition/1080p/file.mp4?loc=external&log_user=0&signature=85c3341b0d68f65b218956e9081d46bef4408f2e74e83148f4d3a83e34b79daf",
        },
        {
            stars: icon2,
            name: 'Emily Margolis',
            para: `We approached Infinity Animations, a leading video animation agency, for a short explainer video. Their team provided exceptional video animation services and delivered a high-quality 2D animation right on time. Highly recommended!`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045464/rendition/720p/file.mp4?loc=external&log_user=0&signature=06fddc742a45b3eff983a4e5a207a5ff2d1ae71a328b1c14056b1bcc152a9800",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045464/rendition/720p/file.mp4?loc=external&log_user=0&signature=06fddc742a45b3eff983a4e5a207a5ff2d1ae71a328b1c14056b1bcc152a9800",
        },
        {
            stars: icon2,
            name: 'Helen Brooks',
            para: `Huge thanks to Infinity Animations for their incredible video production service. They made the entire process seamless and produced a visually stunning animation that perfectly matched our brand.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045568/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6ed32074656bcaa25e810119398883ade800b3fd2c5eed96b1eff541e57f5bca",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045568/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6ed32074656bcaa25e810119398883ade800b3fd2c5eed96b1eff541e57f5bca",
        },
        {
            stars: icon2,
            name: 'Edd Lockwood',
            para: `Kudos to Infinity Animations, a fantastic video marketing agency, for creating an engaging and visually appealing animated video. Their team’s creativity and professionalism made our project a huge success.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045397/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5eb15a8721a49d21ead978545b43276c59608470ad55c3677e62e1fe88d8edfc",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045397/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5eb15a8721a49d21ead978545b43276c59608470ad55c3677e62e1fe88d8edfc",
        },
        {
            stars: icon2,
            name: 'Matt Evans',
            para: `We needed a compelling video for our new product launch, and Infinity Animations, as a video animation agency, exceeded our expectations. Their video production service was exceptional, delivering a high-quality animation in a timely manner.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045706/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2b0144629d6bc9649580afa809527d09e6528f656a1c76a1b59408367879c24e",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045706/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2b0144629d6bc9649580afa809527d09e6528f656a1c76a1b59408367879c24e",
        },
        {
            stars: icon2,
            name: 'Mathew',
            para: `A big thank you to Infinity Animations, a top-notch video animation company, for delivering an outstanding explainer video. The team was responsive, creative, and quick to complete the project.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045615/rendition/720p/file.mp4?loc=external&log_user=0&signature=8256b0e38317771b8db2d8959dc6d54ee41dd6c7a847875437dde63ea45333f2",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045615/rendition/720p/file.mp4?loc=external&log_user=0&signature=8256b0e38317771b8db2d8959dc6d54ee41dd6c7a847875437dde63ea45333f2",
        },
        {
            stars: icon2,
            name: 'Gary Wilson',
            para: `I highly recommend Infinity Animations, a premier animation agency, for their excellent video animation services. They created a high-quality animation for our campaign and were a pleasure to work with throughout the process.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045528/rendition/720p/file.mp4?loc=external&log_user=0&signature=88472fd594409a630523ae139ad0cb0c10556198290ca3f6e4e79c61eec6e8ff",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045528/rendition/720p/file.mp4?loc=external&log_user=0&signature=88472fd594409a630523ae139ad0cb0c10556198290ca3f6e4e79c61eec6e8ff",
        },
        {
            stars: icon2,
            name: 'Olivia Bennett',
            para: "The architectural visualization provided by this team surpassed our expectations. The animations brought our designs to life with incredible detail and realism. A fantastic experience from start to finish!",
            thumbnail: Olivia,
        },
        {
            stars: icon2,
            name: 'Grace Turner',
            para: 'Choosing this animation team was a game-changer for our marketing campaigns. Their creativity and attention to detail brought our brand stories to life in ways we never imagined. Exceptional work!',
            thumbnail: Grace,
        },
        {
            stars: icon2,
            name: 'Sarah L.',
            company: "Product Manager",
            para: "Infinity Animations transformed our vision into a stunning reality with their exceptional 3D animation skills. We needed a lifelike and immersive animation for our product launch, and their team delivered beyond our expectations. Their expertise and attention to detail were evident in every frame. The result was a dynamic and engaging animation that captivated our audience. Working with such a talented and dedicated team reaffirmed their position as a top animation studio in New York. I wouldn't hesitate to work with them again.",
            thumbnail: Sarah,
        },
        {
            stars: icon2,
            name: 'Emma R.',
            company: "Social Media Manager",
            para: "Our experience with Infinity Animations for our motion graphics project was nothing short of amazing. We needed high-quality promotional videos for our social media campaigns, and their team delivered spectacular results. The animations were visually striking and perfectly aligned with our brand's messaging. Their innovative techniques and creativity made our content stand out, significantly boosting our online engagement. Choosing Infinity Animations, a leading NYC animation studio, was one of the best decisions for our marketing efforts. Their professionalism and dedication are truly commendable.",
            thumbnail: Emma,
        },
        {
            stars: icon2,
            name: 'David H.',
            company: "Educational Coordinator",
            para: "Our experience with Infinity Animations for our motion graphics project was nothing short of amazing. We needed high-quality promotional videos for our social media campaigns, and their team delivered spectacular results. The animations were visually striking and perfectly aligned with our brand's messaging. Their innovative techniques and creativity made our content stand out, significantly boosting our online engagement. Choosing Infinity Animations, a leading NYC animation studio, was one of the best decisions for our marketing efforts. Their professionalism and dedication are truly commendable.",
            thumbnail: David,
        },
        {
            stars: icon2,
            name: 'Michael J.',
            company: "Marketing Director",
            para: "Infinity Animations transformed our vision into a stunning reality with their exceptional 3D animation skills. We needed a lifelike and immersive animation for our product launch, and their team delivered beyond our expectations. Their expertise and attention to detail were evident in every frame. The result was a dynamic and engaging animation that captivated our audience. Working with such a talented and dedicated team reaffirmed their position as a top animation studio in New York. I wouldn't hesitate to work with them again.",
            thumbnail: Michael,
        },
        {
            stars: icon2,
            name: 'Alex Mitchell',
            para: 'Working with this animation team elevated the educational content on my platform. The animations were not only visually engaging but also simplified complex concepts for my audience. Highly recommend for anyone in the education space.',
            thumbnail: Alex,
        },
    ]

    // Slider Start
    const ClientSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    // ======== FancyBox
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
        }, [props.delegate, props.options]);
        return <div ref={containerRef}>{props.children}</div>;
    }

    // video code start
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };
    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };

    return (
        <>
            <section className="pt-[30px] pb-[30px] md:pb-[130px] md:pt-[70px] lg:pb-[150px] bg-[#F3F3F3] relative xl:before:absolute xl:before:content-[''] sm:before:h-full before:w-[230px] xl:before:w-[305px] 2xl:before:w-[365px] 3xl:before:w-[500px] 4xl:before:w-[600px] sm:before:right-0 sm:before:top-0 lg:before:bg-[#ededed9e] sm:before:z-10 lg:h-full">
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12">
                            <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center mb-4 lg:mb-10'>Let’s Read <span className="text-[#F5090B]">What Our Clients</span> Have to Say</h2>
                        </div>
                        <div className="col-span-12 ">
                            <Slider {...ClientSlider} className='readClientSlider w-full bottom-[7%] xl:right-[-50px] 3xl:right-[-95px] 4xl:right-[-75px] mt-[25px] lg:mt-0 md:bottom-[33%] lg:bottom-[29%]'>
                                {testiContentNew2.map((testimonial, index) => (
                                    <Fancybox options={{ Carousel: { infinite: false } }} key={index}>
                                        <div className='flex flex-col sm:flex-row justify-center items-center gap-x-1 md:gap-x-4 slide px-4 lg:pe-8 my-auto' onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                            {testimonial.video ? (
                                                <Link href={testimonial.video} datafancybox="gallery">
                                                    <div className='w-full sm:w-[200px] md:w-[350px] h-[250px] md:h-[430px] box-testi relative'>
                                                        <div className='w-full sm:w-[200px] md:w-[350px] h-[150px] md:h-[430px]  flex justify-center items-center overlay-div-testi '>
                                                            <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[30px] w-full sm:w-[200px] md:w-[350px] h-[300px] md:h-full object-cover " >
                                                                <source src={testimonial.video} type="video/mp4" />
                                                            </video>
                                                            <div className="overlay-testi rounded-[30px] w-full sm:w-[200px] md:w-[350px] h-[300px] md:h-full">
                                                            </div>
                                                        </div>
                                                        <div className="absolute left-[15px] bottom-[45px]">
                                                            <h6 className="text-[16px] md:text-[20px] poppins font-normal leading-[35px] text-white">{testimonial.name}</h6>
                                                        </div>
                                                        <div className="md:block hidden absolute right-[15px] bottom-[20px]">
                                                            <Image src={PlayIcon} width={50} height={50} alt="Infinity Anamtion" />
                                                            <p className="text-[14px] sm:text-[16px] font-semibold poppins text-center text-white pt-1">Play</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ) : (
                                                <div className='w-[100px] sm:w-[150px] h-[250px] md:h-[184px] box-testi '>
                                                    <div className='w-[100px] sm:w-[150px] h-[150px]  md:h-[180px] flex justify-center items-center  overlay-div-testi'>
                                                        <Image
                                                            src={testimonial.thumbnail}
                                                            alt="Infinity Animations"
                                                            className='rounded-[30px] w-[100px] sm:w-[150px] h-[150px]  md:h-[480px]' />
                                                        <div className="overlay-testi rounded-[30px] w-[100px] sm:w-[150px] h-ful">
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <div className='pe-[15px]'>
                                                <div className="client ms-[15px]">
                                                    <Image src={clutchReview} alt="Infinity Animations" className="w-2/12 mb-2 md:mb-5" />
                                                    <h3 className='text-[16px] sm:text-[20px] text-black font-semibold poppins'>{testimonial.name}</h3>
                                                    <h3 className=" text-[13px] font-semibold font-sans text-white">
                                                        {testimonial.company}
                                                    </h3>
                                                    <div className="reviews flex items-center gap-x-1 py-2 md:py-4">
                                                        <Image src={testimonial.stars} alt='Infinity Animation' />
                                                        <Image src={testimonial.stars} alt='Infinity Animation' />
                                                        <Image src={testimonial.stars} alt='Infinity Animation' />
                                                        <Image src={testimonial.stars} alt='Infinity Animation' />
                                                        <Image src={testimonial.stars} alt='Infinity Animation' />
                                                    </div>
                                                    <div className="my-2">
                                                        <p className="text-black text-[11px] sm:text-[13px] poppins mb-5 lg:mb-10">
                                                            {testimonial.para}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fancybox>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default OurClient
