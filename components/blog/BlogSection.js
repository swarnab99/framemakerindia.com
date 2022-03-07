/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const BlogSection = () => {
	return (
		<section className='vs-blog-wrapper space-top space-md-bottom'>
			<div className='container'>
				<div className='row text-center justify-content-center'>
					<div className='col-md-10 col-lg-8 col-xl-6'>
						<div className='title-area'>
							<span className='sub-title'>Blog</span>
							<h2 className='sec-title'>Weekly Wedding Insights</h2>
						</div>
					</div>
				</div>

				<div
					className='row vs-carousel'
					data-slide-show='3'
					data-sm-slide-show='2'>
					<BlogItem />
					<BlogItem />
					<BlogItem />
				</div>
			</div>
		</section>
	);
};

const BlogItem = () => {
	return (
		<div className='col-xl-4'>
			<div className='vs-blog blog-card image-box-hover shadow-sm'>
				<div className='box-img blog-img'>
					<img
						src='https://images.prismic.io/framemakerindia/40812c95-e4df-4c5d-a9ab-17b0e5748888_RISHABH+%26+KARISHMA+wedding+3.jpg?auto=compress,format'
						alt='Blog Image'
						className='w-100'
					/>
				</div>
				<div className='blog-content'>
					<div className='blog-meta'>
						<span>feb 24, 2021</span>
					</div>
					<h3 className='blog-title'>
						<Link href='/blog/new'>
							<a>Gorgeous Mehendi Outfits For Brides</a>
						</Link>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default BlogSection;
