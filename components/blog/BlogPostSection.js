/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';
import dayjs from 'dayjs';
dayjs().format();
import countapi from 'countapi-js';

const BlogPostSection = ({ blogPost }) => {
	// console.log(blogPost);
	const uid = blogPost?.uid;
	const { title, description, featured_image, published_date, body } =
		blogPost?.data;

	/* ===== COUNT & UPDATE NO. OF VIEWS ===== */
	const [views, setViews] = useState(0);
	useEffect(() => {
		countapi.hit('framemakerindia.com', uid).then((result) => {
			result?.value && setViews(result.value);
		});
	}, [uid]);
	/* ===== END ===== */
	return (
		<section className='vs-blog-wrapper blog-details pt-5 space-md-bottom'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8 mx-auto'>
						<div className='vs-blog blog-single'>
							<div className='blog-content'>
								<h1 className='blog-title'>{title[0]?.text}</h1>
								<div className='blog-meta'>
									<span>
										<i className='fal fa-eye'></i>
										{views} Views
									</span>
									<span>
										<i className='far fa-calendar-alt'></i>
										{dayjs(published_date).format('DD MMM, YYYY')}
									</span>
								</div>
								<div className='img mb-40'>
									<img
										src={featured_image?.url}
										alt={featured_image?.alt}
										className='w-100'
									/>
								</div>
								<p>{description[0]?.text}</p>

								{body &&
									body.map((item, index) => (
										<DetailsBox key={index} postBlock={item} />
									))}
							</div>
							<div className='share-links clearfix'>
								<div className='row justify-content-between'>
									<div className='col-md-auto'>
										<h4 className='share-links-title fs-20'>
											Photography Services:
										</h4>
										<div className='tagcloud'>
											<Link href='/pre-wedding-photography'>
												<a>Pre Wedding Photography</a>
											</Link>
											<Link href='/wedding-photography'>
												<a>Wedding Photography</a>
											</Link>
											<Link href='/baby-photography'>
												<a>Baby Photography</a>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div className='blog-author d-md-flex align-items-center'>
								<div className='media-body'>
									<h3 className='author-name h2'>
										<Link href='/'>
											<a className='text-reset'>
												The Frame Maker - Premium Wedding Photographer
											</a>
										</Link>
									</h3>
									<div className='ps-2'>
										<p className='author-text'>
											We know how varying can emotions and expressions be in
											marriages. We capture exactly the same with this!
											<br />
											Finding the best and the most perfect wedding photographer
											for your special day is indeed a very brainy decision to
											make. We are here to make this job easy!
										</p>
									</div>
									<Link href='/book'>
										<a className='vs-btn px-4 py-2 mt-3'>Get A Quotation</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const DetailsBox = ({ postBlock }) => {
	// console.log(postBlock);
	return (
		<div className='post-block'>
			<RichText
				render={postBlock?.primary?.details}
				linkResolver={linkResolver}
			/>

			<div className='mb-5'>
				{postBlock?.items &&
					postBlock?.items.map((item, index) => (
						<div key={index} className='mb-4'>
							<img
								className='img-fluid lozad'
								data-src={item?.image?.url}
								alt={item?.image?.alt}
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default BlogPostSection;
