"use client"

import React from 'react'
import HeaderLP from './components/Header/Header'
import Banner from './components/banner/Banner'
import Partners from './components/partners/partners'
import Explainer from './components/explainer/Explainer'
import Streamed from './components/streamed/Streamed'
import Brands from './components/brands/Brands'
import ExplainerType from './components/type-explainer/ExplainerType'
import Packages from './components/packages/Packages'
import Animations from './components/infinity-animation/Animations'
import Work from './components/work/Work'
import Faqs from './components/faqs/Faqs'
import ClientThinking from './components/client/ClientThinking'
import Clients from './components/OurClients/Clients'
import Contact from './components/Contact/Contact'
import Popup from './components/popup/Popup'

const Video = () => {

  // ===== Brands Content ===== //
  const brands = {
    title: "Start Displaying Your Brand with Amazing Animated Videos",
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
      question: 'What Is The BuzzFlick’s Video Delivery Timeframe?',
      answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
    },
    {
      question: 'What Kind Of Videos BuzzFlick Provides With Tech Video Production Services?',
      answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
    },
    {
      question: 'What Kind Of Videos BuzzFlick Provides With Tech Video Production Services?',
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
        <Brands content={brands} />
        <ExplainerType />
        <Packages />
        <Animations />
        <Work />
        <Faqs content={faqs} />
        <Brands content={brandsTwo} />
        <ClientThinking />
        <Clients />
        <Contact />
        <Popup />
      </div>
    </>
  )
}

export default Video
