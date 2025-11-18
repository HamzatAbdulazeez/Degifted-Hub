import React from "react";
import { ShieldCheck, Settings, Package, Layers } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Top-Tier Production Quality",
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Creative Excellence",
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: "End-to-End Solutions",
    },
    {
      icon: <Package className="w-6 h-6 text-white" />,
      title: "Global Reach",
    },
  ];

  return (
    <>
      <div className="section">
        <div className="Resizer">
          <div className="w-full px-4 flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Left - Image with underground background */}
            <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden h-[400px]">
              {/* Background image */}
              <img
                src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760373483/DigiftedHub/Rectangle_14_1_y7vwep.jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0"></div>

              {/* Foreground image */}
              <img
                src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760374586/DigiftedHub/DIGIFTED_HUB_1_ymztjd.png"
                alt="Why Choose Us"
                className="relative z-10 w-full h-full object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="w-full md:w-1/2">
              <p className="text-base font-medium text-pink-600 mb-2 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-pink-600 rounded-sm"></span>
                Our Core Values
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
                Why Choose Us
              </h2>
              <p className="text-black mb-6 text-base">
              At Digifted Hub, we merge creativity with technology to help individuals and brands communicate their stories powerfully.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-lg p-2 transition"
                  >
                    <div className="bg-gradient p-2 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-black font-medium text-base">{item.title}</span>
                  </div>
                ))}
              </div>

              <p className="text-black mb-6 leading-relaxed text-base">
              Your vision deserves a creative home — and that home is Digifted.
              </p>

              <button className="bg-gradient text-white py-4 px-8 cursor-pointer rounded-lg transition">
                View Our Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
