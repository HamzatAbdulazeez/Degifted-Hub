import React, { useState } from 'react';
import BannerSection from './components/Breadcrumb';
import { 
  Camera, Video, Mic, Radio, Users, Phone, CheckCircle, 
  Star, Zap, Award, MessageSquare, DollarSign
} from 'lucide-react';
import { Link } from "react-router-dom";

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('photography');

  const categories = [
    { id: 'photography', name: 'Photography', icon: <Camera className="w-5 h-5" /> },
    { id: 'videography', name: 'Videography', icon: <Video className="w-5 h-5" /> },
    { id: 'podcast', name: 'Podcast', icon: <Mic className="w-5 h-5" /> },
    { id: 'streaming', name: 'Live Streaming', icon: <Radio className="w-5 h-5" /> },
    { id: 'spaces', name: 'Spaces', icon: <Users className="w-5 h-5" /> }
  ];

  const photographyServices = [
    {
      name: 'Birthday/Portrait/Branding',
      details: 'Professional in-studio birthday, corporate headshots, team photos, and personal branding. (4 edited images)',
      regular: '₦55,000',
      discounted: '₦50,000',
      unit: 'per session',
      featured: true
    },
    {
      name: 'Event Photography',
      details: 'Corporate events, launches, weddings, and seminars. Basic editing & high-res digital delivery',
      regular: '₦60,000',
      discounted: '₦50,000',
      unit: 'per hour'
    },
    {
      name: 'Product Photography',
      details: 'Crisp images for e-commerce and marketing (max 5 products per hour). Clean 4 edited images.',
      regular: '₦50,000',
      discounted: '₦45,000',
      unit: 'per session'
    },
    {
      name: 'Newborn Photography',
      details: 'Clean 4 edited images for a newborn.',
      regular: '₦65,000',
      discounted: '₦50,000',
      unit: 'per session'
    }
  ];

  const videographyServices = [
    {
      name: 'Event Videography',
      details: 'Single-camera coverage. Includes basic color grading & a highlight reel.',
      regular: '₦60,000',
      discounted: '₦50,000',
      unit: 'per hour',
      featured: true
    },
    {
      name: 'Corporate Videography',
      details: 'Promotional videos, interviews, and testimonials. Includes 2 edited videos.',
      regular: '₦50,000',
      discounted: '₦45,000',
      unit: 'per hour'
    },
    {
      name: 'Social Media Clips',
      details: 'Short-form, dynamic video content optimized for platforms like Instagram & TikTok. (3 videos max)',
      regular: '₦40,000',
      discounted: '₦30,000',
      unit: 'per session'
    }
  ];

  const podcastServices = [
    {
      name: 'Self-Service Studio',
      details: 'You operate the mic, mixer, and recording software with basic assistance.',
      regular: '₦30,000',
      discounted: '₦20,000',
      unit: 'per session'
    },
    {
      name: 'Full-Service Studio',
      details: 'A dedicated camera/audio engineer for visual recording and mixing',
      regular: '₦65,000',
      discounted: '₦50,000',
      unit: 'per session',
      featured: true
    }
  ];

  const streamingServices = [
    {
      name: 'Event Livestream',
      details: '1x 4K cameras, audio mixing, and streaming to 1 platform (YouTube, Facebook, Zoom, etc)',
      regular: '₦85,000',
      discounted: null,
      unit: 'per day',
      featured: true
    }
  ];

  const spaceServices = [
    {
      name: 'Office/Training Room Rental',
      details: 'Seats up to 10 people. Smart TV & whiteboard included.',
      regular: '₦40,000',
      discounted: null,
      unit: 'per day',
      featured: true
    }
  ];

  const getServicesForCategory = (category) => {
    switch(category) {
      case 'photography': return photographyServices;
      case 'videography': return videographyServices;
      case 'podcast': return podcastServices;
      case 'streaming': return streamingServices;
      case 'spaces': return spaceServices;
      default: return photographyServices;
    }
  };

  const currentServices = getServicesForCategory(activeCategory);

  return (
    <>
      <BannerSection
        title="Our Rental Pricing"
        subtitle="Transparent, competitive rates for professional creative services"
        backgroundImage="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769226386/DigiftedHub/istockphoto-1062278194-612x612_k7nnza.jpg"
      />

      {/* Introduction */}
      <div className="bg-white py-18">
        <div className="section Resizer mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-black text-base leading-loose max-w-3xl mx-auto mb-8">
            At Digifted Hub, we believe in clear, upfront pricing with no hidden fees. Choose from our competitive rates and enjoy discounted packages for bulk bookings and repeat clients.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#053276] to-red-800 text-white px-6 py-3 rounded-full">
            <Phone className="w-5 h-5" />
            <span className="">Book Now: +234 905 246 4819</span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-gray-50 px-4">
        <div className="Resizer mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#053276] to-red-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="bg-white px-4">
        <div className="section Resizer mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentServices.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 border-2 transition-all hover:shadow-xl ${
                  service.featured
                    ? 'border-[#053276] shadow-lg relative'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards` }}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#053276] to-red-800 text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-bold text-black mb-3 mt-2">{service.name}</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{service.details}</p>

                <div className="mb-6">
                  {service.discounted ? (
                    <>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-gray-400 line-through text-lg">{service.regular}</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                          DISCOUNTED
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-[#053276]">{service.discounted}</span>
                        <span className="text-gray-600 text-sm">/{service.unit}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[#053276]">{service.regular}</span>
                      <span className="text-gray-600 text-sm">/{service.unit}</span>
                    </div>
                  )}
                </div>

                <Link to={"/contact"}>
                <button className="w-full bg-gradient-to-r from-[#053276] to-red-800 text-white px-6 py-3 rounded-md hover:opacity-90 transition-all">
                  Book Now
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Pricing */}
      <div className="bg-gray-50 px-4">
        <div className="section Resizer mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-16">
            Why Our Pricing Works for You
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'No Hidden Fees',
                desc: 'What you see is what you pay'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Premium Quality',
                desc: 'Professional results every time'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Flexible Packages',
                desc: 'Customizable to your needs'
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: 'Best Value',
                desc: 'Competitive rates with discounts'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#053276] to-red-800 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Notes */}
      <div className="bg-white px-4">
        <div className="section Resizer mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-[#053276]/20">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Important Pricing Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#053276] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black mb-1">Discounted Rates</h4>
                  <p className="text-gray-700 text-sm">Available for bulk bookings and returning clients</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#053276] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black mb-1">Session Duration</h4>
                  <p className="text-gray-700 text-sm">Sessions are typically 2-4 hours depending on service</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#053276] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black mb-1">Delivery Time</h4>
                  <p className="text-gray-700 text-sm">Edited content delivered within 5-7 business days</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#053276] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black mb-1">Booking Deposit</h4>
                  <p className="text-gray-700 text-sm">50% deposit required to secure your booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Services CTA */}
      <div className="bg-gradient-to-r from-[#053276] to-red-800 px-4">
        <div className="section Resizer mx-auto text-center">
          <MessageSquare className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Something Custom?
          </h2>
          <p className="text-white/90 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Is there anything you want to achieve that isn't listed? DM us and let's discuss how we can create a custom package tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link to={"/contact"}>
           <button className="px-8 py-3 bg-white text-[#053276] rounded-md text-base font-semibold cursor-pointer hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
           </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-md text-base font-semibold cursor-pointer hover:bg-white hover:text-[#053276] transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call: +234 905 246 4819 
            </button>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="Resizer mx-auto px-4 pb-24 pt-24">
        <div className="relative overflow-hidden bg-[#053276] rounded-md">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>

          <div className="relative z-10 text-center py-16 px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Book Your Session?
            </h2>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Reserve your spot today and let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <button className="px-8 py-3 bg-white text-[#053276] rounded-md text-base font-semibold cursor-pointer hover:scale-105 transition-all duration-300">
              Book Your Session Now
            </button>
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

export default Pricing;