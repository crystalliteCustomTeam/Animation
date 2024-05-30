import React, { useEffect, useState } from 'react'
import Axios from "axios";
//===== Component
import usePopup from '@/app/configs/store/Popup';
import styles from './bannercontact.module.css'
// import Image
import BrandsLogo1 from "media/location-page/brand-1.png"
import BrandsLogo2 from "media/location-page/brand-2.png"
import BrandsLogo3 from "media/location-page/brand-3.png"
import BrandsLogo4 from "media/location-page/brand-4.png"
import BrandsLogo5 from "media/location-page/brand-5.png"
import Profile from "media/location-page/Profile.png"
import phone from "media/location-page/Calling.png"
import message from "media/location-page/Message.png"
import btnIcon from "media/icons/arrow-red.png"
// icons
import { BsPerson } from "react-icons/bs";
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'

const tabInfo = [
  { image: BrandsLogo1 },
  { image: BrandsLogo2 },
  { image: BrandsLogo3 },
  { image: BrandsLogo4 },
  { image: BrandsLogo5 },
  { image: BrandsLogo1 },
  { image: BrandsLogo2 },
  { image: BrandsLogo3 },
  { image: BrandsLogo4 },
  { image: BrandsLogo5 },
];

function BannerContact({ content }) {
  const { title, para } = content;

  const { popup, togglePopup } = usePopup()
  const popupHandle = () => {
    togglePopup(popup)
  }
  // form Start
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  // For Time
  let today = new Date();
  let setTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let setDate = `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`;
  const [ip, setIP] = useState("");
  //creating function to load ip address from the API
  const getIPData = async () => {
    const res = await Axios.get(
      "https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8"
    );
    setIP(res.data);
  };
  useEffect(() => {
    getIPData();
  }, []);
  // For Page
  const [pagenewurl, setPagenewurl] = useState(null);
  useEffect(() => {
    setPagenewurl(window.location.href);
  }, [setPagenewurl]);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    botchecker: null,
  });
  const handleDataChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [formStatus, setFormStatus] = useState(" Get Started");
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const formValidateHandle = () => {
    let errors = {};
    // Name validation
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.match(emailRegex)) {
      errors.email = "Valid email is required";
    }
    // Phone validation
    const phoneRegex = /[0-9]/i;
    if (!data.phone.match(phoneRegex)) {
      errors.phone = "Valid phone is required";
    }
    return errors;
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Processing...");
    setIsDisabled(true);

    const errors = formValidateHandle();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      if (data.botchecker === null) {
        let headersList = {
          Accept: "*/*",
          "Content-Type": "application/json",
        };

        let bodyContent = JSON.stringify({ ...data, pageURL: pagenewurl });
        let reqOptions = {
          url: "/api/email",
          method: "POST",
          headers: headersList,
          data: bodyContent,
        };
        await Axios.request(reqOptions);
      } else {
        setFormStatus("Failed...");
        setIsDisabled(false);
      }
    } else {
      setFormStatus("Failed...");
      setIsDisabled(false);
    }

    if (Object.keys(errors).length === 0) {
      if (data.botchecker === null) {


        let headersList = {
          Accept: "*/*",
          Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
          "Content-Type": "application/json",
        };

        let bodyContent = JSON.stringify({
          "IP": `${ip.ip} - ${ip.country_name} - ${ip.city_name}`,
          "Brand": "Infinity Animations",
          "Page": pagenewurl,
          "Date": setDate,
          "Time": setTime,
          "JSON": { ...data, pageURL: pagenewurl },
        });
        let reqOptions = {
          url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
          method: "POST",
          headers: headersList,
          data: bodyContent,
        };
        await Axios.request(reqOptions);
        window.location.href = "/thank-you";
      }
    }
  };


  const testiSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className={`w-full flex items-center justify-start py-6 md:py-12 lg:py-16 bg-none  bg-no-repeat bg-center bg-cover relative `}>
        <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
          <div className='grid grid-cols-12 lg:pt-[55px]  justify-items-center w-full '>


            <div className={`col-span-12 lg:col-span-6 lg:h-full ${styles.sectionRibbon} bg-[#D60925] rounded-[4px] `}>
              <div className={`${styles.ribbon} bg-white border py-[20px] px-`}>
                <span className={` py-3 ${styles.ribbon5} w-[380px] sm:w-[550px]`}>
                  <h1 className={`text-[#fff] text-[25px] md:text-[30px] font-[550] montserrat font-sans leading-[30px] text-center`}>
                    Contact us
                  </h1>
                  <p className="text-[11px] sm:text-[12px] montserrat text-[#fff] font-[300] font-sans leading-[1.52857143] tracking-wider text-center mb-5">
                    We are always here to help what you need.
                  </p>
                </span>

                <div className="form pt-[55px] px-[15px] sm:px-[25px] md:px-[35px] pb-[30px]">
                  <div className="relative">
                    <div className='flex mt-[10px] py-[13px] px-[8px] rounded-[4px] w-full border-none bg-[#E6E6E6] mb-[25px]'>
                      {/* <BsPerson size={24} color='#858585' /> */}
                      <Image src={Profile} height='15px' width='15px' />
                      <input type="text" name="name" placeholder='Enter your name' className='mx-3 w-full bg-transparent montserrat placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                    </div>
                    {errors.name && (
                      <span className="text-[12px] block p-2 font-bold font-sans text-primary-100 absolute left-0 bottom-[-40%] z-50">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <div className='flex mt-[10px] py-[13px] px-[8px] rounded-[4px] w-full border-none bg-[#E6E6E6] mb-[25px]'>
                      {/* <BsPerson size={24} color='#858585' /> */}
                      <Image src={message} height='15px' width='15px' />
                      <input type="email" name='email' placeholder='Enter Email' className='mx-3 w-full bg-transparent montserrat placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                    </div>
                    {errors.email && (
                      <span className="text-[12px] block p-2 font-bold font-sans text-primary-100 absolute left-0 bottom-[-38%] z-50">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <div className='flex mt-[10px] py-[13px] px-[8px] rounded-[4px] w-full border-none bg-[#E6E6E6] mb-[25px]'>
                      {/* <BsPerson size={24} color='#858585' /> */}
                      <Image src={phone} height='15px' width='15px' />
                      <input type="tel" name='phone' minLength="10"
                        maxLength="13"
                        pattern="[0-9]*" placeholder='Enter Phone Number' className='mx-3 w-full bg-transparent montserrat placeholder:text-[#858585] focus:outline-0 text-black' onChange={handleDataChange} required />
                    </div>
                    {errors.phone && (
                      <span className="text-[12px] block p-2 font-bold font-sans text-primary-100 absolute left-0 bottom-[-38%] z-50">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  
                  <button type='submit' className='bg-prime text-white border-0 h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center justify-between gap-x-2 w-full' onClick={handleFormSubmit} disabled={isDisabled}>
                    <span className="text-[16px] xl:text-[18px] font-normal font-sans">{formStatus}</span>
                    <Image src={btnIcon} className="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2 object-contain" />
                  </button>
                </div>
              </div>

            </div>

            <div className={`  col-span-12 lg:col-span-6 flex flex-col justify-center h-full px-[15px] lg:ps-[55px] mt-5 ${styles.paraBg}`}>
              <h1 className={`text-[#fff] text-[25px] md:text-[35px] font-[800] montserrat font-sans leading-[45px]  mt-5 mb-4 text-center lg:text-start`}>
                {title}
              </h1>
              <p className="text-[12px] sm:text-[15px] montserrat text-[#fff] font-[300] font-sans leading-[1.52857143] tracking-wider text-center lg:text-start mb-5">
                {para}
              </p>
              <div className='grid grid-cols-1 '>
                <Slider {...testiSlider} >
                  {tabInfo.map((item, index) => (
                    <div className='h-[80px] content-center'>
                      <Image src={item.image} alt='BrandsLogo' className='mx-auto' />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default BannerContact