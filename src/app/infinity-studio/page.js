"use client"
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
    title: <> Start Displaying Your Brand with <span className='text-[#FFCC00]'>Amazing Animated Videos</span> </>,
    desc: "Spread profound message and scale up your business with our animated video services today!",
  }
  //===== FAQS =====//

  const accordionData = [
    {
      question: 'How Many People Will Work On My Video?',
      list: [
        "Understanding your business and marketing objectives",
        "Story and script development",
        "Storyboard",
        "Voiceover",
        "Illustration",
        "Animation",
        "Delivery/publication",
      ]
    },
    {
      question: 'How Many People Will Work On My Video?',
      answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
    },
    {
      question: 'Do I Get Full Copyrights To The Video?',
      answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
    },
    {
      question: 'Do You Produce All Types Of Animation Videos And Provide Video Concept Too, If I Have No Concept Idea?',
      answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
    }
  ];
  const faqs = {
    accordionData: accordionData,
  }
  // ===== Brands Content ===== //
  const brandsTwo = {
    title: "Start Displaying Your Brand with Amazing Animated Videos",
    subTitle: "Spread Profound Message and Scale Up Your Business",
    desc: "Spread profound message and scale up your business with our animated video services today!",
    isBtn: false,
  }
  return (
    <>
      <div className='bg-white'>
        <HeaderLP />
        <Banner />
        <Partners />
        <Explainer />
        <Streamed />
        <ExplainerType />
        <Brands content={brands} />
        <Packages />
        <Animations />
        <Work />
        <Faqs content={faqs} />
        <ClientThinking />
        <Clients />
        <Brands content={brandsTwo} />
        <Contact />
      </div>
    </>
  )
}

export default Video
