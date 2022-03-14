import Link from 'next/link';

const SecondaryHeroSection = ({ slice }) => {
	const { heading, active_page, background_image } = slice.primary;
	return (
		<div className='container-full'>
			<div
				className='breadcumb-wrapper'
				style={{
					backgroundImage: `url(${background_image.url})`,
				}}
				data-bg-src={background_image.url}
				data-overlay='black'
				data-opacity='5'>
				<div className='container z-index-common'>
					<div className='breadcumb-content text-center text-md-start'>
						<ul className='breadcumb-menu'>
							<li>
								<Link href='/'>
									<a>Home</a>
								</Link>
							</li>
							<li className='active'>{active_page[0]?.text}</li>
						</ul>
						<h1 className='breadcumb-title text-white'>{heading[0]?.text}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondaryHeroSection;
