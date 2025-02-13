"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Import Css
import styles from "./PortFolio.module.css"
// icons
import PlayIcon from "media/infinity-studio/play2.png"

const Portfolio = ({ content }) => {
  const { tabInfo, tabContents } = content
  //========= tabs =========
  const [activeTab, setActiveTab] = useState(0)
  const handleTabClick = (index) => {
    setActiveTab(index)
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
        className={`w-full flex items-center justify-start pb-[60px]  bg-[#161513]`}
      >
        <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
          <div className={`"mt-8 md:mt-8`}>
            <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 mx-auto">
              {tabInfo.map((tab, index) => (
                <li
                  key={index}
                  className={`w-max px-[10px] lg:px-[35px] h-[35px] lg:h-[55px] flex items-center justify-center text-[12px] lg:text-[18px] font-semibold poppins border rounded-[27px] cursor-pointer border-[#ffaf00] text-white hover:bg-[#ffaf00] hover:text-white hover:duration-700 duration-700 ease-in-out ${
                    activeTab === index
                      ? "bg-[#ffaf00] text-[#1c1b18]"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
            <div className="tabs-content pt-7 md:pt-12">
              <Fancybox
                options={{
                  Carousel: {
                    infinite: false,
                  },
                }}
              >
                {tabContents[activeTab] && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    {tabContents[activeTab].map((item, index) => (
                      <Link
                        key={index}
                        href={item.video}
                        datafancybox="gallery"
                        className={`${styles.shadow} w-full h-full group`}
                      >
                        <div className="overlay relative ">
                          <Image
                            src={item.thumbnail}
                            priority
                            alt="Infinity Animations"
                            className="h-[263px] min-w-[468px]"
                          />
                          <div className="bg-slate-700/75 h-full w-full absolute left-[0%] top-[0%] flex items-center justify-center ">
                            <Image
                              src={PlayIcon}
                              alt="Play-icon"
                              className={`${styles.animi} brightness-200 invert-0 w-[75px]`}
                            />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </Fancybox>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-3">
              <a
                href="javascript:void(Tawk_API.toggle())"
                className="flex text-center items-center text-[14px] xl:text-[16px] text-white font-semibold font-mono border border-[#ffaf00] ml-[10px] py-[12px] px-[10px] xl:px-[20px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#ffaf00] hover:duration-700 hover:transition-all"
              >
                Make an Animation
              </a>
              <a
                href="tel:8336666689"
                className="flex text-center items-center text-[14px] xl:text-[16px] text-white font-semibold font-mono border border-white ml-[10px] py-[12px] px-[10px] xl:px-[20px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-transparent hover:duration-700 hover:transition-all"
              >
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
