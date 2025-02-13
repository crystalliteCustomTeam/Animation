"use client"
import { useEffect } from "react"
// Next
import Image from "next/image"
// Fancybox UI
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Media
import Icon1 from "media/animated-explainer-video-agency/icons/1.svg"
import Icon2 from "media/animated-explainer-video-agency/icons/2.svg"
import Icon3 from "media/animated-explainer-video-agency/icons/3.svg"
import Icon4 from "media/animated-explainer-video-agency/icons/4.svg"
import Client1 from "media/animated-explainer-video-agency/clients/1.webp"
import Client2 from "media/animated-explainer-video-agency/clients/2.webp"
import Client3 from "media/animated-explainer-video-agency/clients/3.webp"
import Client4 from "media/animated-explainer-video-agency/clients/4.webp"
import Client5 from "media/animated-explainer-video-agency/clients/5.webp"
import AutoPlaySlider from "../Slider/Autoplay"

const WeWork = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: false,
      Thumbs: { autoStart: true },
      loop: false,
      keyboard: false,
    })
    Fancybox.bind("[data-fancybox]", {
      on: {
        ready: (fancybox) => {
          console.log("Fancybox is ready!", fancybox)
        },
        done: (fancybox) => {
          console.log("Image loaded!")
        },
        close: () => {
          console.log("Gallery closed")
        },
      },
    })
    return () => {
      Fancybox.destroy()
    }
  }, [])
  return (
    <section>
      <div className="bg-[#161513] sm:py-[50px] pt-[20px] pb-[50px] font-mono">
        <div className="container">
          <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-x-5 sm:gap-y-0 gap-y-10">
            <div className="col-span-12">
              <span className="block lg:text-lg md:text-[16px] text-[14px] pb-[15px] text-[#01e3b2] sm:tracking-[13px] tracking-[8px] font-semibold leading-tight uppercase ">
                How We Work
              </span>
              <h2 className="xl:text-[48px] lg:text-[40px] md:text-[38px] text-[24px] leading-tight font-semibold lg:mb-[25px] mb-[15px]">
                Hear from our clients why Explainly is the right video partner
                for you.
              </h2>
            </div>
            <div className="xl:col-span-6 col-span-12 lg:mt-[40px] mt-[20px]">
              <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-5">
                {[
                  [
                    Icon1,
                    "Ideation",
                    "You know your business and what it needs, and we work to understand your challenges and opportunities fully to develop the right goals for your video production.",
                  ],
                  [
                    Icon2,
                    "Strategic storytelling",
                    "A successful video needs rock-solid messaging and strategy. We archieve this by asking the right questions and supplementing with research.",
                  ],
                  [
                    Icon3,
                    "Custom visuals",
                    "Our portfolio speaks for itself. We produce high-quality, custom visuals that fit your brand and will impress your audience.",
                  ],
                  [
                    Icon4,
                    "Our service",
                    "We are collaborative, consultative, creative, responsive, reliable, and flexible. Our process is designed to be easy, fun, and effective.",
                  ],
                ].map(([img, title, desc], i) => (
                  <div key={i} className="h-full">
                    <Image src={img} alt="icon" className="pb-[15px]" />
                    <h3 className="text-[24px] leading-tight font-semibold pb-[10px]">
                      {title}
                    </h3>
                    <p className="text-[#bdbdbd] text-sm leading-normal">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
              <AutoPlaySlider arrows={false} dots={true}>
                {[Client1, Client2, Client3, Client4, Client5].map((e, i) => (
                  <div key={i} className="grow-0 shrink-0 basis-full mx-5">
                    <a
                      href={e.src}
                      data-fancybox="gallery"
                      data-caption={`Client #${++i}`}
                    >
                      <Image src={e} alt="client" className="mx-auto" />
                    </a>
                  </div>
                ))}
              </AutoPlaySlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeWork
