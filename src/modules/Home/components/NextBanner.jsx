import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="section bg-gray-100">
        <div className="Resizer">
          <div className="w-full px-4 flex flex-col md:flex-row items-center justify-center gap-10">


            {/* Left - About Us Content */}
            <div className="w-full md:w-1/2">
              <p className="text-base font-medium text-pink-600 mb-2 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-pink-600 rounded-sm"></span>
                About Us
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
                Who We Are
              </h2>

              {/* Free text area for "About Us" description */}
              <p className="text-black mb-6 text-base leading-relaxed">
                <b>Digifted Creations Hub Limited</b> is a leading multimedia and creative production company designed for visionary creators, businesses, and brands.
                Our facility is equipped with <b>state-of-the-art equipment, modern studio designs, and creative props</b> that inspire imagination and excellence.
                <br /><br />
                From cinematic video productions to high-quality live streaming, photography, and digital marketing, Digifted Hub brings your ideas to life with precision and creativity. <br /> <br />
                Our team of professionals is committed to delivering exceptional results — making us the go-to destination for all your <b> audio-visual, digital, and creative needs.</b>

                <br />
                We don’t just create content — <b>we craft experiences that connect, engage, and inspire.</b>

              </p>


              <Link to={"/contact"}>
              <button className="bg-gradient text-white py-4 px-8 cursor-pointer rounded-lg transition">
                Contact Us
              </button>
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden h-[400px]">
              <img
                src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769224999/DigiftedHub/photo-1518081461904-9d8f136351c2_1_h5odsu.jpg"
                alt="About Us Background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Foreground image (optional) */}
              <img
                src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760374586/DigiftedHub/DIGIFTED_HUB_1_ymztjd.png"
                alt="About Us"
                className="relative z-10 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
