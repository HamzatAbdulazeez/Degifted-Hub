import React, { useState } from 'react';
import BannerSection from './components/Breadcrumb';
import { Video, Mic, Camera, Tv, Music, Trophy, Zap, Users, Award, Briefcase, Rocket, Star, Globe } from 'lucide-react';

const LiveEvents = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  const eventServices = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Live Streaming',
      desc: 'Professional multi-camera live streaming for conferences, webinars, product launches, and corporate events with real-time engagement.'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Event Coverage',
      desc: 'Complete event documentation with photography and videography services that capture every important moment beautifully.'
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'Audio & Stage Management',
      desc: 'Professional sound engineering, stage setup, and technical management for flawless event execution.'
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: 'Hybrid Events',
      desc: 'Seamlessly blend in-person and virtual experiences with our hybrid event solutions for maximum reach and engagement.'
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Concerts & Performances',
      desc: 'Full production services for concerts, shows, and live performances with professional lighting and sound design.'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Awards & Ceremonies',
      desc: 'Elegant production for award ceremonies, galas, and corporate celebrations that create memorable experiences.'
    }
  ];

  const eventTypes = [
    { title: 'Corporate Events', desc: 'Conferences, seminars, AGMs, and corporate gatherings', icon: <Briefcase className="w-6 h-6" /> },
    { title: 'Product Launches', desc: 'Impactful unveilings that generate buzz and excitement', icon: <Rocket className="w-6 h-6" /> },
    { title: 'Concerts & Shows', desc: 'Musical performances and entertainment events', icon: <Music className="w-6 h-6" /> },
    { title: 'Weddings & Celebrations', desc: 'Personal milestones captured with elegance and style', icon: <Star className="w-6 h-6" /> },
    { title: 'Sports Events', desc: 'Live coverage and broadcasting of sporting competitions', icon: <Trophy className="w-6 h-6" /> },
    { title: 'Virtual Events', desc: 'Engaging online experiences and webinars', icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <>
      <BannerSection
        title="Live & Events"
        subtitle="Bringing Your Events to Life with Professional Coverage and Live Streaming"
        backgroundImage="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769229632/DigiftedHub/crowd-partying-stage-lights-live-260nw-2297236397_bobfen.webp"
      />

      {/* Introduction */}
      <div className="bg-white Resizer">
        <div className="section grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769229475/DigiftedHub/live_entertainment_2_sn7mhz.webp"
              alt="Live Events"
              className="rounded-lg w-full h-[400px] md:h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-relaxed mb-4">
              Professional Event Production & Live Streaming
            </h2>
            <p className="text-black text-base leading-loose mb-4">
              At Digifted Hub, we transform events into unforgettable experiences. Whether it's a corporate conference, product launch, concert, or wedding, our team delivers exceptional live production and streaming services.
            </p>
            <p className="text-black text-base leading-loose mb-4">
              With state-of-the-art equipment, experienced technical crew, and creative expertise, we ensure every moment is captured perfectly and broadcasted seamlessly to audiences both on-site and online.
            </p>
            <p className="text-black text-base leading-loose mb-6">
              From planning to execution, we handle all technical aspects so you can focus on making your event a success.
            </p>
          </div>
        </div>
      </div>

      {/* Event Services */}
      <div className="bg-gray-50">
        <div className="section Resizer mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">Our Event Services</h2>
          <p className="text-black text-center mb-16 max-w-2xl mx-auto">
            Comprehensive event production solutions tailored to your specific needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventServices.map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveEvent(idx)}
                onMouseLeave={() => setActiveEvent(null)}
                className={`bg-white rounded-xl p-6 border-2 cursor-pointer transition-all transform hover:scale-105 shadow-md ${activeEvent === idx
                    ? 'border-[#053276] shadow-xl'
                    : 'border-gray-200 hover:border-gray-300'
                  }`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#053276] to-red-800 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Types */}
      <div className="bg-gradient-to-r from-[#053276] to-red-800">
        <div className="section Resizer mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Events We Cover</h2>
          <p className="text-white text-center mb-16 max-w-2xl mx-auto">
            We specialize in a wide range of events, each produced with excellence and attention to detail
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
                style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards` }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-white/90 text-base leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white Resizer">
        <div className="section">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-16">Why Choose Digifted Hub for Your Events?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#053276] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Technical Excellence</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Cutting-edge equipment and experienced technicians ensure flawless execution
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#053276] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Expert Team</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Professional crew with years of experience in event production and live streaming
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#053276] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Proven Track Record</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Successfully delivered hundreds of events with exceptional client satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="Resizer mx-auto px-6 pb-24">
        <div className="relative overflow-hidden bg-[#053276] rounded-md">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>

          <div className="relative z-10 text-center py-16 px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your event needs and create an experience that exceeds expectations. Contact us today for a consultation.
            </p>
            <button className="px-8 py-3 bg-white text-[#053276] rounded-md text-base font-semibold cursor-pointer hover:scale-105 transition-all duration-300">
              Book a Consultation
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

export default LiveEvents;