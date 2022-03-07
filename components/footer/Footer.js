/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<div className='container'>
				<footer className='footer-wrapper footer-layout1'>
					<div
						className='widget-area'
						// data-bg-src='https://html.vecuro.com/vibeson/demo/assets/img/bg/footer-bg-2-1.jpg'
						// style={{
						// 	backgroundImage: `url(https://html.vecuro.com/vibeson/demo/assets/img/bg/footer-bg-2-1.jpg)`,
						// }}
					>
						<div className='container'>
							<div className='row gx-60 justify-content-center'>
								<div className='col-lg-10 col-xl-8 align-self-center'>
									<div className='widget footer-widget'>
										<div className='vs-widget-about text-center'>
											<div className='footer-logo mb-15'>
												<img
													src='https://images.prismic.io/framemakerindia/aa85a9a3-e66e-4f42-9909-fe54da4688b4_framemaker-logo.png?auto=compress,format'
													alt='Vibeson'
													width='250'
												/>
											</div>
											<p className='font-title fs-20 lh-base'>
												The Frame Maker is the best wedding photographer in
												kolkata, who's mission is to capture beautiful memories
												through wedding photography.
											</p>
											<div className='footer-btns mt-35'>
												<div className='mb-20 mb-md-0 d-md-inline-block'>
													<a
														href='https://www.facebook.com/thaframemaker'
														className='icon-btn style-white'>
														<i className='fab fa-facebook-f'></i>
													</a>
													<a href='#' className='icon-btn style-white'>
														<i className='fab fa-twitter'></i>
													</a>
													<a
														href='https://www.instagram.com/the_frame_maker_online/'
														className='icon-btn style-white'>
														<i className='fab fa-instagram'></i>
													</a>
													<a href='#' className='icon-btn style-white'>
														<i className='fab fa-youtube'></i>
													</a>
												</div>
												<Link href='/book'>
													<a className='vs-btn style-white color-title'>
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
					{/* <div className='copyright bg-theme text-center'>
						<p className='fs-md font-title mb-0 text-white'>
							Copyright <i className='fal fa-copyright'></i> 2021
							<a className='text-white' href='index.html'>
								Vibeson
							</a>
							. All rights reserved by
							<a
								className='text-white'
								href='https://themeforest.net/user/vecuro'>
								Vecuro
							</a>
							.
						</p>
					</div> */}
				</footer>
			</div>
		</div>
	);
};

export default Footer;
