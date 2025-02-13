import Image from "next/image"
import Award1 from "media/animated-explainer-video-agency/awards/1.webp"
import Award2 from "media/animated-explainer-video-agency/awards/2.webp"
import Award3 from "media/animated-explainer-video-agency/awards/3.webp"
import Ratings from "media/animated-explainer-video-agency/awards/ratings.webp"
const Achievements = () => {
  return (
    <section>
      <div className="bg-[#161513] sm:py-[50px] pt-[20px] pb-[50px] font-mono">
        <div className="container">
          <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-x-8 items-center gap-y-10">
            <div className="xl:col-span-6 col-span-12">
              <div className="grid grid-cols-3 gap-x-4 ">
                {[Award1, Award2, Award3].map((e, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-[10px]"
                  >
                    <Image
                      src={e}
                      alt="award"
                      className="rounded-[10px] transition-all ease-in-out duration-200 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              <Image
                src={Ratings}
                alt="ratings"
                className="rounded-[10px] mt-4"
              />
            </div>
            <div className="xl:col-span-6 col-span-12">
            <span className="block lg:text-lg md:text-[16px] text-[14px] pb-[15px] text-[#01e3b2] sm:tracking-[13px] tracking-[5px] font-semibold leading-tight uppercase ">
            ACHIEVEMENTS
              </span>
              <h2 className="xl:text-[45px] md:text-[38px] sm:text-[24px] text-[20px] leading-tight font-semibold lg:mb-[25px] mb-[15px]">
              Multitude of Awards and Stellar Client Reviews
              </h2>
              <p className="text-[rgb(189,_189,_189)] md:text-base text-sm leading-normal font-normal mb-5">
              Showcasing our creative prowess, we’re proud to be 14-time Davey Award winners, 14-time Muse Award recipients, and 14-time Telly Award victors, affirming our commitment to excellence in video production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
