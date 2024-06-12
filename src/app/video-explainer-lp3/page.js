"use client"
import Script from 'next/script';
import React from 'react';
// Import Components
const HeaderLP = React.lazy(() => import('./components/Header/Header'));
const Banner = React.lazy(() => import('./components/banner/Banner'));
const Partners = React.lazy(() => import('./components/partners/partners'));
const Explainer = React.lazy(() => import('./components/explainer/Explainer'));
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
  // ===== Brands Content ===== //
  const brands = {
    title: <>Explain Your Complex Product with Amazing <br className='xl:hidden lg:block hidden' /> Animated Videos</>,
    subTitle: "",
    desc: "Spread profound message and scale up your business with our animated video services today!",
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
    },
    {
      question: 'What Is The Infinity Animations Video Delivery Timeframe?',
      answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
    },
    {
      question: 'How Do Explainer Videos Benefit My Business Beyond Just Explaining A Product?',
      answer: "Explainer videos not only demystify your product but also create a memorable brand narrative, increasing engagement, and fostering a stronger emotional connection with your audience.",
    },
    {
      question: 'Are Explainer Videos Suitable For All Industries, Or Are They More Effective For Certain Businesses?',
      answer: "Explainer videos are versatile and can benefit businesses across industries. From tech startups to healthcare services, adapting the content to suit your industry's specific needs to improve the effectiveness. ",
    }
  ];
  const faqs = {
    accordionData: accordionData,
  }
  // ===== Brands Content ===== //
  const brandsTwo = {
    title: <>Animated Video Content That Boosts Your Brand,<br className='lg:block hidden' />  Maximizes Prospect Engagement and Drives ROI</>,
    subTitle: "",
    desc: "Spread profound message and scale up your business with our animated video services today!",
    isBtn: true,
  }
  return (
    <>
      <div className='bg-white'>
        <HeaderLP />
        <Banner />
        <Partners />
        <Streamed />
        <Explainer />
        <Brands content={brands} />
        <ExplainerType />
        <Packages />
        <Animations />
        <Work />
        <Faqs content={faqs} />
        <ClientThinking />
        <Clients />
        <Brands content={brandsTwo} />
        <Contact />

        <Script id="websiteSchema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Explainer Video Animation Services | Infinity Animations",
              "url": "https://infinityanimations.com/video-explainer-lp-new",
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
              "name": "Explainer Video Animation Services | Infinity Animations",
              "url": "https://infinityanimations.com/video-explainer-lp-new",
              "logo": "https://infinityanimations.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.957f7aac.gif&w=256&q=75"
            }
          `}
        </Script>
        <Script id="localBusinessSchema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Explainer Video Animation Services | Infinity Animations",
              "image": "https://infinityanimations.com/_next/static/media/banner.26074fa5.png",
              "@id": "",
              "url": "https://infinityanimations.com/video-explainer-lp-new",
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
              "name": "Explainer Video Animation Services | Infinity Animations",
              "image": "https://infinityanimations.com/_next/static/media/banner.26074fa5.png",
              "description": "Explainer Video Animation Services, Contact us to discover how our expert team can bring your ideas to life with engaging explainer videos.",
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
