"use client"
import React, { useState, useEffect } from "react"
// Import Components
import Hero from "@/components/location-page/hero/Hero"
import locationPin from "media/locations/location_pin.svg"
import phone from "media/locations/phone.svg"
import clock from "media/locations/clock.svg"
//==== Hero Images
import BannerImg from "media/location-page/california.png"
import topLeft from "media/location-page/top-left.png"
import topRight from "media/location-page/top-right.png"
import bottomRight from "media/location-page/bottom-right.png"

//==== Looking Images

import Image from "next/image"
import CTA from "@/components/cta/CTA"

const LocationPage = () => {



  //=====Banner Fold=====//
  const hero = {
    title: (
      <>
        {" "}
        Top{" "}
        <span className="text-primary-100">
          Animation <br /> Studio{" "}
        </span>{" "}
        in California{" "}
      </>
    ),
    para: "Finding the right animation studios in California to realize your creative vision can be overwhelming. Whether you’re looking for cutting-edge 3D animation studios in California or innovative advertising solutions, the options can feel endless. That’s why our studio stands out as a trusted leader among California animation companies. With a focus on your unique needs, we specialize in creating high-quality animations that not only captivate but also convert. From intricate 3D animation designs to full-fledged advertising campaigns, we bring your ideas to life with precision and passion.",
    btnBg: "bg-prime",
    banImg: true,
    BannerImg: BannerImg,
    topLeft: topLeft,
    topRight: topRight,
    bottomRight: bottomRight,
  }



  return (
    <>
      <div className="bg-black">
        <Hero content={hero} />
        <section className="flex flex-col gap-5">
          <div>
            <div>
              <div className="container">
                <div className="border-2 border-white-100 p-5 rounded-xl">
                  <div className="grid grid-cols-2">
                    <div>

                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2274942417575!2d-74.0131689!3d40.7130082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba68db6e3e5%3A0x6e999c4a119d4f79!2sInfinity%20Animations%20-%20Animation%20Studio%20In%20New%20York!5e0!3m2!1sen!2s!4v1758663573656!5m2!1sen!2s" width="600" height="450" className="rounded-xl relative" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="flex flex-col gap-5 justify-center ">
                      <div className="border-2 border-primary-100 py-2 flex w-[250px] rounded-full justify-center gap-5">
                        <Image src={locationPin} />
                        <h5 className="font-sans font-semibold text-[20px]"> Regional Hub</h5>
                      </div>
                      <div className="border-l-2 border-white flex flex-col gap-3 pl-5">
                        <h2 className="text-white font-semibold font-sans text-[30px]">New York</h2>
                        <h3 className="text-white font-light font-sans">
                          One World Trade Center, 285 Fulton St 85th floor suite 8500, New York,<br /> NY 10007, United States
                        </h3>
                        <div className="flex flex-row gap-3">
                          <Image src={phone} />
                          <h2 className="text-primary-100 font-semibold font-sans text-[20px]">888-601-5359</h2>
                        </div>
                        <div className="flex flex-row gap-3">
                          <Image src={clock} />
                          <h2 className="text-white-100 font-semibold font-sans text-[20px]">M-F: 9:00am - 5:00pm</h2>
                        </div>
                        <div className="flex flex-row gap-3 mt-2">
                          <a href="javascript:parent.LC_API.open_chat_window();" className='bg-prime text-white border-0 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Office</span>
                          </a>
                          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2274942417575!2d-74.0131689!3d40.7130082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba68db6e3e5%3A0x6e999c4a119d4f79!2sInfinity%20Animations%20-%20Animation%20Studio%20In%20New%20York!5e0!3m2!1sen!2s!4v1758663573656!5m2!1sen!2s" className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">Get Directions</span>
                          </a>
                          <a href="javascript:parent.LC_API.open_chat_window();" className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Services</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="container">
                <div className="border-2 border-white-100 p-5 rounded-xl">
                  <div className="grid grid-cols-2">
                    <div>

                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.527554960004!2d-118.253244!3d34.0559882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7c712851ee7%3A0x7697892d194c07c6!2sInfinity%20Animations%20-%20Animation%20Studio%20Los%20Angeles!5e0!3m2!1sen!2s!4v1758663705222!5m2!1sen!2s" width="600" height="450" className="rounded-xl relative" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="flex flex-col gap-5 justify-center ">
                      <div className="border-2 border-primary-100 py-2 flex w-[250px] rounded-full justify-center gap-5">
                        <Image src={locationPin} />
                        <h5 className="font-sans font-semibold text-[20px]"> Regional Hub</h5>
                      </div>
                      <div className="border-l-2 border-white flex flex-col gap-3 pl-5">
                        <h2 className="text-white font-semibold font-sans text-[30px]">Los Angeles</h2>
                        <h3 className="text-white font-light font-sans">
                          222 S Figueroa St, Los Angeles, CA 90012, United States
                        </h3>
                        <div className="flex flex-row gap-3">
                          <Image src={phone} />
                          <h2 className="text-primary-100 font-semibold font-sans text-[20px]">239-920-8063</h2>
                        </div>
                        <div className="flex flex-row gap-3">
                          <Image src={clock} />
                          <h2 className="text-white-100 font-semibold font-sans text-[20px]">M-F: 9:00am - 5:00pm</h2>
                        </div>
                        <div className="flex flex-row gap-3 mt-2">
                          <a href="javascript:parent.LC_API.open_chat_window();" className='bg-prime text-white border-0 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Office</span>
                          </a>
                          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.527554960004!2d-118.253244!3d34.0559882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7c712851ee7%3A0x7697892d194c07c6!2sInfinity%20Animations%20-%20Animation%20Studio%20Los%20Angeles!5e0!3m2!1sen!2s!4v1758663705222!5m2!1sen!2s" className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">Get Directions</span>
                          </a>
                          <a href="https://infinityanimations.com/animation-studio-los-angeles" className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Services</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="container">
                <div className="border-2 border-white-100 p-5 rounded-xl">
                  <div className="grid grid-cols-2">
                    <div>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.236954124354!2d-121.17992179999999!3d38.6434316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ae713264957ef%3A0x5ee470653bc16102!2sInfinity%20Animations%20-%20Animation%20Studio%20In%20Folsom!5e0!3m2!1sen!2s!4v1758664108430!5m2!1sen!2s" width="600" height="450" className="rounded-xl relative" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="flex flex-col gap-5 justify-center ">
                      <div className="border-2 border-primary-100 py-2 flex w-[250px] rounded-full justify-center gap-5">
                        <Image src={locationPin} />
                        <h5 className="font-sans font-semibold text-[20px]"> Regional Hub</h5>
                      </div>
                      <div className="border-l-2 border-white flex flex-col gap-3 pl-5">
                        <h2 className="text-white font-semibold font-sans text-[30px]"> Folsom</h2>
                        <h3 className="text-white font-light font-sans">
                          1024 Iron Point Rd, Folsom, CA 95630, United States
                        </h3>
                        <div className="flex flex-row gap-3">
                          <Image src={phone} />
                          <h2 className="text-primary-100 font-semibold font-sans text-[20px]">734-821-3765</h2>
                        </div>
                        <div className="flex flex-row gap-3">
                          <Image src={clock} />
                          <h2 className="text-white-100 font-semibold font-sans text-[20px]">M-F: 9:00am - 5:00pm</h2>
                        </div>
                        <div className="flex flex-row gap-3 mt-2">
                          <a href="javascript:parent.LC_API.open_chat_window();" className='bg-prime text-white border-0 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Office</span>
                          </a>
                          <a href="https://www.google.com/maps/place/Infinity+Animations+-+Animation+Studio+In+Folsom/@38.6434316,-121.1799218,17z/data=!3m1!4b1!4m6!3m5!1s0x809ae713264957ef:0x5ee470653bc16102!8m2!3d38.6434316!4d-121.1799218!16s%2Fg%2F11lgd50j89?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D" className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">Get Directions</span>
                          </a>
                          <a href="https://infinityanimations.com/animation-studio-folsom" className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Services</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  )
}

export default LocationPage
