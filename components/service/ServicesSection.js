/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';
import { DocLink } from '../../utils/prismicHelpers';

const ServicesSection = ({ slice }) => {
	// console.log(slice);
	const { subheading, heading } = slice.primary;
	return (
		<section className='vs-history-wrapper space-top space-md-bottom'>
			<div className='container history-container'>
				<div className='title-area text-center'>
					<span className='sub-title'>{subheading[0]?.text}</span>
					<h2 className='sec-title'>{heading[0]?.text}</h2>
				</div>
				<div className='row gx-xl-0'>
					{slice?.items?.map((item, index) => (
						<ServiceItem key={index} data={item} index={index} />
					))}
				</div>
				{slice?.items?.length < 4 && (
					<div className='text-center mt-10 mb-30'>
						<Link href='/photography-services'>
							<a className='d-none d-xl-inline-block history-load icon-btn style-white'>
								<i className='far fa-plus'></i>
							</a>
						</Link>
						<Link href='/photography-services'>
							<a className='d-inline-block d-xl-none vs-btn'>
								<i className='far fa-plus'></i>Load More
							</a>
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

const ServiceItem = ({ data, index }) => {
	const { title, image, description, link } = data;
	return (
		<div className='history-step col-md-6 col-xl-12'>
			<div className='row gx-120 align-items-center'>
				<div className='col-xl-6'>
					<div className='history-year'>0{index + 1}</div>
				</div>
				<div className='col-xl-6'>
					<div className='step-body'>
						<div className='history-img'>
							<img src={image.url} alt={image.alt} width={370} />
						</div>
						<div className='history-content'>
							<DocLink link={link}>
								<h3 className='history-name h4'>{title[0]?.text}</h3>
							</DocLink>
							<div className='history-text'>
								<RichText
									render={description}
									serializeHyperlink={CustomLink}
								/>
							</div>

							<a
								href={`https://api.whatsapp.com/send?phone=+919830343620&text=Hi, I want a quote for ${title[0]?.text}`}>
								<span className='vs-btn px-4 py-2'>Get A Quotation</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
