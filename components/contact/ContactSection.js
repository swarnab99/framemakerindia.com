const ContactSection = () => {
	return (
		<section className='reservation-wrapper space-top space-md-bottom'>
			<div className='container'>
				<div className='row align-items-center flex-row-reverse'>
					<div className='col-xl-6 mb-30 mb-xl-0'>
						<form
							action='https://html.vecuro.com/vibeson/demo/reservation-mail.php'
							className='form-style3 ajax-reservation mb-30'>
							<div className='title-area text-center mb-45'>
								<span className='sub-title'>rsvp</span>
								<h2 className='sec-title'>Make Booking</h2>
							</div>
							<div className='row'>
								<div className='col-md-6 form-group'>
									<i className='far fa-user'></i>
									<input
										type='text'
										className='form-control'
										name='name'
										id='name'
										placeholder='Enter full name'
									/>
								</div>
								<div className='col-md-6 form-group'>
									<i className='fal fa-envelope'></i>
									<input
										type='email'
										className='form-control'
										name='email'
										id='email'
										placeholder='Email address'
									/>
								</div>
								<div className='col-md-6 form-group'>
									<i className='fal fa-users'></i>
									<input
										type='number'
										className='form-control'
										name='guests'
										id='guests'
										placeholder='Guests'
									/>
								</div>
								<div className='col-md-6 form-group'>
									<i className='fal fa-calendar-alt'></i>
									<input
										type='text'
										className='form-control date-pick'
										name='date'
										id='date'
										placeholder='Select Date'
									/>
								</div>
								<div className='col-12 form-group'>
									<i className='fal fa-box-full'></i>
									<select className='form-select' id='event' name='event'>
										<option selected='selected' disabled='disabled' hidden>
											Select Event
										</option>
										<option>Wedding Wishes</option>
										<option>Wanted Weddings</option>
										<option>Perfect Day</option>
										<option>Wishful Day</option>
										<option>Black Tie Weddings</option>
										<option>Effortless Event</option>
										<option>Even Expertise</option>
									</select>
								</div>
								<div className='col-12 text-center'>
									<button type='submit' className='vs-btn'>
										<i className='fal fa-clipboard-list'></i>Submit
									</button>
								</div>
							</div>
							<p className='form-messages form-messages error text-center mt-3 mt-lg-4 mb-0'></p>
						</form>
					</div>
					<div className='col-xl-6 text-center text-xl-start'>
						<div className='rounded-map d-inline-block mb-30'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14732.510301283508!2d88.39936253002395!3d22.611710712601067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277aefea4d58b%3A0x4590180db6ea46a!2sThe%20Frame%20Maker!5e0!3m2!1sen!2sin!4v1646503150780!5m2!1sen!2sin'
								allowFullScreen
								loading='lazy'></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
