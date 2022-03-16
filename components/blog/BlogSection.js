/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
dayjs().format();
import countapi from 'countapi-js';

const BlogSection = ({ blogPosts }) => {
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
					{blogPosts?.data?.allBlog_posts?.edges?.map((item, index) => (
						<BlogItem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	);
};

const BlogItem = ({ data }) => {
	const { title, featured_image, published_date, _meta } = data.node;
	/* ===== COUNT & UPDATE NO. OF VIEWS ===== */
	const [views, setViews] = useState(0);
	useEffect(() => {
		countapi.get('framemakerindia.com', _meta?.uid).then((result) => {
			result?.value && setViews(result.value);
		});
	}, [_meta?.uid]);
	/* ===== END ===== */
	return (
		<div className='col-xl-4'>
			<div className='vs-blog blog-card image-box-hover shadow-sm'>
				<div className='box-img blog-img'>
					<img
						data-src={featured_image?.medium?.url}
						alt={featured_image?.alt}
						className='w-100 lozad'
					/>
				</div>
				<div className='blog-content'>
					<div className='blog-meta'>
						<span>
							<i className='far fa-calendar-alt'></i>
							{dayjs(published_date).format('DD MMM, YYYY')}
						</span>
						<span>
							<i className='fal fa-eye'></i>
							{views} Views
						</span>
					</div>
					<h3 className='blog-title'>
						<Link href={`/blog/${_meta?.uid}`}>
							<a>{title[0]?.text}</a>
						</Link>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default BlogSection;
