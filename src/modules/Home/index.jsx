import BannerWithForm from './components/banner';
import WhyChooseUsing from './components/WhyChooseUs';
import PortfolioSection from './components/PortfolioSection';
import CaseStudySection from './components/CaseStudySection';
import TestimonialsAndBlog from './components/TestimonialsAndBlog';

export default function NewHome() {
    return (
        <>
            <BannerWithForm />
            <WhyChooseUsing />
            <PortfolioSection />
            <CaseStudySection />
            <TestimonialsAndBlog />
        </>
    );
}
