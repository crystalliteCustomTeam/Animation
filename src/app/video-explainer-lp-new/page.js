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
const Popup = React.lazy(() => import('./components/popup/Popup'));

const Video = () => {
  // ===== Brands Content ===== //
  const brands = {
    title: "Ready For the Spotlight? Supercharge Your Brand's Story!",
    desc: "Illuminate your message with our tactfully and tastefully done explainer video services.",
    isBtn: true,
  }
  //===== FAQS =====//
  const accordionData = [
    {
      question: 'What Is The Cost Of Tech Video Production?',
      answer: "For our customers, we create meaningful and entertaining videos at Infinity Animations. The entire video content is produced and tailored to our client's requirements. Our team excels at creating high-quality videos, whether you need a corporate video to boost your brand awareness or a product demo to promote your services. Our process entails a series of meticulous animation and development steps, from brainstorming various concepts to the final delivery.",
    },
    {
      question: 'What Is The Infinity Animations Video Delivery Timeframe?',
      answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
    },
    {
      question: 'What Kind Of Videos Infinity Animations Provides With Tech Video Production Services?',
      answer: "Simplify the complex and engage your audience with our dynamic animation services like 2D Animations, 3D Animations, Whiteboard Animations, etc. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
    },
    {
      question: 'Do I get Full Copyrights to the videos?',
      answer: "Yes, You retain full copyrights to the videos you create. When we produce content, you automatically hold the copyright to that work, granting you exclusive rights to reproduce, distribute, perform, and display the work publicly.",
    }
  ];
  const faqs = {
    accordionData: accordionData,
  }
  // ===== Brands Content ===== //
  const brandsTwo = {
    title: "Ready to Transform Your Brand Story?",
    desc: "Let's create an explainer video that turns heads and drives results.",
    isBtn: true,
  }
  return (
    <>
      <div className='bg-white'>
        <Popup />
        <HeaderLP />
        <Banner />
        <Partners />
        <Explainer />
        <Streamed />
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
      </div>
    </>
  )
}

export default Video
