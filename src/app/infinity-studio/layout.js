//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: '',
        description: '',
        url: '/infinity-studio',
        siteName: 'Infinity Animations',
        locale: 'en_US',
        type: 'website',
    },
    //===== Canonical =====
    alternates: { canonical: '/infinity-studio' },
    //===== GEO Tags =====
    other: {},
}

export default function RootLayout({ children }) {
    return (children);
}