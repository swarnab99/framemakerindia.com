import { useEffect } from 'react';
import lozad from 'lozad';
import { Client } from '../utils/prismicHelpers';
import PrismicClient from '../utils/prismicClient';
import gql from 'graphql-tag';
import { queryRepeatableDocuments } from '../utils/queries';
import { SliceZone } from '../slices';
import SEO from '../components/seo/SEO';
import BlogSection from '../components/blog/BlogSection';

const ServicePage = ({ doc, blogPosts }) => {
	// console.log(blogPosts);
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
			<SEO doc={doc} url={`https://framemakerindia.com/${doc?.uid}`} />
			<SliceZone sliceZone={doc.data.body} />
			<BlogSection blogPosts={blogPosts} />
		</>
	);
};

export async function getStaticPaths() {
	const documents = await queryRepeatableDocuments(
		(doc) => doc.type === 'service_page'
	);
	return {
		paths: documents.map((doc) => {
			return { params: { slug: doc.uid } };
		}),
		fallback: 'blocking',
	};
}

export async function getStaticProps({
	preview = null,
	previewData = {},
	params,
}) {
	const { ref } = previewData;

	const client = Client();

	const doc =
		(await client.getByUID(
			'service_page',
			params.slug,
			ref ? { ref } : null
		)) || {};

	if (doc.id == undefined) {
		return {
			props: null,
			notFound: true,
		};
	}

	const pClient = PrismicClient;
	const blogPosts = await pClient.query({
		query: gql`
			query {
				allBlog_posts(sortBy: published_date_DESC, first: 3) {
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

	return {
		props: {
			doc,
			blogPosts,
			preview,
		},
		revalidate: 60,
	};
}

export default ServicePage;
