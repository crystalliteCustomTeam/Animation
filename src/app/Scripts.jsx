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
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}

export default Scripts
