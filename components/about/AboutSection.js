/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const AboutSection = ({ slice }) => {
	const { subheading, heading, description, image1, image2 } = slice.primary;
	return (
		<section className='features-about-wrapper space-top space-md-bottom'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 mb-30'>
						<div className='about-img-square'>
							<div className='square-image1'>
								<img src={image1.url} alt={image1.alt} width={450} />
							</div>
							<div className='square-image2'>
								<img src={image2.url} alt={image2.alt} width={380} />
							</div>
						</div>
					</div>
					<div className='col-lg-6 align-self-center mb-30'>
						<div className='about-content pl-75 text-center text-md-start'>
							<span className='sub-title'>{subheading[0]?.text}</span>
							<h2 className='sec-title'>{heading[0]?.text}</h2>
							<div className='mb-30 pb-3'>
								<RichText render={description} linkResolver={linkResolver} />
							</div>

							{slice?.items?.map((item, index) => (
								<FeatureItem key={index} data={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const FeatureItem = ({ data }) => {
	const { icon_name, title, details } = data;
	return (
		<div className='feature-media d-md-flex mb-20'>
			<div className='media-icon text-theme mr-20'>
				<i className={`fa-4x lh-1 ${icon_name[0]?.text}`}></i>
			</div>
			<div className='media-body'>
				<h3 className='h4 mt-n1'>{title[0]?.text}</h3>
				<RichText render={details} linkResolver={linkResolver} />
			</div>
		</div>
	);
};

export default AboutSection;
