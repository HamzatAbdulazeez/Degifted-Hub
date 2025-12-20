import React from "react";

const TestimonialsAndBlog = () => {
    const testimonials = [
        {
            name: "Risconhomes",
            text: "A renowned travel agency dedicated to crafting exceptional Hajj and Umrah experiences for Pilgrims",
            img: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1766204164/DigiftedHub/1_eaiwep.jpg",
        },
        {
            name: "Albarakatulilahi",
            text: "A renowned travel agency dedicated to crafting exceptional Hajj and Umrah experiences for Pilgrims",
            img: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1766204165/DigiftedHub/2_rtqpbd.jpg",
        },
        {
            name: "SMNaija",
            text: "A Nigerian social media platform and brand that provides news, entertainment, and celebrity updates",
            img: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1766204175/DigiftedHub/3_cbovsg.png",
        },
        {
            name: "Ultimate Maca",
            text: "A known brand which specialise primarily on supplements, marketed for body enhancement, weight gain, and general health",
            img: "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1766204154/DigiftedHub/4_xhxdrs.png",
        },
    ];

    return (
        <>
            <section className="section">
                <div className="Resizer">
                    <section className="px-4 space-y-20">
                        {/* Testimonials Section */}
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-pink-600"></div>
                                <span className="text-sm">Testimonials</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {testimonials.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer hover:shadow-md transition-all duration-300"
                                    >
                                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                            {item.text}
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <span className="font-semibold text-gray-800 text-sm">
                                                {item.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Blog Section */}
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-pink-600"></div>
                                <span className="text-sm">Portfolio</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-10">
                                Latest News and Posts from Our Blog
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Big Left Image */}
                                <div
                                    className="rounded-lg overflow-hidden h-72 lg:h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80')",
                                    }}
                                ></div>

                                {/* Right Side Smaller Images */}
                                <div className="grid grid-cols-1 gap-6">
                                    <div
                                        className="rounded-lg overflow-hidden h-36 bg-cover bg-center"
                                        style={{
                                            backgroundImage:
                                                "url('https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760530781/DigiftedHub/Rectangle_28_gucl5p.jpg')",
                                        }}
                                    ></div>
                                    <div
                                        className="rounded-lg overflow-hidden h-36 bg-cover bg-center"
                                        style={{
                                            backgroundImage:
                                                "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80')",
                                        }}
                                    ></div>
                                    <div
                                        className="rounded-lg overflow-hidden h-36 bg-cover bg-center"
                                        style={{
                                            backgroundImage:
                                                "url('https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760530681/DigiftedHub/Rectangle_27_z7ylgv.jpg')",
                                        }}
                                    ></div>
                                    
                                </div>
                                 {/* Big Left Image */}
                                 <div
                                    className="rounded-lg overflow-hidden h-72 lg:h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760531013/DigiftedHub/Rectangle_26_1_medy49.jpg')",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default TestimonialsAndBlog;
