import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      <div>
        
        <Outlet />
       
      </div>
    </>
  );
};

export default LandingLayout;
