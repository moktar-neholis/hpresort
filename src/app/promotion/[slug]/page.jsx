import promotions from '../../data/data-sejour-package.json';
import PromotionDetail from './PromotionDetail';

export function generateStaticParams() {
    return promotions.map((promo) => ({ slug: promo.slug }));
}

export default async function PromotionPage({ params }) {
    const { slug } = await params;
    const promo = promotions.find((p) => p.slug === slug);
    return <PromotionDetail promo={promo} />;
}
