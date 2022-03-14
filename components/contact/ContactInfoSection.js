import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const ContactInfoSection = ({ slice }) => {
	// console.log(slice);
	return (
		<section className='contact-info-wrapper space-top'>
			<div className='container'>
				<div className='row justify-content-center'>
					{slice?.items.map((item, index) => (
						<ContactItem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	);
};

const ContactItem = ({ data }) => {
	const { icon_name, title, details, button_text, button_link } = data;
	return (
		<div className='col-sm-6 col-md-4 col-lg-4 mb-30'>
			<div className='contact-info-box'>
				<div className='icon bg-black text-theme'>
					<i className={`fa-4x ${icon_name[0]?.text}`}></i>
				</div>
				<h3 className='info-title text-white'>{title[0]?.text}</h3>
				<div className='info-text text-white-light'>
					<RichText render={details} serializeHyperlink={CustomLink} />
				</div>
				<a href='#' className='vs-btn'>
					{button_text[0]?.text}
				</a>
			</div>
		</div>
	);
};

export default ContactInfoSection;
