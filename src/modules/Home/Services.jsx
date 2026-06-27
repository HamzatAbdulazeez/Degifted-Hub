import React, { useState } from 'react';
import BannerSection from './components/Breadcrumb';
import {
    Camera, Mic, Video, Radio, TrendingUp, Palette,
    Play, Image, Music, Briefcase, BarChart, Globe,
    CheckCircle, Zap, Award, Users, Monitor, Sparkles
} from 'lucide-react';
import { Link } from "react-router-dom";

const OurServices = () => {
    const [activeService, setActiveService] = useState(0);

    const mainServices = [
        {
            id: 1,
            icon: <Camera className="w-10 h-10" />,
            title: 'Digifted Studios',
            subtitle: 'Audio-Visual & Photography',
            tagline: 'Create. Capture. Inspire.',
            description: 'Our studio spaces are designed for creators, podcasters, photographers, and musicians.',
            emoji: '📸',
            closingLine: 'Your creative home — powered by technology and passion.',
            features: [
                {
                    title: 'Studio Rentals',
                    desc: 'Flexible hourly or daily bookings, podcast booths, and equipment-only rentals.',
                    icon: <Video className="w-6 h-6" />
                },
                {
                    title: 'Audio & Video Recording',
                    desc: 'Capture podcasts, music sessions, voiceovers, and professional videos with our advanced 4K cameras and sound systems.',
                    icon: <Mic className="w-6 h-6" />
                },
                {
                    title: 'Photoshoots',
                    desc: 'From headshots to editorial and product photography — get clean, well-lit, and industry-standard visuals.',
                    icon: <Camera className="w-6 h-6" />
                }
            ]
        },
        {
            id: 2,
            icon: <Radio className="w-10 h-10" />,
            title: 'Digifted Live & Events',
            subtitle: 'Live Streaming & Event Coverage',
            tagline: 'Broadcast Your Moment to the World.',
            description: 'We cover your events with clarity and creativity — online and on-site.',
            emoji: '🎥',
            closingLine: 'From stage to screen — we make your moments unforgettable.',
            features: [
                {
                    title: 'Live Streaming',
                    desc: 'Seamless multi-camera livestreams for conferences, concerts, and religious events.',
                    icon: <Radio className="w-6 h-6" />
                },
                {
                    title: 'Event Coverage',
                    desc: 'Professional videography, photography, and drone footage that capture every emotion and highlight.',
                    icon: <Video className="w-6 h-6" />
                },
                {
                    title: 'Documentary Features',
                    desc: 'Transform your event into a story worth rewatching.',
                    icon: <Play className="w-6 h-6" />
                }
            ]
        },
        {
            id: 3,
            icon: <Briefcase className="w-10 h-10" />,
            title: 'Digifted Corporate Solutions',
            subtitle: 'Business-Focused Media',
            tagline: 'Your Partner in Professional Communication.',
            description: 'We help businesses build stronger brand identities through media and communication solutions.',
            emoji: '🏢',
            closingLine: 'Where creativity meets corporate professionalism.',
            features: [
                {
                    title: 'Corporate Spaces',
                    desc: 'Book executive meeting or training spaces with full multimedia support.',
                    icon: <Users className="w-6 h-6" />
                },
                {
                    title: 'Brand & Product Videos',
                    desc: 'Create engaging commercials and promotional clips that showcase your brand\'s story.',
                    icon: <Video className="w-6 h-6" />
                },
                {
                    title: 'Documentary Ads',
                    desc: 'Transform your business journey into visual storytelling that sells.',
                    icon: <Play className="w-6 h-6" />
                }
            ]
        },
        {
            id: 4,
            icon: <TrendingUp className="w-10 h-10" />,
            title: 'Digifted Digital Marketing',
            subtitle: 'Online Growth & Branding',
            tagline: 'Grow Your Brand\'s Digital Footprint.',
            description: 'Our digital marketing experts help brands stay relevant and visible online.',
            emoji: '📲',
            closingLine: 'We don\'t just post — we position your brand for impact.',
            features: [
                {
                    title: 'Social Media Management',
                    desc: 'Strategy, content planning, and daily engagement.',
                    icon: <Globe className="w-6 h-6" />
                },
                {
                    title: 'Paid Ad Campaigns',
                    desc: 'Eye-catching social media ads optimized for TikTok, Instagram, and YouTube.',
                    icon: <BarChart className="w-6 h-6" />
                },
                {
                    title: 'Analytics & Reporting',
                    desc: 'Track performance and make data-driven marketing decisions.',
                    icon: <TrendingUp className="w-6 h-6" />
                }
            ]
        },
        {
            id: 5,
            icon: <Palette className="w-10 h-10" />,
            title: 'Digifted Creative Services',
            subtitle: 'Post-Production & Content Creation',
            tagline: 'Where Good Content Becomes Great.',
            description: 'Our creative finishing team polishes your content to perfection.',
            emoji: '🎧',
            closingLine: 'The final touch that makes your content stand out.',
            features: [
                {
                    title: 'Video & Audio Editing',
                    desc: 'Industry-standard post-production with cinematic precision.',
                    icon: <Video className="w-6 h-6" />
                },
                {
                    title: 'Photo Retouching & Manipulation',
                    desc: 'Enhance your visuals for social media or brand use.',
                    icon: <Image className="w-6 h-6" />
                },
                {
                    title: 'Sound Engineering & Mastering',
                    desc: 'Professional-grade mixing and mastering for music, film, and ads.',
                    icon: <Music className="w-6 h-6" />
                }
            ]
        }
    ];

    return (
        <>
            <BannerSection
                title="Our Services"
                subtitle="Comprehensive creative solutions designed to bring your vision to life"
                backgroundImage="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769226386/DigiftedHub/istockphoto-1062278194-612x612_k7nnza.jpg"
            />

            {/* Services Overview */}
            <div className="bg-white">
                <div className="section Resizer mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">
                        What We Offer
                    </h2>
                    <p className="text-black text-center mb-16 max-w-3xl mx-auto text-base leading-loose">
                        From creative studios to corporate solutions, Digifted Hub provides end-to-end multimedia services that empower creators, businesses, and brands to tell their stories with impact.
                    </p>

                    {/* Service Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mainServices.map((service, idx) => (
                            <div
                                key={service.id}
                                onClick={() => setActiveService(idx)}
                                className={`bg-white rounded-xl p-6 border cursor-pointer transition-all transform hover:scale-105 shadow-md ${activeService === idx
                                    ? 'border-[#053276] shadow-xl'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards` }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#053276] to-red-800 rounded-xl flex items-center justify-center text-white mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm font-semibold mb-3">{service.subtitle}</p>
                                <p className="text-gray-700 text-base leading-relaxed">{service.tagline}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detailed Service Sections */}
            {mainServices.map((service, idx) => (
                <div
                    key={service.id}
                    className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                    <div className="section Resizer mx-auto  px-6">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            {/* Content - Alternating Left/Right */}
                            <div className={idx % 2 === 0 ? 'order-1' : 'order-2'}>
                                <div className="inline-flex items-center gap-2 bg-[#053276] text-white px-6 py-2 rounded-full text-sm mb-4">
                                    <span>Service {service.id}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-black leading-relaxed mb-3">
                                    {service.title}
                                </h2>
                                <p className="text-lg font-semibold text-gray-700 mb-4">{service.tagline}</p>
                                <p className="text-black text-base leading-loose mb-6">{service.description}</p>

                                {/* Features List */}
                                <div className="space-y-4 mb-6">
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-[#053276] rounded-lg flex items-center justify-center text-white">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-black mb-1">{feature.title}</h4>
                                                <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-base font-semibold text-[#053276] flex items-center gap-2">
                                    <span className="text-2xl">{service.emoji}</span>
                                    {service.closingLine}
                                </p>
                            </div>

                            {/* Image - Alternating Right/Left */}
                            <div className={idx % 2 === 0 ? 'order-2' : 'order-1'}>
                                <div className="bg-gradient-to-br from-[#053276] to-red-800 rounded-lg h-96 flex items-center justify-center">
                                    <div className="text-white text-center p-8">
                                        <div className="text-6xl mb-4">{service.emoji}</div>
                                        <p className="text-xl font-bold">{service.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Why Choose Our Services */}
            <div className="bg-gradient-to-r from-[#053276] to-red-800  px-6">
                <div className="section Resizer mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                        Why Choose Digifted Hub?
                    </h2>
                    <p className="text-white text-center mb-16 max-w-2xl mx-auto">
                        We combine technical expertise with creative passion to deliver results that exceed expectations
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Award className="w-8 h-8" />,
                                title: 'Premium Quality',
                                desc: 'Industry-standard equipment and expert professionals'
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: 'Fast Turnaround',
                                desc: 'Efficient processes without compromising quality'
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: 'Dedicated Support',
                                desc: 'Personalized service from consultation to delivery'
                            },
                            {
                                icon: <Sparkles className="w-8 h-8" />,
                                title: 'Creative Excellence',
                                desc: 'Innovative solutions that make you stand out'
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all text-center"
                            >
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-white/90 text-base leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Packages */}
            <div className="bg-white">
                <div className="section Resizer mx-auto  px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">
                        Flexible Service Packages
                    </h2>
                    <p className="text-black text-center mb-16 max-w-2xl mx-auto">
                        Choose from our pre-designed packages or let us create a custom solution for your needs
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Starter Package',
                                desc: 'Perfect for individuals and small projects',
                                features: [
                                    'Studio rental (4 hours)',
                                    'Basic equipment included',
                                    'Single camera setup',
                                    'Standard editing'
                                ]
                            },
                            {
                                name: 'Professional Package',
                                desc: 'Ideal for businesses and events',
                                features: [
                                    'Full-day studio access',
                                    'Multi-camera setup',
                                    'Professional crew',
                                    'Advanced post-production',
                                    'Live streaming option'
                                ],
                                popular: true
                            },
                            {
                                name: 'Enterprise Package',
                                desc: 'Comprehensive solutions for corporations',
                                features: [
                                    'Unlimited studio time',
                                    'Dedicated account manager',
                                    'Custom content strategy',
                                    'Priority scheduling',
                                    'Full marketing support'
                                ]
                            }
                        ].map((pkg, idx) => (
                            <div
                                key={idx}
                                className={`rounded-xl p-8 border-2 ${pkg.popular
                                    ? 'border-[#053276] shadow-xl bg-gradient-to-b from-[#053276]/5 to-transparent'
                                    : 'border-gray-200'
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="inline-block bg-[#053276] text-white px-6 py-1 rounded-full text-sm font-semibold mb-4">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                                <p className="text-gray-600 text-base mb-6">{pkg.desc}</p>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#053276] mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/contact"
                                    className="w-full bg-gradient-to-r from-[#053276] to-red-800 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-all block text-center cursor-pointer"
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="Resizer mx-auto px-6 pb-24">
                <div className="relative overflow-hidden bg-[#053276] rounded-md">
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>

                    <div className="relative z-10 text-center py-16 px-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
                            Whether you need a single service or a complete creative package, we're here to help bring your vision to life. Contact us today to discuss your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="px-8 cursor-pointer py-3 bg-white text-[#053276] rounded-md text-base hover:scale-105 transition-all duration-300"
                            >
                                Book a Service
                            </Link>


                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
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

export default OurServices;