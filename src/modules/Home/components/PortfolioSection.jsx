import React from "react";

const companies = [
    { id: 1, logo: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760497909/DigiftedHub/Group_1321314869_kokbcm.png" },
    { id: 2, logo: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760497908/DigiftedHub/Group_1321314867_zryvo9.png" },
    { id: 3, logo: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760497908/DigiftedHub/Group_1321314868_mn9mvz.png" },
    { id: 4, logo: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760497908/DigiftedHub/Group_1321314866_v3y5sx.png" },
    { id: 5, logo: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760497908/DigiftedHub/Group_1321314866_v3y5sx.png" },
];

const PortfolioSection = () => {
    return (
        <>
            <section  className="section">
                <div className="Resizer">
                    <div className="w-full px-4 relative">
                        {/* Top text section */}
                        <div className="max-w-5xl">
                            <p className="text-base text-pink-600 mb-2 flex items-center gap-2">
                                <span className="inline-block w-3 h-3 bg-pink-600 rounded-sm"></span>
                                Portfolio
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black leading-snug">
                                Our portfolio is built by companies <br />
                                with deep technical expertise
                            </h2>
                        </div>

                        <div
                            className="rounded-md py-3 px-5 mb-8 max-w-3xl text-white bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: "url('/images/recent-bar-bg.jpg')",
                            }}
                        >
                            Recent Companies
                        </div>

                        {/* Logos grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                            {companies.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-gray-100 rounded-lg flex items-center justify-center h-48 hover:shadow-lg transition"
                                >
                                    <img
                                        src={item.logo}
                                        alt={`Company ${item.id}`}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSection;
