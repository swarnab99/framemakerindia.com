const CounterSection = ({ slice }) => {
	return (
		<section
			className='counter-wrapper'
			data-sec-pos='top-half'
			data-pos-for='#skill'>
			<div className='container'>
				<div className='counter-inner2'>
					<div className='row justify-content-between text-center text-lg-start'>
						{slice.items.map((item, index) => (
							<CounterItem key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const CounterItem = ({ data }) => {
	const { title, number } = data;
	return (
		<div className='col-sm-6 col-lg-auto'>
			<div className='counter-media px-0'>
				<div className='sec-title text-theme'>{number[0]?.text}</div>
				<p className='counter-text'>{title[0]?.text}</p>
			</div>
		</div>
	);
};

export default CounterSection;
