// Import Fonts
import { primary } from "./configs/fonts";
// Import Components
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
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
      <body className={`${primary.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
