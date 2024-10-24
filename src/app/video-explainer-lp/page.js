"use client"
import React, { useState, useEffect } from "react";
import Script from 'next/script';
import ComplexIdeas from "./components/complexIdeas/complexIdeas";
// Import Components
const HeaderLP = React.lazy(() => import('./components/Header/Header'));
const Banner = React.lazy(() => import('./components/banner/Banner'));
const Partners = React.lazy(() => import('./components/partners/partners'));
const Explainer = React.lazy(() => import('./components/explainer/Explainer'));
const BadgeSlider = React.lazy(() => import('@/components/badgeSlider1/BadgeSlider1'));
const Streamed = React.lazy(() => import('./components/streamed/Streamed'));
const Brands = React.lazy(() => import('./components/brands/Brands'));
const ExplainerType = React.lazy(() => import('./components/type-explainer/ExplainerType'));
const Packages = React.lazy(() => import('./components/packages/Packages'));
const Animations = React.lazy(() => import('./components/infinity-animation/Animations'));
const Work = React.lazy(() => import('./components/work/Work'));
const Faqs = React.lazy(() => import('./components/faqs/Faqs'));
const ClientThinking = React.lazy(() => import('./components/client/ClientThinking'));
const Clients = React.lazy(() => import('./components/OurClients/Clients'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));

const Video = () => {
  const [showDesktopComponents, setShowDesktopComponents] = useState(true);
  const [showMobileComponents, setShowMobileComponents] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Show desktop components after 1 second
    const desktopTimer = setTimeout(() => {
      setShowDesktopComponents(true);
    }, 500);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(desktopTimer);
    };
  }, []);

  useEffect(() => {
    const handleTouchOrScroll = () => {
      setShowMobileComponents(true);
      // Remove event listeners after mobile components are shown
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };

    // Add event listeners for touch and scroll events
    window.addEventListener("scroll", handleTouchOrScroll);
    window.addEventListener("touchstart", handleTouchOrScroll);

    return () => {
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };
  }, []);
  // ===== Brands Content ===== //
  const brands = {
    title: <>Our Video Animation Company Creates Complex <br className='xl:hidden lg:block hidden' /> Product Animated Video</>,
    subTitle: "",
    desc: "Spread your message effectively and scale up your business with our top-notch Video Animation Services.",
    isBtn: true,
  }
  //===== FAQS =====//
  const lists = [
    {
      item1: "Understanding your business and marketing objectives",
      item1: "Story and script development",
      item1: "Storyboard",
      item1: "Voiceover",
      item1: "Illustration",
      item1: "Animation",
      item1: "Delivery/publication",
    }
  ]
  const accordionData = [
    {
      question: 'What Is The Cost Of Tech Video Production?',
      answer: "For our customers, we create meaningful and entertaining videos at Explain Art Animation. The entire video content is produced and tailored to our client's requirements. Our team excels at creating high-quality videos, whether you need a corporate video to boost your brand awareness or a product demo to promote your services.Our process entails a series of meticulous animation and development steps, from brainstorming various concepts to the final delivery.",
      lists: lists,
      items: []
    },
    {
      question: 'What Is The Infinity Animations Video Delivery Timeframe?',
      answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
      items: []
    },
    {
      question: 'How Do Explainer Videos Benefit My Business Beyond Just Explaining A Product?',
      answer: "Explainer videos not only demystify your product but also create a memorable brand narrative, increasing engagement, and fostering a stronger emotional connection with your audience.",
      items: []
    },
    {
      question: 'Are Explainer Videos Suitable For All Industries, Or Are They More Effective For Certain Businesses?',
      answer: "Explainer videos are versatile and can benefit businesses across industries. From tech startups to healthcare services, adapting the content to suit your industry's specific needs to improve the effectiveness. ",
      items: []
    }
  ];
  const faqs = {
    accordionData: accordionData,
  }
  // ===== Brands Content ===== //
  const brandsTwo = {
    title: <>Video Animation Services That Boosts Your Brand,<br className='lg:block hidden' />  Maximizes Prospect, Engagement and Drives ROI.</>,
    subTitle: "",
    desc: "Scale up your business with our Animated Explainer Video Services today! Reviews:",
    isBtn: true,
  }
  // Complex Idea Start

  const menus = [
    { label: "Struggling to Simplify Complex Ideas? We’ve Got You Covered!", index: 0 },
    { label: "Struggling to Simplify Complex Ideas? We’ve Got You Covered!", index: 1 },
    { label: "Struggling to Simplify Complex Ideas? We’ve Got You Covered!", index: 2 },
    { label: "Struggling to Simplify Complex Ideas? We’ve Got You Covered!", index: 3 },
    { label: "Struggling to Simplify Complex Ideas? We’ve Got You Covered!", index: 4 },
  ];
  const sections = [
    [
      {
        title: <>Struggling to Simplify Complex Ideas? <br className="xl:block hidden" /> We’ve Got You Covered</>,
        content: `<p class='montserrat text-[12px] xl:text-[14px] text-justify md:text-left font-normal text-black leading-[25px] mb-[20px]'>Struggling to communicate complex ideas clearly? At Infinity Animations, we transform complicated concepts into simple, engaging explainer videos. Our videos break down difficult topics, ensuring your audience understands your message, increasing engagement, and driving conversions. Let us simplify your communication for maximum impact.</p>
        <p class='montserrat text-[12px] xl:text-[14px] text-justify md:text-left font-normal text-black leading-[25px] mb-[20px]'>
        Communicating complex concepts can be challenging, but we make it easy. At Infinity Animations, we specialize in creating explainer videos that turn intricate ideas into clear, engaging stories. Our videos simplify your message, helping your audience understand and connect with your brand effortlessly, driving better engagement, higher conversions, and lasting results.</p>`,
      },
    ],
    [
      {
        title: <>Struggling to Simplify Complex Ideas? <br className="xl:block hidden" /> We’ve Got You Covered</>,
        content: `<p class='montserrat text-[12px] xl:text-[14px] text-justify md:text-left font-normal text-black leading-[25px] mb-[20px]'>Struggling to communicate complex ideas clearly? At Infinity Animations, we transform complicated concepts into simple, engaging explainer videos. Our videos break down difficult topics, ensuring your audience understands your message with ease, increasing engagement, and driving conversions. Let us simplify your communication for maximum impact.</p>
        <p class='montserrat text-[12px] xl:text-[14px] text-justify md:text-left font-normal text-black leading-[25px] mb-[20px]'>
        Communicating complex concepts can be challenging, but we make it easy. At Infinity Animations, we specialize in creating explainer videos that turn intricate ideas into clear, engaging stories. Our videos simplify your message, helping your audience understand and connect with your brand effortlessly, driving better engagement, higher conversions.</p>`,
      },
    ],
    [
      {
        title: <>Struggling to Simplify Complex Ideas? <br className="xl:block hidden" /> We’ve Got You Covered</>,
        content: `<p class='montserrat text-[12px] xl:text-[14px] text-justify md:text-left font-normal text-black leading-[25px] mb-[20px]'>Communicate complex ideas clearly? At Infinity Animations, we transform complicated concepts into simple, engaging explainer videos. Our videos break down difficult topics, ensuring your audience understands your message with ease, increasing engagement, and driving conversions. Let us simplify your communication for maximum impact.</p>
        <p class='montserrat text-[12px] xl:text-[14px] text-justify md:text-left font-normal text-black leading-[25px] mb-[20px]'>
        Communicating complex concepts can be challenging, but we make it easy. At Infinity Animations, we specialize in creating explainer videos that turn intricate ideas into clear, engaging stories. Our videos simplify your message, helping your audience understand and connect with your brand effortlessly, driving better engagement, higher conversions, and lasting results.</p>`,
      },
    ],
    [
      {
        title: <>Struggling to Simplify Complex Ideas? <br className="xl:block hidden" /> We’ve Got You Covered</>,
        content: `<p class='montserrat text-[12px] xl:text-[14px] text-justify md:text-left font-normal text-black leading-[25px] mb-[20px]'>Struggling to communicate complex ideas clearly? At Infinity Animations, we transform complicated concepts into simple, engaging explainer videos. Our videos break down difficult topics, ensuring your audience understands your message with ease, increasing engagement, and driving conversions. Let us simplify your communication for maximum impact.</p>
        <p class='montserrat text-[12px] xl:text-[14px] text-justify md:text-left font-normal text-black leading-[25px] mb-[20px]'>
        Communicating complex concepts can be challenging, but we make it easy. At Infinity Animations, we specialize in creating explainer videos that turn intricate ideas into clear, engaging stories. Our videos simplify your message, helping your audience understand and connect with your brand effortlessly, driving better, higher conversions, and lasting results.</p>`,
      },
    ],
    [
      {
        title: <>Struggling to Simplify Complex Ideas? <br className="xl:block hidden" /> We’ve Got You Covered</>,
        content: `<p class='montserrat text-[12px] xl:text-[14px] text-justify md:text-left font-normal text-black leading-[25px] mb-[20px]'>Struggling to communicate complex ideas clearly? At Infinity Animations, we transform complicated concepts into simple, engaging explainer videos. Our videos break down difficult topics, ensuring your audience understands your message with ease, increasing engagement, and driving conversions. Let us simplify your communication for maximum impact.</p>
        <p class='montserrat text-[12px] xl:text-[14px] text-justify md:text-left font-normal text-black leading-[25px] mb-[20px]'>
        Communicating complex concepts can be challenging, but we make it easy. At Infinity Animations, we specialize in creating explainer videos that turn intricate ideas into clear, engaging stories. Our videos simplify your message, helping your audience understand and your brand effortlessly, driving better engagement, higher conversions, and lasting results.</p>`,
      },
    ],
  ];
  const complexContent = {
    menus: menus,
    sections: sections,
  };
  // Complex Idea Edn
  return (
    <>
      <div className='bg-white'>
        <HeaderLP />
        <Banner />
        {
          isMobile ? (
            showMobileComponents && (
              <>
                <Partners />
                <Streamed />
                <BadgeSlider />
                <Explainer />
                <Brands content={brands} />
                <ExplainerType />
                <Packages />
                <ComplexIdeas content={complexContent} />
                <Animations />
                <Work />
                <Faqs content={faqs} />
                <Brands content={brandsTwo} />
                <ClientThinking />
                <Clients />
                <Contact />
              </>
            )
          ) : (
            showDesktopComponents && (
              <>
                <Partners />
                <Streamed />
                <BadgeSlider />
                <Explainer />
                <Brands content={brands} />
                <ExplainerType />
                <Packages />
                <ComplexIdeas content={complexContent} />
                <Animations />
                <Work />
                <Faqs content={faqs} />
                <Brands content={brandsTwo} />
                <ClientThinking />
                <Clients />
                <Contact />
              </>
            )
          )
        }

        <Script id="websiteSchema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Animated Explainer Videos | Infinity Animations",
              "url": "https://infinityanimations.com/video-explainer-lp",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "{search_term_string}",
                "query-input": "required name=search_term_string"
              }                    
            }
          `}
        </Script>
        <Script id="organizationSchema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "Animated Explainer Videos | Infinity Animations",
              "url": "https://infinityanimations.com/video-explainer-lp",
              "logo": "https://infinityanimations.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.957f7aac.gif&w=256&q=75"
            }
          `}
        </Script>
        <Script id="localBusinessSchema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Animated Explainer Videos | Infinity Animations",
              "image": "https://infinityanimations.com/_next/static/media/banner.e85b7a7f.jpg",
              "@id": "",
              "url": "https://infinityanimations.com/video-explainer-lp",
              "telephone": "833-666-6689",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "One World Trade Center, Suite 8500",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10007",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7130082,
                "longitude": -74.0131689
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "21:00"
              },
              "sameAs": [
                "https://www.facebook.com/infinityanimationsofficial",
                "https://www.instagram.com/infinityanimationsofficials"
              ]                     
            }
          `}
        </Script>
        <Script id="productSchema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/", 
              "@type": "Product", 
              "name": "Animated Explainer Videos | Infinity Animations",
              "image": "https://infinityanimations.com/_next/static/media/banner.e85b7a7f.jpg",
              "description": "Animated Explainer Videos, Our expert team specializes in creating captivating animated explainer videos that engage and inform your audience.",
              "brand": {
                "@type": "Brand",
                "name": "Infinity Animations"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1087"
              }                    
            }
          `}
        </Script>
      </div>
    </>
  )
}

export default Video
