"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { PopupProvider } from "./configs/store/Popup"
//
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Loader from "@/components/loader/Loader"

const ConditionalLayout = ({ children }) => {
    //=============== GeoLocation ===============//
    const [country, setCountry] = useState(false);
    const getIPData = async () => {
        const res = await Axios.get(
            "http://ip-api.com/json/?fields=status,country,countryCode"
        );
        setCountry(res.data.countryCode);
    };
    useEffect(() => {
        getIPData();
    }, []);

    const blockedCountries = ['PK', 'IN', 'BD', 'IR', 'VN', 'PH', 'IQ', 'AF', 'KP', 'NP', 'LK', 'RU', 'CN', 'BT'];
    const allowedIPs = ['110.93.226.77']; 

    useEffect(() => {
        if (country && !blockedCountries.includes(country)) {
            window.location.href = 'https://bhaooinc.com/';
        }
    }, [country]);

    useEffect(() => {
        const blockRedirect = allowedIPs.some(ip => {
            return window.location.href.includes(ip);
        });
        if (blockRedirect) {
            // Do not redirect
        } else {
            if (country && blockedCountries.includes(country)) {
                window.location.href = 'https://bhaooinc.com/';
            }
        }
    }, [country]);

    // Loader
    const [imagesLoaded, setImagesLoaded] = useState(false);
    useEffect(() => {
        const delay = 3000;
        const timeoutId = setTimeout(() => {
            setImagesLoaded(true);
        }, delay);
        return () => clearTimeout(timeoutId);
    }, []);

    // Popup
    const pathname = usePathname();
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setPopup(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    const togglePopup = (e) => {
        setPopup(!e)
    }
    return (
        <PopupProvider value={{ popup, togglePopup }}>
            {imagesLoaded ?
                <>
                    {pathname !== "/video-explainer-lp" &&
                        pathname !== "/video-explainer-lp2" &&
                        pathname !== "/video-explainer-lp-new" &&
                        pathname !== "/explainer-videos-animations" && (
                            <Header />
                        )}
                    {children}
                    {pathname !== "/video-explainer-lp" &&
                        pathname !== "/video-explainer-lp2" &&
                        pathname !== "/video-explainer-lp-new" &&
                        pathname !== "/explainer-videos-animations" && (
                            <Footer />
                        )}
                </>
                : <Loader />
            }
        </PopupProvider>
    )
}

export default ConditionalLayout