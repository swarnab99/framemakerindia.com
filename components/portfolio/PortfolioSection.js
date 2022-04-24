/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { DocLink } from '../../utils/prismicHelpers';

const PortfolioSection = ({ slice }) => {
	const [activeCategory, setActiveCategory] = useState('Show All');
	const categoryOptions = ['Show All', 'Pre Wedding', 'Wedding', 'Engagement'];

	return (
		<section className='portfolio-wrapper portfolio-single-padding space-top'>
			<div className='container'>
				<div className='portfolio-filter filter-menu-active text-center mb-40'>
					{categoryOptions.map((category, index) => (
						<button
							onClick={() => setActiveCategory(category)}
							key={index}
							className={`btn ${activeCategory == category ? 'active' : ''}`}
							data-filter='*'>
							{category}
						</button>
					))}
				</div>
				<div className='row gx-45 filter-active'>
					{slice.items.map(
						(item, index) =>
							(activeCategory == 'Show All' ||
								activeCategory == item.category) && (
								<PortfolioItem key={index} data={item} />
							)
					)}
				</div>
			</div>
		</section>
	);
};

const PortfolioItem = ({ data }) => {
	const { image, title, category, link } = data;
	return (
		<div className='col-md-6 col-xl-4 filter-item cat-1 cat-4'>
			<div className='mb-45 portfolio-box image-box-hover'>
				<div className='portfolio-img box-img'>
					<DocLink link={link}>
						<img src={image.url} alt={image.alt} className='w-100' />
					</DocLink>
				</div>
				<p className='portfolio-degi fs-xs'>{category}</p>
				<h3 className='portfolio-title h4 mb-0'>
					<DocLink link={link}>
						<span className='text-inherit'>{title[0]?.text}</span>
					</DocLink>
				</h3>
			</div>
		</div>
	);
};

export default PortfolioSection;
