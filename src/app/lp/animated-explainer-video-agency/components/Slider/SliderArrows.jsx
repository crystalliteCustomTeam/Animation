"use client"
// Next
import Image from "next/image"
// React
import React, { useCallback, useEffect, useState } from "react"
// Media
import PrevArrow from "media/animated-explainer-video-agency/icons/left_arrow.svg"
import NextArrow from "media/animated-explainer-video-agency/icons/right_arrow.svg"

export const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on("reInit", onSelect).on("select", onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

export const PrevButton = (props) => {
    const { children, ...restProps } = props

    return (
        <button
            type="button"
            {...restProps}
        >
            <Image src={PrevArrow} width={40} height={40} alt="PrevArrow" />
        </button>
    )
}

export const NextButton = (props) => {
    const { children, ...restProps } = props

    return (
        <button
            type="button"
            {...restProps}
        >
            <Image src={NextArrow} width={40} height={40} alt="NextArrow" />
        </button>
    )
}
