/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const ServicesSection = () => {
	return (
		<section className='vs-history-wrapper space-top space-md-bottom'>
			<div className='container history-container'>
				<div className='title-area text-center'>
					<span className='sub-title'>Our</span>
					<h2 className='sec-title'>Photography Services</h2>
				</div>
				<div className='row gx-xl-0'>
					<ServiceItem />
					<ServiceItem />
					<ServiceItem />
				</div>
				<div className='text-center mt-10 mb-30'>
					<Link href='/photography-services'>
						<a className='d-none d-xl-inline-block history-load icon-btn style-white'>
							<i className='far fa-plus'></i>
						</a>
					</Link>
					<Link href='/photography-services'>
						<a className='d-inline-block d-xl-none vs-btn'>
							<i className='far fa-plus'></i>Load More
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

const ServiceItem = () => {
	return (
		<div className='history-step col-md-6 col-xl-12'>
			<div className='row gx-120 align-items-center'>
				<div className='col-xl-6'>
					<div className='history-year'>01</div>
				</div>
				<div className='col-xl-6'>
					<div className='step-body'>
						<div className='history-img'>
							<img
								src='https://images.prismic.io/framemakerindia/c5a226c9-d56e-4762-a657-d333aa715561_wedding-photography.jpeg?auto=compress,format'
								alt='History Image'
								width={370}
							/>
						</div>
						<div className='history-content'>
							<Link href='/'>
								<a>
									<h3 className='history-name h4'>Wedding Photography</h3>
								</a>
							</Link>
							<p className='history-text'>
								Philosophy of our studioan aesthetically stunning with solutions
								for our main of customers energy solutions.
							</p>
							<Link href='/new'>
								<a className='vs-btn px-4 py-2'>Get A Quotation</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
