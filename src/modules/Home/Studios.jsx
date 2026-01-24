import React, { useState } from 'react';
import BannerSection from './components/Breadcrumb';
import { Camera, Video, Palette, Mic, Film, Play, Monitor, Lightbulb, Music, Image, Layers, Sparkles } from 'lucide-react';

const Studio = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    { 
      icon: <Video className="w-8 h-8" />, 
      title: 'Video Production', 
      desc: 'Professional video production services from concept to final delivery, including commercials, documentaries, and corporate videos with cinematic quality.' 
    },
    { 
      icon: <Camera className="w-8 h-8" />, 
      title: 'Photography', 
      desc: 'Creative photography services for products, events, portraits, and commercial campaigns that capture your brand essence with stunning clarity.' 
    },
    { 
      icon: <Palette className="w-8 h-8" />, 
      title: 'Graphic Design', 
      desc: 'Stunning visual designs for branding, marketing materials, social media content, and print collateral that make your brand stand out.' 
    },
    { 
      icon: <Mic className="w-8 h-8" />, 
      title: 'Audio Production', 
      desc: 'Professional audio recording, mixing, and mastering for podcasts, music, voiceovers, and sound design with crystal-clear quality.' 
    },
    { 
      icon: <Film className="w-8 h-8" />, 
      title: 'Animation', 
      desc: '2D and 3D animation services including motion graphics, explainer videos, and character animation that bring your stories to life.' 
    },
    { 
      icon: <Monitor className="w-8 h-8" />, 
      title: 'Live Streaming', 
      desc: 'High-quality live streaming solutions for events, webinars, conferences, and broadcasts with professional multi-camera setups.' 
    }
  ];

  const studioFeatures = [
    { title: 'Professional Equipment', desc: 'Latest cameras, lighting systems, and recording gear for premium production quality', icon: <Camera className="w-6 h-6" /> },
    { title: 'Versatile Spaces', desc: 'Multiple studio rooms designed for different types of shoots and recordings', icon: <Layers className="w-6 h-6" /> },
    { title: 'Expert Team', desc: 'Talented professionals with years of experience in multimedia production', icon: <Sparkles className="w-6 h-6" /> },
    { title: 'Post-Production Suite', desc: 'Advanced editing bays with industry-standard software and hardware', icon: <Play className="w-6 h-6" /> },
    { title: 'Green Screen Studio', desc: 'Chroma key capabilities for unlimited creative possibilities', icon: <Film className="w-6 h-6" /> },
    { title: 'Sound Stage', desc: 'Acoustically treated spaces for pristine audio recording and production', icon: <Music className="w-6 h-6" /> }
  ];

  return (
    <>
      <BannerSection
        title="Our Studio"
        subtitle="Where Creativity Meets Technology - State-of-the-art facilities for your creative vision"
        backgroundImage="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769226386/DigiftedHub/istockphoto-1062278194-612x612_k7nnza.jpg"
      />

      {/* Studio Introduction */}
      <div className="bg-white Resizer">
        <div className="section grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760373483/DigiftedHub/Rectangle_14_1_y7vwep.jpg"
              alt="Digifted Studio"
              className="h-[350px] md:h-[350px] w-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-relaxed mb-4">
              Welcome to Digifted Studio
            </h2>
            <p className="text-black text-base leading-loose mb-4">
              Our state-of-the-art facility is equipped with cutting-edge equipment, modern studio designs, and creative props that inspire imagination and excellence. Every corner of our studio is designed to bring your creative vision to life.
            </p>
            <p className="text-black text-base leading-loose mb-4">
              From high-end video production to professional photography, live streaming, and audio recording, our studio provides the perfect environment for creating content that captivates and engages your audience.
            </p>
            <p className="text-black text-base leading-loose mb-6">
              With versatile spaces, professional lighting setups, and the latest technology, we offer everything you need to produce world-class multimedia content.
            </p>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="bg-gray-50 px-4">
        <div className="section Resizer mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">Our Studio Services</h2>
          <p className="text-black text-center mb-16 max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand and captivate your audience
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveService(idx)}
                onMouseLeave={() => setActiveService(null)}
                className={`bg-white rounded-xl p-6 border cursor-pointer transition-all transform hover:scale-105 shadow-md ${
                  activeService === idx 
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

      {/* Studio Features */}
      <div className="bg-gradient-to-r from-[#053276] to-red-800 px-4">
        <div className="section Resizer mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Studio Features & Facilities</h2>
          <p className="text-white text-center mb-16 max-w-2xl mx-auto">
            Explore the exceptional facilities and equipment that make Digifted Hub the ultimate creative destination
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studioFeatures.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
                style={{ 
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards` 
                }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/90 text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="bg-white Resizer">
        <div className="section">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-16">Why Choose Our Studio?</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#053276] rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Creative Freedom</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Our studio provides the perfect environment for creativity to flourish, with flexible spaces that adapt to your unique needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#053276] rounded-lg flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Latest Technology</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    We invest in cutting-edge equipment and software to ensure your productions meet the highest industry standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#053276] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Professional Support</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Our experienced team is always ready to assist you throughout your production journey, from planning to final delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Studio Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#053276] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-base">4K and 8K video recording capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#053276] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-base">Professional lighting and grip equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#053276] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-base">Multi-camera live streaming setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#053276] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-base">Sound-treated recording rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#053276] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-base">Comfortable client lounge and viewing area</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#053276] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-base">Creative props and backdrops library</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="Resizer mx-auto px-4 pb-24">
        <div className="relative overflow-hidden bg-[#053276] rounded-md">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>

          <div className="relative z-10 text-center py-16 px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Book Our Studio?
            </h2>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you need a full production team or just want to rent our space, we're here to help bring your creative vision to life. Book a studio tour or consultation with our team to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 border border-white text-white rounded-md text-base cursor-pointer hover:bg-white hover:text-[#053276] transition-all duration-300">
                Contact Us
              </button>
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

export default Studio;