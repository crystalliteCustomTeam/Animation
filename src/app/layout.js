//===== Import Fonts =====
import { primary } from "./configs/fonts";
//===== Import Components =====
import Scripts from "./Scripts";
import ConditionalLayout from "./ConditionalLayout";
//===== Import Css =====
import "./global.css";
//===== Meta Data =====
export const metadata = {
  //===== Title & Descriptions =====
  title: "Video Animation - Infinity Animations",
  description: "Video Animation Services, Explore a diverse range of professional animation services to captivate your audience and convey your message effectively. ",
  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": ['dgOXThSlUP6xd-daxjwI8uQqVYkhfbL_Ey51mNVEUzU'],
    },
  },
  //===== Canonical =====
  alternates: { canonical: '/' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Video Animation - Infinity Animations",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
    //==========
    "DC.title": "Video Animation - Infinity Animations",
    "geo.region": "US-NY",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
    //==========
    "DC.title": "Video Animation - Infinity Animations",
    "geo.region": "US-NY",
    "geo.placename": "New York",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882"
  },
  //===== OG Tags =====
  openGraph: {
    title: "Video Animation - Infinity Animations",
    description: "Video Animation Services, Explore a diverse range of professional animation services to captivate your audience and convey your message effectively. ",
    url: '/',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scripts />
      <body className={`${primary.variable}`}>
        <ConditionalLayout>
          <main>{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
}
