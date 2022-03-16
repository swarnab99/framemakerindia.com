import { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Airtable from 'airtable';

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base('appLcnXIol30DSjoi');

const CtaFormSection = ({ slice }) => {
	// console.log(slice);
	const { subheading, heading, background_image } = slice.primary;
	const [formData, setFormData] = useState({
		name: '',
		date: '',
		phone: '',
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
			const data = await base('Leads').create([
				{
					fields: {
						Name: formData.name,
						Date: formData.date,
						Phone: formData.phone,

						Source: location.href,
						Status: 'Todo',
					},
				},
			]);

			// console.log(data);

			setFormData({
				name: '',
				date: '',
				phone: '',
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
					<form onSubmit={handleSubmit} className='form-style1'>
						<div className='row'>
							<div className='col-md-6 col-lg form-group mb-30'>
								<input
									name='name'
									value={formData.name}
									onChange={handleChange}
									type='text'
									className='form-control'
									placeholder='Enter full name'
								/>
								<i className='far fa-user-alt'></i>
							</div>
							<div className='col-md-6 col-lg form-group mb-30'>
								<input
									name='phone'
									value={formData.phone}
									onChange={handleChange}
									type='tel'
									className='form-control'
									placeholder='Enter phone number'
								/>
								<i className='fal fa-phone'></i>
							</div>
							<div className='col-md-6 col-lg form-group mb-30'>
								<input
									name='date'
									value={formData.date}
									onChange={handleChange}
									type='date'
									className='form-control date-pick'
									placeholder='Select Date'
								/>
								<i className='fal fa-calendar-alt'></i>
							</div>
							<div className='col-md-6 col-lg-auto form-group mb-30'>
								<button className='vs-btn w-100'>
									<i className='fal fa-clipboard-list'></i>{' '}
									{loading ? 'Sending...' : 'Send'}
								</button>
							</div>
							<footer>
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
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default CtaFormSection;
