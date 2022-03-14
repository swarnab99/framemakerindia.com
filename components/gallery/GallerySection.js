/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Link from 'next/link';

const GallerySection = ({ slice }) => {
	const { heading, subheading } = slice.primary;

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
		<section className='vs-gallery-wrapper space-top space-md-bottom'>
			<div className='container'>
				<div className='row gx-30'>
					<div className='mb-30 text-center text-lg-start col-lg-4 align-self-center'>
						<div className='title-area mb-30 mb-lg-0'>
							<span className='sub-title'>{subheading[0]?.text}</span>
							<h2 className='sec-title mb-0'>{heading[0]?.text}</h2>
						</div>
					</div>
					{slice?.items?.map((item, index) => (
						<GalleryItem
							key={index}
							data={item}
							index={index}
							openLightboxOnSlide={openLightboxOnSlide}
						/>
					))}
					<div className='col-12 text-center mb-30 mt-10'>
						{slice?.items?.length < 6 && (
							<Link href='/photos-gallery'>
								<a className='vs-btn outline'>
									View More <i className='ps-2 pe-0 far fa-arrow-right'></i>
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>

			<FsLightbox
				toggler={lightboxController.toggler}
				sources={sources}
				slide={lightboxController.slide}
			/>
		</section>
	);
};

const GalleryItem = ({ data, index, openLightboxOnSlide }) => {
	const { image, video_link } = data;
	return (
		<div className='mb-30 col-sm-6 col-lg-4'>
			<div
				className='gallery-box'
				onClick={() => openLightboxOnSlide(index + 1)}>
				<img src={image.url} alt={image.alt} className='w-100' />
				<span className='popup-image gal-btn'>
					<i className='far fa-plus'></i>
				</span>
			</div>
		</div>
	);
};

export default GallerySection;
