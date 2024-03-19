// Meta Data
export const metadata = {
    // Title & Descriptions
    title: "Blogs - Infinity Animations",
    description: "From impactful storytelling to technical mastery, our blog is your gateway to the art and innovation of video animation services.",
    // Canonical
    alternates: { canonical: 'https://infinityanimations.com/blog/' },
    // OG Metas
    openGraph: {
        title: 'Blogs - Infinity Animations',
        description: 'From impactful storytelling to technical mastery, our blog is your gateway to the art and innovation of video animation services.',
        url: 'https://infinityanimations.com/blog/',
        siteName: 'Infinity Animations',
        locale: 'en_US',
        type: 'website',
    },
    //===== Google Varification =====
    verification: {
        other: {
            "google-site-verification": ['dgOXThSlUP6xd-daxjwI8uQqVYkhfbL_Ey51mNVEUzU'],
        },
    },
    //===== Canonical =====
    alternates: { canonical: 'https://infinityanimations.com/blog' },
}

export default function RootLayout({ children }) {
    return (children);
}