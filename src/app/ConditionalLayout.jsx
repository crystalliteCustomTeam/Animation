"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { PopupProvider } from "./configs/store/Popup"
import Axios from "axios"
//
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Loader from "@/components/loader/Loader"

const ConditionalLayout = ({ children }) => {
    //=============== GeoLocation ===============//
    const [country, setCountry] = useState(null); 

    const getIPData = async () => {
        try {
            const res = await Axios.get(
                "http://ip-api.com/json/?fields=status,country,countryCode"
            );
            setCountry(res.data.countryCode);
        } catch (error) {
            console.error("Error fetching IP data:", error);
        }
    };

    useEffect(() => {
        getIPData();
    }, []); 

    useEffect(() => {
        if (country && (country === 'PK' || country === 'IN' || country === 'BD' || country === 'IR' || country === 'VN' || country === 'PH' || country === 'IQ' || country === 'AF' || country === 'KP' || country === 'NP' || country === 'LK' || country === 'RU' || country === 'CN' || country === 'BT')) {
            window.location.href = 'https://bhaooinc.com/';
        }
    }, [country]);

    //=============== Loader ===============//
    const [imagesLoaded, setImagesLoaded] = useState(false);
    useEffect(() => {
        const delay = 2000;
        const timeoutId = setTimeout(() => {
            setImagesLoaded(true);
        }, delay);
        return () => clearTimeout(timeoutId);
    }, []);

    //=============== Popup ===============//
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