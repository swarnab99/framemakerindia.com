/* eslint-disable @next/next/no-img-element */

const AboutSection = () => {
	return (
		<section className='features-about-wrapper space-top space-md-bottom'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 mb-30'>
						<div className='about-img-square'>
							<div className='square-image1'>
								<img
									src='https://images.prismic.io/framemakerindia/7df7eea4-2d0a-4fc4-aa25-3f361466ebeb_bride.jpeg?auto=compress,format'
									alt='About Image'
									width={450}
								/>
							</div>
							<div className='square-image2'>
								<img
									src='https://images.prismic.io/framemakerindia/862a724b-87c1-4eed-95e7-f7df5b80cc04_bengali-bride.jpeg?auto=compress,format'
									alt='About Image'
									width={380}
								/>
							</div>
						</div>
					</div>
					<div className='col-lg-6 align-self-center mb-30'>
						<div className='about-content pl-75 text-center text-md-start'>
							<span className='sub-title'>why choose</span>
							<h2 className='sec-title'>The Frame Maker</h2>
							<p className='mb-30 pb-3'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida. Et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida.
							</p>
							<div className='feature-media d-md-flex mb-20'>
								<div className='media-icon text-theme mr-20'>
									<i className='flaticon-confetti fa-4x lh-1'></i>
								</div>
								<div className='media-body'>
									<h3 className='h4 mt-n1'>Best Moments</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore
									</p>
								</div>
							</div>
							<div className='feature-media d-md-flex'>
								<div className='media-icon text-theme mr-20'>
									<i className='flaticon-love fa-4x lh-1'></i>
								</div>
								<div className='media-body'>
									<h3 className='h4 mt-n1'>We Care</h3>
									<p className='mb-0'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
