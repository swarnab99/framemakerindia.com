import Link from 'next/link';
import { useState } from 'react';
import Airtable from 'airtable';

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base('appLcnXIol30DSjoi');

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
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
			const data = await base('Queries').create([
				{
					fields: {
						'Full Name': formData.name,
						'Email Address': formData.email,
						Subject: formData.subject,
						Message: formData.message,
						Status: 'Todo',
						Source: location.href,
					},
				},
			]);

			console.log(data);

			setFormData({
				name: '',
				email: '',
				subject: '',
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
				<div className='row align-items-center flex-row-reverse'>
					<div className='col-xl-6 mb-30 mb-xl-0'>
						<form
							onSubmit={handleSubmit}
							className='form-style3 ajax-reservation mb-30'>
							<div className='title-area text-center mb-45'>
								<h2 className='sec-title'>Drop Us a Message</h2>
							</div>
							<div className='row'>
								<div className='col-md-6 form-group'>
									<i className='far fa-user'></i>
									<input
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										type='text'
										className='form-control'
										placeholder='Enter full name'
										required='required'
									/>
								</div>
								<div className='col-md-6 form-group'>
									<i className='fal fa-envelope'></i>
									<input
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										type='email'
										className='form-control'
										placeholder='Email address'
										required='required'
									/>
								</div>
								<div className='col-md-12 form-group'>
									<i className='fal fa-book'></i>
									<input
										id='subject'
										name='subject'
										value={formData.subject}
										onChange={handleChange}
										className='form-control'
										placeholder='Subject'
									/>
								</div>
								<div className='col-md-12 form-group'>
									<i className='fal fa-file-alt'></i>
									<textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleChange}
										className='form-control'
										placeholder='Message'
										required='required'></textarea>
								</div>
								<div className='col-12 text-center'>
									<button type='submit' className='vs-btn'>
										<i className='fal fa-clipboard-list'></i>{' '}
										{loading ? 'Sending...' : 'Submit'}
									</button>
								</div>
							</div>
							<footer className='notification-box'>
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
