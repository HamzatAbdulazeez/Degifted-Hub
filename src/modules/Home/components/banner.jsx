import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DynamicBanner = () => {
  const [floatingElements, setFloatingElements] = useState([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const count = isMobile ? 8 : 20;
    const elements = [];

    for (let i = 0; i < count; i++) {
      elements.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 80 + 10,
        delay: Math.random() * 10,
        duration: Math.random() * 10 + 15,
        size: Math.random() > 0.6 ? "w-2 h-2" : "w-1 h-1",
      });
    }

    setFloatingElements(elements);
  }, [isMobile]);

  const imageCards = [
    {
      title: "Digifted Studios (Audio-Visual & Photography)",
      imageUrl:
        "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075919/DigiftedHub/Rectangle_5_eydtef.jpg",
    },
    {
      title: "Digifted Live & Events (Live Streaming & Event Coverage)",
      imageUrl:
        "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759075915/DigiftedHub/Rectangle_6_l7utcl.jpg",
    },
    {
      title: "Digifted Corporate Solutions (Business-Focused Media)",
      imageUrl:
        "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769225600/DigiftedHub/0305_638146212701526352_fdegiu.jpg",
    },
    {
      title: "Digifted Digital Marketing (Online Growth & Branding)",
      imageUrl:
        "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769225662/DigiftedHub/istockphoto-1648044864-612x612_sp0l4j.jpg",
    },
    {
      title: "Digifted Creative Services (Post-Production & Content Creation)",
      imageUrl:
        "https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769225740/DigiftedHub/istockphoto-881921586-612x612_xhfnkl.jpg",
    },
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-blue-500/15" />

      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((el) => (
          <span
            key={el.id}
            className={`absolute ${el.size} bg-white/30 rounded-full animate-bounce-slow`}
            style={{
              left: `${el.left}%`,
              top: `${el.top}%`,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-24 md:py-32 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
          Your Vision,{" "}
          <span className="italic bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            Amplified.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mb-6">
          From cinematic video productions to live streaming, photography, and
          digital marketing, Digifted Hub brings your ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/services">
            <button className="px-8 py-3.5 border border-white/40 text-white rounded-full hover:bg-white/10 transition">
              Explore Services
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white hover:opacity-90 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative w-full overflow-x-auto pb-10  -mt-14 scrollbar-hide">
        <div
          className={`flex gap-4 px-4 sm:px-8 w-max ${
            isMobile ? "" : "animate-slide-left-slow"
          }`}
        >
          {[...imageCards, ...(!isMobile ? imageCards : [])].map(
            (card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
              >
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-44 sm:h-52 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-white text-sm sm:text-base line-clamp-2">
                    {card.title}
                  </h3>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes slide-left-slow {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-slide-left-slow {
          animation: slide-left-slow 45s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce 10s ease-in-out infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default DynamicBanner;
