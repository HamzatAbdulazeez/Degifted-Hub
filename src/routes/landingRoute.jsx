import LandingLayout from "../layouts/landing";
import LandingHomepage from "../modules/Home";
import AboutUs from "../modules/Home/About";
import StudioPage from "../modules/Home/Studios";
import LiveEvents from "../modules/Home/LiveEvents";
// import BusinessSolutions from "../modules/Home/BusinessSolutions";
// import DigitalStrategy from "../modules/Home/DigitalStrategy";
// import CreativeServices from "../modules/Home/CreativeServices";
// import ContactUs from "../modules/Home/ContactUs";

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
    ],
  },
];
