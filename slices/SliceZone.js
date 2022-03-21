import {
	HeroSection,
	CtaSection,
	AboutSection,
	ServicesSection,
	SecondaryHeroSection,
	ContactInfoSection,
	GallerySection,
	CtaFormSection,
	CounterSection,
	PortfolioDetailsSection,
	PortfolioSection,
	TeamSection,
	FeaturesSection,
	ReviewsSection,
} from './';

const SliceZone = ({ sliceZone }) => (
	<>
		{sliceZone.map((slice, index) => {
			switch (slice.slice_type) {
				case 'hero_section':
					return <HeroSection slice={slice} key={`slice-${index}`} />;
				case 'portfolio_section':
					return <PortfolioSection slice={slice} key={`slice-${index}`} />;
				case 'cta_section':
					return <CtaSection slice={slice} key={`slice-${index}`} />;
				case 'about_section':
					return <AboutSection slice={slice} key={`slice-${index}`} />;
				case 'team_section':
					return <TeamSection slice={slice} key={`slice-${index}`} />;
				case 'services_section':
					return <ServicesSection slice={slice} key={`slice-${index}`} />;
				case 'secondary_hero_section':
					return <SecondaryHeroSection slice={slice} key={`slice-${index}`} />;
				case 'contact_info_section':
					return <ContactInfoSection slice={slice} key={`slice-${index}`} />;
				case 'gallery_section':
					return <GallerySection slice={slice} key={`slice-${index}`} />;
				case 'cta_form_section':
					return <CtaFormSection slice={slice} key={`slice-${index}`} />;
				case 'counter_section':
					return <CounterSection slice={slice} key={`slice-${index}`} />;
				case 'features_section':
					return <FeaturesSection slice={slice} key={`slice-${index}`} />;
				case 'reviews_section':
					return <ReviewsSection slice={slice} key={`slice-${index}`} />;
				case 'portfolio_details_section':
					return (
						<PortfolioDetailsSection slice={slice} key={`slice-${index}`} />
					);
				default:
					return null;
			}
		})}
	</>
);

export default SliceZone;
