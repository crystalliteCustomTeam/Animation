import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header/Header"));
const Banner = dynamic(() => import("./Banner/Banner"));
const Clients = dynamic(() => import("./Clients/Clients"));
const TwoDArt = dynamic(() => import("./2dArt/2dArt"));
const ThreeDArt = dynamic(() => import("./3dArt/3dArt"));
const VFX = dynamic(() => import("./VFX/VFX"));
const Portfolio = dynamic(() => import("./Portfolio/Portfolio"));
const SmallBanner = dynamic(() => import("./SmallBanner/SmallBanner"));
const WhyChoose = dynamic(() => import("./WhyChoose/WhyChoose"));
const OurProcess = dynamic(() => import("./OurProcess/OurProcess"));



export {
    Header,
    Banner,
    Clients,
    TwoDArt,
    ThreeDArt,
    VFX,
    Portfolio,
    SmallBanner,
    WhyChoose,
    OurProcess
}