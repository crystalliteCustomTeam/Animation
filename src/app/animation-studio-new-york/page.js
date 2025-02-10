"use client"
import React, { useState, useEffect } from "react";
// Import Components
import Hero from '@/components/location-page/hero/Hero';
import BannerContact from '@/components/location-page/contact-banner/bannercontact';
import HeroBottom from '@/components/location-page/hero-bottom/herobottom';
import Speedometer from '@/components/location-page/speedometer/speedometer';
import Counter from '@/components/location-page/counter/counter';
import Why from '@/components/location-page/why/why';
import Process from '@/components/location-page/process/process';
import Services from '@/components/location-page/services/services';
import Pricing from "@/components/pricing/Pricing";
import Description from '@/components/location-page/description/description';
import Portfolio from '@/components/portfolio/Portfolio';
import Want from '@/components/location-page/want/Want';
import FullContent1 from '@/components/location-page/fullcontent1/fullcontent1';
import Concept from '@/components/location-page/concept/Concept';
import TestimonialNew from '@/components/location-page/testimonialNew/Testimonial';
import Looking from '@/components/location-page/looking/Looking';
import Contact from '@/components/location-page/contact/Contact';
//==== Hero Images
import BannerImg from "media/location-page/newyork.png"
import topLeft from "media/location-page/top-left.png"
import topRight from "media/location-page/top-right.png"
import bottomRight from "media/location-page/bottom-right.png"
//==== Looking Images
import LookingFlodImg from "media/home/looking-img.png";
//================
import body1 from "media/location-page/thumbnils/body1.jpg"
import body2 from "media/location-page/thumbnils/body2new.png"
import body3 from "media/location-page/thumbnils/body3new.png"
import body4 from "media/location-page/thumbnils/body4new.png"
import why1NY from "media/location-page/why1-ny.png"
import why2NY from "media/location-page/why2-ny.png"
import process1 from "media/location-page/new-york/process/1.png"
import process2 from "media/location-page/new-york/process/2.png"
import process3 from "media/location-page/new-york/process/3.png"
import process4 from "media/location-page/new-york/process/4.png"
import process5 from "media/location-page/new-york/process/5.png"
import process6 from "media/location-page/new-york/process/6.png"
import process7 from "media/location-page/new-york/process/7.png"
import process8 from "media/location-page/new-york/process/8.png"
// ==== Thumnail Image
import Thumnail1 from "media/thumbnails/2d-animation/1.png";
import Thumnail2 from "media/thumbnails/2d-animation/2.png";
import Thumnail3 from "media/thumbnails/2d-animation/3.png";
import Thumnail4 from "media/thumbnails/2d-animation/4.png";
import Thumnail5 from "media/thumbnails/2d-animation/5.png";
import Thumnail6 from "media/thumbnails/2d-animation/6.png";
import Thumnail7 from "media/thumbnails/3d-animation/1.png";
import Thumnail8 from "media/thumbnails/3d-animation/2.png";
import Thumnail9 from "media/thumbnails/3d-animation/3.png";
import Thumnail10 from "media/thumbnails/3d-animation/4.png";
import Thumnail11 from "media/thumbnails/3d-animation/5.png";
import Thumnail12 from "media/thumbnails/3d-animation/6.png";
import Thumnail13 from "media/thumbnails/whiteboard/1.png";
import Thumnail14 from "media/thumbnails/whiteboard/2.png";
import Thumnail15 from "media/thumbnails/whiteboard/3.png";
import Thumnail16 from "media/thumbnails/whiteboard/4.png";
import Thumnail17 from "media/thumbnails/whiteboard/5.png";
import Thumnail18 from "media/thumbnails/whiteboard/6.png";
import Thumnail19 from "media/thumbnails/motion-graphics/1.png";
import Thumnail20 from "media/thumbnails/motion-graphics/2.png";
import Thumnail21 from "media/thumbnails/motion-graphics/3.png";
import Thumnail22 from "media/thumbnails/motion-graphics/4.png";
import Thumnail23 from "media/thumbnails/motion-graphics/5.png";
import Thumnail24 from "media/thumbnails/motion-graphics/6.png";
import Thumnail25 from "media/thumbnails/hybrid/1.png";
import Thumnail26 from "media/thumbnails/hybrid/2.png";
import Thumnail27 from "media/thumbnails/hybrid/3.png";
import Thumnail28 from "media/thumbnails/hybrid/4.png";
import Thumnail29 from "media/thumbnails/hybrid/5.png";
import Thumnail30 from "media/thumbnails/hybrid/6.png";

const LocationPage = () => {

    const [showDesktopComponents, setShowDesktopComponents] = useState(true);
    const [showMobileComponents, setShowMobileComponents] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        // Show desktop components after 1 second
        const desktopTimer = setTimeout(() => {
            setShowDesktopComponents(true);
        }, 500);

        return () => {
            window.removeEventListener("resize", checkMobile);
            clearTimeout(desktopTimer);
        };
    }, []);

    useEffect(() => {
        const handleTouchOrScroll = () => {
            setShowMobileComponents(true);
            // Remove event listeners after mobile components are shown
            window.removeEventListener("scroll", handleTouchOrScroll);
            window.removeEventListener("touchstart", handleTouchOrScroll);
        };

        // Add event listeners for touch and scroll events
        window.addEventListener("scroll", handleTouchOrScroll);
        window.addEventListener("touchstart", handleTouchOrScroll);

        return () => {
            window.removeEventListener("scroll", handleTouchOrScroll);
            window.removeEventListener("touchstart", handleTouchOrScroll);
        };
    }, []);
    //=====Banner Fold=====//
    const hero = {
        title: (<> Top <span className='text-primary-100'>Animation <br /> Studio </span> in NYC </>),
        para: "As one of the top animation studios in NYC, Infinity Animations specializes in bringing your ideas to life with vibrant and innovative animation. Whether you need 2D Animation, 3D Animation, or Motion Graphics, we are your go-to animation studio in New York City. Let's create something extraordinary together.",
        btnBg: "bg-prime",
        banImg: true,
        BannerImg: BannerImg,
        topLeft: topLeft,
        topRight: topRight,
        bottomRight: bottomRight
    };

    //=====Services Fold=====//
    const services = {
        subtitle: "Partner with NYC's Leading Animation Experts",
        title: "Our Services",
    };

    //=====Description Fold=====//
    const Desc1 = {
        title: (<>NYC Animation Studio <br /> <span className='text-[#FF2D4A]'> With Expert Animation and Visual Effects</span></>),
        para: "Our Animators specialize in creating vibrant and captivating animations and visual effects that bring characters and stories to life. Whether it’s for commercials, explainer videos, or entertainment, our animations are designed to engage and inspire your audience. With Infinity Animations, you get top-notch quality and creativity that stands out in the competitive landscape of animation studios in NYC.",
        bannerRight: "https://player.vimeo.com/progressive_redirect/playback/950045792/rendition/720p/file.mp4?loc=external&log_user=0&signature=90534b4f57b71c13daff5f699a603dc446447c8fb24cf92bcb089adaedf0ad88",
        thumbnail: body1,
        downArrow: 'start'
    };
    const Desc2 = {
        title: (<>NYC Animation Studio <br /> <span className='text-[#FF2D4A]'> With Expert Animation and Visual Effects </span></>),
        para: "Our Animators specialize in creating vibrant and captivating animations and visual effects that bring characters and stories to life. Whether it’s for commercials, explainer videos, or entertainment, our animations are designed to engage and inspire your audience. With Infinity Animations, you get top-notch quality and creativity that stands out in the competitive landscape of animation studios in NYC.",
        bannerRight: "https://player.vimeo.com/progressive_redirect/playback/950015817/rendition/720p/file.mp4?loc=external&log_user=0&signature=c60df41646f601d81fa4c987188c8e103f416d393f8ec1f9270e7114e4f0b3ed",
        thumbnail: body2,
        downArrow: 'start'
    };
    const Desc3 = {
        title: (<>New York City Animation Studio <span className="text-primary-100">With Professional Animation Production</span></>),
        para: "Take your visuals to the next level with our Professional Animation Production. Our team is skilled in creating lifelike animations that provide a dynamic and immersive experience. From character modeling to full-scale animated features, our professional animator are perfect for making a lasting impression. Trust Infinity Animations, a leading NYC animation studio, to deliver stunning video production services.",
        bannerLeft: "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
        thumbnail: body3,
        downArrow: 'end'
    };
    const Desc4 = {
        title: (<>NYC’s Premier Animation Studio <span className="text-primary-100">With Custom Animation Services</span></>),
        para: "Simplify complex concepts with our engaging and custom animation services. Ideal for educational content or corporate presentations, our custom animations make information easy to understand and remember. Our creative approach ensures that your message is delivered clearly and effectively. Choose Infinity Animations, one of the top animation companies in NYC, for your custom animation needs.",
        bannerRight: "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
        thumbnail: body4,
    };
    const Desc5 = {
        title: (<>New York City Animation Studio <span className="text-primary-100">With Professional Animation Production</span></>),
        para: "Take your visuals to the next level with our Professional Animation Production. Our team is skilled in creating lifelike animations that provide a dynamic and immersive experience. From character modeling to full-scale animated features, our professional animator are perfect for making a lasting impression. Trust Infinity Animations, a leading NYC animation studio, to deliver stunning video production services.",
        bannerLeft: "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
        thumbnail: body3,
    };
    const Desc6 = {
        title: (<>What are <br /> animation videos, <br /> <span className="text-primary-100">and why use them?</span></>),
        para: "Animation videos are dynamic visual presentations created using a series of drawn, designed, or digitally modeled images that are sequenced to create the illusion of movement. They can range from simple 2D graphics to complex 3D animations, often accompanied by sound, music, and narration to deliver a compelling and engaging story. Animation videos are widely used across various fields, including entertainment, education, marketing, and communication, as they allow creators to visualize abstract ideas, concepts, or processes in an easy-to-understand and visually appealing way. Their versatility makes them suitable for everything from storytelling to explaining intricate subjects, fostering a deeper connection with audiences.",
        para2: "Using animation videos offers several advantages. They capture attention more effectively than static images or text, making them an excellent tool for conveying messages in a crowded media landscape. Animation allows for unlimited creative possibilities, enabling the visualization of ideas and concepts that might be challenging or impossible to film in real life. Additionally, they can simplify complex topics, breaking them down into digestible segments, which is particularly valuable in education and training. Animation videos are also highly shareable, making them ideal for social media marketing campaigns to increase brand visibility and engagement. Their ability to evoke emotion and convey information simultaneously makes them a powerful medium for storytelling and communication."
    };

    //=====Description Fold=====//
    const why1 = {
        title: "Why Animated Videos Are the Future of Marketing?",
        para: "<p class='font-semibold text-[18px]'>According to research  <span class='text-[50px] text-primary-100'>96%</span>  buyers watch animated explainer videos to get the details of a product they want to buy.</p><p>People love watching videos online and animated videos especially explainers are ideal to tell your brand as well as product’s story in a creative way.</p><p>Watch Randy Biddle as he dissects how exactly an explainer video production company can help you achieve that.</p>",
        bannerLeft: "https://player.vimeo.com/progressive_redirect/playback/950045792/rendition/720p/file.mp4?loc=external&log_user=0&signature=90534b4f57b71c13daff5f699a603dc446447c8fb24cf92bcb089adaedf0ad88",
        thumbnail: why1NY,
        isCTA: true
    };
    const why2 = {
        title: "The creative quality of animation studio + the <span class='text-primary-100'>speed and scale of a production powerhouse</span>",
        para: "<p>In an era where brands must maximize impact while minimizing resources, Animation Studio's: Creative suite provides an end-to-end solution that delivers standout creative at scale to meet business objectives and gain stronger brand equity without sacrificing quality.</p><p>By providing flexibility where it’s needed most, the AS: Creative suite helps marketers to balance the need for thoughtful branding and seemingly endless content created quickly and cost-effectively via ultra-efficient processes, connected technologies and a global network of highly skilled teams.</p><p><strong>To learn more about our full agency services and integrated creative AOR solutions, visit infinityanimations.com</strong></p>",
        bannerLeft: "https://player.vimeo.com/progressive_redirect/playback/950045792/rendition/720p/file.mp4?loc=external&log_user=0&signature=90534b4f57b71c13daff5f699a603dc446447c8fb24cf92bcb089adaedf0ad88",
        thumbnail: why2NY,
        isCTA: false
    };
    //=====Portfolio Fold=====//
    const tabInfo = [
        { label: "2D Animations", index: 0 },
        { label: "3D Animation", index: 1 },
        { label: "Whiteboard", index: 2 },
        { label: "Motion Graphics", index: 3 },
        { label: "Hybrid Animation", index: 4 },
    ];

    const tabContents = [
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/1001764709/rendition/1080p/file.mp4?loc=external&signature=0dcb0baee9191ef3ad3e41f6de41b71cc7910a78e924fbbde2a3bbd9385f12ef",
                thumbnail: Thumnail1,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
                thumbnail: Thumnail2,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
                thumbnail: Thumnail3,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
                thumbnail: Thumnail4,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
                thumbnail: Thumnail5,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
                thumbnail: Thumnail6,
            }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
                thumbnail: Thumnail7,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
                thumbnail: Thumnail8,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
                thumbnail: Thumnail9,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
                thumbnail: Thumnail10,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
                thumbnail: Thumnail11,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
                thumbnail: Thumnail12,
            }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
                thumbnail: Thumnail13,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
                thumbnail: Thumnail14,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
                thumbnail: Thumnail15,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
                thumbnail: Thumnail16,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
                thumbnail: Thumnail17,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
                thumbnail: Thumnail18,
            }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
                thumbnail: Thumnail19,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
                thumbnail: Thumnail20,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
                thumbnail: Thumnail21,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911724985/rendition/1080p/file.mp4?loc=external&signature=df10cc62ec59a62f54069b460626dcb1c6bdfa84519f840c75a06dba68ed5ba6",
                thumbnail: Thumnail22,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
                thumbnail: Thumnail23,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
                thumbnail: Thumnail24,
            }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
                thumbnail: Thumnail25,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
                thumbnail: Thumnail26,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
                thumbnail: Thumnail27,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
                thumbnail: Thumnail28,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
                thumbnail: Thumnail29,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
                thumbnail: Thumnail30,
            }
        ],
    ];
    const portfolio = {
        title: (<> Our Exceptional Portfolio for Video Animation </>),
        para: (<> Why we are a Top Animation studio in NYC, we take pride in creating stunning 2D Animations, 3D Animations, Whiteboard Animations, Motion Graphics Animations, Hybrid Animations, and more videos for our Valued Clientele. </>),
        tabContents: tabContents,
        tabsInfo: true,
        tabInfo: tabInfo
    };

    //=====Ribon Form Fold=====//
    const paraArrayBanner = [
        "Discover creativity at Infinity Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in NYC, we redefine narratives through innovative animations and cutting-edge technology. Our dedicated team, comprised of the finest talents in the industry, elevates ideas into captivating animations that leave a lasting impact.",

        "Infinity Animations stands out among the top animation companies in NYC, offering a seamless blend of technical expertise and imaginative flair. Our commitment to excellence ensures that your project receives the attention and detail it deserves. Partnering with Infinity Animations means choosing quality, reliability, and creativity.",
    ];

    const bannerContact = {
        title: (<>Best Animation Company
            <br /> In New York with Diverse Services</>),
        para: { paraArrayBanner },
    };

    //=====Looking Fold=====//
    const paraArray = [
        `In the heart of Austin, Cloud Animation leads the way among animation production companies in Austin, offering top-tier services that redefine visual storytelling. Our engaging animation workshops in Austin provide hands-on learning experiences, nurturing talent for the future. With cutting-edge video animation services for social media in Austin, we elevate your brand's presence online and propel it to new heights like before. As one of the premier Austin – Texas animation studios, Cloud Animation blends expertise with creativity, making us the pinnacle choice for captivating animations in the vibrant Texan city.`,
    ];

    const looking = {
        main: (<> Why <span className='text-[#FF2D4A]'>Choose </span> <br /> Infinity Animations  </>),
        title: (<> Our Mission is to help our clients uncover the essence of their brand story to drive sales, influence decisions and promote understanding.  </>),
        para: { paraArray },
        isCTA: true,
        isBtns: true,
        flodImg: LookingFlodImg
    };

    //=====Concept Fold=====//
    const concept = {
        title: (<> <span className="text-primary-100">Our Seamless</span> Video Animation & Production Process </>),
        para: (<>  We are an animated video production studio in New York with a seamless process. We transform your complex ideas into engaging, creative, and digestible content that is visually impactful as well. The process includes:</>),
        text1: "We first brainstorm and refine your ideas into a solid concept, ensuring a strong narrative foundation.",
        text2: "Next, we create storyboards that visually map out your video, displaying the sequence of animation events.",
        text3: "Using the storyboard as our guide, our animators bring your story to life with engaging visuals.",
        text4: "Lastly, we perfect and polish the animation through editing and deliver you the best result on time.",
        btnBg: "bg-prime",
    };

    //=====Want Fold=====//
    const want = {
        title: "Reserve <br /> Your Spot!",
        wantDesc: "Our custom logo animation services are accessible to all. <span class='text-primary-100'>Contact today</span> and get the ball rolling!",
        bgPrime: true,
    }

    //=====Testimonial Fold=====//
    const testimonialNew = {
        title: (<> The Ultimate Collection of Our <br /> Incredible Customer Experience </>),
        para: (<> Achieved 1000+ Impactful Results That Speak our Credibility</>),
    };


    const processContent = {
        title: "Our <span class='text-primary-100'>Process</span>",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maximus nunc. Etiam facilisis augue ligula, feugiat pellentesque nibh consectetur at. Maecenas sed justo lorem. Fusce urna mi, vehicula ultrices quam a, commodo viverra nulla.",
        conceptContent: [
            {
                ImageOne: process1,
                slideTitle: "Researching",
                sliderDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maximus nunc. Etiam facilisis augue ligula, feugiat pellentesque nibh consectetur at. Maecenas sed justo lorem."
            },
            {
                ImageOne: process2,
                slideTitle: "Defining the Project's Scope",
                sliderDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maximus nunc. Etiam facilisis augue ligula, feugiat pellentesque nibh consectetur at. Maecenas sed justo lorem."
            },
            {
                ImageOne: process3,
                slideTitle: "Brainstorming and Script Writing",
                sliderDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maximus nunc. Etiam facilisis augue ligula, feugiat pellentesque nibh consectetur at. Maecenas sed justo lorem."
            },
            {
                ImageOne: process4,
                slideTitle: "Voiceover Recording",
                sliderDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maximus nunc. Etiam facilisis augue ligula, feugiat pellentesque nibh consectetur at. Maecenas sed justo lorem."
            },
            {
                ImageOne: process5,
                slideTitle: "Storyboarding",
                sliderDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maximus nunc. Etiam facilisis augue ligula, feugiat pellentesque nibh consectetur at. Maecenas sed justo lorem."
            },
            {
                ImageOne: process6,
                slideTitle: "Illustration",
                sliderDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maximus nunc. Etiam facilisis augue ligula, feugiat pellentesque nibh consectetur at. Maecenas sed justo lorem."
            },
            {
                ImageOne: process7,
                slideTitle: "Animation",
                sliderDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maximus nunc. Etiam facilisis augue ligula, feugiat pellentesque nibh consectetur at. Maecenas sed justo lorem."
            },
            {
                ImageOne: process8,
                slideTitle: "Sound Design",
                sliderDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maximus nunc. Etiam facilisis augue ligula, feugiat pellentesque nibh consectetur at. Maecenas sed justo lorem."
            },
        ],
    };
    //=====Pricing Fold=====//
    const pricing = {
        title: (<> Pricing Plans </>),
        para: (<> Easy on the pocket and the eyes. </>),
    };

    return (
        <>
            <div className='bg-black'>
                <Hero content={hero} />
                {
                    isMobile ? (
                        showMobileComponents && (
                            <>
                                {/* <BannerContact content={bannerContact} /> */}
                                <HeroBottom />
                                <Speedometer />
                                <Counter />
                                <Description content={Desc1} />
                                <Portfolio content={portfolio} />
                                <Why content={why1} />
                                <Process content={processContent} />
                                <Why content={why2} />
                                <Services content={services} />
                                <Pricing content={pricing} />
                                <Description content={Desc2} />
                                <Want content={want} />
                                <Concept content={concept} />
                                <FullContent1 content={Desc6} />
                                <Description content={Desc3} />
                                <Description content={Desc4} />
                                <Description content={Desc5} />
                                <TestimonialNew content={testimonialNew} />
                                <Looking content={looking} />
                                {/* <Contact /> */}
                            </>
                        )
                    ) : (
                        showDesktopComponents && (
                            <>
                                {/* <BannerContact content={bannerContact} /> */}
                                <HeroBottom />
                                <Speedometer />
                                <Counter />
                                <Description content={Desc1} />
                                <Portfolio content={portfolio} />
                                <Why content={why1} />
                                <Process content={processContent} />
                                <Why content={why2} />
                                <Services content={services} />
                                <Pricing content={pricing} />
                                <Description content={Desc2} />
                                <Want content={want} />
                                <Concept content={concept} />
                                <FullContent1 content={Desc6} />
                                <Description content={Desc3} />
                                <Description content={Desc4} />
                                <Description content={Desc5} />
                                <TestimonialNew content={testimonialNew} />
                                <Looking content={looking} />
                                {/* <Contact /> */}
                            </>
                        )
                    )
                }
            </div>
        </>
    )
}

export default LocationPage
