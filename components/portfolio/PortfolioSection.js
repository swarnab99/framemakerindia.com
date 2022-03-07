/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const PortfolioSection = () => {
	return (
		<section className='portfolio-wrapper portfolio-single-padding space-top'>
			<div className='container'>
				<div className='portfolio-filter filter-menu-active text-center mb-40'>
					<button className='active' data-filter='*'>
						Show All
					</button>
					<button data-filter='.cat-2'>PRE WEDDING</button>
					<button data-filter='.cat-3'>WEDDING</button>
				</div>
				<div className='row gx-45 filter-active'>
					<PortfolioItem />
					<PortfolioItem />
					<PortfolioItem />
				</div>
			</div>
		</section>
	);
};

const PortfolioItem = () => {
	return (
		<div className='col-md-6 col-xl-4 filter-item cat-1 cat-4'>
			<div className='mb-45 portfolio-box image-box-hover'>
				<div className='portfolio-img box-img'>
					<Link href='/portfolio/new'>
						<a>
							<img
								src='https://images.prismic.io/framemakerindia/51a24e6e-e752-442b-a60f-1dc9e99d6b34_pre-wedding.jpeg?auto=compress,format'
								alt='Portfolio Image'
								className='w-100'
							/>
						</a>
					</Link>
				</div>
				<p className='portfolio-degi fs-xs'>pre wedding</p>
				<h3 className='portfolio-title h4 mb-0'>
					<Link href='/portfolio/new'>
						<a className='text-inherit'>Minakshi & Sagar</a>
					</Link>
				</h3>
			</div>
		</div>
	);
};

export default PortfolioSection;
