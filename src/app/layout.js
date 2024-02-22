// Import Fonts
import { primary } from "./configs/fonts";
// Import Components
import ConditionalLayout from "./ConditionalLayout";
import Script from "next/script";
// Import Css
import "./global.css";
import Scripts from "./Scripts";
// Meta Data
export const metadata = {
  // Title & Descriptions
  title: "Your Vision Coupled with Creative Excellence",
  description: "Explore our animation studio's diverse services, where creativity meets precision, bringing your ideas to life in captivating motion.",
  // Canonical
  alternates: { canonical: 'https://infinityanimations.com/' },
  // OG Metas
  openGraph: {
    title: "Your Vision Coupled with Creative Excellence",
    description: "Explore our animation studio's diverse services, where creativity meets precision, bringing your ideas to life in captivating motion.",
    url: 'https://infinityanimations.com/',
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
