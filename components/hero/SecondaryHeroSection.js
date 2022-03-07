const SecondaryHeroSection = () => {
	return (
		<div className='container-full'>
			<div
				className='breadcumb-wrapper'
				style={{
					backgroundImage: `url(https://html.vecuro.com/vibeson/demo/assets/img/bg/breadcrumb-bg.jpg)`,
				}}
				data-bg-src='https://html.vecuro.com/vibeson/demo/assets/img/bg/breadcrumb-bg.jpg'
				data-overlay='black'
				data-opacity='5'>
				<div className='container z-index-common'>
					<div className='breadcumb-content text-center text-md-start'>
						<ul className='breadcumb-menu'>
							<li>
								<a href='index.html'>Home</a>
							</li>
							<li className='active'>About Us</li>
						</ul>
						<h1 className='breadcumb-title text-white'>About Us</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondaryHeroSection;
