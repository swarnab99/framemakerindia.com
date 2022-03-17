import { useEffect } from 'react';
import lozad from 'lozad';
import { Client } from '../utils/prismicHelpers';
import PrismicClient from '../utils/prismicClient';
import gql from 'graphql-tag';
import { SliceZone } from '../slices';
import SEO from '../components/seo/SEO';

import BlogSection from '../components/blog/BlogSection';

const BlogsPage = ({ doc, blogPosts }) => {
	// console.log(doc);
	// ========== LOZAD INSTANTIATE ==========
	useEffect(() => {
		const observer = lozad('.lozad', {
			rootMargin: '100px 0px', // syntax similar to that of CSS Margin
		});
		observer.observe();
		return () => {};
	}, [doc?.uid]);
	// ========== END ==========
	return (
		<>
			<SEO doc={doc} url='https://framemakerindia.com/photography-blog' />
			<SliceZone sliceZone={doc.data.body} />
			<BlogSection blogPosts={blogPosts} />
		</>
	);
};

export async function getStaticProps({ preview = null, previewData = {} }) {
	const { ref } = previewData;
	const client = Client();
	const doc =
		(await client.getSingle('blogs_page', ref ? { ref } : null)) || {};

	const pClient = PrismicClient;
	const blogPosts = await pClient.query({
		query: gql`
			query {
				allBlog_posts(sortBy: published_date_DESC) {
					edges {
						node {
							title
							featured_image
							published_date
							_meta {
								uid
							}
						}
					}
				}
			}
		`,
	});

	if (doc.id == undefined) {
		return {
			props: null,
			notFound: true,
		};
	}

	return {
		props: {
			doc,
			blogPosts,
			preview,
		},
		revalidate: 60,
	};
}

export default BlogsPage;
