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
        in San Francisco
      </>
    ),
    para: "As one of the leading animation studios in San Francisco, we offer a full spectrum of animation services tailored to your brand and business goals. Our team blends artistic creativity with technical excellence to deliver animations that connect with your audience on every level.",
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
  }

  //=====Description Fold=====//
  const Desc1 = {
    title: (
      <>
        San Francisco Animation Studio <br />{" "}
        <span className="text-[#FF2D4A]">
          {" "}
          With Expert Animation and Visual Effects
        </span>
      </>
    ),
    para: (
      <>
        In the heart of one of the world’s most creative cities, our San
        Francisco animation studio offers more than just beautiful visuals—we
        deliver stories that stick. In a fast-paced, content-heavy world, your
        message needs more than style; it needs strategy.
        <br />
        <br />
        From sleek motion graphics to detailed 2D and 3D animation, we help you
        connect with your audience through content that’s as impactful as it is
        visually compelling. Whether you're explaining a product, launching a
        campaign, or educating a team, we simplify complex ideas and turn them
        into memorable visual narratives.
        <br />
        <br />
        Each animation is crafted to align with your brand’s identity and
        business objectives, ensuring every frame enhances your message, builds
        trust, and leaves a lasting impression.
      </>
    ),
    bannerRight:
      "https://player.vimeo.com/progressive_redirect/playback/947422905/rendition/1080p/file.mp4?loc=external&signature=5c27dbb6f888f0c94df31c794a5a2c96bcac64552c393b29b37198d5da826b1c&user_id=214166356",
    thumbnail: body1,
    downArrow: "start",
  }
  const Desc2 = {
    title: (
      <>
        The Power of Animation in <br />{" "}
        <span className="text-[#FF2D4A]">
          {" "}
          San Francisco’s Competitive Market
        </span>
      </>
    ),
    para: "Capture attention, communicate value, and inspire action—all with a single animated explainer video. These videos transform complex ideas into compelling stories, highlight what makes your product unique, and keep viewers engaged. Animation adds clarity, impact, and a lasting impression. Collaborate with us to develop a high-quality, customized explainer video that not only stands out but also drives conversions. Let’s create something that moves your audience—and your business—forward.",
    bannerRight:
      "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=d5c539f4ba9416fdbe24bb4389c7380e9a5cb4e30ea3c8ce7d3520b69ccb7f25&user_id=214166356",
    thumbnail: body2,
    downArrow: "start",
  }
  const Desc3 = {
    title: (
      <>
        Boom Your Brand With Leading{" "}
        <span className="text-primary-100">
          Video Production Company San Francisco
        </span>
      </>
    ),
    para: "Incorporating animated explainer videos into your marketing strategy can significantly enhance audience engagement. These videos simplify complex ideas, making them accessible and engaging for viewers. By presenting information in a visually appealing format, they not only educate but also entertain, leading to higher viewer retention and increased conversion rates. Implementing explainer videos can effectively communicate your brand's message and value proposition.",
    bannerLeft:
      "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=8af579ca2eae6ba8c0e08217cd6bd78828f596d70e3bd6624936fd07ff35854e&user_id=214166356",
    thumbnail: body3,
    downArrow: "end",
  }
  const Desc4 = {
    title: (
      <>
        San Francisco Premier Animation Studio{" "}
        <span className="text-primary-100">With Custom Animation Services</span>
      </>
    ),
    para: "At our San Francisco studio, we specialize in various Custom Animation Services, including claymation, object-based animation, and cut-out animation. These techniques are ideal for brands seeking a nostalgic or artisanal visual identity that connects emotionally with their audiences. We’ve helped clients tell their stories through beautifully crafted animations that merge traditional artistry with modern branding.",
    bannerRight:
      "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=83cd56e58fbcc848feafd727d790b3bf4593c20467d0e7276efbf5ee0892a680&user_id=214166356",
    thumbnail: body4,
  }
  const Desc5 = {
    title: (
      <>
        San Francisco Animation Studio{" "}
        <span className="text-primary-100">
          With Professional Animation Production
        </span>
      </>
    ),
    para: "In the heart of San Francisco’s innovation hub, Infinity Animation combines creativity with cutting-edge design to deliver standout animation. We specialize in translating complex ideas into clear, compelling visuals that resonate with modern audiences. From startups to global brands, we craft animations that reflect your vision and elevate your presence. Partner with us for storytelling that captures attention in a digital-first world.",
    bannerLeft:
      "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
    thumbnail: body5,
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

  //=====Description Fold=====//
  const why1 = {
    title: "Why Animated Videos Are the Future of Marketing?",
    para: "<p className='font-semibold text-[18px]'>According to research  <span className='text-[50px] text-primary-100'>96%</span>  buyers watch animated explainer videos to get the details of a product they want to buy.</p><p>People love watching videos online and animated videos especially explainers are ideal to tell your brand as well as product’s story in a creative way.</p><p>Watch Randy Biddle as he dissects how exactly an explainer video production company can help you achieve that.</p>",
    bannerLeft:
      "https://player.vimeo.com/progressive_redirect/playback/1059809262/rendition/720p/file.mp4?loc=external&log_user=0&signature=016810458c9de0e7ccaf44d254900d7c4a14883c6e461b7ae9c4d02031ebda85&user_id=157924231",
    thumbnail: why1NY,
    isCTA: true,
  }
  const why2 = {
    title:
      "Let’s Create Out-of-This-World Animations with <span className='text-primary-100'>Infinity Animation</span>",
    para: "<p>San Francisco has quickly emerged as a creative hub for digital media, with a thriving demand for video content across industries. Businesses here are recognizing the power of storytelling through animation—from tech startups to healthcare organizations, animated content is being used to educate, promote, and inspire.</p><p>What makes San Francisco animation studios stand out is the blend of creative talent and technical expertise. As remote work expands and the digital marketplace grows, working with a local video animation San Francisco team ensures better communication, cultural alignment, and faster turnaround times.</p><p>Whether you're a local company or national brand targeting a Colorado audience, working with a San Francisco animation studio ensures your message resonates with regional authenticity while delivering professional-grade visuals.</p>",
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
    title: <> Our Exceptional Portfolio of Video Animation </>,
    para: (
      <>
        We believe that great animation speaks louder than words. Our portfolio
        showcases diverse projects from industries like tech, healthcare,
        education, and consumer products—all designed and produced right here at
        our San Francisco animation studio.
      </>
    ),
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
    [
      "At our San Francisco Animation Studios, we understand that animation is not just about creating visually stunning content; it’s about telling your brand's story in a way that resonates with your audience. Our team of skilled animators and storytellers collaborates closely with clients to ensure that every frame captures the essence of their message. We pride ourselves on our ability to adapt to various styles and formats, whether you need a whimsical character animation or a sleek corporate explainer video. This versatility allows us to tailor each project to your specific goals, ensuring maximum engagement and impact.",
    ],
    [
      "Our commitment to staying ahead of industry trends means we are always exploring new tools and methods to enhance our work. By blending artistic vision with strategic insights, we help brands stand out in a crowded marketplace. Choosing our studio means investing in a partnership that prioritizes your vision while delivering results that elevate your brand to new heights.",
    ],
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
    para: (
      <>
        {" "}
        We are an animated video production studio in New York with a seamless
        process. We transform your complex ideas into engaging, creative, and
        digestible content that is visually impactful as well. The process
        includes:
      </>
    ),
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
    title: "Ready to Elevate Your Brand with Animation?",
    wantDesc:
      "Your search for the perfect animation studio in San Francisco ends here. We’re dedicated to turning your ideas into dynamic, impactful visuals that inspire and engage.",
    bgPrime: true,
  }

  //=====Testimonial Fold=====//
  const testimonialNew = {
    title: (
      <>
        {" "}
        Client Testimonials: Our <br /> Work Speaks for Itself{" "}
      </>
    ),
    para: <> Achieved 1000+ Impactful Results That Speak our Credibility</>,
  }

  const processContent = {
    title: "Our <span className='text-primary-100'>Process</span>",

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
  //=====Pricing Fold=====//
  const pricing = {
    title: <> Pricing Plans </>,
    para: <> Easy on the pocket and the eyes. </>,
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
                <HeroBottom />
                <Speedometer
                  title={`<span className="text-primary-100">Best</span> Video Animation <br /> Company <span className="text-primary-100"> in San Francisco <br /> </span>  With Diverse Services`}
                  desc="As one of the leading animation studios in San Francisco, we offer a full spectrum of animation services tailored to your brand and business goals. Our team blends artistic creativity with technical excellence to deliver animations that connect with your audience on every level."
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
