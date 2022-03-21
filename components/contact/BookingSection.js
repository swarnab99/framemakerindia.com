/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Airtable from 'airtable';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base('appLcnXIol30DSjoi');

const BookingSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		date: '',
		type: '',
		location: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setError(null);
		setSuccess(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const data = await base('Bookings').create([
				{
					fields: {
						Name: formData.name,
						Email: formData.email,
						Phone: formData.phone,
						Date: formData.date,
						'Type of shoot': formData.type,
						Location: formData.location,
						Message: formData.message,

						Source: location.href,
						Status: 'Todo',
					},
				},
			]);

			// console.log(data);

			setFormData({
				name: '',
				email: '',
				phone: '',
				date: '',
				type: '',
				location: '',
				message: '',
			});
			setSuccess(true);
			setLoading(false);
		} catch (error) {
			setError(error);
			console.log(error);
			setLoading(false);
		}
	};

	return (
		<section className='reservation-wrapper space-top space-md-bottom'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-5 col-xl-6'>
						<div className='position-relative reservation-image mb-30'>
							<div className='reservation-img-shape d-none d-lg-block'>
								<img
									src='https://images.prismic.io/framemakerindia/9b76bca2-6156-48a1-8f01-79e0f966493e_flower-1-2.png'
									alt='Flower Image'
								/>
							</div>
							<Carousel
								className='p-lg-4'
								emulateTouch
								autoPlay
								interval={3500}
								infiniteLoop
								showIndicators
								showStatus={false}
								showArrows={false}
								showThumbs={false}>
								<img
									src='https://images.prismic.io/framemakerindia/51a24e6e-e752-442b-a60f-1dc9e99d6b34_pre-wedding.jpeg?auto=compress,format&w=535'
									alt='Contact image'
									className='rounded-circle'
								/>
								<img
									src='https://images.prismic.io/framemakerindia/862a724b-87c1-4eed-95e7-f7df5b80cc04_bengali-bride.jpeg?auto=compress,format&rect=0,0,1363,1363&w=535'
									alt='Contact image'
									className='rounded-circle'
								/>
								<img
									src='https://images.prismic.io/framemakerindia/78b5fb61-9b7c-44cd-b494-ae1983110023_SUSHMITA+%26+VARUN+wedding+10.jpg?auto=compress,format&rect=686,0,1362,1362&w=535'
									alt='Contact image'
									className='rounded-circle'
								/>
								<img
									src='https://images.prismic.io/framemakerindia/6f95f001-3e83-4b1b-b60e-1d8e86d5d0ea_Baby+Shoot+4.jpg?auto=compress,format&rect=102,0,1365,1365&w=535'
									alt='Contact image'
									className='rounded-circle'
								/>
								<img
									src='https://images.prismic.io/framemakerindia/03894ed2-5ec2-4283-a3d0-b0f77c8e7d35_RISHABH+%26+KARISHMA+wedding+4.jpg?auto=compress,format&rect=343,0,1365,1365&w=535'
									alt='Contact image'
									className='rounded-circle'
								/>
							</Carousel>
						</div>
					</div>
					<div className='col-lg-7 col-xl-6'>
						<form
							onSubmit={handleSubmit}
							className='form-style3 ajax-reservation mb-30'>
							<div className='title-area text-center mb-45'>
								<h1 className='sec-title'>Get a Quotation</h1>
							</div>
							<div className='row'>
								<div className='col-md-6 form-group'>
									<i className='far fa-user'></i>
									<input
										type='text'
										name='name'
										value={formData.name}
										onChange={handleChange}
										className='form-control'
										placeholder='Your name'
										required
									/>
								</div>
								<div className='col-md-6 form-group'>
									<i className='fal fa-envelope'></i>
									<input
										type='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										className='form-control'
										placeholder='Your e-mail'
										required
									/>
								</div>
								<div className='col-md-6 form-group'>
									<i className='fal fa-phone'></i>
									<input
										type='tel'
										name='phone'
										value={formData.phone}
										onChange={handleChange}
										className='form-control'
										placeholder='Phone no.'
										required
									/>
								</div>
								<div className='col-md-6 form-group'>
									<i className='fal fa-calendar-alt'></i>
									<input
										type='date'
										name='date'
										value={formData.date}
										onChange={handleChange}
										className='form-control'
										placeholder='Main Shoot Date'
										required
									/>
								</div>
								<div className='col-6 form-group'>
									<i className='fal fa-camera'></i>
									<select
										name='type'
										value={formData.type}
										onChange={handleChange}
										className='form-select'
										required>
										<option defaultValue value=''>
											Type of Shoot
										</option>
										<option>Wedding</option>
										<option>Pre Wedding</option>
										<option>Post Wedding</option>
										<option>Engagement</option>
										<option>Baby Shoot</option>
										<option>Birthday Shoot</option>
										<option>Maternity Shoot</option>
										<option>Anniversary</option>
										<option>Small Party</option>
									</select>
								</div>
								<div className='col-md-6 form-group'>
									<i className='fal fa-map-marker-alt'></i>
									<input
										type='text'
										name='location'
										value={formData.location}
										onChange={handleChange}
										className='form-control'
										placeholder='Shoot Location'
										required
									/>
								</div>
								<div className='col-md-12 form-group'>
									<i className='fal fa-outdent'></i>
									<textarea
										name='message'
										value={formData.message}
										onChange={handleChange}
										className='form-control'
										rows='3'
										placeholder='If there are any details you want us to know, please share! '
										required></textarea>
								</div>
								<div className='col-12 text-center'>
									<button type='submit' className='vs-btn'>
										<i className='fal fa-clipboard-list'></i>
										{loading ? 'Sending...' : 'Submit'}
									</button>
								</div>
							</div>
							<footer
								className={`notification-box mb-50 ${
									success ? 'show-success' : error ? 'show-error' : ''
								}`}>
								{error && (
									<div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
										<p className='text-danger text-center h2'>
											{error.message}
										</p>
									</div>
								)}
								{success && (
									<div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
										<p className='text-success text-center h2'>
											Thanks, we will contact you soon.
										</p>
									</div>
								)}
							</footer>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookingSection;
