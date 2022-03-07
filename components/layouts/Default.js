import Header from '../header/Header';
import Footer from '../footer/Footer';
// import WhatsappButton from '../WhatsappButton';

const DefaultLayout = ({ children }) => {
	return (
		<main className='main-content'>
			<Header />
			<div className='main mt-60'>{children}</div>
			<Footer />
			{/* <WhatsappButton number='+919073121299' text='Hi, Frame Maker' /> */}
		</main>
	);
};

export default DefaultLayout;
