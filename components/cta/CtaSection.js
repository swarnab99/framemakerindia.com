const CtaSection = () => {
	return (
		<section
			className='reservation-wrapper space-top space-md-bottom'
			style={{
				backgroundImage: `url(https://images.prismic.io/framemakerindia/9528eda5-a5dd-4063-b491-7dc1bc8d06b8_background.jpeg?auto=compress,format)`,
			}}
			data-bg-src='https://images.prismic.io/framemakerindia/9528eda5-a5dd-4063-b491-7dc1bc8d06b8_background.jpeg?auto=compress,format'
			data-overlay='black'
			data-opacity='6'>
			<div className='container z-index-common'>
				<div className='row text-center justify-content-center'>
					<div className='col-xl-6 col-lg-8 col-md-8'>
						<div className='title-area mb-0'>
							<h2 className='sec-title text-white mb-0'>
								Let your moments shine with The Frame Maker
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
