import { previewData } from 'next/headers'
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/studio/PreviewSuspense';
import PreviewBlogList from '@/components/studio/PreviewBlogList';
import BlogList from '@/components/studio/BlogList';

export const revalidate = 60; // revalidate this page every 60 seconds

const query = groq`
	*[_type=='post'] {
		...,
		author->,
		categories[]->,
		} | order(_createdAt desc )
`;

export default async function Posts() {

	if (previewData()) {
		return <PreviewSuspense fallback={(
			<div role="status">
				<p className='text-lg text-center text-blue-600 animate-pulse'>
					Loading Preview Data...
				</p>
			</div>
		)}>
			{/* {bloglist} */}
			<PreviewBlogList query={query} />
		</PreviewSuspense>;
	}

	const posts = await client.fetch(query);

	// console.log(posts);

	return (
		<BlogList posts={posts} />
	)
}
