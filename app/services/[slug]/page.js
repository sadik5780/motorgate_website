import ServiceDetailsClient from './ServiceDetailsClient';

// This function is required for static export with dynamic routes
export async function generateStaticParams() {
    // Return all possible service slugs that should be pre-rendered
    return [
        { slug: 'maintenance' },
        { slug: 'marketplace-buy-sell' },
        { slug: 'spare-parts' },
        { slug: 'towing' },
        { slug: 'auctions' },
        { slug: 'insurance' },
        { slug: 'rentals' }
    ];
}

// Server Component that renders the Client Component
export default async function ServiceDetailsPage({ params }) {
    const { slug } = await params;
    
    return <ServiceDetailsClient slug={slug} />;
}
