/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const ReviewsSection = ({ slice }) => {
	return (
		<section className='container space-top space-md-bottom'>
			<div className='row'>
				{slice?.items?.map((item, index) => (
					<ReviewItem key={index} data={item} />
				))}
			</div>
		</section>
	);
};

const ReviewItem = ({ data }) => {
	const { image, name, review } = data;
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='col-sm-6 col-md-4 col-lg-4 mb-30'>
			<div className='contact-info-box h-100 py-4'>
				<div className='icon bg-black text-theme'>
					<img
						data-src={image.url}
						alt={image.alt || name[0]?.text}
						className='rounded-circle lozad'
					/>
				</div>
				<h3 className='info-title text-white'>{name[0]?.text}</h3>
				<div
					className={`text-white-light px-3 ${isOpen ? '' : 'review'}`}
					onClick={() => setIsOpen(!isOpen)}>
					<RichText render={review} serializeHyperlink={CustomLink} />
				</div>
			</div>
		</div>
	);
};

export default ReviewsSection;
