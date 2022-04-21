import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const FeaturesSection = ({ slice }) => {
	// console.log(slice);
	const { subheading, heading } = slice.primary;
	return (
		<section className='vs-service-wrapper space-top space-md-bottom'>
			<div className='container'>
				<div className='title-area text-center'>
					<span className='sub-title'>{subheading[0]?.text}</span>
					<h2 className='sec-title'>{heading[0]?.text}</h2>
				</div>
				<div className='row pt-3'>
					{slice?.items?.map((item, index) => (
						<FeatureItem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	);
};

const FeatureItem = ({ data }) => {
	const { icon_name, title, details } = data;
	return (
		<div className='text-center text-xl-start col-sm-6 col-xl-3'>
			<div className='vs-service mb-30'>
				<div className='service-icon mt-n2 text-theme'>
					<i className={`fa-5x lh-1 ${icon_name[0]?.text}`}></i>
				</div>
				<h3 className='service-name'>{title[0]?.text}</h3>
				<div className='fs-xs'>
					<RichText render={details} linkResolver={linkResolver} />
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection;
