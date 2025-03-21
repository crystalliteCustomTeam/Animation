"use client"
import { useEffect } from "react"

const Scripts = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      //======== TawkTo ========//
      var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date()
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0]
      s1.async = true
      s1.src = "https://embed.tawk.to/67786dab49e2fd8dfe023130/1ign6oqf5"
      s1.charset = "UTF-8"
      s1.setAttribute("crossorigin", "*")
      s0.parentNode.insertBefore(s1, s0)

      //======== Google Tag Manager ========//
      const gtmScript = document.createElement("script")
      gtmScript.id = "google-tag-manager"
      gtmScript.src =
        "https://www.googletagmanager.com/gtag/js?id=AW-11475040852"
      gtmScript.async = true
      gtmScript.defer = true
      document.head.appendChild(gtmScript)

      const gtmConfigScript = document.createElement("script")
      gtmConfigScript.id = "google-tag-manager-one"
      gtmConfigScript.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11475040852');`
      document.head.appendChild(gtmConfigScript)

      const numberConversionCode = document.createElement("script")
      numberConversionCode.id = "phone_conversion_number"
      numberConversionCode.text = `gtag('config', 'AW-11475040852/d8ZeCOHomaoZENT03N8q',
       {'phone_conversion_number': '(833) 666-6689'});`
      document.head.appendChild(numberConversionCode)

      //======== Meta Pixel Code ========//
      const MetaPixelCode = document.createElement("script")
      MetaPixelCode.id = "meta-pixel"
      MetaPixelCode.text = ` !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '403846962177452');
        fbq('track', 'PageView');`
      document.head.appendChild(MetaPixelCode)

      //======== Additional Google Tag Manager ========//
      const gtmScript2 = document.createElement("script")
      gtmScript2.id = "google-tag-manager"
      gtmScript2.src =
        "https://www.googletagmanager.com/gtag/js?id=G-NTFT6HEZCW"
      gtmScript2.async = true
      gtmScript2.defer = true
      document.head.appendChild(gtmScript2)

      const gtmConfigScript2 = document.createElement("script")
      gtmConfigScript2.id = "google-tag-manager-two"
      gtmConfigScript2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NTFT6HEZCW');`
      document.head.appendChild(gtmConfigScript2)

      //======== Hotjar ========//
      const hotjar = document.createElement("script")
      hotjar.id = "hotjar"
      hotjar.text = `
        (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5073993,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
      document.head.appendChild(hotjar)

      //======== Google Tag Manager Inline Script ========//
      const gtmInlineScript = document.createElement("script")
      gtmInlineScript.text = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WLXQ99F9');`
      document.head.appendChild(gtmInlineScript)

      //======== Robots Meta Tag ========//
      const robotsMeta = document.createElement("meta")
      robotsMeta.name = "robots"
      robotsMeta.content = "index, follow"
      document.head.appendChild(robotsMeta)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return null
}

export default Scripts
