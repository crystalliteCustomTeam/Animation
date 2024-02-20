"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components

import styles from '@/app/infinity-lp/component/banner/banner.module.css';
import icon1 from "media/banner/cut.png"

import icon2 from "media/banner/call.png"
import icon3 from "media/banner/bnr-logo.png"
import icon4 from "media/banner/off.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { register } from "swiper/element/bundle";
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import React, { useEffect, useRef } from 'react';
SwiperCore.use([Navigation, Autoplay]);

// import icon5 from "media/banner/slide3.png"


const Banner = () => {


  const swiperElRef = useRef(null);
  useEffect(() => {
    register();
    const params = {
      slidesPerView: 1,
      injectStyles: [
        `.swiper-pagination-bullet {
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #00C0E4;
        }
      `,
      ],
    };
    Object.assign(swiperElRef.current, params);
    swiperElRef.current.initialize();
  }, []);
  // const slides = [
  //   {
  //     avatar: "https://download-video.akamaized.net/v3-1/playback/ce84c503-5544-411a-9c59-cee1dab595d5/b7b34760-70042c1c?__token__=st=1708131656~exp=1708146056~acl=%2Fv3-1%2Fplayback%2Fce84c503-5544-411a-9c59-cee1dab595d5%2Fb7b34760-70042c1c%2A~hmac=23369b3def678f5f22bbaaf191531d7f0488cc56690f0dbdd17c03d5434c8eb8&r=dXMtd2VzdDE%3D",
  //   },
  //   {
  //     avatar: "https://download-video.akamaized.net/v3-1/playback/45ba671c-57d3-416d-a83c-815578a54804/8f31ee7c?__token__=st=1708131782~exp=1708146182~acl=%2Fv3-1%2Fplayback%2F45ba671c-57d3-416d-a83c-815578a54804%2F8f31ee7c%2A~hmac=bf9f15e0c0b75907bccc1b4e764239154fb97b2ed201c9184b44c304b8fe04fe&r=dXMtd2VzdDE%3D",
  //   },
  //   {
  //     avatar: "https://download-video.akamaized.net/v3-1/playback/0b0ecd0d-3395-48c2-8c65-72c257babaad/0521078b-92ec0797?__token__=st=1708131900~exp=1708146300~acl=%2Fv3-1%2Fplayback%2F0b0ecd0d-3395-48c2-8c65-72c257babaad%2F0521078b-92ec0797%2A~hmac=5931b82e3b24b4f616a5512d0d430d5cffe9a7182d8489911a619d986183b256&r=dXMtd2VzdDE%3D",
  //   },
  //   {
  //     avatar: "https://download-video.akamaized.net/v3-1/playback/ce84c503-5544-411a-9c59-cee1dab595d5/b7b34760-70042c1c?__token__=st=1708131656~exp=1708146056~acl=%2Fv3-1%2Fplayback%2Fce84c503-5544-411a-9c59-cee1dab595d5%2Fb7b34760-70042c1c%2A~hmac=23369b3def678f5f22bbaaf191531d7f0488cc56690f0dbdd17c03d5434c8eb8&r=dXMtd2VzdDE%3D",
  //   },
  //   {
  //     avatar: "https://download-video.akamaized.net/v3-1/playback/45ba671c-57d3-416d-a83c-815578a54804/8f31ee7c?__token__=st=1708131782~exp=1708146182~acl=%2Fv3-1%2Fplayback%2F45ba671c-57d3-416d-a83c-815578a54804%2F8f31ee7c%2A~hmac=bf9f15e0c0b75907bccc1b4e764239154fb97b2ed201c9184b44c304b8fe04fe&r=dXMtd2VzdDE%3D",
  //   },
  //   {
  //     avatar: "https://download-video.akamaized.net/v3-1/playback/0b0ecd0d-3395-48c2-8c65-72c257babaad/0521078b-92ec0797?__token__=st=1708131900~exp=1708146300~acl=%2Fv3-1%2Fplayback%2F0b0ecd0d-3395-48c2-8c65-72c257babaad%2F0521078b-92ec0797%2A~hmac=5931b82e3b24b4f616a5512d0d430d5cffe9a7182d8489911a619d986183b256&r=dXMtd2VzdDE%3D",
  //   },

  // ];



  // const slides = [
  // {
  //   avatar: "media/banner/slide3.png",
  // },
  // {
  //   avatar: "https://download-video.akamaized.net/v3-1/playback/45ba671c-57d3-416d-a83c-815578a54804/8f31ee7c?__token__=st=1708131782~exp=1708146182~acl=%2Fv3-1%2Fplayback%2F45ba671c-57d3-416d-a83c-815578a54804%2F8f31ee7c%2A~hmac=bf9f15e0c0b75907bccc1b4e764239154fb97b2ed201c9184b44c304b8fe04fe&r=dXMtd2VzdDE%3D",
  // },
  // {
  //   avatar: "https://download-video.akamaized.net/v3-1/playback/0b0ecd0d-3395-48c2-8c65-72c257babaad/0521078b-92ec0797?__token__=st=1708131900~exp=1708146300~acl=%2Fv3-1%2Fplayback%2F0b0ecd0d-3395-48c2-8c65-72c257babaad%2F0521078b-92ec0797%2A~hmac=5931b82e3b24b4f616a5512d0d430d5cffe9a7182d8489911a619d986183b256&r=dXMtd2VzdDE%3D",
  // },
  // {
  //   avatar: "https://download-video.akamaized.net/v3-1/playback/ce84c503-5544-411a-9c59-cee1dab595d5/b7b34760-70042c1c?__token__=st=1708131656~exp=1708146056~acl=%2Fv3-1%2Fplayback%2Fce84c503-5544-411a-9c59-cee1dab595d5%2Fb7b34760-70042c1c%2A~hmac=23369b3def678f5f22bbaaf191531d7f0488cc56690f0dbdd17c03d5434c8eb8&r=dXMtd2VzdDE%3D",
  // },
  // {
  //   avatar: "https://download-video.akamaized.net/v3-1/playback/45ba671c-57d3-416d-a83c-815578a54804/8f31ee7c?__token__=st=1708131782~exp=1708146182~acl=%2Fv3-1%2Fplayback%2F45ba671c-57d3-416d-a83c-815578a54804%2F8f31ee7c%2A~hmac=bf9f15e0c0b75907bccc1b4e764239154fb97b2ed201c9184b44c304b8fe04fe&r=dXMtd2VzdDE%3D",
  // },
  // {
  //   avatar: "https://download-video.akamaized.net/v3-1/playback/0b0ecd0d-3395-48c2-8c65-72c257babaad/0521078b-92ec0797?__token__=st=1708131900~exp=1708146300~acl=%2Fv3-1%2Fplayback%2F0b0ecd0d-3395-48c2-8c65-72c257babaad%2F0521078b-92ec0797%2A~hmac=5931b82e3b24b4f616a5512d0d430d5cffe9a7182d8489911a619d986183b256&r=dXMtd2VzdDE%3D",
  // },
  // ];

  const slides = [
    [
      "https://download-video.akamaized.net/v3-1/playback/45ba671c-57d3-416d-a83c-815578a54804/8f31ee7c?__token__=st=1708131782~exp=1708146182~acl=%2Fv3-1%2Fplayback%2F45ba671c-57d3-416d-a83c-815578a54804%2F8f31ee7c%2A~hmac=bf9f15e0c0b75907bccc1b4e764239154fb97b2ed201c9184b44c304b8fe04fe&r=dXMtd2VzdDE%3D",
    ],
  ];

  return (
    <>
      <section className={`newcon ${styles.banner}`}>
        <div class={`container mx-auto  ${styles.count}`}>
          <div class="md:grid md:grid-cols-2">
            <div className={styles.condition}>
              <h1 className={`fontsfpro mb-0 ${styles.heading}`}>
                <span class="colorred">Expand </span>
                Your <span class="colorred">Brand’s</span>
              </h1>
              <h3 className={`fontsfprosemi ${styles.reach}`}>Reach With An Engaging Custom Explainer Video</h3>
              <p className={styles.company}>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.</p>
              <div className={styles.helped}>
                <div className={styles.list}>
                  <div className={`${styles.engage1} ${styles.why}`}>
                    <Image src={icon1} class="img-fluid" alt="" />
                    <p>Full HD Animations</p>
                  </div>
                  <div className={`${styles.engage2} ${styles.why}`}>
                    <Image src={icon1} class="img-fluid" alt="" />
                    <p>Latest Technology</p>
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={`${styles.engage3} ${styles.why}`}>
                    <Image src={icon1} class="img-fluid" alt="" />
                    <p>Appealing Designs</p>
                  </div>
                  <div className={`${styles.engage4} ${styles.why}`}>
                    <Image src={icon1} class="img-fluid" alt="" />
                    <p>Award-Winning Agency</p>
                  </div>
                </div>
              </div>
              <div className={styles.expert}>
                <button className={styles.started}>Get Started</button>
                <div className={styles.pot}>
                  <Image src={icon2} className={styles.ntoen} alt="" />
                  <div>
                    <p className={styles.talktoour}>Talk to our Expert</p>
                    <h3 className={styles.livechat}>Live Chat</h3>
                  </div>
                </div>
                <Image src={icon3} className={styles.newtoen} alt="" />
              </div>
              <div className={styles.animationidea}>
                <h3>Share Your Animation Idea</h3>
                <div className={styles.form2}>
                  <input type="text" name="name" class="form-control" placeholder="Enter Your Name" />
                  <input type="email" name="email" class="form-control" placeholder="Enter Email" />
                </div>
                <div className={styles.form2}>
                  <input type="number" class="form-control" placeholder="Enter Phone Number" />
                  <input type="text" class="form-control" placeholder="Enter Message" />
                </div>
                <input type="submit" value="Get a Free Quote" className={styles.quote} />
                <div className={styles.noty}>
                  <Image src={icon4} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.slider}>
                <swiper-container
                  init={false}
                  ref={swiperElRef}
                  centered-slides="false"
                  autoplay-delay="3000"
                  loop="true"
                >
                  {slides.map((testimonial, index) => (
                    <swiper-slide className='newfold newtown' key={index}>
                      <div>
                        <div className="w-[90%] m-auto py-10">
                          <div className="card">
                            <video className={`w-full h-full`} muted="muted" autoPlay src={testimonial}></video>
                            {/* <Image src={testimonial} /> */}
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  ))}
                </swiper-container>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
