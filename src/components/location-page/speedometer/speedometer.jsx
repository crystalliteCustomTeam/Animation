"use client"
// Import Components
import CTA from "@/components/cta/CTA"
// Next
import Image from "next/image"
// Import Images
import Icon from "media/icons/check-img.png"
import Link from "next/link"

const Speedometer = ({
  title = `<span className="text-primary-100">Best</span> Video Animation <br /> Company <span className="text-primary-100"> in New York <br /> </span>  With Diverse Services`,
  desc = "Our NYC animation studio offers a wide range of services to cater to diverse industries. From creating stunning character animations to producing informative explainer videos, we leverage cutting-edge tools and techniques to ensure the highest quality. Partner with us to transform your ideas into dynamic visual stories.",
  list1 = [
    ["2D Animation Services"],
    ["3D Animation Services"],
    ["Motion Graphics Services"],
    ["Training Video Production"],
    ["Professional Video Editing Services"],
    ["Educational Video"],
  ],
  list2 = [
    ["Custom-Made Graphics & illustrations"],
    ["Explainer Videos"],
    ["Video Marketing"],
    ["Video Editing Services"],
    ["Promotional Video Production"],
    ["Corporate Video Production"],
  ],
  extra_para = null
}) => {
  return (
    <>
      <section className="py-[100px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 ms-auto pe-0 md:pe-5 flex flex-col justify-center relative">
              <h2
                className={`text-[30px] md:text-[50px] xl:text-[46px] 2xl:text-[60px] font-semibold font-sans leading-tight mb-5`}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="text-[15px] lg:text-[16px] font-normal font-sans leading-normal tracking-wider">
                {desc}
              </p>
              {extra_para && <p className="text-[15px] lg:text-[16px] font-normal font-sans leading-normal tracking-wider mt-3">
                {extra_para}
              </p>}
              <div className="flex gap-6 mt-5">
                <CTA
                  text="Get Started"
                  icon="/icons/arrow-red.png"
                  iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                  bg="bg-prime"
                  color={`text-white`}
                  border={`border-2 border-[#f5090b]`}
                  hover="hover:bg-transparent"
                />
                <CTA
                  text="Live Chat"
                  icon="/icons/chat.png"
                  iconCss="w-[40px]"
                  bg="bg-[#000]"
                  color={`text-white`}
                  border={`border-2 border-[#fff]`}
                  hover="hover:bg-prime"
                  href="javascript:parent.LC_API.open_chat_window();"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 max-w-[600px] mx-auto mt-10 lg:mt-0 grid grid-cols-2 font-sans gap-x-3">
              <div className="">
                {list1.map(([text], i) => (
                  <div
                    key={i}
                    className="flex items-start mb-5 transaction-all ease-in-out duration-300 hover:text-primary-100 gap-x-2 text-[15px] lg:text-[16px] leading-tight"
                  >
                    <Image src={Icon} alt="icon" className="shrink-0" />
                    <h3>{text}</h3>
                  </div>
                ))}
              </div>
              <div className="">
                {list2.map(([text], i) => (
                  <div
                    key={i}
                    className="flex items-start mb-5 transaction-all ease-in-out duration-300 hover:text-primary-100 gap-x-2 text-[15px] lg:text-[16px] leading-tight"
                  >
                    <Image src={Icon} alt="icon" className="shrink-0" />
                    <h3>{text}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Speedometer
