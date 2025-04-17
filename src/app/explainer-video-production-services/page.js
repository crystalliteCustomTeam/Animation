"use client"
import React, { useState, useEffect } from "react"
// Import Components
import Hero from "@/components/location-page/hero/Hero"
import BannerContact from "@/components/location-page/contact-banner/bannercontact"
import HeroBottom from "@/components/location-page/hero-bottom/herobottom"
import Speedometer from "@/components/location-page/speedometer/speedometer"
import Counter from "@/components/location-page/counter/counter"
import Why from "@/components/location-page/why/why"
import Process from "@/components/location-page/process/process"
import Services from "@/components/location-page/services/services"
import Pricing from "@/components/pricing/Pricing"
import Description from "@/components/location-page/description/description"
import Portfolio from "@/components/portfolio/Portfolio"
import Want from "@/components/location-page/want/Want"
import FullContent1 from "@/components/location-page/fullcontent1/fullcontent1"
import Concept from "@/components/location-page/concept/Concept"
import TestimonialNew from "@/components/location-page/testimonial-new/testimonial-new"
import Looking from "@/components/location-page/looking/Looking"
import Contact from "@/components/location-page/contact/Contact"
//==== Hero Images
import BannerImg from "media/location-page/newyork.png"
import topLeft from "media/location-page/top-left.png"
import topRight from "media/location-page/top-right.png"
import bottomRight from "media/location-page/bottom-right.png"
//==== Looking Images
import LookingFlodImg from "media/home/looking-img.png"
//================
import body1 from "media/location-page/new-thumbnails/1.jpg"
import body2 from "media/location-page/new-thumbnails/11.jpg"
import body3 from "media/location-page/new-thumbnails/10.jpg"
import body4 from "media/location-page/new-thumbnails/12.jpg"
import body5 from "media/location-page/new-thumbnails/13.jpg"
import why1NY from "media/location-page/why3-ny.jpg"
import why2NY from "media/location-page/new-thumbnails/2.jpg"
import process1 from "media/location-page/new-york/process/1.png"
import process2 from "media/location-page/new-york/process/2.png"
import process3 from "media/location-page/new-york/process/3.png"
import process4 from "media/location-page/new-york/process/4.png"
import process5 from "media/location-page/new-york/process/5.png"
import process6 from "media/location-page/new-york/process/6.png"
import process7 from "media/location-page/new-york/process/7.png"
import process8 from "media/location-page/new-york/process/8.png"
// ==== Thumnail Image
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
import s_thumbnail1 from "media/location-page/new-thumbnails/3.jpg"
import s_thumbnail2 from "media/location-page/new-thumbnails/4.jpg"
import s_thumbnail3 from "media/location-page/new-thumbnails/5.jpg"
import s_thumbnail4 from "media/location-page/new-thumbnails/6.jpg"
import s_thumbnail5 from "media/location-page/new-thumbnails/7.jpg"
import s_thumbnail6 from "media/location-page/new-thumbnails/8.jpg"
import Faqs from '@/components/faqs/Faqs'
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
          Animation <br /> Company{" "}
        </span>{" "}
        for Explainer Videos{" "}
      </>
    ),
    para: "At Infinity Animations, we specialize in creating custom explainer videos that turn complex ideas into clear, engaging stories. Whether you're launching a product, showcasing a service, or explaining a process, our animations are designed to capture your audience and drive results. Let us help you communicate your message with creativity and clarity.",
    btnBg: "bg-prime",
    banImg: true,
    BannerImg: BannerImg,
    topLeft: topLeft,
    topRight: topRight,
    bottomRight: bottomRight,
  }

  //=====Services Fold=====//
  const services = {
    subtitle: "Partner With Leading Animation Expert",
    title: "Our Services",
    tabInfo: [
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/911724251/rendition/1080p/file.mp4?loc=external&signature=5d88731a27233440e2adb222dee6ca2ddc0d70f72ad81c64e5a18eff19fa5f72&user_id=214166356",
        link: "/2d-animation",
        thumbnail: s_thumbnail1,
        title: "2D Animation",
        para: `Infinity Animation delivers engaging 2D animations designed for Seattle Animation Studios creative community. From compelling stories to striking visuals, we help your brand connect with audiences and leave a lasting impression.`,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=e5d116859df6f87caf871f2eb95a99649cd30d5746f7c3b083ba08fa6000ba25&user_id=214166356",
        link: "/3d-animation",
        thumbnail: s_thumbnail2,
        title: "3D Animation",
        para: `Infinity Animation specializes in immersive 3D animations tailored forSeattle Animation Studios' innovative market. Our designs captivate audiences, bringing your projects to life with unparalleled creativity and precision.`,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/923044581/rendition/1080p/file.mp4?loc=external&signature=48d1c6e66b2fe846a0e625131255399750a6cfbc82e7a31bf35b4bd8ddfa463c&user_id=214166356",
        link: "/architectural-visualization",
        thumbnail: s_thumbnail3,
        title: "Architectural Animation",
        para: `Showcase your architectural visions with Infinity Animation’s realistic 3D walkthroughs. Perfect for Seattle Animation Studios evolving design landscape, our animations highlight every detail and make your projects stand out.`,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/911725431/rendition/1080p/file.mp4?loc=external&signature=72d73d753147b15747cc3564a937dc8a55bf84d71f151525ddfa6fd45a0311d3&user_id=214166356",
        link: "/motion-graphics",
        thumbnail: s_thumbnail4,
        title: "Motion Graphics",
        para: `Infinity Animation creates innovative motion graphics that engage Seattle Animation Studios  audiences.Our designs capture attention, deliver your message effectively, and drive impactful results.`,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/911725398/rendition/1080p/file.mp4?loc=external&signature=11b03651abb57498536b99f8e3e1a754711b1f3cb806f506caf42208ccffb6d0&user_id=214166356",
        link: "/cgi-and-vfx-services",
        thumbnail: s_thumbnail5,
        title: "CGI-VFX",
        para: `Infinity Animation provides advanced CGI and VFX services in Seattle Animation Studios.We combine cutting-edge technology with creative expertise to deliver visually stunning effects that elevate your projects.`,
      },
      {
        video:
          "https://player.vimeo.com/progressive_redirect/playback/911728847/rendition/1080p/file.mp4?loc=external&signature=1482a94d7754841ac5145cd68b3867833125d483ceaa8ecd716987422de069bd&user_id=214166356",
        link: "/infographics-design",
        thumbnail: s_thumbnail6,
        title: "Infographics",
        para: `Simplify complex ideas with Infinity Animation’s animated infographics. Tailored for Seattle Animation Studios dynamic industries, our designs deliver impactful messages that resonate with your audience.`,
      },
    ]
  }

  //=====Description Fold=====//
  const Desc1 = {
    title: (
      <>
        Explainer Video Specialists <br />{" "}
        <span className="text-[#FF2D4A]">
          {" "}
          for Expert Animation and Visual Storytelling
        </span>
      </>
    ),
    para: "In this digital world, your message needs to stand out. Our team of experienced animators and visual storytellers creates high-quality explainer videos that clearly communicate your ideas and engage your audience. Using the latest tools and techniques, we bring your vision to life with precision and creativity. Partner with us to transform complex concepts into compelling visual content that delivers results. <br /> <br /> Partner with us to transform complex concepts into compelling visual content that delivers results.",
    bannerRight:
      "https://player.vimeo.com/progressive_redirect/playback/947422905/rendition/1080p/file.mp4?loc=external&signature=5c27dbb6f888f0c94df31c794a5a2c96bcac64552c393b29b37198d5da826b1c&user_id=214166356",
    thumbnail: body1,
    downArrow: "start",
  }
  const Desc2 = {
    title: (
      <>
        What Makes Our Explainer <br />{" "}
        <span className="text-[#FF2D4A]"> Video Agency Unique</span>
      </>
    ),
    para: "At Infinity Animations, our extensive experience in delivering over 1,600 videos to more than 1,200 clients worldwide has honed our ability to produce high-quality explainer videos that effectively convey your brand's message. Our dedicated team of experts meticulously oversees every stage of production, ensuring each project undergoes rigorous quality checks to meet our exacting standards. This commitment to excellence guarantees that our explainer videos not only engage and inform but also drive meaningful results for your business.​",
    bannerRight:
      "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=d5c539f4ba9416fdbe24bb4389c7380e9a5cb4e30ea3c8ce7d3520b69ccb7f25&user_id=214166356",
    thumbnail: body2,
    downArrow: "start",
  }
  const Desc3 = {
    title: (
      <>
        Boom Your Brand With{" "}
        <span className="text-primary-100">
          Affordable Explainer Videos
        </span>
      </>
    ),
    para: "Incorporating explainer videos into your marketing strategy can significantly boost audience engagement. These explainer video productions simplify complex ideas, making them accessible and engaging for viewers. By presenting information in a visually appealing format, explainer video production services not only educate but also entertain, leading to higher viewer retention and increased conversion rates. Implementing explainer videos can effectively communicate your brand's message and value proposition, ensuring your audience understands and connects with your product or service.",
    bannerLeft:
      "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=8af579ca2eae6ba8c0e08217cd6bd78828f596d70e3bd6624936fd07ff35854e&user_id=214166356",
    thumbnail: body3,
    downArrow: "end",
  }
  const Desc4 = {
    title: (
      <>
        Best Animated Explainer{" "}
        <span className="text-primary-100">Video Production Company</span>
      </>
    ),
    para: "Explainer videos are one of the most effective ways to deliver your brand message clearly and memorably. Whether you're launching a product, simplifying a service, or building brand awareness, explainer video production helps convey your value in under 90 seconds. From startups to enterprises, companies across industries use explainer video productions to cut through the noise, connect emotionally with audiences, and drive meaningful engagement across all digital touchpoints.",
    bannerRight:
      "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=83cd56e58fbcc848feafd727d790b3bf4593c20467d0e7276efbf5ee0892a680&user_id=214166356",
    thumbnail: body4,
  }
  const Desc5 = {
    title: (
      <>
        Why Businesses Trust Explainer{" "}
        <span className="text-primary-100">
          Video Production Services
        </span>
      </>
    ),
    para: "Top-performing brands rely on explainer video production services to create content that not only informs but converts. A professionally crafted explainer video can be used across multiple platforms — websites, emails, ads, sales decks, and more — to improve customer understanding and boost sales. With expert explainer video creators by your side, you can turn complex messaging into clear, engaging storytelling that builds trust and drives action.",
    bannerLeft:
      "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
    thumbnail: body5,
  }
  const Desc6 = {
    title: (
      <>
        What is an Explainer Video? <br />{" "}
        <span className="text-primary-100">Why do we use them?</span>
      </>
    ),
    para: "Explainer videos are engaging visual creations that simplify complex ideas or concepts through animation, motion graphics, or live-action. These videos, ranging from 2D explainer videos to 3D explainer videos, use narration, sound, and visuals to present information in a clear, concise, and visually appealing way. Widely used in marketing, education, and corporate communication, explainer video production helps transform abstract concepts into easily understandable narratives.",
    para2:
      "Explainer videos are incredibly effective because they capture attention quickly and hold viewers' interest longer than text or static images. Their ability to break down complex topics into digestible segments makes them invaluable for explaining technical or abstract information. Whether it's a motion graphics explainer video for a tech product or a whiteboard explainer video for educational content, these videos are a powerful tool for enhancing brand visibility, boosting engagement, and conveying important messages with emotional impact.",
  }

  const Desc7 = {
    title: `<span class='text-primary-100'>Best</span> Animated Explainer Video Company with <span class='text-primary-100'>Diverse Services</span>`,
    desc: "We provide comprehensive animation services, ensuring that your brand stands out. Our animation company focuses on creating visually stunning explainer videos for various industries, including marketing, education, healthcare, and entertainment.",
    list1: [
      ["2D Explainer Video"],
      ["Motion Graphics Explainer Video"],
      ["Professional Video Editing Services"],
      ["Custom Explainer Video"],
      ["Explainer Video Marketing"],
      ["Promotional Video Production"]
    ],
    list2: [
      ["3D Explainer Video"],
      ["Training Video Production"],
      ["Educational Explainer Video"],
      ["Saas Explainer Videos"],
      ["Product Explainer Video"],
      ["Whiteboard Explainer Video"]
    ],
    extra_para: "Collaborate with us to bring your projects to life and stand out in the market."
  }

  //=====Description Fold=====//
  const why1 = {
    title: "Why Animated Videos Are the Future of Marketing?",
    para: "<p class='font-semibold text-[18px]'>According to research  <span class='text-[50px] text-primary-100'>96%</span>  buyers watch animated explainer videos to get the details of a product they want to buy.</p><p>People love watching videos online and animated videos especially explainers are ideal to tell about your brand as well as product's story in a creative way.</p><p>Watch Randy Biddle as he dissects how exactly an explainer video production company can help you achieve that.</p>",
    bannerLeft:
      "https://player.vimeo.com/progressive_redirect/playback/1059809262/rendition/720p/file.mp4?loc=external&log_user=0&signature=016810458c9de0e7ccaf44d254900d7c4a14883c6e461b7ae9c4d02031ebda85&user_id=157924231",
    thumbnail: why1NY,
    isCTA: true,
  }
  const why2 = {
    title:
      "Let’s Create Out-of-This-World Animations with <span class='text-primary-100'>Infinity Animation</span>",
    para: "<p>What makes  Infinity Animation studios  Stand out is the blend of creative talent and technical expertise. As remote work expands and the digital marketplace grows, working with a local video animation team ensures better communication, cultural alignment, and faster turnaround times.</p><p>Whether you're a local company or national brand , working with right animation studio ensures your message resonates with regional authenticity while delivering professional-grade visuals.</p>",
    bannerLeft:
      "https://player.vimeo.com/progressive_redirect/playback/957421481/rendition/1080p/file.mp4?loc=external&signature=86ac3cb322c1e2b1362be1142336b0c0c934d1bd690878be22291aedce926ea4&user_id=214166356",
    thumbnail: why2NY,
    isCTA: false,
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
    title: <> Our Exceptional Portfolio of Explainer Videos </>,
    // para: (
    //   <>
    //     {" "}
    //     Explore our NYC based animation studio portfolio of animation projects
    //     across industries. From corporate explainer videos to cinematic 3D
    //     designs, our work has been recognized for its innovation and impact.{" "}
    //   </>
    // ),
    tabContents: tabContents,
    tabsInfo: true,
    tabInfo: tabInfo,
  }

  //=====Ribon Form Fold=====//
  const paraArrayBanner = [
    "Discover creativity at Infinity Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in NYC, we redefine narratives through innovative animations and cutting-edge technology. Our dedicated team, comprised of the finest talents in the industry, elevates ideas into captivating animations that leave a lasting impact.",

    "Infinity Animations stands out among the top animation companies in NYC, offering a seamless blend of technical expertise and imaginative flair. Our commitment to excellence ensures that your project receives the attention and detail it deserves. Partnering with Infinity Animations means choosing quality, reliability, and creativity.",
  ]

  //=====Looking Fold=====//
  const paraArray = [
    `We understand that animation is not just about creating visually stunning content; it’s about telling your brand's story in a way that resonates with your audience. Our team of skilled animators and storytellers collaborates closely with clients to ensure that every frame captures the essence of their message. We pride ourselves on our ability to adapt to various styles and formats, whether you need a whimsical character animation or a sleek corporate explainer video. This versatility allows us to tailor each project to your specific goals, ensuring maximum engagement and impact.`,
    `Our commitment to staying ahead of industry trends means we are always exploring new tools and methods to enhance our work. By blending artistic vision with strategic insights, we help brands stand out in a crowded marketplace. Choosing our studio means investing in a partnership that prioritizes your vision while delivering results that elevate your brand to new heights.`
  ]

  const looking = {
    main: (
      <>
        {" "}
        Why <span className="text-[#FF2D4A]">Choose </span> Us{" "}
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
    title: (
      <>
        {" "}
        <span className="text-primary-100">Our Seamless</span> Video Animation &
        Production Process{" "}
      </>
    ),
    // para: (
    //   <>
    //     {" "}
    //     We are an animated video production studio in New York with a seamless
    //     process. We transform your complex ideas into engaging, creative, and
    //     digestible content that is visually impactful as well. The process
    //     includes:
    //   </>
    // ),
    text1:
      "We first brainstorm and refine your ideas into a solid concept, ensuring a strong narrative foundation.",
    text2:
      "Next, we create storyboards that visually map out your video, displaying the sequence of animation events,",
    text3:
      "Using the storyboard as our guide, our animators bring your story to life with engaging visuals.",
    text4:
      "Lastly, we perfect and polish the animation through editing and deliver you the best result on time.",
    btnBg: "bg-prime",
  }

  //=====Want Fold=====//
  const want = {
    title: "Let’s Work ",
    wantDesc:
      "On Your Next Explainer Video",
    bgPrime: true,
  }

  //=====Testimonial Fold=====//
  const testimonialNew = {
    title: (
      <>
        {" "}
        Client Testimonials: What <br /> People Say About Us{" "}
      </>
    ),
    para: <> Achieved 1000+ Impactful Results That Speak our Credibility</>,
  }

  const processContent = {
    title: "Our <span class='text-primary-100'>Process</span>",

    conceptContent: [
      {
        ImageOne: process1,
        slideTitle: "Briefing",
        sliderDesc:
          "We begin by outlining your project requirements. This includes understanding your brand, defining the animation style, clarifying your message, and identifying your target audience to ensure we're aligned from the start.",
      },
      {
        ImageOne: process2,
        slideTitle: "Scriptwriting",
        sliderDesc:
          "With a solid brief in place, our scriptwriters craft a compelling script that communicates your message clearly and effectively. This forms the foundation of your explainer video.",
      },
      {
        ImageOne: process3,
        slideTitle: "Storyboarding",
        sliderDesc:
          "Our creative team then transforms the script into a visual blueprint. The storyboard illustrates key scenes and flow, giving you a clear idea of how the final video will unfold.",
      },
      {
        ImageOne: process4,
        slideTitle: "Illustrations",
        sliderDesc:
          "Once the storyboard is approved, our illustrators design custom visuals. These unique, high-quality illustrations bring your brand's story to life in a vibrant and engaging way.",
      },
      {
        ImageOne: process5,
        slideTitle: "Voice Over",
        sliderDesc:
          "We collaborate with professional voice-over artists to deliver your script in a tone and style that resonates with your audience. This adds personality and enhances the clarity of your message.",
      }
    ],
  }
  //=====Pricing Fold=====//
  const pricing = {
    title: <> Pricing Plan </>,
    para: <> Easy on the pocket and the eyes. </>,
  }
  //===== FAQS =====//
  const accordionData = [
    {
      question: 'What is an explainer video?',
      answer: "An explainer video is a short, engaging video designed to convey complex ideas in a simple and understandable way. These videos often use animations, motion graphics, or live-action to illustrate a product, service, or concept, making them effective tools for marketing, education, and internal communications.​"
    },
    {
      question: 'How much does an explainer video cost?',
      answer: "The cost of an explainer video varies depending on factors such as complexity, style, and duration. For instance, a 60-second whiteboard animation might range from $2,300 to $3,000, while a 2D animated video could cost between $3,000 and $4,500. More intricate 3D animations may range from $6,000 to $9,000 for the same length.",
    },
    {
      question: 'What is the typical production timeline for an explainer video?',
      answer: "The production timeline for an explainer video can vary based on its complexity and length. On average, it takes about 4 to 6 weeks to complete a standard explainer video, encompassing stages like scriptwriting, storyboarding, animation, and revisions. However, timelines can be adjusted to meet specific project needs.",
    },
    {
      question: 'Can I provide input during the production process?',
      answer: "Absolutely. Client collaboration is vital in creating an effective explainer video. Reputable production companies encourage client involvement during key stages such as script development, storyboarding, and animation to ensure the final product aligns with your vision and objectives. ​",
    },
    {
      question: 'Are revisions included in the production process?',
      answer: "Yes, most explainer video production services include a set number of revisions at various stages of production, such as scriptwriting, storyboarding, and animation. This ensures the final video meets your expectations. It's advisable to discuss the revision policy with your chosen production company to understand the scope and any potential additional costs.​",
    }
  ];
  const faqs = {
    accordionData: accordionData,
    title: "FAQs About Explainer Videos"
  }

  return (
    <>
      <div className="bg-black">
        <Hero content={hero} />
        <HeroBottom />
        <Speedometer title={Desc7.title} desc={Desc7.desc} list1={Desc7.list1} list2={Desc7.list2} extra_para={Desc7.extra_para} />
        <Counter />
        <Description content={Desc1} />
        <Portfolio content={portfolio} />
        <Why content={why1} />
        <Process content={processContent} />
        <Why content={why2} />
        <Services content={services} tabInfo={services.tabInfo} />
        <Pricing content={pricing} />
        <Description content={Desc2} />
        <Want content={want} />
        <Concept content={concept} />
        <FullContent1 content={Desc6} />
        <Description content={Desc3} />
        <Description content={Desc4} />
        <Description content={Desc5} />
        <Faqs content={faqs} />
        <TestimonialNew title={testimonialNew.title} para={testimonialNew.para} />
        <Looking content={looking} />
        <Contact />
        {/* {isMobile
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
                <HeroBottom />
                <Speedometer title={Desc7.title} desc={Desc7.desc} list1={Desc7.list1} list2={Desc7.list2} extra_para={Desc7.extra_para}  />
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
            )} */}
      </div>
    </>
  )
}

export default LocationPage
