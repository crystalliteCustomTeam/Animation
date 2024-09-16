//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Borchire Design",
  description: "Borchire Design",
  //===== OG Tags =====
  openGraph: {
    title: 'Borchire Design',
    description: 'Borchire Design',
    url: '/borchire-design',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/borchire-design' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}