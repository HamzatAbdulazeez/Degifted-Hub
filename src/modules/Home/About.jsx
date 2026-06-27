import React from 'react';
import BannerSection from './components/Breadcrumb';
import { Target, Eye, Users, Award, Zap, CheckCircle, Heart, Lightbulb, TrendingUp, Camera, Video, Mic, Palette, Star, Globe } from 'lucide-react';
import { Link } from "react-router-dom";

const AboutUs = () => {
    const teamMembers = [
        { role: 'Creative Directors', count: '5+', icon: <Lightbulb className="w-6 h-6" /> },
        { role: 'Videographers', count: '8+', icon: <Video className="w-6 h-6" /> },
        { role: 'Photographers', count: '6+', icon: <Camera className="w-6 h-6" /> },
        { role: 'Audio Engineers', count: '4+', icon: <Mic className="w-6 h-6" /> },
        { role: 'Graphic Designers', count: '7+', icon: <Palette className="w-6 h-6" /> },
        { role: 'Marketing Experts', count: '5+', icon: <TrendingUp className="w-6 h-6" /> }
    ];

    // const milestones = [
    //     { year: '2016', event: 'Digifted Hub Founded', desc: 'Started our journey with a vision to transform creative production in Nigeria' },
    //     { year: '2018', event: 'First Major Studio Launch', desc: 'Opened our state-of-the-art recording and production facility' },
    //     { year: '2020', event: 'Digital Expansion', desc: 'Launched comprehensive digital marketing and live streaming services' },
    //     { year: '2024', event: 'Industry Recognition', desc: 'Became a leading creative hub serving 100+ clients across Africa' }
    // ];

    const achievements = [
        { title: 'Award-Winning Productions', desc: 'Recognized for excellence in multimedia content creation', icon: <Award className="w-8 h-8" /> },
        { title: 'Industry Partnerships', desc: 'Trusted partner for major brands and corporations', icon: <Star className="w-8 h-8" /> },
        { title: 'Community Impact', desc: 'Trained and mentored 200+ emerging creatives', icon: <Heart className="w-8 h-8" /> },
        { title: 'Global Reach', desc: 'Projects delivered across Africa and beyond', icon: <Globe className="w-8 h-8" /> }
    ];

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
                    <div>
                        <img
                            src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769225600/DigiftedHub/0305_638146212701526352_fdegiu.jpg"
                            alt="Who We Are"
                            className="rounded-lg w-full h-[350px] md:h-[350px] object-cover shadow-lg"
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
                            Our team of professionals is committed to delivering exceptional results — making us the go-to destination for all your audio-visual, digital, and creative needs.
                        </p>
                        <p className="text-black text-base leading-loose mb-6">We don't just create content, we craft experiences that connect, engage, and inspire.</p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="bg-black section text-white px-6">
                <div className="Resizer mx-auto px-6">
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
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-purple-200">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Story/Journey Timeline */}
            {/* <div className="bg-gray-50 px-6">
                <div className="section Resizer mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">Our Journey</h2>
                    <p className="text-black text-center mb-16 max-w-2xl mx-auto">
                        From humble beginnings to becoming a leading creative hub in Africa
                    </p>

                    <div className="max-w-4xl mx-auto">
                        {milestones.map((milestone, idx) => (
                            <div 
                                key={idx} 
                                className="flex gap-6 mb-12 last:mb-0"
                                style={{ animation: `slideUp 0.6s ease-out ${idx * 0.2}s backwards` }}
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#053276] to-red-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {milestone.year}
                                    </div>
                                </div>
                                <div className="flex-grow bg-white rounded-lg p-6 shadow-md border-l-4 border-[#053276]">
                                    <h3 className="text-xl font-bold text-black mb-2">{milestone.event}</h3>
                                    <p className="text-gray-600 text-base">{milestone.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* Our Team Expertise */}
            <div className="bg-gray-50 px-6">
                <div className="section Resizer mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">Our Expert Team</h2>
                    <p className="text-black text-center mb-16 max-w-2xl mx-auto">
                        A diverse team of passionate professionals dedicated to bringing your vision to life
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#053276] transition-all hover:shadow-lg"
                                style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards` }}
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-[#053276] to-red-800 rounded-lg flex items-center justify-center text-white mb-4">
                                    {member.icon}
                                </div>
                                <div className="text-3xl font-bold text-[#053276] mb-2">{member.count}</div>
                                <h3 className="text-lg font-bold text-black">{member.role}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-gradient-to-br from-[#053276] to-indigo-900 px-6">
                <div className="section Resizer mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Our Achievements</h2>
                    <p className="text-white/90 text-center mb-16 max-w-2xl mx-auto">
                        Milestones that reflect our commitment to excellence and innovation
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all text-center"
                                style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards` }}
                            >
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                                    {achievement.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                                <p className="text-white/90 text-base">{achievement.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="bg-white px-6">
                <div className="section Resizer mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-16">What Sets Us Apart</h2>

                    <div className="grid md:grid-cols-2 gap-10 items-center mb-7">
                        <div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#053276] rounded-lg flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">State-of-the-Art Facilities</h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            Our studios are equipped with the latest technology, from 4K cameras to professional audio equipment, ensuring top-tier production quality.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#053276] rounded-lg flex items-center justify-center">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">Client-Centric Approach</h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            We prioritize understanding your vision and goals, working collaboratively to ensure every project exceeds expectations.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#053276] rounded-lg flex items-center justify-center">
                                        <Lightbulb className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">Creative Innovation</h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            We constantly explore new techniques and trends to deliver fresh, compelling content that stands out in today's digital landscape.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-black mb-6">Why Clients Choose Us</h3>
                            <ul className="space-y-4">
                                {[
                                    'Proven track record of 200+ successful projects',
                                    'Flexible packages tailored to your budget',
                                    'Fast turnaround without compromising quality',
                                    'Dedicated support from concept to completion',
                                    'Competitive pricing with transparent billing',
                                    'Ongoing training and industry best practices'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#053276] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
            <div className="Resizer mx-auto px-6 pb-24 pt-24">
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
                        <Link to={"/contact"}>
                            <button className="px-8 py-3 bg-white text-[#053276] rounded-md text-base cursor-pointer hover:scale-105 transition-all duration-300">
                                Contact Us Today
                            </button>
                        </Link>
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