// Import Fonts
import { primary } from "./configs/fonts";
// Import Components
import ConditionalLayout from "./ConditionalLayout";
import Script from "next/script";
// Import Css
import "./global.css";
// Meta Data
export const metadata = {
  // Title & Descriptions
  title: "Your Vision Coupled with Creative Excellence",
  description: "Explore our animation studio's diverse services, where creativity meets precision, bringing your ideas to life in captivating motion.",
  // Canonical
  alternates: { canonical: 'https://infinity-animation.vercel.app/' },
  // OG Metas
  openGraph: {
    title: "Your Vision Coupled with Creative Excellence",
    description: "Explore our animation studio's diverse services, where creativity meets precision, bringing your ideas to life in captivating motion.",
    url: 'https://infinity-animation.vercel.app/',
    siteName: 'InFinity Animation',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

            
            <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af"></Script>
     


{/* Meta Pixel Code */}

            <Script>
                {`
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
                `}
            </Script>



            <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11475040852"></Script>

            <Script>
              {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
             
               gtag('config', 'AW-11475040852');
              `}

            </Script>

{/* <!-- End Meta Pixel Code --> */}

      <body className={`${primary.variable}`}>
   
      <ConditionalLayout>
        <main>{children}</main>
        </ConditionalLayout>
       
  
      </body>
 
    </html>
  );
}
