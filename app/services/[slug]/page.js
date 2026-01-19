import ServiceDetailsClient from "./ServiceDetailsClient";

// REQUIRED for output: "export"
export async function generateStaticParams() {
  return [
    { slug: "maintenance" },
    { slug: "marketplace-buy-sell" },
    { slug: "spare-parts" },
    { slug: "towing" },
    { slug: "auctions" },
    { slug: "insurance" },
    { slug: "rentals" },
  ];
}

// SERVER component
export default function ServiceDetailsPage({ params }) {
  return <ServiceDetailsClient slug={params.slug} />;
}
