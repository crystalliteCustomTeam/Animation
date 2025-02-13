import Image from "next/image"
import SideImage from "media/animated-explainer-video-agency/explainy.png"
import Arrow from "media/animated-explainer-video-agency/icons/right_arrow.svg"
const OurMission = () => {
  return (
    <section>
      <div className="bg-[#161513] sm:py-[50px] pt-[20px] pb-[50px] font-mono">
        <div className="container">
          <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-x-5 items-center sm:gap-y-5 gap-y-10">
            <div className="xl:col-span-6 col-span-12">
              <Image
                src={SideImage}
                alt="side_image"
                draggable={false}
                className="mx-auto"
              />
            </div>
            <div className="xl:col-span-6 col-span-12">
              <span className="block lg:text-lg md:text-[16px] text-[14px] pb-[15px] text-[#01e3b2] sm:tracking-[13px] tracking-[5px] font-semibold leading-tight uppercase ">
                Who we are
              </span>
              <h2 className="xl:text-[48px] md:text-[38px] sm:text-[24px] text-[20px] leading-none font-semibold lg:mb-[25px] mb-[15px]">
                Our mission is to help our clients uncover the essence of their
                brand story to drive sales, influence decisions, and promote
                understanding.
              </h2>
              <p className="text-[rgb(189,_189,_189)] md:text-base text-sm leading-normal font-normal mb-5">
                Explainly creates videos that bring your brand’s vision to life
                through research, strategy, copywriting, and custom visuals.{" "}
                <br /> Our personalized and collaborative approach ensures that
                your video is truly one of a kind.
              </p>
              <p className="text-[rgb(189,_189,_189)] md:text-base text-sm leading-normal font-normal">
                As an end-to-end service solution, we’ll guide you through every
                step - from our streamlined discovery process, through key
                points in production, to final delivery.
              </p>
              <a href="#" className="flex items-center gap-x-3 mt-6 group">
                <span className="block text-[#ffaf00] transition-all ease-in-out duration-500 group-hover:text-white group-hover:mr-2 font-semibold">
                  Learn more about our process
                </span>
                <Image src={Arrow} alt="arrow" width={32} height={33} />
              </a>
            </div>
            <div className="col-span-12 text-center sm:mt-16 mt-5">
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
    </section>
  )
}

export default OurMission
