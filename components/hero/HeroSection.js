/* eslint-disable @next/next/no-img-element */

const HeroSection = () => {
	return (
		<section className='feature-gallery-wrapper space-md-bottom'>
			<div className='container'>
				<div className='row text-center justify-content-center'>
					<div className='col-xxl-8 col-xl-9 col-lg-10'>
						<div className='title-area'>
							<h2 className='sec-title'>
								The Frame Maker
								<br /> where emotions meets creativity
							</h2>
						</div>
					</div>
				</div>
				<div className='row gx-30'>
					<div className='col-xl-9 mx-auto'>
						<div className='feature-gal-box mb-30'>
							<div className='gal-img'>
								<img
									src='https://images.prismic.io/framemakerindia/03894ed2-5ec2-4283-a3d0-b0f77c8e7d35_RISHABH+%26+KARISHMA+wedding+4.jpg?auto=compress,format'
									alt='Gallery Image'
									className='w-100'
								/>
								<a
									href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
									className='popup-video play-btn position-center'>
									<i className='fas fa-play'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.feature-gallery-wrapper {
					margin-top: 120px;
				}
			`}</style>
		</section>
	);
};

export default HeroSection;
