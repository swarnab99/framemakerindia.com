import { Client } from '../utils/prismicHelpers';
import SEO from '../components/seo/SEO';
import BookingSection from '../components/contact/BookingSection';

const BookingPage = ({ doc }) => {
	return (
		<>
			<SEO doc={doc} url='https://framemakerindia.com/book' />
			<BookingSection />
		</>
	);
};

export async function getStaticProps({ preview = null, previewData = {} }) {
	const { ref } = previewData;
	const client = Client();
	const doc =
		(await client.getSingle('booking_page', ref ? { ref } : null)) || {};

	if (doc.id == undefined) {
		return {
			props: null,
			notFound: true,
		};
	}

	return {
		props: {
			doc,
			preview,
		},
		revalidate: 60,
	};
}

export default BookingPage;
