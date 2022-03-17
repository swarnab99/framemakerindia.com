/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<>
			<div className={`vs-menu-wrapper ${isMenuOpen ? 'vs-body-visible' : ''}`}>
				<div className='vs-menu-area text-center'>
					<button
						onClick={() => setIsMenuOpen(false)}
						className='vs-menu-toggle'>
						<i className='fal fa-times'></i>
					</button>
					<div className='mobile-logo'>
						<a href='index.html'>
							<img
								src='https://images.prismic.io/framemakerindia/aa85a9a3-e66e-4f42-9909-fe54da4688b4_framemaker-logo.png?auto=compress,format'
								alt='The Frame Maker Logo'
								width={205}
							/>
						</a>
					</div>
					<div className='vs-mobile-menu'>
						<MenuList />
					</div>
				</div>
			</div>

			<header className='header-wrapper header-layout1'>
				<div className='sticky-wrapper will-sticky'>
					<div className='sticky-active active'>
						<div className='vs-container container'>
							<div className='position-relative'>
								<div className='row justify-content-between align-items-center'>
									<div className='col-auto'>
										<div className='header-logo'>
											<Link href='/'>
												<a>
													<img
														src='https://images.prismic.io/framemakerindia/aa85a9a3-e66e-4f42-9909-fe54da4688b4_framemaker-logo.png?auto=compress,format'
														alt='Logo'
														width={180}
													/>
												</a>
											</Link>
										</div>
									</div>
									<div className='col-auto'>
										<nav className='main-menu menu-style1 d-none d-lg-block'>
											<MenuList />
										</nav>
										<button
											onClick={() => setIsMenuOpen(true)}
											className='vs-menu-toggle d-inline-block d-lg-none'>
											<i className='fas fa-bars'></i>
										</button>
									</div>
									<div className='col-auto d-none d-lg-block'>
										<div className='header-button-group d-flex align-items-center'>
											<Link href='/book'>
												<a className='vs-btn d-none d-xl-inline-block'>
													Get A Quotation
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

const MenuList = () => {
	return (
		<ul>
			<li>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href='/about-the-frame-maker'>
					<a>About</a>
				</Link>
			</li>
			<li>
				<Link href='/weddings'>
					<a>Weddings</a>
				</Link>
			</li>
			<li>
				<Link href='/photography-services'>
					<a>Services</a>
				</Link>
			</li>
			<li className='menu-item-has-children'>
				<a href='#'>Gallery</a>
				<ul className='sub-menu'>
					<li>
						<Link href='/photos-gallery'>
							<a>Photos</a>
						</Link>
					</li>
					<li>
						<Link href='/videos-gallery'>
							<a>Videos</a>
						</Link>
					</li>
				</ul>
			</li>
			<li>
				<Link href='/photography-blog'>
					<a>Blog</a>
				</Link>
			</li>
			<li>
				<Link href='/contact-the-frame-maker'>
					<a>Contact</a>
				</Link>
			</li>
		</ul>
	);
};

export default Header;
