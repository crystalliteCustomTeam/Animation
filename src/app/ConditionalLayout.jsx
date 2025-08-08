"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { PopupProvider } from "./configs/store/Popup"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Popup from "@/components/popup/Popup"
import Scripts from "./Scripts"
import Script from "next/script"

const ConditionalLayout = ({ children }) => {
  const [showMobileComponents, setShowMobileComponents] = useState(false)

  useEffect(() => {
    const handleTouchOrScroll = () => {
      setShowMobileComponents(true)
      window.removeEventListener("scroll", handleTouchOrScroll)
      window.removeEventListener("touchstart", handleTouchOrScroll)
    }

    window.addEventListener("scroll", handleTouchOrScroll)
    window.addEventListener("touchstart", handleTouchOrScroll)

    return () => {
      window.removeEventListener("scroll", handleTouchOrScroll)
      window.removeEventListener("touchstart", handleTouchOrScroll)
    }
  }, [])
  //=============== Popup ===============//
  const pathname = usePathname()
  const [popup, setPopup] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])
  const togglePopup = (e) => {
    setPopup(!e)
  }

  return (
    <PopupProvider value={{ popup, togglePopup }}>
      {showMobileComponents && (
        <>
          <Popup />
          <Scripts />
          <Script id="livechat-init" strategy="afterInteractive">
            {`
            window.__lc = window.__lc || {};
            window.__lc.license = 19220066;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
            (function(n,t,c){
              function i(n){return e._h ? e._h.apply(null,n) : e._q.push(n)}
              var e = {
                _q: [], _h: null, _v: "2.0",
                on: function(){i(["on", c.call(arguments)])},
                once: function(){i(["once", c.call(arguments)])},
                off: function(){i(["off", c.call(arguments)])},
                get: function(){
                  if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                  return i(["get", c.call(arguments)])
                },
                call: function(){i(["call", c.call(arguments)])},
                init: function(){
                  var n = t.createElement("script");
                  n.async = true;
                  n.type = "text/javascript";
                  n.src = "https://cdn.livechatinc.com/tracking.js";
                  t.head.appendChild(n);
                }
              };
              !n.__lc.asyncInit && e.init();
              n.LiveChatWidget = n.LiveChatWidget || e;
            })(window, document, [].slice);
          `}
          </Script>

        </>
      )}
      <>
        {pathname !== "/video-explainer-lp" &&
          pathname !== "/video-explainer-lp2" &&
          pathname !== "/video-explainer-lp3" &&
          pathname !== "/video-explainer-lp-ca" &&
          pathname !== "/video-explainer-lp-new" &&
          pathname !== "/explainer-videos" &&
          pathname !== "/explainer-videos-new" &&
          pathname !== "/explainer-videos-duplicate" &&
          pathname !== "/explainer-videos-animations" &&
          pathname !== "/logo-animation-lp" &&
          pathname !== "/game-lp" &&
          pathname !== "/lp/explainer-video-animation" &&
          pathname !== "/explainer-video-services" &&
          pathname !== "/explainer-video-services-global" &&
          pathname !== "/animating-studio-lp-2" &&
          pathname !== "/video-explainer-lp4" &&
          pathname !== "/animated-healthcare-lp" &&
          pathname !== "/lp/animated-explainer-video-agency" &&
          pathname !== "/infinity-studio" && <Header />}
        {children}
        {pathname !== "/video-explainer-lp" &&
          pathname !== "/video-explainer-lp2" &&
          pathname !== "/video-explainer-lp3" &&
          pathname !== "/video-explainer-lp-ca" &&
          pathname !== "/video-explainer-lp-new" &&
          pathname !== "/explainer-videos" &&
          pathname !== "/explainer-videos-new" &&
          pathname !== "/explainer-videos-duplicate" &&
          pathname !== "/explainer-videos-animations" &&
          pathname !== "/logo-animation-lp" &&
          pathname !== "/game-lp" &&
          pathname !== "/logo-animation-lp-copy" &&
          pathname !== "/logo-animation-lp-black" &&
          pathname !== "/lp/explainer-video-animation" &&
          pathname !== "/explainer-video-services" &&
          pathname !== "/explainer-video-services-global" &&
          pathname !== "/animating-studio-lp-2" &&
          pathname !== "/video-explainer-lp4" &&
          pathname !== "/animated-healthcare-lp" &&
          pathname !== "/lp/animated-explainer-video-agency" &&
          pathname !== "/infinity-studio" && <Footer />}
      </>
    </PopupProvider>
  )
}

export default ConditionalLayout
