import items from '../../data/data-restaurant-bar.json';
import RestaurantBarDetail from './RestaurantBarDetail';

export function generateStaticParams() {
    return items.map((item) => ({
        slug: item.slug,
    }));
}

export default async function RestaurantBarPage({ params }) {
    const { slug } = await params;
    const item = items.find((i) => i.slug === slug);
    return <RestaurantBarDetail item={item} />;
}
