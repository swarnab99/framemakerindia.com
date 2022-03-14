import { RichText } from 'prismic-reactjs';

const CtaFormSection = ({ slice }) => {
	// console.log(slice);
	const { subheading, heading, background_image } = slice.primary;
	return (
		<section
			className='reservation-wrapper space-top space-md-bottom'
			style={{
				backgroundImage: `url(${background_image.url})`,
			}}
			data-bg-src={background_image.url}
			data-overlay='black'
			data-opacity='6'>
			<div className='container z-index-common'>
				<div className='row text-center justify-content-center'>
					<div className='col-xl-6 col-lg-8 col-md-8'>
						<div className='title-area'>
							<span className='sub-title text-white'>
								{subheading[0]?.text}
							</span>
							<div className='sec-title text-white'>
								<RichText render={heading} />
							</div>
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
