"use client"
import React from "react"
import Image from "next/image"
// Import Slick Slider
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./process.css"
import CTA from "@/components/cta/CTA"

const Process = ({ content }) => {
  const {
    title,
    para = "We have a transparent approach for all types of animation videos. See how we produce stunning animations for your project:",
    conceptContent
  } = content
  // Slider Setting
  const testiSlider = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <>
      <section
        className={`xl:pt-36 lg:pb-16 md:pb-12 pb-8 relative location_process`}
      >
        <div className="container">
          <h2
            className="text-white text-[30px] md:text-[50px] font-sans font-bold"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-white font-sans font-light text-[16px] max-w-[600px]">
            {para}
          </p>
          <Slider {...testiSlider} className="servicesConcept mt-12">
            {conceptContent.map((concept, index) => (
              <div key={index}>
                <div className="px-4 py-10 border border-white rounded-lg w-[98%] mx-auto">
                  <div className="flex flex-wrap items-start justify-between mb-3">
                    <Image
                      src={concept.ImageOne}
                      className="w-[20%] xl:w-auto"
                      alt="Infinity Animation"
                    />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-sans font-bold tracking-wide mb-2">
                      {concept.slideTitle}
                    </h3>
                    <p className="text-[14px] sm:text-[16px] font-sans font-normal tracking-wider line-clamp-3">
                      {concept.sliderDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex items-center justify-center mt-8">
            <CTA
              text="View All Process"
              icon="/icons/arrow-red.png"
              iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
              bg="bg-prime"
              color={`text-white`}
              border={`border-2 border-[#f5090b]`}
              hover="hover:bg-transparent w-max "
              href="javascript:parent.LC_API.open_chat_window();"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Process
