import BannerWithForm from './components/banner';
import WhyChooseUsing from './components/WhyChooseUs';
import PortfolioSection from './components/PortfolioSection';
import CaseStudySection from './components/CaseStudySection';
import TestimonialsAndBlog from './components/TestimonialsAndBlog';
import NextBanner from './components/NextBanner';

// import Lunching from './components/Luch';

export default function NewHome() {
    return (
        <>
            <BannerWithForm />
            <NextBanner />
            <WhyChooseUsing />
            <PortfolioSection />
            <CaseStudySection />
            <TestimonialsAndBlog />
           
            {/* <Lunching /> */}
        </>
    );
}
