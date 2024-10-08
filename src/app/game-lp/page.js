import React from "react";
import { Banner, Clients, Header, OurProcess, Portfolio, SmallBanner, ThreeDArt, TwoDArt, VFX, WhyChoose } from "./components";

export default function Page() {
    return (
        <>
            <Header />
            <Banner />
            <Clients />
            <TwoDArt />
            <ThreeDArt />
            <VFX />
            <Portfolio />
            <SmallBanner />
            <WhyChoose />
            <OurProcess />
        </>
    )
}