/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { RichText } from 'prismic-reactjs';

const HeroSection = ({ slice }) => {
	const { heading, image, video_link } = slice.primary;

	const [sources, setSources] = useState([]);
	const [toggler, setToggler] = useState(false);

	useEffect(() => {
		let tempSources = [video_link?.url];

		setSources(tempSources);
		return () => {
			setSources([]);
		};
	}, [video_link]);
	return (
		<section className='feature-gallery-wrapper space-md-bottom'>
			<div className='container'>
				<div className='row text-center justify-content-center'>
					<div className='col-xxl-8 col-xl-9 col-lg-10'>
						<div className='title-area'>
							<div className='sec-title'>
								<RichText render={heading} />
							</div>
						</div>
					</div>
				</div>
				<div className='row gx-30'>
					<div className='col-xl-11 mx-auto'>
						<div className='feature-gal-box mb-30'>
							<div className='gal-img'>
								<img src={image?.url} alt={image?.alt} className='w-100' />
								<a
									href='#'
									onClick={() => setToggler(!toggler)}
									className='popup-video play-btn position-center'>
									<i className='fas fa-play'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.feature-gallery-wrapper {
					margin-top: 120px;
				}
			`}</style>

			<FsLightbox
				toggler={toggler}
				sources={sources}
				disableLocalStorage={true}
				// slide={lightboxController.slide}
			/>
		</section>
	);
};

export default HeroSection;
