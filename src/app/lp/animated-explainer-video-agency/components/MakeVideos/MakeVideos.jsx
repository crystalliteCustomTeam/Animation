import Image from "next/image"
import Team from "media/animated-explainer-video-agency/team.webp"
const MakeVideos = () => {
  return (
    <section>
          <div className="bg-[#161513] sm:py-[50px] pt-[20px] pb-[50px] font-mono">
            <div className="container">
              <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-x-8 items-center gap-y-10">
                <div className="xl:col-span-6 col-span-12">
                  <Image
                    src={Team}
                    alt="team"
                    className="mx-auto"
                  />
                </div>
                <div className="xl:col-span-6 col-span-12">
                <span className="block lg:text-lg md:text-[16px] text-[14px] pb-[15px] text-[#01e3b2] sm:tracking-[13px] tracking-[5px] font-semibold leading-tight uppercase ">
                GREAT PEOPLE MAKE <br /> GREAT VIDEOS
                  </span>
                  <h2 className="md:text-[30px] sm:text-[24px] text-[20px] leading-tight font-semibold lg:mb-[25px] mb-[15px]">
                  Our mission is to help our clients uncover the essence of their brand story to drive sales, influence decisions, and promote understanding.
                  </h2>
                  <p className="text-[rgb(189,_189,_189)] md:text-base text-sm leading-normal font-normal mb-5">
                  We will always search for the best way to give our clients a great experience. We will continue to learn about every industry, in order to offer innovative, high quality products with premium value.
                  </p>
                  <div className="flex items-center gap-x-3 mt-5">
                <a
                  href="javascript:void(Tawk_API.toggle())"
                  className="border border-white text-white xl:text-base text-xs leading-tight font-bold tracking-[0.1em] uppercase inline-flex items-center justify-center sm:px-[23px] px-[15px] h-[60px] text-center w-full rounded-[60px] duration-700 transition-all bg-transparent hover:duration-700 hover:transition-all"
                >
                  Get Started
                </a>
                <a
                  href="tel:833-666-6689"
                  className="border border-[#ffaf00] text-[#1c1b18] xl:text-base text-xs leading-tight font-bold tracking-[0.1em] uppercase inline-flex items-center justify-center sm:px-[23px] px-[15px] h-[60px] text-center w-full rounded-[60px] duration-700 transition-all bg-[#ffaf00] hover:duration-700 hover:transition-all"
                >
                  Book a call
                </a>
              </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default MakeVideos