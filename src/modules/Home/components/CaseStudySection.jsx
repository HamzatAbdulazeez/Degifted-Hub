import { useEffect, useState } from "react";

const CaseStudySection = () => {
    const images = [
        "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760529811/DigiftedHub/Rectangle_18_asfzre.jpg",
        "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760373483/DigiftedHub/Rectangle_14_1_y7vwep.jpg",
        "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075919/DigiftedHub/Rectangle_5_eydtef.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000); // ⏳ change image every 4 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <section className="section bg-black">
                <div className="Resizer">
                    <div className=" text-white px-4 relative overflow-hidden">
                        {/* Top Section */}
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-3 h-3 bg-pink-600"></div>
                                    <span className="text-sm">Portfolio</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-semibold">Our Case Study</h2>
                            </div>

                            <button className="bg-gradient text-white cursor-pointer py-3 px-8 rounded-md font-normal hover:opacity-90 transition">
                                Contact Us
                            </button>
                        </div>

                        {/* Content */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
                            {/* Left - Stats (smaller) */}
                            <div className="md:col-span-1 bg-[#161616] rounded-lg p-10 flex flex-col justify-center gap-8">
                                <div>
                                    <h3 className="text-4xl font-bold">200+</h3>
                                    <p className="text-gray-300 text-sm mt-2">Client Projects</p>
                                </div>
                                <div className="border-t border-gray-600"></div>
                                <div>
                                    <h3 className="text-4xl font-bold">60+</h3>
                                    <p className="text-gray-300 text-sm mt-2">Staff Employed</p>
                                </div>
                                <div className="border-t border-gray-600"></div>
                                <div>
                                    <h3 className="text-4xl font-bold">8+</h3>
                                    <p className="text-gray-300 text-sm mt-2">Years of Experience</p>
                                </div>
                            </div>

                            {/* Right - Image Slider (bigger) */}
                            <div
                                className="md:col-span-3 rounded-lg h-80 md:h-auto bg-cover bg-center transition-all duration-700"
                                style={{
                                    backgroundImage: `url(${images[currentImage]})`,
                                }}
                            ></div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudySection;
