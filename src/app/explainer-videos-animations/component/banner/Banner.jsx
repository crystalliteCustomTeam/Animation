"use client"
import Image from "next/image";
// Import Components
import Axios from "axios";
import styles from '@/app/explainer-videos-animations/component/banner/banner.module.css';
import icon1 from "media/banner/cut.png"
import icon2 from "media/banner/call.png"
import icon3 from "media/banner/bnr-logo.png"
import icon4 from "media/banner/off.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { register } from "swiper/element/bundle";
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import React, { useEffect, useRef, useState } from 'react';
SwiperCore.use([Navigation, Autoplay]);
import { usePathname } from 'next/navigation'
// icons
import PlayIcon from "media/icons/video-icon.png"
import usePopup from "@/app/configs/store/Popup";

const Banner = () => {

  const { popup, togglePopup } = usePopup()
  const popupHandle = () => {
    togglePopup(popup)
  }

  const swiperElRef = useRef(null);
  useEffect(() => {
    register();
    const params = {
      slidesPerView: 3,
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


  const slides = [
    {
      avatar: "../../banner/1.mp4",
    },
    {
      avatar: "../../banner/2.mp4",
    },
    {
      avatar: "../../banner/3.mp4",
    },
    {
      avatar: "../../banner/2.mp4",
    },
  ];

  const [ip, setIP] = useState('');
  //creating function to load ip address from the API
  const getIPData = async () => {
    const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
    setIP(res.data);
  }
  useEffect(() => {
    getIPData()
  }, [])

  const [score, setScore] = useState('Submit');

  const router = usePathname();

  const currentRoute = router.pathname;
  const [pagenewurl, setPagenewurl] = useState('');
  useEffect(() => {
    const pagenewurl = window.location.href;
    console.log(pagenewurl);
    setPagenewurl(pagenewurl);
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault()
    var currentdate = new Date().toLocaleString() + ''

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      pageUrl: pagenewurl,
      IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
      currentdate: currentdate,
    }

    const JSONdata = JSON.stringify(data)

    setScore('Sending Data');
    console.log(JSONdata);


    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }).then((res) => {
      console.log(`Response received ${res}`)
      if (res.status === 200) {
        console.log(`Response Successed ${res}`)
      }
    })



    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
      "Brand": "Infinity Animations",
      "Page": pagenewurl,
      "Date": currentdate,
      "Time": currentdate,
      "JSON": JSONdata,

    });

    await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });
    const { pathname } = router;
    if (pathname == pathname) {
      window.location.href = '/thank-you';
    }

  }

  const [isIcon, setIsIcon] = useState(true)

  const handleVideoPlay = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      if (video.paused) {
        video.play();
        setIsIcon(false)
      } else {
        video.pause();
        setIsIcon(true)
      }
    }
  };

  return (
    <>
      <section className={`newcon ${styles.banner}`} id="newslides">
        <div class={`container mx-auto  ${styles.count} ${styles.pointer}`}>
          <div class="md:grid xl:grid-cols-2 lg:grid-cols-1">
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
                    <p>Product Explainer Videos</p>
                  </div>
                  <div className={`${styles.engage2} ${styles.why}`}>
                    <Image src={icon1} class="img-fluid" alt="" />
                    <p>Animated Business Videos</p>
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={`${styles.engage3} ${styles.why}`}>
                    <Image src={icon1} class="img-fluid" alt="" />
                    <p>Animated Marketing Videos</p>
                  </div>
                  <div className={`${styles.engage4} ${styles.why}`}>
                    <Image src={icon1} class="img-fluid" alt="" />
                    <p>Corporate Animated Videos</p>
                  </div>
                </div>
              </div>
              <div className={styles.expert}>
                <button onClick={popupHandle} className={styles.started}>Get Started</button>
                <div className={styles.pot}>
                  <Image src={icon2} className={styles.ntoen} alt="" />
                  <div>
                    <a href="javascript:$zopim.livechat.window.show();">  <p className={styles.talktoour}>Talk to our Expert</p>
                      <h3 className={styles.livechat}>Live Chat</h3> </a>
                  </div>
                </div>
                <Image src={icon3} className={styles.newtoen} alt="" />
              </div>
              <form onSubmit={handleSubmit} className="pt-4">
                <div className={styles.animationidea}>
                  <h3>Share Your Animation Idea</h3>
                  <div className={styles.form2}>
                    <input type="text" minLength="4" required name="name" class="form-control" placeholder="Enter Your Name" />
                    <input type="email" name="email" required class="form-control" placeholder="Enter Email" />
                  </div>
                  <div className={styles.form2}>
                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" class="form-control" placeholder="Enter Phone Number" />
                    <input type="text" class="form-control" name="message" placeholder="Enter Message" />
                  </div>
                  <input type="submit" value="Get a Free Quote" className={styles.quote} />
                  <div className={styles.noty}>
                    <Image src={icon4} alt="" />
                  </div>
                </div>
              </form>
            </div>
            <div>
              <div className={styles.slider}>
                <swiper-container className="newtranck"
                  navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                  pagination={false}
                  init={false}
                  ref={swiperElRef}
                  centered-slides="false"
                  autoplay-delay="3000"
                  loop="true"
                  autoplay={false}

                >
                  {slides.map((testimonial, index) => (
                    <swiper-slide className='newfold newtown' key={index}>
                      <div>
                        <div className="w-[90%] m-auto relative">
                          <div className="card">
                            <button onClick={handleVideoPlay}>
                              <video controls={false} autoPlay={false} src={testimonial.avatar} id="videoPlay"></video>
                              {isIcon ? <Image src={PlayIcon} alt="Play Icon" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" width={35} height={35} /> : null}
                            </button>
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
