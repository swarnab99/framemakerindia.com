const ContactInfoSection = () => {
	return (
		<section className='contact-info-wrapper space-top'>
			<div className='container'>
				<div className='row justify-content-center'>
					<ContactItem />
					<ContactItem />
					<ContactItem />
				</div>
			</div>
		</section>
	);
};

const ContactItem = () => {
	return (
		<div className='col-sm-6 col-md-4 col-lg-4 mb-30'>
			<div className='contact-info-box'>
				<div className='icon bg-black text-theme'>
					<i className='flaticon-women fa-4x'></i>
				</div>
				<h3 className='info-title text-white'>Visto Weeding Office</h3>
				<p className='info-text text-white-light'>
					Friday, 28 Jan. 2021
					<br />
					2:00 PM – 4:30 PM
					<br />
					Dls New York, 28th Str. USA
					<br />
					+1 566-453-1899
				</p>
				<a href='#' className='vs-btn'>
					Get Direction
				</a>
			</div>
		</div>
	);
};

export default ContactInfoSection;
