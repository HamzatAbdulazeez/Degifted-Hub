import React, { useEffect, useState } from 'react';

const DynamicBanner = () => {
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Create floating particles
    const elements = [];
    for (let i = 0; i < 30; i++) {
      elements.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: Math.random() * 10 + 15,
        size: Math.random() > 0.5 ? 'w-1 h-1' : 'w-0.5 h-0.5'
      });
    }
    setFloatingElements(elements);
  }, []);

  const imageCards = [
    { 
      title: 'Creative Studios', 
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075919/DigiftedHub/Rectangle_5_eydtef.jpg'
    },
    { 
      title: 'Live Events', 
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075915/DigiftedHub/Rectangle_6_l7utcl.jpg'
    },
    { 
      title: 'Business Solutions', 
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075915/DigiftedHub/Rectangle_6_l7utcl.jpg'
    },
    { 
      title: 'Digital Innovation', 
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075919/DigiftedHub/Rectangle_5_eydtef.jpg'
    },
    // Duplicates for seamless loop
    { 
      title: 'Creative Studios', 
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075919/DigiftedHub/Rectangle_5_eydtef.jpg'
    },
    { 
      title: 'Live Events', 
      imageUrl: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075915/DigiftedHub/Rectangle_6_l7utcl.jpg'
    },
  ];

  return (
    <div className="relative w-full h-[700px] section  md:h-[700px] bg-black overflow-hidden">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-blue-500/20 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute ${element.size} bg-white/40 rounded-full animate-bounce`}
            style={{
              left: `${element.left}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Radial Gradient Backgrounds */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 h-74 flex flex-col items-center justify-center text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-wide">
          Your Vision,{' '}
          <span className="font-normal italic bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            Amplified.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-12 px-4 leading-relaxed">
        From cinematic video productions to high-quality live streaming, photography, and digital marketing, Digifted Hub brings your ideas to life with precision and creativity.

        </p>

        {/* CTA Buttons - Centered */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-medium backdrop-blur-sm hover:border-white/60 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            Explore Services
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-purple-500/25">
            Get a Quote
          </button>
        </div>
      </div>

      {/* Moving Image Gallery */}
      <div className="absolute bottom-5 left-0 right-0 h-80 overflow-hidden">
        <div className="flex gap-8 p-8 animate-slide-left">
          {imageCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 h-70  backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image with fallback to gradient */}
              {card.imageUrl ? (
                <img 
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-50 object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              
              {/* Fallback gradient background */}
              <div 
                className="w-full h-10 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-medium text-lg"
                style={{ display: card.imageUrl ? 'none' : 'flex' }}
              >
                {card.title}
              </div>
              
              {/* Card Title */}
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold text-lg">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-10%);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }

        .animate-slide-left {
          animation: slide-left 20s linear infinite;
          width: calc(200% + 2rem);
        }
      `}</style>
    </div>
  );
};

export default DynamicBanner;