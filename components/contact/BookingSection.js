/* eslint-disable @next/next/no-img-element */

const BookingSection = () => {
	return (
		<section className='reservation-wrapper space-top space-md-bottom'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-5 col-xl-6'>
						<div className='position-relative reservation-image mb-30'>
							<div className='reservation-img-shape d-none d-xl-block'>
								<img
									src='https://html.vecuro.com/vibeson/demo/assets/img/icons/flower-1-2.png'
									alt='Flower Image'
								/>
							</div>
							<img
								src='https://html.vecuro.com/vibeson/demo/assets/img/contact/contact-1-1.png'
								alt='Contact image'
								className='rounded-circle'
							/>
						</div>
					</div>
					<div className='col-lg-7 col-xl-6'>
						<form
							action='https://html.vecuro.com/vibeson/demo/reservation-mail.php'
							className='form-style3 ajax-reservation mb-30'>
							<div className='title-area text-center mb-45'>
								<span className='sub-title'>rsvp</span>
								<h2 className='sec-title'>Make Reservation</h2>
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
									<i className='fal fa-phone'></i>
									<input
										type='number'
										className='form-control'
										name='guests'
										placeholder='Phone number'
									/>
								</div>
								<div className='col-md-6 form-group'>
									<i className='fal fa-calendar-alt'></i>
									<input
										type='date'
										autoComplete='off'
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
											Select Photography Service
										</option>
										<option>Pre Wedding</option>
										<option>Wedding</option>
										<option>Pre Wedding & Wedding</option>
										<option>New Born</option>
										<option>Kids</option>
									</select>
								</div>
								<div className='col-12 text-center'>
									<button type='submit' className='vs-btn'>
										<i className='fal fa-clipboard-list'></i>Get a Quotation
									</button>
								</div>
							</div>
							<p className='form-messages form-messages error text-center mt-3 mt-lg-4 mb-0'></p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookingSection;
