import React from "react";
import { Link } from "react-router-dom";


const companies = [
    { id: 1, logo: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1766204164/DigiftedHub/1_eaiwep.jpg" },
    { id: 2, logo: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1766204165/DigiftedHub/2_rtqpbd.jpg" },
    { id: 3, logo: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1766204175/DigiftedHub/3_cbovsg.png" },
    { id: 4, logo: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1766204154/DigiftedHub/4_xhxdrs.png" },
];

const PortfolioSection = () => {
    return (
        <>
            <section className="just">
                <div className="Resizer">
                    <div className="w-full px-6 relative">
                        {/* Top text section */}
                        <div className="max-w-5xl">
                            <p className="text-sm font-medium text-pink-600 mb-2 flex items-center gap-2">
                                <span className="inline-block w-3 h-3 bg-pink-600 rounded-sm"></span>
                                Portfolio
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-snug">
                                Our portfolio is built by companies <br />
                                with deep technical expertise
                            </h2>
                        </div>

                        <div
                            className="bg-pink-600 mb-8 rounded-md py-3 px-5 text-white font-medium bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: "url('/images/recent-bar-bg.jpg')",
                                draggable: "false",
                            }}
                        >
                            Recent Companies
                        </div>

                        {/* Logos grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 mt-16 gap-6">
                            {companies.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center mb-3 justify-center h-64 transition"
                                >
                                    <img
                                        src={item.logo}
                                        alt={`Company ${item.id}`}
                                        className="object-cover cursor-pointer "
                                        draggable="false"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Optional rotating contact icon */}
                        <div className="hidden md:block  absolute top-0 right-8">
                            <Link to={"/contact"}>
                                <img
                                    src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760528750/DigiftedHub/image_6_naqejs.jpg"
                                    alt="Decorative"
                                    draggable="false"
                                    className="w-24 h-24 rounded-full object-cover border border-gray-300 shadow"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSection;
