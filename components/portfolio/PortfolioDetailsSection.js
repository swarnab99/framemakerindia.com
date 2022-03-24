/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const PortfolioDetailsSection = ({ slice }) => {
	// console.log(slice);
	const { category, bride, groom, details } = slice.primary;

	const [sources, setSources] = useState([]);
	// ===== SLIDE STATE =====
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1,
	});
	// ===== HANDLE SLIDE NUMBER =====
	const openLightboxOnSlide = (number) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number,
		});
	};
	// ===== GET STRUCTURED SOURCES =====
	useEffect(() => {
		let tempSources = [];
		slice.items.map((item) => {
			item.video_link.link_type == 'Web'
				? tempSources.push(item?.video_link?.url)
				: tempSources.push(item?.image?.large?.url);
		});
		setSources(tempSources);
		return () => {
			setSources([]);
		};
	}, [slice]);

	return (
		<section className='portfolio-details-wrapper space'>
			<div className='container'>
				<div className='row flex-row-reverse'>
					<div className='col-lg-4 text-center text-lg-start pb-30 pb-lg-0'>
						<div className='portfolio-information sticky-top mb-30'>
							<div className='mt-n2 mb-4'>
								<RichText render={details} serializeHyperlink={CustomLink} />
							</div>

							<div className='mb-4'>
								<span className='fs-md font-title d-block mb-2 text-light'>
									Service:
								</span>
								<h3>
									<Link href='/photography-services'>
										<a className='text-inherit pe-2'>{category}</a>
									</Link>
								</h3>
							</div>
							<div className='mb-4'>
								<span className='fs-md font-title d-block mb-2 text-light'>
									Bride:
								</span>
								<h3>{bride[0]?.text}</h3>
							</div>
							<div className='mb-4'>
								<span className='fs-md font-title d-block mb-2 text-light'>
									Groom:
								</span>
								<h3>{groom[0]?.text}</h3>
							</div>
							<ul className='social-btns list-unstyled pt-3'>
								<li>
									<a
										href='https://www.facebook.com/thaframemaker'
										target='_blank'
										rel='noopener noreferrer'>
										<i className='fab fa-facebook-f'></i>
									</a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/the_frame_maker_online/'
										target='_blank'
										rel='noopener noreferrer'>
										<i className='fab fa-instagram'></i>
									</a>
								</li>
								<li>
									<a
										href='https://www.youtube.com/channel/UCfFv2OoyNNcidpTAQDSk5gw'
										target='_blank'
										rel='noopener noreferrer'>
										<i className='fab fa-youtube'></i>
									</a>
								</li>
								<li>
									<a
										href='https://twitter.com/rahuldaa_das'
										target='_blank'
										rel='noopener noreferrer'>
										<i className='fab fa-twitter'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-8'>
						<div className='portfolio-images-group'>
							{slice.items.map((item, index) => (
								<Mediaitem
									key={index}
									data={item}
									index={index}
									openLightboxOnSlide={openLightboxOnSlide}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.portfolio-information {
					padding-top: 100px;
				}
			`}</style>

			<FsLightbox
				toggler={lightboxController.toggler}
				sources={sources}
				slide={lightboxController.slide}
			/>
		</section>
	);
};

const Mediaitem = ({ data, index, openLightboxOnSlide }) => {
	const { image, video_link } = data;
	return (
		<div
			className='portfolio-img mb-40 image-scale-hover image-zoom'
			onClick={() => openLightboxOnSlide(index + 1)}>
			{video_link.url && <i className='far fa-play-circle play-icon'></i>}
			<img src={image?.url} alt={image?.alt} className='w-100' />

			<style jsx>{`
				.play-icon {
					position: absolute;
					z-index: 99;
					color: #fff;
					font-size: 2.5rem;
					left: 5%;
					top: 5%;
				}
			`}</style>
		</div>
	);
};

export default PortfolioDetailsSection;
