/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<div className='container'>
				<footer className='footer-wrapper footer-layout1'>
					<div className='widget-area'>
						<div className='container'>
							<div className='row gx-60 justify-content-center'>
								<div className='col-lg-10 col-xl-8 align-self-center'>
									<div className='widget footer-widget'>
										<div className='vs-widget-about text-center'>
											<div className='footer-logo mb-15'>
												<img
													src='https://images.prismic.io/framemakerindia/aa85a9a3-e66e-4f42-9909-fe54da4688b4_framemaker-logo.png?auto=compress,format&w=400'
													alt='Vibeson'
													width='300'
												/>
											</div>
											<p className='font-title fs-20 lh-base'>
												The Frame Maker is the best wedding photographer in
												kolkata, who's mission is to capture beautiful memories
												through wedding photography.
											</p>
											<p>
												© {new Date().getFullYear()} The Frame Maker. All rights
												reserved.
											</p>
											<div className='footer-btns mt-35'>
												<div className='mb-20 mb-md-0 d-md-inline-block'>
													<a
														href='https://www.facebook.com/thaframemaker'
														target='_blank'
														rel='noopener noreferrer'
														className='icon-btn style-white'>
														<i className='fab fa-facebook-f'></i>
													</a>
													<a
														href='https://twitter.com/rahuldaa_das'
														target='_blank'
														rel='noopener noreferrer'
														className='icon-btn style-white'>
														<i className='fab fa-twitter'></i>
													</a>
													<a
														href='https://www.instagram.com/the_frame_maker_online/'
														target='_blank'
														rel='noopener noreferrer'
														className='icon-btn style-white'>
														<i className='fab fa-instagram'></i>
													</a>
													<a
														href='https://www.youtube.com/channel/UCfFv2OoyNNcidpTAQDSk5gw'
														target='_blank'
														rel='noopener noreferrer'
														className='icon-btn style-white'>
														<i className='fab fa-youtube'></i>
													</a>
												</div>
												<Link href='/book'>
													<a className='vs-btn style-white color-title ms-0 ms-lg-3'>
														<i className='fal fa-clipboard-list'></i> Get a
														Quote
													</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>

			{/* ========== FAVFLY ========= */}
			<div className='favfly text-center bg-black'>
				<div className='divider-icon border-0 position-relative'>
					<i className='fa fa-heart color-rose'></i>
				</div>
				<a
					title='Best digital marketing company in kolkata'
					href='https://favfly.com?ref=framemakerindia.com'
					className='container py-3 d-block'>
					Growing with Favfly
				</a>
			</div>

			<style jsx>{`
				.favfly {
					letter-spacing: 1px;
				}
				.favfly a {
					color: #f2ad0c;
					font-weight: 500;
				}
				.divider-icon:before {
					left: 0;
				}
				.divider-icon:before,
				.divider-icon:after {
					position: absolute;
					top: 50%;
					content: '';
					border-top: 2px solid #222227;
					width: calc(50% - 30px);
				}
				.divider-icon i {
					position: absolute;
					top: 50%;
					left: 50%;
					-webkit-transform: translate(-50%, -50%);
					-ms-transform: translate(-50%, -50%);
					transform: translate(-50%, -50%);
					font-size: 18px;
					color: #f2ad0c;
				}
				.divider-icon:after {
					right: 0;
				}
			`}</style>
		</div>
	);
};

export default Footer;
