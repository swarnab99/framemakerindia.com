/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const GallerySection = () => {
	return (
		<section className='vs-gallery-wrapper space-top space-md-bottom'>
			<div className='container'>
				<div className='row gx-30'>
					<div className='mb-30 text-center text-lg-start col-lg-4 align-self-center'>
						<div className='title-area mb-30 mb-lg-0'>
							<span className='sub-title'>Gallery</span>
							<h2 className='sec-title mb-0'>Weeding Frames</h2>
						</div>
					</div>
					<GalleryItem />
					<GalleryItem />
					<GalleryItem />
					<GalleryItem />
					<GalleryItem />
					<div className='col-12 text-center mb-30 mt-10'>
						<Link href='/photos-gallery'>
							<a className='vs-btn outline'>
								View More <i className='ps-2 pe-0 far fa-arrow-right'></i>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

const GalleryItem = () => {
	return (
		<div className='mb-30 col-sm-6 col-lg-4'>
			<div className='gallery-box'>
				<img
					src='https://images.prismic.io/framemakerindia/51a24e6e-e752-442b-a60f-1dc9e99d6b34_pre-wedding.jpeg?auto=compress,format'
					alt='Gallery Image'
					className='w-100'
				/>
				<a
					href='https://images.prismic.io/framemakerindia/51a24e6e-e752-442b-a60f-1dc9e99d6b34_pre-wedding.jpeg?auto=compress,format'
					className='popup-image gal-btn'>
					<i className='far fa-plus'></i>
				</a>
			</div>
		</div>
	);
};

export default GallerySection;
