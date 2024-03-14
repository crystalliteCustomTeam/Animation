"use client"
import { useEffect } from 'react'

const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            //======== Lucky Oragne ========//
            const luckyOrange = document.createElement("script");
            luckyOrange.id = "luckyOrange";
            luckyOrange.src = "https://tools.luckyorange.com/core/lo.js?site-id=1cfb1cde";
            luckyOrange.async = true;
            luckyOrange.defer = true;
            document.body.appendChild(luckyOrange);
            //======== zenDesk ========//
            const zenDesk = document.createElement("script");
            zenDesk.id = "ze-snippet";
            zenDesk.src = "https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af";
            zenDesk.async = true;
            zenDesk.defer = true;
            document.body.appendChild(zenDesk);
            //======== GATG ========//
            const gtmScript = document.createElement("script");
            gtmScript.id = "google-tag-manager";
            gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-11475040852";
            gtmScript.async = true;
            gtmScript.defer = true;
            document.head.appendChild(gtmScript);
            //======== Google Tag Manager ========//
            const gtmConfigScript = document.createElement("script");
            gtmConfigScript.id = "google-tag-manager-one";
            gtmConfigScript.text = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11475040852');
            `;
            document.head.appendChild(gtmConfigScript);
            //======== Meta Pixel Code ========//
            const MetaPixelCode = document.createElement("script");
            MetaPixelCode.id = "meta-pixel";
            MetaPixelCode.text = `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '403846962177452');
                fbq('track', 'PageView');
            `;
            document.head.appendChild(MetaPixelCode);
            // ========= Site Verification =========
            const googleSiteVerificationTag = document.createElement("meta");
            googleSiteVerificationTag.setAttribute("name", "google-site-verification");
            googleSiteVerificationTag.setAttribute("content", "dgOXThSlUP6xd-daxjwI8uQqVYkhfbL_Ey51mNVEUzU");
            document.head.appendChild(googleSiteVerificationTag);
            // ========= GEO Title 1 =========
            const geoTitle1 = document.createElement("meta");
            geoTitle1.setAttribute("name", "DC.title");
            geoTitle1.setAttribute("content", "Video Animation - Infinity Animations");
            document.head.appendChild(geoTitle1);
            const geoRegion1 = document.createElement("meta");
            geoRegion1.setAttribute("name", "geo.region");
            geoRegion1.setAttribute("content", "US");
            document.head.appendChild(geoRegion1);
            const geoPosition1 = document.createElement("meta");
            geoPosition1.setAttribute("name", "geo.position");
            geoPosition1.setAttribute("content", "39.78373;-100.445882");
            document.head.appendChild(geoPosition1);
            const icbmMeta1 = document.createElement("meta");
            icbmMeta1.setAttribute("name", "ICBM");
            icbmMeta1.setAttribute("content", "39.78373, -100.445882");
            document.head.appendChild(icbmMeta1);
            // ========= GEO Title 2 =========
            const geoTitle2 = document.createElement("meta");
            geoTitle2.setAttribute("name", "DC.title");
            geoTitle2.setAttribute("content", "Video Animation - Infinity Animations");
            document.head.appendChild(geoTitle2);
            const geoRegion2 = document.createElement("meta");
            geoRegion2.setAttribute("name", "geo.region");
            geoRegion2.setAttribute("content", "US-NY");
            document.head.appendChild(geoRegion2);
            const geoPosition2 = document.createElement("meta");
            geoPosition2.setAttribute("name", "geo.position");
            geoPosition2.setAttribute("content", "39.78373;-100.445882");
            document.head.appendChild(geoPosition2);
            const icbmMeta2 = document.createElement("meta");
            icbmMeta2.setAttribute("name", "ICBM");
            icbmMeta2.setAttribute("content", "39.78373, -100.445882");
            document.head.appendChild(icbmMeta2);
            // ========= GEO Title 3 =========
            const geoTitle3 = document.createElement("meta");
            geoTitle3.setAttribute("name", "DC.title");
            geoTitle3.setAttribute("content", "Video Animation - Infinity Animations");
            document.head.appendChild(geoTitle3);
            const geoRegion3 = document.createElement("meta");
            geoRegion3.setAttribute("name", "geo.region");
            geoRegion3.setAttribute("content", "US-NY");
            document.head.appendChild(geoRegion3);
            const geoPlace3 = document.createElement("meta");
            geoPlace3.setAttribute("name", "geo.placename");
            geoPlace3.setAttribute("content", "New York");
            document.head.appendChild(geoPlace3);
            const geoPosition3 = document.createElement("meta");
            geoPosition3.setAttribute("name", "geo.position");
            geoPosition3.setAttribute("content", "39.78373;-100.445882");
            document.head.appendChild(geoPosition3);
            const icbmMeta3 = document.createElement("meta");
            icbmMeta3.setAttribute("name", "ICBM");
            icbmMeta3.setAttribute("content", "39.78373, -100.445882");
            document.head.appendChild(icbmMeta3);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}   

export default Scripts
