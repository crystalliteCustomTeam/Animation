"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
// eMBLA
import { PrevButton, NextButton, usePrevNextButtons } from "./arrow-buttons"
import styles from "./testi.module.css"
import useEmblaCarousel from "embla-carousel-react"
// Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
//==== Testimonial Images
import quote from "media/location-page/testi-colon.png"
import icon2 from "media/icons/stars.png"
import Thumbnail1 from "media/location-page/thumbnils/thumbnail7.png"
import Thumbnail2 from "media/location-page/thumbnils/thumbnail8.png"
import Thumbnail3 from "media/location-page/thumbnils/thumbnail9.png"
import Thumbnail4 from "media/location-page/thumbnils/thumbnail10.png"
import Thumbnail5 from "media/location-page/thumbnils/thumbnail11.png"
import Thumbnail6 from "media/location-page/thumbnils/thumbnail12.png"
import Thumbnail7 from "media/location-page/thumbnils/thumbnail13.png"
import Thumbnail8 from "media/location-page/thumbnils/thumbnail14.png"
import Thumbnail9 from "media/location-page/thumbnils/thumbnail15.png"
import PlayIcon from "media/play_icon.png"
const TestimonialNew2 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const testiContentNew2 = [
    {
      stars: icon2,
      name: "Anthony Viggiano",
      para: `I needed an animated video of our product and found Infinity Animation online. Chris Grayson had great reviews, so I hired them. They did a terrific job. Phil Johnson, the efficient team leader, promptly made all requested changes. I highly recommend this reasonably priced, excellent company. Good luck!`,
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1002970096/rendition/1080p/file.mp4?loc=external&signature=fc8f804a99088eb6b9a5013b0b479804010f4ae592a1cb98f78c74548ef4207a",
      thumbnail: Thumbnail1,
    },
    {
      stars: icon2,
      name: "Pat",
      para: `Hi, my name is Pat from Phoenix, Arizona. We recently completed a project with Nathan at Infinity Animation, and we couldn"t be happier with the final product. Nathan was great to work with, provided clear directions, and we are really pleased with the outcome of our project. We give them five stars and hope you"ll check them out.`,
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1004689419/rendition/1080p/file.mp4?loc=external&signature=aa0ecc4bb6f6ef34a7b5db3ae61b2417bf8b52c8b0529bad33d44a8c7ed1dfc1",
      thumbnail: Thumbnail2,
    },
    {
      stars: icon2,
      name: "Sylvia David",
      para: `I wanted to give a big shout-out to Infinity Animations, a top video animation company, for their outstanding work on our promotional video. Their team was easy to work with and delivered the project quickly and efficiently.`,
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950045737/rendition/1080p/file.mp4?loc=external&log_user=0&signature=85c3341b0d68f65b218956e9081d46bef4408f2e74e83148f4d3a83e34b79daf",
      thumbnail: Thumbnail3,
    },
    {
      stars: icon2,
      name: "Emily Margolis",
      para: `We approached Infinity Animations, a leading video animation agency, for a short explainer video. Their team provided exceptional video animation services and delivered a high-quality 2D animation right on time. Highly recommended!`,
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950045464/rendition/720p/file.mp4?loc=external&log_user=0&signature=06fddc742a45b3eff983a4e5a207a5ff2d1ae71a328b1c14056b1bcc152a9800",
      thumbnail: Thumbnail4,
    },
    {
      stars: icon2,
      name: "Helen Brooks",
      para: `Huge thanks to Infinity Animations for their incredible video production service. They made the entire process seamless and produced a visually stunning animation that perfectly matched our brand.`,
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950045568/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6ed32074656bcaa25e810119398883ade800b3fd2c5eed96b1eff541e57f5bca",
      thumbnail: Thumbnail5,
    },
    {
      stars: icon2,
      name: "Edd Lockwood",
      para: `Kudos to Infinity Animations, a fantastic video marketing agency, for creating an engaging and visually appealing animated video. Their team’s creativity and professionalism made our project a huge success.`,
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950045397/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5eb15a8721a49d21ead978545b43276c59608470ad55c3677e62e1fe88d8edfc",
      thumbnail: Thumbnail6,
    },
    {
      stars: icon2,
      name: "Matt Evans",
      para: `We needed a compelling video for our new product launch, and Infinity Animations, as a video animation agency, exceeded our expectations. Their video production service was exceptional, delivering a high-quality animation in a timely manner.`,
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950045706/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2b0144629d6bc9649580afa809527d09e6528f656a1c76a1b59408367879c24e",
      thumbnail: Thumbnail7,
    },
    {
      stars: icon2,
      name: "Mathew",
      para: `A big thank you to Infinity Animations, a top-notch video animation company, for delivering an outstanding explainer video. The team was responsive, creative, and quick to complete the project.`,
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950045615/rendition/720p/file.mp4?loc=external&log_user=0&signature=8256b0e38317771b8db2d8959dc6d54ee41dd6c7a847875437dde63ea45333f2",
      thumbnail: Thumbnail8,
    },
    {
      stars: icon2,
      name: "Gary Wilson",
      para: `I highly recommend Infinity Animations, a premier animation agency, for their excellent video animation services. They created a high-quality animation for our campaign and were a pleasure to work with throughout the process.`,
      video:
        "https://player.vimeo.com/progressive_redirect/playback/950045528/rendition/720p/file.mp4?loc=external&log_user=0&signature=88472fd594409a630523ae139ad0cb0c10556198290ca3f6e4e79c61eec6e8ff",
      thumbnail: Thumbnail9,
    },
  ]

  // ======== FancyBox
  function Fancybox(props) {
    const containerRef = useRef(null)
    const [isFancyboxLoaded, setIsFancyboxLoaded] = useState(false)

    useEffect(() => {
      if (typeof window !== "undefined" && !isFancyboxLoaded) {
        // Initialize Fancybox
        NativeFancybox.bind(
          containerRef.current,
          props.delegate || "[data-fancybox]",
          props.options || {}
        )
        setIsFancyboxLoaded(true)
      }

      return () => {
        if (isFancyboxLoaded) {
          NativeFancybox.unbind(containerRef.current)
          NativeFancybox.close()
        }
      }
    }, [props.delegate, props.options, isFancyboxLoaded])

    return <div ref={containerRef}>{props.children}</div>
  }

  return (
    <section>
      <div className="py-[50px]">
        <div className="container">
          <div className="text-center max-w-[650px] mx-auto md:pb-[80px] pb-[50px]">
            <h2 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight mb-5 capitalize">
              Client Testimonials: Our Work Speaks for Itself
            </h2>
            <p className="text-[15px] lg:text-[16px] font-sans font-normal tracking-wider mb-0">
              Achieved 1000+ Impactful Results That Speak our Credibility
            </p>
          </div>
          <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
              <div className={styles.embla__container}>
                {testiContentNew2.map((testimonial, index) => (
                  <div key={index} className={styles.embla__slide}>
                    <div className="w-full grid md:grid-cols-12 grid-cols-1 items-center gap-y-5 gap-x-10">
                      <div className="bg-[#D60925] xl:col-span-7 md:col-span-6 rounded-[25px] h-full p-5">
                        <div className="w-full h-full flex flex-col justify-center gap-y-5">
                          <div className="flex items-center gap-x-3 mb-1">
                            <Image
                              src={quote}
                              alt="Infinity Animations"
                              className="w-[35px] h-[30px]"
                            />
                            <div>
                              <h3 className="text-[18px] md:text-[30px] leading-tight font-semibold font-sans text-[#fff]">
                                {testimonial.name}
                              </h3>
                            </div>
                          </div>
                          <div>
                            <p className="text-[18px] font-sans font-light text-white">
                              {testimonial.para}
                            </p>
                          </div>
                          <div>
                            <Image
                              src={testimonial.stars}
                              className="w-[20%]"
                              alt="Infinity Animation"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="xl:col-span-5 md:col-span-6 relative z-10 h-full overflow-hidden group cursor-pointer">
                        <Fancybox>
                          <span className="absolute inset-0 bg-black/30 transition-all ease-in-out duration-300 translate-y-full group-hover:translate-y-0 w-full h-full object-cover object-center"></span>
                          <button
                            data-fancybox="video-gallery"
                            data-src={testimonial.video}
                            className="absolute inset-0 z-10 transition-all ease-in-out duration-300 translate-y-full group-hover:translate-y-0 w-max h-0 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:h-max m-auto object-cover object-center"
                          >
                            <Image
                              src={PlayIcon}
                              width={50}
                              height={50}
                              alt="Play Icon"
                            />
                          </button>
                          <Image
                            src={testimonial.thumbnail}
                            alt="Infinity Animations"
                            className="rounded-[12px] w-full h-full object-cover"
                          />
                        </Fancybox>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.embla__controls}>
              <div className={styles.embla__buttons}>
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialNew2
