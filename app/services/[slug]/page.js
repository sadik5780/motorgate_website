import ServiceDetailsClient from './ServiceDetailsClient';

export async function generateStaticParams() {
    const servicesData = {
        "maintenance": {},
        "marketplace-buy-sell": {},
        "spare-parts": {},
        "towing": {},
        "auctions": {},
        "insurance": {},
        "rentals": {}
    };
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

export default async function ServiceDetailsPage({ params }) {
    const { slug } = await params;
    return <ServiceDetailsClient slug={slug} />;
}
