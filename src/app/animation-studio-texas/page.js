"use client"
import React, { useState, useEffect } from "react"
// Import Components
import Hero from "@/components/location-page/hero/Hero"
import BannerContact from "@/components/location-page/contact-banner/bannercontact"
import Services from "@/components/location-page/services/services"
import Description from "@/components/location-page/description/description"
import Portfolio from "@/components/portfolio/Portfolio"
import Want from "@/components/location-page/want/Want"
import Concept from "@/components/location-page/concept/Concept"
import TestimonialNew from "@/components/location-page/testimonialNew/Testimonial"
import Looking from "@/components/location-page/looking/Looking"
import Contact from "@/components/location-page/contact/Contact"
//==== Hero Images
import BannerImg from "media/location-page/texas.png"
//==== Looking Images
import LookingFlodImg from "media/home/looking-img.png"
//================
import body1 from "media/location-page/thumbnils/body1.jpg"
import body2 from "media/location-page/thumbnils/body2new.png"
import body3 from "media/location-page/thumbnils/body3new.png"
import body4 from "media/location-page/thumbnils/body4new.png"
import Counter from "@/components/location-page/counter/counter"
import Speedometer from "@/components/location-page/speedometer/speedometer"

import Thumnail1 from "media/thumbnails/2d-animation/1.png"
import Thumnail2 from "media/thumbnails/2d-animation/2.png"
import Thumnail3 from "media/thumbnails/2d-animation/3.png"
import Thumnail4 from "media/thumbnails/2d-animation/4.png"
import Thumnail5 from "media/thumbnails/2d-animation/5.png"
import Thumnail6 from "media/thumbnails/2d-animation/6.png"
import Thumnail7 from "media/thumbnails/3d-animation/1.png"
import Thumnail8 from "media/thumbnails/3d-animation/2.png"
import Thumnail9 from "media/thumbnails/3d-animation/3.png"
import Thumnail10 from "media/thumbnails/3d-animation/4.png"
import Thumnail11 from "media/thumbnails/3d-animation/5.png"
import Thumnail12 from "media/thumbnails/3d-animation/6.png"
import Thumnail13 from "media/thumbnails/whiteboard/1.png"
import Thumnail14 from "media/thumbnails/whiteboard/2.png"
import Thumnail15 from "media/thumbnails/whiteboard/3.png"
import Thumnail16 from "media/thumbnails/whiteboard/4.png"
import Thumnail17 from "media/thumbnails/whiteboard/5.png"
import Thumnail18 from "media/thumbnails/whiteboard/6.png"
import Thumnail19 from "media/thumbnails/motion-graphics/1.png"
import Thumnail20 from "media/thumbnails/motion-graphics/2.png"
import Thumnail21 from "media/thumbnails/motion-graphics/3.png"
import Thumnail22 from "media/thumbnails/motion-graphics/4.png"
import Thumnail23 from "media/thumbnails/motion-graphics/5.png"
import Thumnail24 from "media/thumbnails/motion-graphics/6.png"
import Thumnail25 from "media/thumbnails/hybrid/1.png"
import Thumnail26 from "media/thumbnails/hybrid/2.png"
import Thumnail27 from "media/thumbnails/hybrid/3.png"
import Thumnail28 from "media/thumbnails/hybrid/4.png"
import Thumnail29 from "media/thumbnails/hybrid/5.png"
import Thumnail30 from "media/thumbnails/hybrid/6.png"
import why1NY from "media/location-page/why3-ny.jpg"
import why2NY from "media/location-page/why4-ny.jpg"
import process1 from "media/location-page/new-york/process/1.png"
import process2 from "media/location-page/new-york/process/2.png"
import process3 from "media/location-page/new-york/process/3.png"
import process4 from "media/location-page/new-york/process/4.png"
import process5 from "media/location-page/new-york/process/5.png"
import process6 from "media/location-page/new-york/process/6.png"
import process7 from "media/location-page/new-york/process/7.png"
import process8 from "media/location-page/new-york/process/8.png"
import HeroBottom from "@/components/location-page/hero-bottom/herobottom"
import Why from "@/components/location-page/why/why"
import Process from "@/components/location-page/process/process"
import Pricing from "@/components/pricing/Pricing"
import FullContent1 from "@/components/location-page/fullcontent1/fullcontent1"

const LocationPage = () => {
  const [showDesktopComponents, setShowDesktopComponents] = useState(true)
  const [showMobileComponents, setShowMobileComponents] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Show desktop components after 1 second
    const desktopTimer = setTimeout(() => {
      setShowDesktopComponents(true)
    }, 500)

    return () => {
      window.removeEventListener("resize", checkMobile)
      clearTimeout(desktopTimer)
    }
  }, [])

  useEffect(() => {
    const handleTouchOrScroll = () => {
      setShowMobileComponents(true)
      // Remove event listeners after mobile components are shown
      window.removeEventListener("scroll", handleTouchOrScroll)
      window.removeEventListener("touchstart", handleTouchOrScroll)
    }

    // Add event listeners for touch and scroll events
    window.addEventListener("scroll", handleTouchOrScroll)
    window.addEventListener("touchstart", handleTouchOrScroll)

    return () => {
      window.removeEventListener("scroll", handleTouchOrScroll)
      window.removeEventListener("touchstart", handleTouchOrScroll)
    }
  }, [])
  //=====Banner Fold=====//
  const hero = {
    title: (
      <>
        {" "}
        Top{" "}
        <span className="text-primary-100">
          Animation <br /> Studio{" "}
        </span>{" "}
        in Texas{" "}
      </>
    ),
    para: (
      <>
        {" "}
        Standing out is crucial. At our animation studio in Texas, we specialize
        in creating compelling visual narratives that captivate audiences and
        drive results. Whether you're seeking 2D animation services in Texas or
        cutting-edge 3D animation, our team is dedicated to bringing your vision
        to life with precision and creativity.
      </>
    ),
    btnBg: "bg-prime",
    BannerImg: BannerImg,
  }

  //=====Services Fold=====//
  const services = {
    subtitle: "Partner with Texas's Leading Animation Experts",
    title: "Our Services",
  }

  //=====Description Fold=====//
  const Desc1 = {
    title: (
      <>
        Texas Animation Studio With <br />{" "}
        <span className="text-[#FF2D4A]">
          {" "}
          Expert Animation and Visual Effects
        </span>
      </>
    ),
    para: (
      <>
        Nowadays standing out is more challenging than ever. Our premium
        animation services are designed to captivate your audience and convey
        your message effectively.
        <br />
        <br />
        Whether you're looking to explain a complex concept, showcase a product,
        or tell your brand's story, our team has the expertise to deliver
        high-quality animations that resonate with your target audience.
      </>
    ),
    bannerRight:
      "https://player.vimeo.com/progressive_redirect/playback/950045792/rendition/720p/file.mp4?loc=external&log_user=0&signature=90534b4f57b71c13daff5f699a603dc446447c8fb24cf92bcb089adaedf0ad88",
    thumbnail: body1,
    downArrow: "start",
  }
  const Desc2 = {
    title: (
      <>
        The Power of Animation in <br />{" "}
        <span className="text-[#FF2D4A]"> Texas Competitive Market</span>
      </>
    ),
    para: "In the competitive Texas market, capturing and retaining audience attention is crucial. Animated explainer videos simplify complex ideas, making them accessible and engaging for viewers. By presenting information in a visually appealing format, these videos not only educate but also entertain, leading to higher viewer retention and increased conversion rates. Incorporating animated explainer videos into your marketing strategy can effectively communicate your brand's message and value proposition.",
    bannerRight:
      "https://player.vimeo.com/progressive_redirect/playback/950015817/rendition/720p/file.mp4?loc=external&log_user=0&signature=c60df41646f601d81fa4c987188c8e103f416d393f8ec1f9270e7114e4f0b3ed",
    thumbnail: body2,
    downArrow: "start",
  }
  const Desc3 = {
    title: (
      <>
        Boom Your Brand With Leading{" "}
        <span className="text-primary-100">Video Production Company Texas</span>
      </>
    ),
    para: "Your search for the perfect animation partner ends here. At our Texas animation studio, we are committed to turning your ideas into compelling visual narratives. Our team of skilled animators and storytellers works closely with you to understand your goals and deliver animations that resonate with your target audience. Whether you're looking to create a captivating explainer video, dynamic motion graphics, or immersive 3D animations, we have the expertise to make it happen.",
    bannerLeft:
      "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
    thumbnail: body3,
    downArrow: "end",
  }
  const Desc4 = {
    title: (
      <>
        Texas Premier Animation Studio
        <span className="text-primary-100">With Custom Animation Services</span>
      </>
    ),
    para: "Animated videos are a powerful tool for businesses, offering a unique way to convey messages and engage audiences. They can simplify complex concepts, making them easier for viewers to understand and retain. Additionally, animated videos are versatile and can be used across various platforms, from websites to social media, enhancing your brand's visibility and reach. Investing in animated content can lead to increased engagement, higher conversion rates, and a stronger connection with your audience.",
    bannerRight:
      "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
    thumbnail: body4,
  }
  const Desc5 = {
    title: (
      <>
        Texas Animation Studio
        <span className="text-primary-100">
          With Professional Animation Production
        </span>
      </>
    ),
    para: "In the rapidly evolving world of animation, staying ahead of industry trends is crucial. Our Texas-based studio embraces the latest advancements to deliver innovative and engaging content. From hyper-realistic 3D animations that captivate viewers with lifelike detail to AI-assisted techniques that enhance efficiency and creativity, we ensure your projects are at the forefront of technology. By integrating these trends, we create compelling narratives that resonate with modern audiences, setting your brand apart in a competitive market.",
    bannerLeft:
      "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
    thumbnail: body3,
  }
  const Desc6 = {
    title: (
      <>
        What are <br /> animation videos, <br />{" "}
        <span className="text-primary-100">and why use them?</span>
      </>
    ),
    para: "Animation videos are captivating visual creations made by sequencing a series of illustrated, designed, or digitally modeled images to produce the illusion of movement. These videos range from straightforward 2D designs to intricate 3D animations, often enhanced with sound, music, and narration to craft an engaging and compelling narrative. Widely utilized in entertainment, education, marketing, and communication, animation videos excel at transforming abstract ideas, concepts, or processes into visually striking and easily understandable formats. Their adaptability makes them ideal for storytelling, explaining complex topics, and fostering meaningful connections with audiences.",
    para2:
      "Animation videos offer numerous benefits. They stand out in a crowded media environment by grabbing attention more effectively than static visuals or text, making them a powerful tool for message delivery. The medium unlocks boundless creative potential, enabling creators to visualize ideas and concepts that may be challenging or impractical to capture with live-action footage. Moreover, animation simplifies complex subjects, breaking them into manageable parts, making it especially valuable for education and training purposes. These videos are highly shareable, making them perfect for boosting brand visibility and engagement through social media campaigns. With their unique ability to evoke emotion while conveying information, animation videos are a versatile and impactful medium for storytelling and communication.",
  }

  //=====Portfolio Fold=====//
  const tabInfo = [
    { label: "2D Animations", index: 0 },
    { label: "3D Animation", index: 1 },
    { label: "Whiteboard", index: 2 },
    { label: "Motion Graphics", index: 3 },
    { label: "Hybrid Animation", index: 4 },
  ]

  const tabContents = [
    [
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/1001764709/rendition/1080p/file.mp4?loc=external&signature=0dcb0baee9191ef3ad3e41f6de41b71cc7910a78e924fbbde2a3bbd9385f12ef",
        thumbnail: Thumnail1,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
        thumbnail: Thumnail2,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
        thumbnail: Thumnail3,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
        thumbnail: Thumnail4,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
        thumbnail: Thumnail5,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
        thumbnail: Thumnail6,
      },
    ],
    [
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
        thumbnail: Thumnail7,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
        thumbnail: Thumnail8,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
        thumbnail: Thumnail9,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
        thumbnail: Thumnail10,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
        thumbnail: Thumnail11,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
        thumbnail: Thumnail12,
      },
    ],
    [
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
        thumbnail: Thumnail13,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
        thumbnail: Thumnail14,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
        thumbnail: Thumnail15,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
        thumbnail: Thumnail16,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
        thumbnail: Thumnail17,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
        thumbnail: Thumnail18,
      },
    ],
    [
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
        thumbnail: Thumnail19,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
        thumbnail: Thumnail20,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
        thumbnail: Thumnail21,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/911724985/rendition/1080p/file.mp4?loc=external&signature=df10cc62ec59a62f54069b460626dcb1c6bdfa84519f840c75a06dba68ed5ba6",
        thumbnail: Thumnail22,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
        thumbnail: Thumnail23,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
        thumbnail: Thumnail24,
      },
    ],
    [
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
        thumbnail: Thumnail25,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
        thumbnail: Thumnail26,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
        thumbnail: Thumnail27,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
        thumbnail: Thumnail28,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
        thumbnail: Thumnail29,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
        thumbnail: Thumnail30,
      },
    ],
  ]
  const portfolio = {
    title: <> Our Exceptional Portfolio of Video Animation </>,
    para: (
      <>
        Explore our diverse portfolio to see how we've helped clients across
        various industries tell their stories through animation. From engaging
        explainer videos to immersive 3D animations, our work demonstrates our
        versatility and dedication to excellence.
      </>
    ),
    tabContents: tabContents,
    tabsInfo: true,
    tabInfo: tabInfo,
  }

  //=====Description Fold=====//
  const why1 = {
    title: "Why Animated Videos Are the Future of Marketing? ",
    para: "<p class='font-semibold text-[18px]'>According to research <span class='text-[50px] text-primary-100'>96%</span> buyers watch animated explainer videos to get the details of a product they want to buy.</p><p>People love watching videos online and animated videos especially explainers are ideal to tell about your brand as well as product's story in a creative way.</p><p>Watch Randy Biddle as he dissects how exactly an explainer video production company can help you achieve that.</p>",
    bannerLeft:
      "https://player.vimeo.com/progressive_redirect/playback/1059809262/rendition/720p/file.mp4?loc=external&log_user=0&signature=016810458c9de0e7ccaf44d254900d7c4a14883c6e461b7ae9c4d02031ebda85&user_id=157924231",
    thumbnail: why1NY,
    isCTA: true,
  }
  const why2 = {
    title:
      "Let’s Create Out-of-This-World Animations with <span class='text-primary-100'>Infinity Animation</span>",
    para: "<p>At our Texas animation studio, we prioritize efficient project management to ensure timely delivery and client satisfaction. Our streamlined processes and flexible approach allow us to adapt to your specific needs, ensuring a smooth collaboration from concept to completion.</p><p>Our team is committed to maintaining open communication throughout the project, providing regular updates, and being responsive to feedback. This dedication ensures that the final product aligns with your vision and exceeds expectations.</p>",
    bannerLeft:
      "https://player.vimeo.com/progressive_redirect/playback/1059809262/rendition/720p/file.mp4?loc=external&log_user=0&signature=016810458c9de0e7ccaf44d254900d7c4a14883c6e461b7ae9c4d02031ebda85&user_id=157924231",
    thumbnail: why2NY,
    isCTA: false,
  }
  const processContent = {
    title: "Our <span class='text-primary-100'>Process</span>",
    
    conceptContent: [
      {
        ImageOne: process1,
        slideTitle: "Briefing",
        sliderDesc:
          "We start off by creating an outline of requirements. Next, we discuss the animation style, mission, and length of your explainer video. We work from ground zero to drive home your animated video’s message.",
      },
      {
        ImageOne: process2,
        slideTitle: "Scriptwriting",
        sliderDesc:
          "After creating a concrete brief, we kick off the pre-production process and create a compelling script for your animated video. We ensure to tell an engaging story in the most comprehensive way to your targeted audience.",
      },
      {
        ImageOne: process3,
        slideTitle: "Storyboarding",
        sliderDesc:
          "In this phase of explainer video production, our creative digital artists will create a simplified yet vibrant visual representation of how your animated video will unfold at the end of the process.",
      },
      {
        ImageOne: process4,
        slideTitle: "Illustrations",
        sliderDesc:
          "Our competent illustrators will take the storyboard and turn it into a stunning and vibrant set of illustrations to make your animated video look more refined and engaging.",
      },
      {
        ImageOne: process5,
        slideTitle: "Voice Over",
        sliderDesc:
          "Talented voice-over artists add more sparkles to your video through their powerful voices. Our explainer video agency has voice-over artists who can speak in different accents and languages. You can choose any voice you like.",
      },
      {
        ImageOne: process6,
        slideTitle: "Animation",
        sliderDesc:
          "At this stage, our innovative animators breathe life into your static illustrations. We bring together all the produced assets, including script, voice-over, and illustrations, to the table and convert them into a powerful, emotionally invoking animated story.",
      },
      {
        ImageOne: process7,
        slideTitle: "Post-production",
        sliderDesc:
          "Once your animated video is ready, it goes through the post-production phase. At this stage, we do some final-touch up and hand it over to the quality assurance team to ensure that everything is created with utmost perfection.",
      },
      {
        ImageOne: process8,
        slideTitle: "Sound Design",
        sliderDesc:
          "To complement the voiceover, music is added to entice the audience even more. We add music to convey the emotional part of your message. Along with music, effects also elevate the overall viewer experience.",
      },
    ],
  }

  const pricing = {
    title: <> Pricing Plans </>,
    para: <> Easy on the pocket and the eyes. </>,
  }

  //=====Ribon Form Fold=====//
  const paraArrayBanner = [
    "It’s time to take your prospects by the hand, and make them sit, and enjoy the visual treat your brand has to offer with animation company Texas. Create mind-blowing games with 3D animation studio Texas. Whether it’s about building fantastical environments, or launching animations for characters, or smooth transitions to make the experience more immersive, we can do it all. Take gaming to the next level.",

    "Tell stories, and tease brand characters with magical animation. Whether it’s an explainer video, or a brand deck that sells like crazy with animated visuals, make it all happen with team Infinity. What’s even greater, you get to do it at an affordable price with 2D animation studios Texas.",
  ]

  const bannerContact = {
    title: (
      <>
        Best Animation Studio In Texas <br /> For Impactful Brand Videos
      </>
    ),
    para: { paraArrayBanner },
  }

  //=====Looking Fold=====//
  const paraArray = [
    `Choosing the right animation partner is a pivotal decision that can significantly influence your brand's trajectory. It's not just about finding a company that can create visually stunning animations; it's about aligning with a team that understands your vision and can translate it into compelling narratives. Our approach intertwines artistic creativity with cutting-edge technology, ensuring that every frame we produce resonates with your audience while driving your business objectives forward. `,
    `What truly sets us apart in the competitive landscape of Texas animation companies is our unwavering commitment to quality and client satisfaction. We believe that effective communication is the backbone of a successful partnership, which is why we prioritize collaboration throughout the creative process. By actively involving you at each stage, we ensure that the final product not only meets but exceeds your expectations, establishing a connection that transforms viewers into loyal customers. In an age where content is king, our animations are designed to stand out and captivate, delivering results that align seamlessly with your brand's goals.`,
  ]

  const looking = {
    main: (
      <>
        Why <span className="text-[#FF2D4A]">Choose </span> Us
      </>
    ),
    title: "",
    para: { paraArray },
    isCTA: true,
    isBtns: true,
    flodImg: LookingFlodImg,
  }

  //=====Concept Fold=====//
  const concept = {
    title: <> Design Process at Infinity Animations </>,
    para: (
      <>
        {" "}
        At Infinity Animations, we follow a comprehensive and detailed process
        to ensure the highest quality of work. Here’s how we bring your ideas to
        life as one of the leading animation studios in Texas.{" "}
      </>
    ),
    text1:
      "We begin by brainstorming and refining your ideas into a solid concept, ensuring a strong narrative foundation. Our team of experts works closely with you to understand your vision and objectives. This stage sets the groundwork for the entire project, distinguishing us as a premier animation studio in Texas.",
    text2:
      "Next, we create storyboards that visually map out your video, displaying the sequence of animation events. This step is crucial for planning and visualizing the project before moving into production. Our meticulous storyboarding process ensures that every detail is considered, showcasing why we are a top choice among Texas animation studios.",
    text3:
      "Using the storyboard as our guide, our animators bring your story to life with engaging visuals. Whether it’s 2D Animation, 3D Animation, or Motion Graphics, our creative team employs the latest techniques and tools to produce stunning animations. Our expertise in various animation styles makes us one of the best animation companies in Texas.",
    text4:
      "Lastly, we perfect and polish the animation through editing and deliver you the best result on time. Our commitment to quality and punctuality has earned us a reputation as one of the most reliable animation studios in Texas and Brooklyn. We ensure that your project not only meets but exceeds your expectations.",
    btnBg: "bg-prime",
    BannerImg: BannerImg,
  }

  //=====Want Fold=====//
  const want = {
    title: "Let’s Collaborate",
    wantDesc:
      "Your search for the perfect animation studio ends here, we’re here to make it all happen.",
    bgPrime: true,
  }

  //=====Testimonial Fold=====//
  const testimonialNew = {
    title: (
      <>
        {" "}
        The Ultimate Collection of Our <br /> Incredible Customer Experience{" "}
      </>
    ),
    para: <> Achieved 1000+ Impactful Results That Speak our Credibility</>,
  }

  return (
    <>
      <div className="bg-black">
        <Hero content={hero} />
        {isMobile
          ? showMobileComponents && (
              <>
                <Description content={Desc1} />
                <Portfolio content={portfolio} />
                <Process content={processContent} />
                <Why content={why2} />
                <Pricing content={pricing} />
                <Description content={Desc2} />
                <Concept content={concept} />
                <Description content={Desc3} />
                <Description content={Desc4} />
                <Description content={Desc5} />
                <TestimonialNew content={testimonialNew} />
                <Looking content={looking} />
                <Contact />
              </>
            )
          : showDesktopComponents && (
              <>
                {/* <BannerContact content={bannerContact} /> */}
                <HeroBottom />
                <Speedometer
                  title="<span class='text-primary-100'>Best</span> Video Animation <br /> Company <span class='text-primary-100'> in Texas  <br /> </span>  With Diverse Services"
                  desc="Our studio offers a diverse range of services to meet the unique needs of our clients:"
                />
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
                <Contact />
              </>
            )}
      </div>
    </>
  )
}

export default LocationPage
