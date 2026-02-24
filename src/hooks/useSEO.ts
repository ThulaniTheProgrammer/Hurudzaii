import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description?: string;
    canonical?: string;
}

/**
 * Custom hook to set per-page SEO metadata dynamically.
 * Updates document.title and the <meta name="description"> tag on route change.
 */
const useSEO = ({ title, description, canonical }: SEOProps) => {
    useEffect(() => {
        // Update page title
        document.title = title;

        // Update meta description
        if (description) {
            let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', description);
            }
        }

        // Update canonical link
        if (canonical) {
            let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
            if (canonicalLink) {
                canonicalLink.setAttribute('href', canonical);
            }
        }

        // Reset to homepage defaults on unmount
        return () => {
            document.title = 'Hurudza AI — AI-Powered Agritech Platform for African Farmers';
            const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', 'Hurudza AI empowers 21,000+ Zimbabwean farmers with AI crop analytics, satellite field mapping, ZundePay financial tools, and a 24/7 multilingual WhatsApp agronomist bot.');
            }
            const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
            if (canonicalLink) {
                canonicalLink.setAttribute('href', 'https://www.hurudzaai.tech/');
            }
        };
    }, [title, description, canonical]);
};

export default useSEO;
