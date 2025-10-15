import React from "react";

const TestimonialsAndBlog = () => {
    const testimonials = [
        {
            name: "Chris Delgado",
            text: "“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...”",
            img: "https://i.pravatar.cc/100?img=1",
        },
        {
            name: "Sophia Martinez",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu dui et orci lacinia accumsan.",
            img: "https://i.pravatar.cc/100?img=2",
        },
        {
            name: "Michael Torres",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae consectetur eros.",
            img: "https://i.pravatar.cc/100?img=3",
        },
        {
            name: "Hamzat Abdul",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae consectetur eros.",
            img: "https://i.pravatar.cc/100?img=4",
        },
        {
            name: "Danielle Carter",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae consectetur eros.",
            img: "https://i.pravatar.cc/100?img=5",
        },
        {
            name: "James Holloway",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae consectetur eros.",
            img: "https://i.pravatar.cc/100?img=6",
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
