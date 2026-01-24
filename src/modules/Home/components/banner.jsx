import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const DynamicBanner = () => {
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Fewer particles on mobile for better performance
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 12 : 24;

    const elements = [];
    for (let i = 0; i < count; i++) {
      elements.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: Math.random() * 12 + 18,
        size: Math.random() > 0.6 ? 'w-2 h-2' : 'w-1 h-1', // slightly larger on mobile
      });
    }
    setFloatingElements(elements);
  }, []);

  const imageCards = [
    {
      title: 'Digifted Studios (Audio-Visual & Photography)',
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075919/DigiftedHub/Rectangle_5_eydtef.jpg'
    },
    {
      title: 'Digifted Live & Events (Live Streaming & Event Coverage)',
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075915/DigiftedHub/Rectangle_6_l7utcl.jpg'
    },
    {
      title: 'Digifted Corporate Solutions (Business-Focused Media)',
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769225600/DigiftedHub/0305_638146212701526352_fdegiu.jpg'
    },
    {
      title: 'Digifted Digital Marketing (Online Growth & Branding)',
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769225662/DigiftedHub/istockphoto-1648044864-612x612_sp0l4j.jpg'
    },
    {
      title: 'Digifted Creative Services (Post-Production & Content Creation)',
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769225740/DigiftedHub/istockphoto-881921586-612x612_xhfnkl.jpg'
    },
    // Duplicate first card for seamless loop
    {
      title: 'Digifted Studios (Audio-Visual & Photography)',
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075919/DigiftedHub/Rectangle_5_eydtef.jpg'
    },
  ];

  return (
    <div className="relative w-full min-h-screen md:h-[90vh] lg:h-screen bg-black overflow-hidden">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-blue-500/15 animate-pulse-slow"></div>

      {/* Floating Elements - reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((el) => (
          <div
            key={el.id}
            className={`absolute ${el.size} bg-white/30 rounded-full animate-bounce-slow`}
            style={{
              left: `${el.left}%`,
              top: `${Math.random() * 80 + 10}%`, // better vertical spread
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Backgrounds - smaller on mobile */}
      <div className="absolute inset-0 opacity-20 md:opacity-30">
        <div className="absolute -top-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 md:w-80 md:h-80 bg-blue-500 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 md:w-72 md:h-72 bg-pink-500 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[60vh] text-center px-4 sm:px-6 lg:px-8 py-12 md:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 md:mb-10 tracking-tight">
          Your Vision,{' '}
          <span className="font-normal italic bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            Amplified.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl md:max-w-3xl mb-8 md:mb-12 leading-relaxed">
          From cinematic video productions to high-quality live streaming, photography, and digital marketing, Digifted Hub brings your ideas to life with precision and creativity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link to={"/services"}>
            <button className="px-8 py-3.5 sm:py-4 bg-transparent border-2 border-white/40 text-white rounded-full font-medium backdrop-blur-md hover:border-white/70 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Explore Services
            </button></Link>
          <Link to={"/contact"}>
            <button className="px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-purple-500/30">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Horizontal Image Gallery - mobile friendly */}
      <div className="absolute bottom-0 left-0 right-0 h-64 sm:h-80 md:h-96 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
        <div className="flex gap-4 sm:gap-6 px-4 sm:px-8 animate-slide-left-slow w-max">
          {imageCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-52 sm:h-60 md:h-70 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 snap-center hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-3/4 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(card.title))}
                />
              </div>
              <div className="p-3 sm:p-4 text-center">
                <h3 className="text-white font-medium text-sm sm:text-base line-clamp-2">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes slide-left-slow {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Adjusted for seamless loop with duplicate */
        }
        .animate-slide-left-slow {
          animation: slide-left-slow 40s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 12s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 12s infinite ease-in-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-20px); }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DynamicBanner;