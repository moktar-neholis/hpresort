// app/room/[slug]/page.js
import Posts from '../../data/data-room.json';
import RoomDetailsClient from './RoomDetailsClient';

// Generate static params for static export
export function generateStaticParams() {
  return Posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function RoomDetailsPage({ params }) {
  const { slug } = await params;
  const roomPost = Posts.find(post => post.slug === slug);

  return <RoomDetailsClient roomPost={roomPost} />;
}
