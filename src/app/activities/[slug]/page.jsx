// app/activities/[slug]/page.js
import React from 'react';
import posts from '../../data/data-activities.json';
import ActivitiesClient from './ActivitiesClient';

// 1. Map out every single static path using your local JSON data
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// 2. Pass the resolved parameter down to the Client UI component
export default async function Page({ params }) {
    const resolvedParams = await params; // Provides compatibility for Next.js 14 and 15
    const { slug } = resolvedParams;

    return <ActivitiesClient slug={slug} />;
}