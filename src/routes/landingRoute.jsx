import LandingLayout from "../layouts/landing";
import LandingHomepage from "../modules/Home";
import AboutUs from "../modules/Home/About";
import StudioPage from "../modules/Home/Studios";
import LiveEvents from "../modules/Home/LiveEvents";
import BusinessSolutions from "../modules/Home/BusinessSolutions";
// import DigitalStrategy from "../modules/Home/DigitalStrategy";
import PricingPage from "../modules/Home/Pricing";
import OurServices from "../modules/Home/Services";
import ContactUs from "../modules/Home/Contact";

export const landingRooutes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingHomepage />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'studios',
        element: <StudioPage />,
      }, 
      {
        path: 'live-events',
        element: <LiveEvents />,
      }, 
      {
        path: 'contact',
        element: <ContactUs />,
      },
      {
        path: 'services',
        element: <OurServices />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'business-solutions',
        element: <BusinessSolutions />,
      },
    ],
  },
];
