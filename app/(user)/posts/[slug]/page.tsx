import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/studio/RichTextComponents";

type Props = {
	params: {
		slug: string;
	}
};

export const revalidate = 60; // revalidate this page every 60 seconds

export async function generateStaticParams() {
	const query = groq`
		*[_type=='post']
		{
			slug
		}`;

	const slugs: Post[] = await client.fetch(query);
	const slugRoutes = slugs.map((slug) => slug.slug.current);

	return slugRoutes.map(slug => ({
		slug,
	}));
}

async function Post({ params: { slug } }: Props) {

	const query = groq`
	*[_type=='post' && slug.current == $slug][0]
	{
		...,
		author->,
		categories[]->
	}
`;

	const post: Post = await client.fetch(query, { slug });

	// console.log(post);

	return (
		<>
			<article>
				<div>
					<div className="relative w-full h-[200px] md:h-[450px] mb-6 xl:mb-8">
						<Image
							className="object-cover object-left lg:object-center"
							src={urlFor(post.mainImage).url()}
							alt={post.author.name}
							fill
						/>
					</div>
					<section>
						<div className="flex flex-col max-w-2xl px-4 py-4 mx-auto mb-8 xl:px-0">
							<div>
								<div className="flex flex-row items-center space-x-4">
									{post.categories.map((category) => (
										<p className="p-2 mb-4 text-white bg-gray-900" key={category._id}>{category.title}</p>
									))}
								</div>
								<h1 className="text-2xl md:text-3xl">{post.title}</h1>
								<div className="flex flex-row items-center my-4 space-x-2 text-blue-900">
									<p>{post.author.name}</p>
									<p>
										{new Date(post._createdAt).toLocaleDateString("en-US", {
											day: "numeric",
											month: "long",
											year: "numeric"
										})}
									</p>
								</div>
							</div>
							<div>
								<PortableText value={post.body} components={RichTextComponents} />
							</div>
						</div>
					</section>
				</div>
			</article>
		</>
	)
}

export default Post;