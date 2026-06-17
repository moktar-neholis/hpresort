import Posts from '../../data/data-post.json';
import BlogDetailsClient from './BlogDetailsClient';

// Generate static params for static export
export function generateStaticParams() {
  return Posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailsPage({ params }) {
  const { slug } = params;
  const blogPost = Posts.find(post => post.slug === slug);

  return <BlogDetailsClient blogPost={blogPost} />;
}