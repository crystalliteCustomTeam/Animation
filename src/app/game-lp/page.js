import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Clients from "./components/Clients/Clients";
import TwoDArt from "./components/2dArt/2dArt";
import ThreeDArt from "./components/3dArt/3dArt";
import VFX from "./components/VFX/VFX";
import Portfolio from "./components/Portfolio/Portfolio";
import SmallBanner from "./components/SmallBanner/SmallBanner";

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
        </>
    )
}