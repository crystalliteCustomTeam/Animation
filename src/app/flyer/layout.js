//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Flyer",
  description: "Flyer",
  //===== OG Tags =====
  openGraph: {
    title: 'Flyer',
    description: 'Flyer',
    url: '/ui-ux-design',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/flyer' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}