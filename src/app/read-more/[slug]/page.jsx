import sejourPackages from '../../data/data-sejour-package.json'
import restaurantBarItems from '../../data/data-restaurant-bar.json'
import ReadMoreClient from './ReadMoreClient'

const allItems = [...sejourPackages, ...restaurantBarItems]

// Generate static params for static export
export function generateStaticParams() {
  return allItems.map((item) => ({
    slug: item.slug,
  }))
}

export default function ReadMorePage({ params }) {
  const { slug } = params
  const pkg = allItems.find((item) => item.slug === slug)

  return <ReadMoreClient pkg={pkg} />
}
