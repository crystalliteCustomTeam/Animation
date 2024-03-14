"use client"
import { useEffect } from 'react'

const Schemas = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            //======== Website Schema ========//
            const websiteSchema = document.createElement("script");
            websiteSchema.type = "application/ld+json";
            websiteSchema.text = JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "WebSite",
                "name": "Video Animation | Infinity Animations",
                "url": "https://infinityanimations.com/",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "{search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            });
            document.head.appendChild(websiteSchema);
            //======== Organization Schema ========//
            const organizationSchema = document.createElement("script");
            organizationSchema.type = "application/ld+json";
            organizationSchema.text = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "Video Animation | Infinity Animations",
                "url": "https://infinityanimations.com/",
                "logo": "https://infinityanimations.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.957f7aac.gif&w=828&q=75"
            });
            document.head.appendChild(organizationSchema);
            //======== LocalBusiness Schema ========//
            const localBusinessSchema = document.createElement("script");
            localBusinessSchema.type = "application/ld+json";
            localBusinessSchema.text = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Video Animation | Infinity Animations",
                "image": "https://infinityanimations.com/_next/static/media/banner-img.648555a5.png",
                "@id": "",
                "url": "https://infinityanimations.com/",
                "telephone": "833-666-6684",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "One World Trade Center, Suite 8500",
                    "addressLocality": "New York",
                    "addressRegion": "NY",
                    "postalCode": "10007",
                    "addressCountry": "US"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 40.7130082,
                    "longitude": -74.0131689
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ],
                    "opens": "08:00",
                    "closes": "21:00"
                },
                "sameAs": [
                    "https://www.facebook.com/infinityanimationsofficial",
                    "https://www.instagram.com/infinityanimationsofficials"
                ]
            });
            document.head.appendChild(localBusinessSchema);
            //======== Product Schema ========//
            const productSchema = document.createElement("script");
            productSchema.type = "application/ld+json";
            productSchema.text = JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "Video Animation | Infinity Animations",
                "image": "https://infinityanimations.com/_next/static/media/banner-img.648555a5.png",
                "description": "Video Animation Services, Explore a diverse range of professional animation services to captivate your audience and convey your message effectively.",
                "brand": {
                    "@type": "Brand",
                    "name": "Infinity Animations"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "1174"
                }
            });
            document.head.appendChild(productSchema);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return null;
};

export default Schemas;
