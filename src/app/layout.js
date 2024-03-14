//===== Import Fonts =====
import { primary } from "./configs/fonts";
//===== Import Components =====
import Scripts from "./Scripts";
import ConditionalLayout from "./ConditionalLayout";
//===== Import Css =====
import "./global.css";
import Schemas from "./Schemas";
//===== Meta Data =====
export const metadata = {
  //===== Title & Descriptions =====
  title: "Video Animation - Infinity Animations",
  description: "Video Animation Services, Explore a diverse range of professional animation services to captivate your audience and convey your message effectively. ",
  //===== Canonical =====
  alternates: { canonical: 'https://infinityanimations.com/' },
  //===== OG Metas =====
  openGraph: {
    title: "Video Animation - Infinity Animations",
    description: "Video Animation Services, Explore a diverse range of professional animation services to captivate your audience and convey your message effectively. ",
    url: 'https://infinityanimations.com/',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Schemas />
      <Scripts />
      <body className={`${primary.variable}`}>
        <ConditionalLayout>
          <main>{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
}
