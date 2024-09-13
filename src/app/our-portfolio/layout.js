//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "New Portfolio",
  description: "New Portfolio",
  //===== OG Tags =====
  openGraph: {
    title: 'New Portfolio',
    description: 'New Portfolio',
    url: '/new-portfolio',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/new-portfolio' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}