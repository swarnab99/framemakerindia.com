/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const PortfolioDetailsSection = () => {
	return (
		<section className='portfolio-details-wrapper space'>
			<div className='container'>
				<div className='row flex-row-reverse'>
					<div className='col-lg-4 text-center text-lg-start pb-30 pb-lg-0'>
						<div className='portfolio-information sticky-top mb-30'>
							<p className='mt-n2 mb-4'>
								A wedding is a ceremony and its associated rituals by which two
								people vow to spend their lives together in marriage. Though it
								is basically a celebration of love and partnership, a wedding is
								tailored to a couple in a variety of ways, from their
								personality to their religious or cultural beliefs.
							</p>

							<div className='mb-4'>
								<span className='fs-md font-title d-block mb-2'>Service:</span>
								<h3>
									<Link href='/services'>
										<a className='text-inherit pe-2'>Pre Wedding</a>
									</Link>
								</h3>
							</div>
							<div className='mb-4'>
								<span className='fs-md font-title d-block mb-2'>Bride:</span>
								<h3>Rose Jane</h3>
							</div>
							<div className='mb-4'>
								<span className='fs-md font-title d-block mb-2'>Groom:</span>
								<h3>John Deo</h3>
							</div>
							<ul className='social-btns list-unstyled pt-3'>
								<li>
									<a href='#'>
										<i className='fab fa-facebook-f'></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='fab fa-twitter'></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='fab fa-behance'></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='fab fa-youtube'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-8'>
						<div className='portfolio-images-group'>
							<div className='portfolio-img mb-40 image-scale-hover'>
								<img
									src='https://html.vecuro.com/vibeson/demo/assets/img/portfolio/portfolio-d-1-1.jpg'
									alt='Portfolio Image'
									className='w-100'
								/>
							</div>
							<div className='portfolio-img mb-40 image-scale-hover'>
								<img
									src='https://html.vecuro.com/vibeson/demo/assets/img/portfolio/portfolio-d-1-2.jpg'
									alt='Portfolio Image'
									className='w-100'
								/>
							</div>
							<div className='portfolio-img mb-40 image-scale-hover'>
								<img
									src='https://html.vecuro.com/vibeson/demo/assets/img/portfolio/portfolio-d-1-3.jpg'
									alt='Portfolio Image'
									className='w-100'
								/>
							</div>
							<div className='portfolio-img mb-40 image-scale-hover'>
								<img
									src='https://html.vecuro.com/vibeson/demo/assets/img/portfolio/portfolio-d-1-4.jpg'
									alt='Portfolio Image'
									className='w-100'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.portfolio-information {
					padding-top: 100px;
				}
			`}</style>
		</section>
	);
};

export default PortfolioDetailsSection;
