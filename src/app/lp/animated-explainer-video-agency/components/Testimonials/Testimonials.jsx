import Image from "next/image"
import AutoPlaySlider from "../Slider/Autoplay"
import BG1 from "media/animated-explainer-video-agency/clients/grey_bg.webp"
import BG2 from "media/animated-explainer-video-agency/clients/red_bg.webp"
import BG3 from "media/animated-explainer-video-agency/clients/yellow_bg.webp"
import Client1 from "media/animated-explainer-video-agency/clients/6.webp"
import Client2 from "media/animated-explainer-video-agency/clients/7.webp"
import Client3 from "media/animated-explainer-video-agency/clients/8.webp"
import Client4 from "media/animated-explainer-video-agency/clients/9.webp"
import Client5 from "media/animated-explainer-video-agency/clients/10.webp"
import Client6 from "media/animated-explainer-video-agency/clients/11.webp"
import Client7 from "media/animated-explainer-video-agency/clients/12.webp"
import Client8 from "media/animated-explainer-video-agency/clients/13.webp"
import Client9 from "media/animated-explainer-video-agency/clients/14.webp"

const Testimonials = () => {
  return (
    <section>
      <div className="bg-[#161513] sm:py-[50px] pt-[20px] pb-[50px] font-mono">
        <div className="container">
          <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-x-5 items-center sm:gap-y-5 gap-y-10">
            <div className="col-span-12">
              <span className="block lg:text-lg md:text-[16px] text-[14px] pb-[15px] text-[#01e3b2] sm:tracking-[13px] tracking-[5px] font-semibold leading-tight uppercase ">
                testimonials
              </span>
              <h2 className="xl:text-[48px] md:text-[38px] sm:text-[24px] text-[20px] leading-tight font-semibold lg:mb-[25px] mb-[15px]">
                Our tried and true process produces successful videos.
              </h2>
            </div>
            <div className="col-span-12">
              <AutoPlaySlider align="start" arrowsCss="justify-content-end w-full">
                {[
                  [
                    BG1,
                    "They were very professional, responsible, and fast, but beyond that, they were very creative and strategic and helped me figure out exactly what I needed and how to achieve it. The AMA San Francisco appreciates your talent and we will be working with them again in our...",
                    Client1,
                    "Gerardo Garcia-Jurado",
                    "President at the",
                  ],
                  [
                    BG2,
                    "They were very professional, responsible, and fast, but beyond that, they were very creative and strategic and helped me figure out exactly what I needed and how to achieve it. The AMA San Francisco appreciates your talent and we will be working with them again in our...",
                    Client2,
                    "Gerardo Garcia-Jurado",
                    "President at the",
                  ],
                  [
                    BG3,
                    "They were very professional, responsible, and fast, but beyond that, they were very creative and strategic and helped me figure out exactly what I needed and how to achieve it. The AMA San Francisco appreciates your talent and we will be working with them again in our...",
                    Client3,
                    "Gerardo Garcia-Jurado",
                    "President at the",
                  ],
                  [
                    BG1,
                    "They were very professional, responsible, and fast, but beyond that, they were very creative and strategic and helped me figure out exactly what I needed and how to achieve it. The AMA San Francisco appreciates your talent and we will be working with them again in our...",
                    Client4,
                    "Gerardo Garcia-Jurado",
                    "President at the",
                  ],
                  [
                    BG2,
                    "They were very professional, responsible, and fast, but beyond that, they were very creative and strategic and helped me figure out exactly what I needed and how to achieve it. The AMA San Francisco appreciates your talent and we will be working with them again in our...",
                    Client5,
                    "Gerardo Garcia-Jurado",
                    "President at the",
                  ],
                  [
                    BG3,
                    "They were very professional, responsible, and fast, but beyond that, they were very creative and strategic and helped me figure out exactly what I needed and how to achieve it. The AMA San Francisco appreciates your talent and we will be working with them again in our...",
                    Client6,
                    "Gerardo Garcia-Jurado",
                    "President at the",
                  ],
                  [
                    BG1,
                    "They were very professional, responsible, and fast, but beyond that, they were very creative and strategic and helped me figure out exactly what I needed and how to achieve it. The AMA San Francisco appreciates your talent and we will be working with them again in our...",
                    Client7,
                    "Gerardo Garcia-Jurado",
                    "President at the",
                  ],
                  [
                    BG2,
                    "They were very professional, responsible, and fast, but beyond that, they were very creative and strategic and helped me figure out exactly what I needed and how to achieve it. The AMA San Francisco appreciates your talent and we will be working with them again in our...",
                    Client8,
                    "Gerardo Garcia-Jurado",
                    "President at the",
                  ],
                  [
                    BG3,
                    "They were very professional, responsible, and fast, but beyond that, they were very creative and strategic and helped me figure out exactly what I needed and how to achieve it. The AMA San Francisco appreciates your talent and we will be working with them again in our...",
                    Client9,
                    "Gerardo Garcia-Jurado",
                    "President at the",
                  ],
                ].map(([bg, desc, img, name, about], i) => (
                  <div
                    key={i}
                    className="relative z-10 grow-0 shrink-0 xl:basis-[30.9%] md:basis-[46%] basis-[100%] bg-[#161513] text-white rounded-[6px] mx-5"
                  >
                    <Image
                      src={bg}
                      alt="gradient"
                      className="absolute -z-10 w-full h-full object-cover object-center inset-0 rounded-[6px]"
                    />
                    <span className="absolute -z-10 bg-[#01e3b2] w-[8px] h-[72px] top-[30px] left-0"></span>
                    <div className="p-[30px_40px]">
                      <p className="text-[#bdbdbd] text-base leading-normal font-normal">
                        {desc}
                      </p>
                      <div className="flex items-center gap-x-3 mt-8">
                        <Image
                          src={img}
                          alt="clients"
                          className="w-[48px] h-[48px] object-cover rounded-full"
                        />
                        <div>
                          <h4 className="xl:text-[18px] text-base leading-tight font-bold mb-1">
                            {name}
                          </h4>
                          <span className="block text-xs text-[#7e7e7e]">
                            {about}
                          </span>
                        </div>
                      </div>
                    </div>
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

export default Testimonials