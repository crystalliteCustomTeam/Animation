"use client"
import React, { useEffect, useRef } from "react"
import lottie from "lottie-web"

const LottieAnimation = ({ animationPath }) => {
  const container = useRef(null)

  useEffect(() => {
    if (container.current) {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: animationPath,
      })

      return () => anim.destroy()
    }
  }, [animationPath])

  return <div ref={container}></div>
}

export default LottieAnimation
