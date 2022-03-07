/* eslint-disable @next/next/no-img-element */

const TeamSection = () => {
	return (
		<section className='vs-team-wrapper space-top space-md-bottom'>
			<div className='container'>
				<div className='title-area text-center'>
					<span className='sub-title'>History</span>
					<h2 className='sec-title'>Team Members</h2>
				</div>
				<div className='row team-align-style1 justify-content-center'>
					<TeamItem />
					<TeamItem />
					<TeamItem />
					<TeamItem />
					<TeamItem />
					<TeamItem />
					<TeamItem />
				</div>
			</div>
		</section>
	);
};

const TeamItem = () => {
	return (
		<div className='col-sm-6 col-md-4 col-xl-3'>
			<div className='vs-member-box'>
				<div className='member-img'>
					<img
						src='https://images.prismic.io/framemakerindia/8edae277-f202-4c38-9a14-871de00b92ee_Rahul+Das+-+%28Owner%29+If+required+%281%29.jpg?auto=compress,format'
						alt='Member Image'
						className='w-100'
					/>

					<div className='member-links'>
						<ul>
							<li>
								<a href='#'>
									<i className='fab fa-facebook-f'></i>
								</a>
							</li>
							<li>
								<a href='#'>
									<i className='fab fa-twitter'></i>
								</a>
							</li>
							<li>
								<a href='#'>
									<i className='fab fa-instagram'></i>
								</a>
							</li>
							<li>
								<a href='#'>
									<i className='fab fa-youtube'></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='member-content'>
					<span className='degi'>founder</span>
					<h3 className='member-name'>Rahul Das</h3>
				</div>
			</div>
		</div>
	);
};

export default TeamSection;
