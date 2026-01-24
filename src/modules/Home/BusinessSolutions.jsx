import React, { useState } from 'react';
import BannerSection from './components/Breadcrumb';
import { Target, Video, BarChart, Lightbulb, Briefcase, TrendingUp, Rocket, Users, Zap, CheckCircle, Award , Phone } from 'lucide-react';
import { Link } from "react-router-dom";

const BusinessSolutions = () => {
  const [activeSolution, setActiveSolution] = useState(null);

  const solutions = [
    { 
      icon: <Target className="w-8 h-8" />, 
      title: 'Brand Strategy & Development', 
      desc: 'Comprehensive brand positioning, identity design, and messaging strategies that differentiate your business in the marketplace.' 
    },
    { 
      icon: <Video className="w-8 h-8" />, 
      title: 'Corporate Video Production', 
      desc: 'Professional video content for internal communications, training, testimonials, and corporate storytelling that engages your audience.' 
    },
    { 
      icon: <BarChart className="w-8 h-8" />, 
      title: 'Digital Marketing Campaigns', 
      desc: 'Data-driven marketing strategies across social media, content marketing, and digital advertising to grow your business.' 
    },
    { 
      icon: <Lightbulb className="w-8 h-8" />, 
      title: 'Creative Consulting', 
      desc: 'Expert guidance on creative direction, campaign concepts, and innovative solutions to achieve your business objectives.' 
    },
    { 
      icon: <Briefcase className="w-8 h-8" />, 
      title: 'Corporate Events & Webinars', 
      desc: 'Full-service production for corporate events, product launches, town halls, and virtual conferences.' 
    },
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      title: 'Content Marketing Solutions', 
      desc: 'Strategic content creation including blogs, videos, infographics, and social media content that drives engagement and conversions.' 
    }
  ];

  const industries = [
    { title: 'Technology & Startups', icon: <Rocket className="w-6 h-6" /> },
    { title: 'Finance & Banking', icon: <TrendingUp className="w-6 h-6" /> },
    { title: 'Healthcare & Wellness', icon: <Briefcase className="w-6 h-6" /> },
    { title: 'Education & Training', icon: <Lightbulb className="w-6 h-6" /> },
    { title: 'Retail & E-commerce', icon: <BarChart className="w-6 h-6" /> },
    { title: 'Real Estate & Property', icon: <Target className="w-6 h-6" /> }
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', desc: 'Understanding your business goals and challenges' },
    { num: '02', title: 'Strategy', desc: 'Developing customized creative solutions' },
    { num: '03', title: 'Execution', desc: 'Bringing concepts to life with excellence' },
    { num: '04', title: 'Optimization', desc: 'Measuring results and refining approach' }
  ];

  return (
    <>
      <BannerSection
        title="Business Solutions"
        subtitle="Strategic Creative Solutions to Elevate Your Brand and Drive Growth"
        backgroundImage="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769226386/DigiftedHub/istockphoto-1062278194-612x612_k7nnza.jpg"
      />

      {/* Introduction */}
      <div className="bg-white Resizer">
        <div className="section grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769232976/DigiftedHub/laptop-thinking-business-black-man-600nw-2655338981_aqx7zh.webp"
              alt="Business Solutions"
              className="rounded-lg w-full h-[350px] md:h-[350px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-relaxed mb-4">
              Strategic Partnership for Business Growth
            </h2>
            <p className="text-black text-base leading-loose mb-4">
              At Digifted Hub, we understand that businesses need more than just creative services—they need strategic partners who can help them achieve their goals and stand out in competitive markets.
            </p>
            <p className="text-black text-base leading-loose mb-4">
              Our business solutions combine creative excellence with strategic thinking to deliver measurable results. From brand development to digital marketing campaigns, we provide comprehensive services that drive growth and engagement.
            </p>
            <p className="text-black text-base leading-loose mb-6">
              We work closely with businesses of all sizes—from startups to established corporations—to create customized solutions that align with their unique objectives and target audiences.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="bg-gray-50 px-4">
        <div className="section Resizer mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">Our Business Solutions</h2>
          <p className="text-black text-center mb-16 max-w-2xl mx-auto">
            Comprehensive services designed to help your business thrive in the digital age
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveSolution(idx)}
                onMouseLeave={() => setActiveSolution(null)}
                className={`bg-white rounded-xl p-6 border cursor-pointer transition-all transform hover:scale-105 shadow-md ${
                  activeSolution === idx 
                    ? 'border-[#053276] shadow-xl' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#053276] to-red-800 rounded-xl flex items-center justify-center text-white mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="bg-gradient-to-r from-[#053276] to-red-800 px-4">
        <div className="section Resizer mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Industries We Serve</h2>
          <p className="text-white text-center mb-16 max-w-2xl mx-auto">
            Delivering tailored creative solutions across diverse sectors
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <div 
                key={idx} 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all text-center"
                style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards` }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Partner With Us */}
      <div className="bg-white Resizer">
        <div className="section">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-16">Why Partner With Digifted Hub?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#053276] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Results-Driven Approach</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We focus on delivering measurable outcomes that contribute to your bottom line and business objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#053276] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Dedicated Account Team</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Work with a dedicated team that understands your business, industry, and long-term goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#053276] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Agile & Responsive</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Quick turnaround times and flexible approaches that adapt to your evolving business needs
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-black text-center mb-12">Our Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-[#053276] mb-4">{step.num}</div>
                  <h4 className="text-xl font-bold text-black mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-base">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-100 px-4">
        <div className="section Resizer mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">Client Success Stories</h2>
          <p className="text-black text-center mb-16 max-w-2xl mx-auto">
            Real results from businesses we've partnered with
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#053276] rounded-full flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#053276] mb-2">250%</div>
              <p className="text-lg font-semibold text-black mb-2">Engagement Increase</p>
              <p className="text-gray-600 text-base">
                For a tech startup through strategic social media campaigns
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#053276] rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#053276] mb-2">45+</div>
              <p className="text-lg font-semibold text-black mb-2">Events Produced</p>
              <p className="text-gray-600 text-base">
                For a leading financial institution across Nigeria
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#053276] rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#053276] mb-2">180%</div>
              <p className="text-lg font-semibold text-black mb-2">ROI Growth</p>
              <p className="text-gray-600 text-base">
                For an e-commerce brand through video marketing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="Resizer mx-auto px-4 pb-24">
        <div className="relative overflow-hidden bg-[#053276] rounded-md">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>

          <div className="relative z-10 text-center py-16 px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our strategic creative solutions can help you achieve your business goals and stand out in your industry. Schedule a free consultation today.
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

export default BusinessSolutions;