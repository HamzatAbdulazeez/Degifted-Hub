import Header from "./Header";
import Footer from "./Footer";
import WhatsAppChatButton from "./WhatsAppChatButton";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
        <WhatsAppChatButton />
      </div>
    </>
  );
};

export default LandingLayout;
