import React from "react";

const companies = [
    { id: 1, logo: "/images/logo1.png" },
    { id: 2, logo: "/images/logo2.png" },
    { id: 3, logo: "/images/logo3.png" },
    { id: 4, logo: "/images/logo4.png" },
];

const PortfolioSection = () => {
    return (
        <section className="w-full py-16 px-4 md:px-12 relative">
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
                className="rounded-md py-3 px-5 mb-8 max-w-3xl text-white font-medium bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/recent-bar-bg.jpg')",
                }}
            >
                Recent Companies
            </div>


            {/* Logos grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl">
                {companies.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-100 rounded-lg flex items-center justify-center h-48 hover:shadow-lg transition"
                    >
                        <img
                            src={item.logo}
                            alt={`Company ${item.id}`}
                            className="max-h-20 object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Optional rotating contact icon */}
            <div className="hidden md:block absolute top-0 right-8">
                <div className="w-24 h-24 border border-gray-300 rounded-full flex items-center justify-center relative animate-spin-slow">
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-500 font-light tracking-widest">
                        CONTACT US CONTACT US CONTACT US
                    </div>
                    <div className="z-10 bg-white rounded-full p-2 shadow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
