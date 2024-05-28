//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: '',
        description: '',
        url: '/location-page',
        siteName: 'Infinity Animations',
        locale: 'en_US',
        type: 'website',
    },
    //===== Canonical =====
    alternates: { canonical: '/location-page' },
    //===== GEO Tags =====
    other: {},
}

export default function RootLayout({ children }) {
    return (children);
}