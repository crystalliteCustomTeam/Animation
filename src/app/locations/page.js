"use client"
import React, { useState, useEffect } from "react"
// Import Components
import Hero from "@/components/location-page/hero/Hero"
import locationPin from "media/locations/location_pin.svg"
import brands from "media/locations/brands.png"
import phone from "media/locations/phone.svg"
import clock from "media/locations/clock.svg"
//==== Hero Images
import BannerImg from "media/locations/newyork.png"
import topLeft from "media/location-page/top-left.png"
import topRight from "media/location-page/top-right.png"
import bottomRight from "media/location-page/bottom-right.png"

import icon1 from "media/icons/banner-logo-1.png"
import icon2 from "media/icons/banner-logo-2.png"
import icon3 from "media/icons/banner-logo-3.png"
import icon4 from "media/icons/banner-logo-4.png"
import icon5 from "media/icons/banner-logo-5.png"
import icon6 from "media/icons/banner-logo-6.png"
import icon7 from "media/icons/banner-logo-7.png"

//==== Looking Images

import Image from "next/image"
import CTA from "@/components/cta/CTA"
import Satellight from "@/components/satelliteoffice/satelliteoffice"
import AutoScroll from "@/components/sliders/AutoScroll"

const LocationPage = () => {







  return (
    <>
      <div className="bg-black">

        <section
          className={`w-full md:h-[100vh] md:pb-0 pb-[100px] flex items-center justify-start mt-0 md:mt-10 lg:mt-0  bg-none bg-no-repeat relative overflow-hidden z-1 top-[97px] lg:top-auto mb-10 xl:mb-0`}
        >
          <div className="container">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
                <h1
                  className={`text-[40px] md:text-[50px] xl:text-[60px] font-semibold font-sans leading-none mb-5 mt-4 lg:mt-32`}
                >
                  Location
                </h1>
                <div className="flex flex-col gap-5 justify-center ">
                  <div className="border-2 border-primary-100 py-2 flex w-[250px] rounded-full justify-center gap-5">
                    <Image src={locationPin} />
                    <h5 className="font-sans font-semibold text-[20px]"> Regional Hub</h5>
                  </div>
                  <div className=" flex flex-col gap-3 ">
                    <h2 className="text-white font-semibold font-sans text-[30px]">New York</h2>
                    <h3 className="text-white font-light font-sans">
                      One World Trade Center, 285 Fulton St 85th floor suite 8500, New York,<br /> NY 10007, United States
                    </h3>
                    <div className="flex flex-row gap-3">
                      <Image src={phone} />
                      <h2 className="text-primary-100 font-semibold font-sans text-[20px]">+1 (833) 666-6689</h2>
                    </div>
                    
                    <div className="flex flex-row gap-3 mt-2">
                      <a href="javascript:parent.LC_API.open_chat_window();" className='bg-prime text-white border-0 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                        <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Office</span>
                      </a>
                      <a href="https://www.google.com/maps/place/Infinity+Animations+-+Animation+Studio+In+New+York/@40.7130082,-74.0131689,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25ba68db6e3e5:0x6e999c4a119d4f79!8m2!3d40.7130082!4d-74.0131689!16s%2Fg%2F11vzxy9gc5?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D" className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                        <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">Get Directions</span>
                      </a>
                      <a href="javascript:parent.LC_API.open_chat_window();" className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                        <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Services</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <AutoScroll
                  wrapperClass="hidden sm:block mt-[40px] border-t-2 border-gray-500 pt-4 md:block hidden"
                  options={{ loop: true, align: "start" }}
                >
                  {[
                    icon1,
                    icon2,
                    icon3,
                    icon4,
                    icon5,
                    icon6,
                    icon7,
                    icon1,
                    icon2,
                    icon3,
                    icon4,
                    icon5,
                    icon6,
                    icon7,
                    icon1,
                    icon2,
                    icon3,
                    icon4,
                    icon5,
                    icon6,
                    icon7,
                  ].map((e, i) => (
                    <div key={i} className="shrink-0 grow-0 basis-1/4 mr-5">
                      <Image src={e} alt="logo" className="w-[70%]" priority />
                    </div>
                  ))}
                </AutoScroll>
              </div>
            </div>
          </div>
          <Image src={BannerImg} className="absolute bottom-0 right-0"/>
        </section>
        <section>
          <div className="container py-20 flex flex-row items-center justify-center">
            <Image src={brands} className="w-[80%]"/>
          </div>
        </section>
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
                          <h2 className="text-primary-100 font-semibold font-sans text-[20px]">+1 (833) 666-6689</h2>
                        </div>
                        <div className="flex flex-row gap-3">
                          <Image src={clock} />
                          <h2 className="text-white-100 font-semibold font-sans text-[20px]">M-F: 9:00am - 5:00pm</h2>
                        </div>
                        <div className="flex flex-row gap-3 mt-2">
                          <a href="javascript:parent.LC_API.open_chat_window();" className='bg-prime text-white border-0 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Office</span>
                          </a>
                          <a href="https://www.google.com/maps/place/Infinity+Animations+-+Animation+Studio+In+New+York/@40.7130082,-74.0131689,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25ba68db6e3e5:0x6e999c4a119d4f79!8m2!3d40.7130082!4d-74.0131689!16s%2Fg%2F11vzxy9gc5?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D" className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
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
                          <h2 className="text-primary-100 font-semibold font-sans text-[20px]">+1 (302) 217-6570</h2>
                        </div>
                        <div className="flex flex-row gap-3">
                          <Image src={clock} />
                          <h2 className="text-white-100 font-semibold font-sans text-[20px]">M-F: 9:00am - 5:00pm</h2>
                        </div>
                        <div className="flex flex-row gap-3 mt-2">
                          <a href="javascript:parent.LC_API.open_chat_window();" className='bg-prime text-white border-0 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Office</span>
                          </a>
                          <a href="https://www.google.com/maps/place/Infinity+Animations+-+Animation+Studio+Los+Angeles/@34.0559882,-118.253244,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c7c712851ee7:0x7697892d194c07c6!8m2!3d34.0559882!4d-118.253244!16s%2Fg%2F11xl3xb36b?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D" className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
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
                          <h2 className="text-primary-100 font-semibold font-sans text-[20px]">+1 (833) 666-6689</h2>
                        </div>
                        <div className="flex flex-row gap-3">
                          <Image src={clock} />
                          <h2 className="text-white-100 font-semibold font-sans text-[20px]">M-F: 9:00am - 5:00pm</h2>
                        </div>
                        <div className="flex flex-row gap-3 mt-2">
                          <a href="javascript:parent.LC_API.open_chat_window();" className='bg-prime text-white border-0 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                            <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Office</span>
                          </a>
                          <a href="https://www.google.com/maps/place/Infinity+Animations+-+Animation+Studio+In+Folsom/@38.6415828,-121.1742303,18.46z/data=!4m6!3m5!1s0x809ae713264957ef:0x5ee470653bc16102!8m2!3d38.6434316!4d-121.1799218!16s%2Fg%2F11lgd50j89?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D" className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
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
        <section>
          <div className="py-[50px]">
            <div className="container">
              <div className="grid grid-cols-3 gap-5">
                <Satellight
                  text={"Texas"}
                  address={"1341 W Mockingbird Ln, Dallas, TX 75247, United States"}
                  map={"https://maps.app.goo.gl/r4ST9n4Xf3M5obFN9"}
                  page={"https://infinityanimations.com/animation-studio-texas"}
                  number={"214-740-6171"}
                />
                <Satellight
                  text={"Maryland"}
                  address={"200 E Pratt St, Baltimore, MD 21202, United States"}
                  map={"https://maps.app.goo.gl/zcr6mTzMprUNKsox9"}
                  page={"https://infinityanimations.com/animation-studio-texas"}
                  number={"833-666-6689"}
                />
                <Satellight
                  text={"Philadelphia"}
                  address={"325 Chestnut St Unit 800, Philadelphia, PA 19106, United States"}
                  map={"https://maps.app.goo.gl/UP9ETwHxYHujgBTu6"}
                  page={"https://infinityanimations.com/animation-studio-maryland"}
                  number={"833-666-6689"}
                />
                <Satellight
                  text={"Houston"}
                  address={"4300 Main St, Houston, TX 77002, United States"}
                  map={"https://maps.app.goo.gl/zpXa5KsEYWuMgSEUA"}
                  page={"https://infinityanimations.com/animation-studio-houston"}
                  number={"346-815-2723"}
                />
                <Satellight
                  text={"Orlando"}
                  address={"111 N Orange Ave Suit 800, Orlando, FL 32801, United States"}
                  map={"https://maps.app.goo.gl/GwznMowUApJf9gqU8"}
                  page={"https://infinityanimations.com/animation-studio-orlando"}
                  number={"407-326-0828"}
                />
                <Satellight
                  text={"Toronto"}
                  address={"229 Yonge St Suite 400, Toronto, ON M5B 1N9, Canada"}
                  map={"https://maps.app.goo.gl/RAM4eVHtZSZNRSAy7"}
                  page={"https://infinityanimations.com/animation-studio-toronto"}
                  number={"(647) 933-5352"}
                />
                <Satellight
                  text={"Richmond"}
                  address={"1518 Willow Lawn Dr #300, Richmond, VA 23230, United States"}
                  map={"https://maps.app.goo.gl/rnZG46gC8QWACDxE7"}
                  page={"https://infinityanimations.com/animation-studio-richmond-virginia"}
                  number={"804-207-5212"}
                />
                <Satellight
                  text={"San Diego"}
                  address={"402 W Broadway Suite 400, San Diego, CA 92101, United States"}
                  map={"https://maps.app.goo.gl/y5H5QDbdZgyndaXcA"}
                  page={"https://infinityanimations.com/animation-studio-san-diego"}
                  number={"833-666-6689"}
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default LocationPage
