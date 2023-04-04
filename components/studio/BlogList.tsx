import urlFor from "@/lib/urlFor";
import Image from "next/image";
import moment from 'moment';
import category from "@/schemas/category";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
	posts: Post[];
};

function BlogList({ posts }: Props) {
	// console.log(posts);
	return (
		<div className="px-4 mx-auto max-w-7xl xl:px-0">
			<h1 className="my-10 text-5xl">Posts</h1>
			<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
				{posts.map(post => (
					<ClientSideRoute key={post._id} route={`/posts/${post.slug.current}`}>
						<div key={post._id} className="relative flex flex-col cursor-pointer">
							<div className="relative w-full h-80">
								<Image
									className="object-cover object-left lg:object-center"
									src={urlFor(post.mainImage).url()}
									alt={post.author.name}
									fill
									quality={60}
								/>
							</div>
							<div className="relative flex flex-row items-center justify-between w-full p-4 text-white bg-gray-900">
								<div className="flex flex-row items-center justify-between w-full pt-6 pb-2 space-x-4">
									<h3 className="text-lg font-light">{post.title}</h3>
									<p>
										{new Date(post._createdAt).toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric"})}
									</p>
								</div>
								<div className="absolute flex flex-row items-center space-x-4 -top-4 right-4">
									{post.categories.map((category) => (
										<p key={category._id} className="px-4 py-2 text-sm text-gray-900 bg-white">{category.title}</p>
									))}
								</div>
							</div>
							<div className="py-8">
								<h2 className="text-2xl font-medium">{post.title}</h2>
								<p className="my-2 text-gray-600 line-clamp-1">{post.description}</p>
								<p className="flex flex-row mt-4 text-gray-900 underline font-md">
									Read Post
								</p>
							</div>
						</div>
					</ClientSideRoute>
				))}
			</div>

		</div>
	)
}

export default BlogList;