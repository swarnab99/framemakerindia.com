/* eslint-disable @next/next/no-img-element */

const TeamSection = ({ slice }) => {
	const { subheading, heading } = slice.primary;
	return (
		<section className='vs-team-wrapper space-top space-md-bottom'>
			<div className='container'>
				<div className='title-area text-center'>
					<span className='sub-title'>{subheading[0]?.text}</span>
					<h2 className='sec-title'>{heading[0]?.text}</h2>
				</div>
				<div className='row team-align-style1 justify-content-center'>
					{slice.items.map((item, index) => (
						<TeamItem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	);
};

const TeamItem = ({ data }) => {
	const { image, role, name } = data;
	return (
		<div className='col-sm-6 col-md-4 col-xl-3'>
			<div className='vs-member-box'>
				<div className='member-img'>
					<img src={image.url} alt={image.alt} className='w-100' />

					<div className='member-links'>
						<ul>
							<li>
								<a href='https://www.facebook.com/thaframemaker'>
									<i className='fab fa-facebook-f'></i>
								</a>
							</li>
							<li>
								<a href='https://twitter.com/rahuldaa_das'>
									<i className='fab fa-twitter'></i>
								</a>
							</li>
							<li>
								<a href='https://www.instagram.com/the_frame_maker_online/'>
									<i className='fab fa-instagram'></i>
								</a>
							</li>
							<li>
								<a href='https://www.youtube.com/channel/UCfFv2OoyNNcidpTAQDSk5gw'>
									<i className='fab fa-youtube'></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='member-content'>
					<span className='degi'>{role[0]?.text}</span>
					<h3 className='member-name'>{name[0]?.text}</h3>
				</div>
			</div>
		</div>
	);
};

export default TeamSection;
