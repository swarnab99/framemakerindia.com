const CtaFormSection = () => {
	return (
		<section
			className='reservation-wrapper space-top space-md-bottom'
			style={{
				backgroundImage: `url(https://images.prismic.io/framemakerindia/9528eda5-a5dd-4063-b491-7dc1bc8d06b8_background.jpeg?auto=compress,format)`,
			}}
			data-bg-src='https://images.prismic.io/framemakerindia/9528eda5-a5dd-4063-b491-7dc1bc8d06b8_background.jpeg?auto=compress,format'
			data-overlay='black'
			data-opacity='6'>
			<div className='container z-index-common'>
				<div className='row text-center justify-content-center'>
					<div className='col-xl-6 col-lg-8 col-md-8'>
						<div className='title-area'>
							<span className='sub-title text-white'>
								Get Amazing Offers for your Wedding
							</span>
							<h2 className='sec-title text-white'>
								We Are Waiting For Your Booking!
							</h2>
						</div>
					</div>
				</div>
				<div className='row'>
					<form action='#' className='form-style1'>
						<div className='row'>
							<div className='col-md-6 col-lg form-group mb-30'>
								<input
									type='text'
									className='form-control'
									placeholder='Enter full name'
								/>
								<i className='far fa-user-alt'></i>
							</div>
							<div className='col-md-6 col-lg form-group mb-30'>
								<input
									type='email'
									className='form-control'
									placeholder='Enter email address'
								/>
								<i className='fal fa-envelope'></i>
							</div>
							<div className='col-md-6 col-lg form-group mb-30'>
								<input
									type='date'
									className='form-control date-pick'
									placeholder='Select Date'
								/>
								<i className='fal fa-calendar-alt'></i>
							</div>
							<div className='col-md-6 col-lg-auto form-group mb-30'>
								<button className='vs-btn w-100'>
									<i className='fal fa-clipboard-list'></i> submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default CtaFormSection;
