import { primary, FontMono } from "./configs/fonts";
//===== Import Components =====
import ConditionalLayout from "./ConditionalLayout";
//===== Import Css =====
import Script from "next/script";
import "./global.css";
//===== Meta Data =====
export const metadata = {
  metadataBase: new URL("https://infinityanimations.com/"),
  //===== Meta Tags =====
  title: "Video Animation Company - Infinity Animations",
  description:
    "Video Animation Services, Explore a diverse range of professional animation services to captivate your audience and convey your message effectively.",
  //===== OG Tags =====
  openGraph: {
    title: "Video Animation Company - Infinity Animations",
    description:
      "Video Animation Services, Explore a diverse range of professional animation services to captivate your audience and convey your message effectively.",
    url: "/",
    siteName: "Infinity Animations",
    locale: "en_US",
    type: "website",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== GEO Tags =====
  other: {
    "DC.title": "Video Animation Company - Infinity Animations",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
    //==========
    "DC.title": "Video Animation Company - Infinity Animations",
    "geo.region": "US-NY",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
    //==========
    "DC.title": "Video Animation Company - Infinity Animations",
    "geo.region": "US-NY",
    "geo.placename": "New York",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": [
        "dgOXThSlUP6xd-daxjwI8uQqVYkhfbL_Ey51mNVEUzU",
      ],
      "facebook-domain-verification": ["uhlazbr6xlgoc54qqmaefth2rflawm"],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${primary.variable} ${FontMono.variable}`}>
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
        <ConditionalLayout>
          <main>{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
}
