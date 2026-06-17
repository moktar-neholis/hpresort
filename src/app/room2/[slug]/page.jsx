// app/room2/[slug]/page.js
import Posts from '../../data/data-room.json';
import Room2DetailsClient from './Room2DetailsClient';

// Generate static params for static export
export function generateStaticParams() {
  return Posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Room2DetailsPage({ params }) {
  const { slug } = params;
  const roomPost = Posts.find(post => post.slug === slug);

  return <Room2DetailsClient roomPost={roomPost} />;
}
