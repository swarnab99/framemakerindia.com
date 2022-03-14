const CtaSection = ({ slice }) => {
	const { heading, background_image } = slice.primary;
	return (
		<section
			className='reservation-wrapper space-top space-md-bottom'
			style={{
				backgroundImage: `url(${background_image?.url})`,
			}}
			data-bg-src=''
			data-overlay='black'
			data-opacity='6'>
			<div className='container z-index-common'>
				<div className='row text-center justify-content-center'>
					<div className='col-xl-6 col-lg-8 col-md-8'>
						<div className='title-area mb-0'>
							<h2 className='sec-title text-white mb-0'>{heading[0]?.text}</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
