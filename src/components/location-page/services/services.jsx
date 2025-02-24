import React, { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
// Import Slick Slider
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
//
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Import Images
import PlayIcon from "media/icons/play.png"
import thumbnail1 from "media/location-page/thumbnils/thumbnail1.jpg"
import thumbnail2 from "media/location-page/thumbnils/thumbnail2.jpg"
import thumbnail3 from "media/location-page/thumbnils/thumbnail3.jpg"
import thumbnail4 from "media/location-page/thumbnils/thumbnail4.jpg"
import thumbnail5 from "media/location-page/thumbnils/thumbnail5.jpg"
import thumbnail6 from "media/location-page/thumbnils/thumbnail6.jpg"
import CTA from "@/components/cta/CTA"

const Services = ({ content }) => {
  const { subtitle, title } = content
  const tabInfo = [
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950010334/rendition/720p/file.mp4?loc=external&log_user=0&signature=a761e4cb6edbbad24b418c5e42ebcc25598aa36503bb5e3f218b69efbb9a666b",
      thumbnail: thumbnail1,
      title: "2D Animation",
      para: `Infinity Animation brings ideas to life with stunning 2D animations. From engaging characters to seamless storytelling, we deliver dynamic visuals that captivate audiences, enhance brand messaging, and make your stories unforgettable in New York’s competitive market.`,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950011852/rendition/720p/file.mp4?loc=external&log_user=0&signature=15e9c340553571fedce72842f58c3e0af4fcafb7bbda0938d479a2246d9f7e06",
      thumbnail: thumbnail2,
      title: "3D Animation",
      para: `Experience immersive 3D animations with Infinity Animation. We craft visually striking designs that add depth, realism, and innovation to your projects, perfect for captivating your audience and elevating your brand in New York’s dynamic landscape.`,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950016751/rendition/720p/file.mp4?loc=external&log_user=0&signature=029bced4bb0cb9e41cb9accc4e9c35fc8abd08ce894378fd6764f648b8a20a72",
      thumbnail: thumbnail3,
      title: "Architectural Animation",
      para: `Showcase architectural designs with Infinity Animation’s cutting-edge 3D animations. From realistic walkthroughs to intricate models, we transform your concepts into captivating visual experiences that impress clients and stakeholders in New York’s thriving industry.`,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950015871/rendition/720p/file.mp4?loc=external&log_user=0&signature=c5d9400c52dea49465f643fde173da06371fde9a7a0b971d4d549c53d301beba",
      thumbnail: thumbnail4,
      title: "Motion Graphics",
      para: `Infinity Animation delivers dynamic motion graphics that blend creativity and innovation. Perfect for marketing, branding, or storytelling, our animations captivate audiences, making your content stand out in New York’s highly competitive market.`,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950013729/rendition/720p/file.mp4?loc=external&log_user=0&signature=dc0b60052c9254433445dab7bbd7e44d7df58cb701acbc8dd39dcb6d2c87e915",
      thumbnail: thumbnail5,
      title: "CGI-VFX",
      para: `Elevate your projects with Infinity Animation’s exceptional CGI and VFX services. We integrate realism and creativity, producing visually stunning effects that bring your vision to life and leave a lasting impression in New York’s vibrant market.`,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
      thumbnail: thumbnail6,
      title: "Infographics",
      para: `Simplify complex data with Infinity Animation’s vibrant animated infographics. Our visually compelling designs communicate information clearly and creatively, ensuring your message resonates with audiences in New York’s fast-paced business environment.`,
    },
  ]

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
        },
      },
    ],
  }
  //========= fancy box =========
  function Fancybox(props) {
    const containerRef = useRef(null)

    useEffect(() => {
      const container = containerRef.current

      const delegate = props.delegate || "[datafancybox]"
      const options = props.options || {}

      NativeFancybox.bind(container, delegate, options)

      return () => {
        NativeFancybox.unbind(container)
        NativeFancybox.close()
      }
    })

    return <div ref={containerRef}>{props.children}</div>
  }

  return (
    <>
      <section
        className={`w-full flex items-center justify-start pb-10 pt-6 md:py-16`}
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-6 mt-[65px] md:mt-0">
            <div className="col-span-12 text-center">
              <h2 className="w-full md:w-[70%] lg:w-[60%] mx-auto text-[16px] sm:text-[18px] font-normal font-sans leading-[10px] tracking-wider text-center my-2">
                {subtitle}
              </h2>
              <h2
                className={`text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans text-[#FF2D4A] leading-tight mb-0 md:mb-8 capitalize`}
              >
                {title}
              </h2>
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="grid grid-cols-12 gap-6">
              {tabInfo.map((items, i) => (
                <div
                  key={i}
                  className="col-span-12 md:col-span-6 lg:col-span-4"
                >
                  <div className="card rounded-[10px] bg-black shadow-2xl pt-[5px] px-[20px] pb-[35px] h-full">
                    <Fancybox
                      options={{
                        Carousel: {
                          infinite: false,
                        },
                      }}
                    >
                      <Link
                        className="w-full h-full"
                        href={items.video}
                        datafancybox="gallery"
                      >
                        <div
                          className={`w-full h-full overlay relative group overflow-hidden rounded-lg border border-slate-400`}
                        >
                          <div className="w-full h-full flex justify-center items-center  overlay-div-testi ">
                            <Image
                              src={items.thumbnail}
                              alt="Infinity Animations"
                              width={468}
                              height={263}
                              className="h-full w-full"
                            />
                            <div className=" bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                              <Image
                                src={PlayIcon}
                                alt="Play-icon"
                                className="brightness-200 invert-0 mx-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Fancybox>
                    <div className="content">
                      <h3 className="text-[#fff] text-[20px] md:text-[25px] font-bold font-sans pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] text-center hover:text-[#FF2D4A]">
                        {items.title}
                      </h3>
                      <p className="text-[15px] lg:text-[16px] font-sans text-[#fff] font-normal leading-[1.52857143] md:px-[10px] text-center ">
                        {items.para}
                      </p>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                      <CTA
                        text="Read More"
                        icon="/icons/arrow-red.png"
                        iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                        bg="bg-prime"
                        color={`text-white`}
                        border={`border-2 border-[#f5090b]`}
                        hover="hover:bg-transparent w-max "
                        href="javascript:void(Tawk_API.toggle())"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:hidden block">
            <Slider {...testiSlider} className="typeSlider servicSlider">
              {tabInfo.map((items, i) => (
                <div key={i} className="p-3">
                  <div className="card rounded-[10px] bg-black shadow-2xl pt-4 h-[375px]">
                    <Fancybox
                      options={{
                        Carousel: {
                          infinite: false,
                        },
                      }}
                    >
                      <Link
                        className="w-full h-full"
                        href={items.video}
                        datafancybox="gallery"
                      >
                        <div
                          className={`w-full h-full overlay relative group overflow-hidden rounded-lg border border-slate-400`}
                        >
                          <div className="w-full h-full flex justify-center items-center  overlay-div-testi ">
                            <Image
                              src={items.thumbnail}
                              alt="Infinity Animations"
                              width={468}
                              height={263}
                              className="h-full w-full"
                            />
                            <div className=" bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                              <Image
                                src={PlayIcon}
                                alt="Play-icon"
                                className="brightness-200 invert-0 mx-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Fancybox>
                    <div className="content">
                      <h3 className="text-[#fff] text-[20px] md:text-[25px] font-bold font-sans py-[20px] leading-[23px] md:leading-[33px] text-center hover:text-[#FF2D4A]">
                        {items.title}
                      </h3>
                      <p className="text-[15px] lg:text-[16px] font-sans text-[#fff] font-normal leading-[1.52857143] md:px-[10px] text-center ">
                        {items.para}
                      </p>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                      <CTA
                        text="Read More"
                        icon="/icons/arrow-red.png"
                        iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                        bg="bg-prime"
                        color={`text-white`}
                        border={`border-2 border-[#f5090b]`}
                        hover="hover:bg-transparent w-max "
                        href="javascript:void(Tawk_API.toggle())"
                      />
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
