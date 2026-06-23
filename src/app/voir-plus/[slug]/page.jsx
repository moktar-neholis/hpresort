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

export default async function ReadMorePage({ params }) {
  const { slug } = await params
  // Normalize slug for case-insensitive comparison
  const normalizedSlug = slug?.toLowerCase()?.trim()
  const pkg = allItems.find((item) => item.slug?.toLowerCase()?.trim() === normalizedSlug)

  return <ReadMoreClient pkg={pkg} />
}
