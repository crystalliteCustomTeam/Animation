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
import Client1 from "media/animated-explainer-video-agency/clients/1.jpg"
import Client2 from "media/animated-explainer-video-agency/clients/2.jpg"
import Client3 from "media/animated-explainer-video-agency/clients/3.jpg"
import Client4 from "media/animated-explainer-video-agency/clients/4.jpg"
import Client5 from "media/animated-explainer-video-agency/clients/5.jpg"
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
          <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-x-5 items-center sm:gap-y-0 gap-y-10">
            <div className="col-span-12">
              <span className="block lg:text-lg md:text-[16px] text-[14px] pb-[15px] text-[#01e3b2] sm:tracking-[13px] tracking-[8px] font-semibold leading-tight uppercase ">
                How We Work
              </span>
              <h2 className="xl:text-[48px] lg:text-[40px] md:text-[38px] text-[24px] leading-tight font-semibold lg:mb-[25px] mb-[15px]">
                Hear from our clients why Infinity Animations is the right video
                partner for you.
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
                {[
                  [
                    "https://player.vimeo.com/progressive_redirect/playback/1002970096/rendition/1080p/file.mp4?loc=external&signature=fc8f804a99088eb6b9a5013b0b479804010f4ae592a1cb98f78c74548ef4207a",
                    Client1,
                  ],
                  [
                    "https://player.vimeo.com/progressive_redirect/playback/1004689419/rendition/1080p/file.mp4?loc=external&signature=aa0ecc4bb6f6ef34a7b5db3ae61b2417bf8b52c8b0529bad33d44a8c7ed1dfc1",
                    Client2,
                  ],
                  [
                    "https://player.vimeo.com/progressive_redirect/playback/950045737/rendition/1080p/file.mp4?loc=external&log_user=0&signature=85c3341b0d68f65b218956e9081d46bef4408f2e74e83148f4d3a83e34b79daf",
                    Client3,
                  ],
                  [
                    "https://player.vimeo.com/progressive_redirect/playback/950045464/rendition/720p/file.mp4?loc=external&log_user=0&signature=06fddc742a45b3eff983a4e5a207a5ff2d1ae71a328b1c14056b1bcc152a9800",
                    Client4,
                  ],
                  [
                    "https://player.vimeo.com/progressive_redirect/playback/950045568/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6ed32074656bcaa25e810119398883ade800b3fd2c5eed96b1eff541e57f5bca",
                    Client5,
                  ],
                ].map(([link, img], i) => (
                  <div key={i} className="grow-0 shrink-0 basis-full mx-5">
                    <a
                      href={link}
                      data-fancybox="gallery"
                      data-caption={`Client #${++i}`}
                    >
                      <Image src={img} alt="client" className="mx-auto" />
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
