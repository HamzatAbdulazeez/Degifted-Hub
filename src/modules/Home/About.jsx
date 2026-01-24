import BannerSection from './components/Breadcrumb';
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Zap, CheckCircle, } from 'lucide-react';

const AboutUs = () => {

    return (
        <>
            <BannerSection
                title="About Us"
                subtitle="Digifted Hub brings your ideas to life with precision and creativity."
                backgroundImage="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769226386/DigiftedHub/istockphoto-1062278194-612x612_k7nnza.jpg"

            />
            {/* Who We Are Section */}
            <div className="bg-white Resizer">
                <div className="section grid md:grid-cols-2 gap-10 items-center">
                    <div >
                        <img
                            src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769225600/DigiftedHub/0305_638146212701526352_fdegiu.jpg"
                            alt="Who We Are"
                            className="rounded-lg w-full h-[350px] md:h-[350px] object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-black leading-relaxed mb-4">
                            Who We Are
                        </h2>
                        <p className="text-black text-base leading-loose mb-4">
                            Digifted Creations Hub Limited is a leading multimedia and creative production company designed for visionary creators, businesses, and brands.
                            Our facility is equipped with state-of-the-art equipment, modern studio designs, and creative props that inspire imagination and excellence.
                        </p>
                        <p className="text-black text-base leading-loose mb-4">
                            From cinematic video productions to high-quality live streaming, photography, and digital marketing, Digifted Hub brings your ideas to life with precision and creativity.
                            Our team of professionals is committed to delivering exceptional results — making us the go-to destination for all your audio-visual, digital, and creative needs
                        </p>
                        <p className="text-black text-base leading-loose mb-6">We don’t just create content, we craft experiences that connect, engage, and inspire.</p>

                    </div>
                </div>
            </div>
            {/* Mission & Vision Section */}
            <div className="bg-black text-white py-18">
                <div className="Resizer mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Mission */}
                        <div className="space-y-4" style={{ animation: 'slideUp 0.8s ease-out' }}>
                            <div className="inline-flex p-4 bg-white/10 backdrop-blur-xl rounded-2xl">
                                <Target className="w-12 h-12 text-emerald-400" />
                            </div>

                            <h2 className="text-2xl font-bold">Our Mission</h2>

                            <div className="h-1 w-24 bg-white rounded-full"></div>

                            <p className="text-base text-white leading-loose">
                                To empower creators and brands with cutting-edge multimedia solutions that transform ideas into captivating visual stories. We blend creativity with technology to deliver exceptional content that resonates and inspires.
                            </p>


                        </div>

                        {/* Vision */}
                        <div className="space-y-6" style={{ animation: 'slideUp 0.8s ease-out 0.2s backwards' }}>
                            <div className="inline-flex p-4 bg-white/10 backdrop-blur-xl rounded-2xl">
                                <Eye className="w-12 h-12 text-purple-400" />
                            </div>

                            <h2 className="text-2xl font-bold">Our Vision</h2>

                            <div className="h-1 w-24 bg-white rounded-full"></div>

                            <p className="text-base text-white leading-loose">
                                To become the premier creative hub in Africa, setting new standards in multimedia production and establishing ourselves as the go-to partner for brands seeking innovative and impactful visual communication.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            {/* Core Values */}
            <div className="section">
                <div className="Resizer mx-auto">
                    <h2 className="text-2xl font-bold text-black text-center mb-16">Our Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <CheckCircle className="w-6 h-6" />, title: 'Excellence', desc: 'Delivering outstanding quality in every project' },
                            { icon: <Users className="w-6 h-6" />, title: 'Collaboration', desc: 'Working together to achieve extraordinary results' },
                            { icon: <Zap className="w-6 h-6" />, title: 'Innovation', desc: 'Pushing creative boundaries with cutting-edge solutions' },
                            { icon: <Award className="w-6 h-6" />, title: 'Integrity', desc: 'Building trust through honest and transparent practices' }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-[#053276] to-indigo-800 rounded-xl p-6 transition-all transform hover:scale-105">
                                <div className="w-12 h-12 bg-black  rounded-lg flex items-center justify-center text-white mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-purple-200">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Stats */}
            <section className="bg-gradient-to-r from-[#053276] to-red-800">
            <div className="py-16">
                <div className="Resizer mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { num: '200+', label: 'Projects Completed' },
                            { num: '100+', label: 'Happy Clients' },
                            { num: '50+', label: 'Creative Experts' },
                            { num: '8+', label: 'Years of Experience' }
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.num}</div>
                                <div className="text-purple-200">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </section>

            {/* CTA Section */}
            <div className="Resizer mx-auto px-4 pb-24 pt-24">
                <div className="relative overflow-hidden bg-[#053276] rounded-md">
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>

                    <div className="relative z-10 text-center py-16 px-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Ready to Begin Your Journey?
                        </h2>
                        <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
                            Join our community of creators and innovators at Digifted Hub. Whether you're looking to elevate your brand, produce stunning content, or explore new creative horizons, we're here to help you succeed.
                        </p>
                        <button className="px-8 py-3 bg-white text-[#053276] rounded-md text-base cursor-pointer hover:scale-105 transition-all duration-300">
                           Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </>
    );
};

export default AboutUs;

