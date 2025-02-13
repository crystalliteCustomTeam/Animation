"use client"
import React from "react"

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react"

const Faqs = () => {
  const [open, setOpen] = React.useState(0)

  const handleOpen = (value) => {
    setOpen(open === value ? null : value)
  }

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1.5em"
        fill="#ffaf00"
        className={`h-7 w-7 transition-transform ease-in-out duration-700 ${
          id === open ? "rotate-360" : ""
        }`}
      >
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path
          d={
            id === open
              ? "M19 13H5v-2h14v2z"
              : "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
          }
        ></path>
      </svg>
    )
  }
  return (
    <section>
      <div className="bg-[#161513] sm:py-[50px] pt-[20px] pb-[50px] font-mono">
        <div className="container">
          <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-x-5 items-center sm:gap-y-5 gap-y-10">
            <div className="col-span-12">
              <span className="block lg:text-lg md:text-[16px] text-[14px] pb-[15px] text-[#01e3b2] sm:tracking-[13px] tracking-[5px] font-semibold leading-tight uppercase ">
                WHAT YOU SHOULD KNOW
              </span>
              <h2 className="xl:text-[48px] md:text-[38px] sm:text-[24px] text-[20px] leading-tight font-semibold lg:mb-[25px] mb-[15px]">
                Frequently Asked Questions for you.
              </h2>
            </div>
            <div className="xl:col-span-8 col-span-12 grid grid-cols-1">
              {[
                [
                  "What’s your process?",
                  "Our process at Explainly is a meticulously designed journey that starts with understanding your unique needs and vision. We begin with a comprehensive discovery phase, followed by ideation and scriptwriting, where your story begins to take shape. Next, we move into the creation of custom visuals and animation, bringing your narrative to life. Throughout the process, we maintain open communication and collaboration, ensuring that the final product not only meets but exceeds your expectations.",
                ],
                [
                  "How much will my video cost?",
                  "The cost of your video at Explainly is determined by various factors, including the length of the video, complexity of the visuals, and the specific requirements of your project. We believe in transparent pricing and will work with you to understand your budget and provide a detailed quote that aligns with your needs and expectations. Rest assured, our goal is to deliver exceptional value and quality, making your investment worthwhile.",
                ],
                [
                  "How long will my video take?",
                  "The timeline for creating your video depends on its complexity and your specific requirements. Generally, a standard explainer video can take anywhere from a few weeks to a couple of months. Our team is committed to efficient and timely delivery, while ensuring the highest quality standards. We’ll provide you with a projected timeline at the start of the project and keep you updated throughout the process.",
                ],
                [
                  "Should I invest in more than one video?",
                  "Investing in multiple videos can significantly enhance your brand’s storytelling and audience engagement. With a series of videos, you can cover different aspects of your business, target various audience segments, or create a cohesive marketing campaign. Our team can help you strategize the most effective way to use multiple videos, ensuring each one aligns with your overall marketing goals and provides maximum impact.",
                ],
              ].map(([title, desc], i) => (
                <Accordion key={i} open={open === i}>
                  <AccordionHeader
                    onClick={() => handleOpen(i)}
                    className="flex items-center justify-start gap-x-3 py-2 mb-0"
                  >
                    <Icon id={i} open={open} />
                    <span className="block lg:text-xl md:text-lg text-[16px] leading-tight font-normal text-[#ffaf00] tracking-[2px]">
                      {title}
                    </span>
                  </AccordionHeader>
                  <AccordionBody className="text-[#bdbdbd] lg:text-lg md:text-[16px] text-[14px] leading-tight !font-light tracking-[0.5px]">
                    {desc}
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="border border-[#252525] md:p-[45px_15px_40px] p-[25px_15px] text-center">
                <div className="max-w-[400px] mx-auto">
                  <h4 className="lg:text-[28px] md:text-[24px] text-[20px] leading-tight font-semibold mb-5">
                    Ready to get started on your video with us?
                  </h4>
                  <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[rgb(189,_189,_189)] leading-normal font-normal pb-5">
                    Schedule a call so we can confirm the details and provide
                    you with a custom quote.
                  </p>
                  <a
                    href="#"
                    className="relative z-10 overflow-hidden group border border-[#ffaf00] text-[#1c1b18] xl:text-base text-xs leading-tight font-bold tracking-[0.1em] uppercase inline-flex items-center justify-center sm:px-[23px] px-[18px] h-[60px] text-center w-max mx-auto rounded-[60px] duration-700 transition-all bg-[#ffaf00] hover:duration-700 hover:transition-all"
                  >
                    <span className="absolute inset-0 w-full h-full bg-white border border-white -z-10 rounded-[9999px] transition-all ease-in-out duration-300 group-hover:translate-y-0 translate-y-full"></span>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
