import posts from '../../data/data-event.json';
import EventDetailsClient from './EventDetailsClient';

// Generate static params for static export
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function EventDetailsPage({ params }) {
  const { slug } = params;
  const event = posts.find((post) => post.slug === slug);

  return <EventDetailsClient event={event} />;
}
