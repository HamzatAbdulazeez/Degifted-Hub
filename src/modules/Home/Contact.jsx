import React, { useState } from 'react';
import BannerSection from './components/Breadcrumb';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    { 
      icon: <Phone className="w-6 h-6" />, 
      title: 'Phone', 
      info: '+234 XXX XXX XXXX', 
      link: 'tel:+234XXXXXXXXXX' 
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      title: 'Email', 
      info: 'info@digiftedhub.com', 
      link: 'mailto:info@digiftedhub.com' 
    },
    { 
      icon: <MapPin className="w-6 h-6" />, 
      title: 'Location', 
      info: 'Port Harcourt, Rivers State, Nigeria', 
      link: '#' 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: 'Working Hours', 
      info: 'Mon - Sat: 9:00 AM - 6:00 PM', 
      link: '#' 
    }
  ];

  return (
    <>
      <BannerSection
        title="Contact Us"
        subtitle="Let's Bring Your Creative Vision to Life - We're Here to Help"
        backgroundImage="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1769226386/DigiftedHub/istockphoto-1062278194-612x612_k7nnza.jpg"
      />

      {/* Contact Info Cards */}
      <div className="bg-white py-18">
        <div className="section Resizer mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">Get In Touch</h2>
          <p className="text-black text-center mb-16 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Reach out through any of these channels.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-[#053276] to-red-800 rounded-xl p-6 text-center hover:scale-105 transition-all cursor-pointer"
                style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards` }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.info}</p>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Send Us a Message</h3>
              <p className="text-gray-600 text-base leading-loose mb-6">
                Fill out the form and our team will get back to you within 24 hours. We're excited to discuss your project!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#053276] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-base">Quick response time</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#053276] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-base">Free consultation and quote</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#053276] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-base">Professional and friendly team</p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-bold text-black mb-3">Visit Our Studio</h4>
                <p className="text-gray-600 text-base mb-4">
                  Schedule a tour of our facilities and see where the magic happens. We'd love to show you around!
                </p>
                <button className="px-6 py-2 bg-[#053276] text-white rounded-md text-sm font-semibold hover:bg-opacity-90 transition-all">
                  Book Studio Tour
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#053276] text-black"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#053276] text-black"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#053276] text-black"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#053276] text-black"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#053276] text-black resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#053276] to-red-800 text-white px-8 py-4 rounded-md font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-18">
        <div className="section Resizer mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">Find Us</h2>
          <p className="text-black text-center mb-12 max-w-2xl mx-auto">
            Located in the heart of Port Harcourt, our studio is easily accessible and equipped with everything you need.
          </p>
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600 text-lg">Map Location Here</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white Resizer">
        <div className="section">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-2">What are your operating hours?</h3>
              <p className="text-gray-600 text-base">
                We're open Monday through Saturday from 9:00 AM to 6:00 PM. For urgent projects or special requests, we can arrange after-hours sessions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-2">How long does it take to complete a project?</h3>
              <p className="text-gray-600 text-base">
                Project timelines vary depending on scope and complexity. Simple projects can be completed in a few days, while larger productions may take several weeks. We'll provide a detailed timeline during consultation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-2">Do you offer studio rental services?</h3>
              <p className="text-gray-600 text-base">
                Yes! Our studio spaces are available for rent with or without our production crew. Contact us for rental rates and availability.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-2">Can I visit the studio before booking?</h3>
              <p className="text-gray-600 text-base">
                Absolutely! We encourage potential clients to tour our facilities. Schedule a visit through our contact form or give us a call.
              </p>
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

export default ContactUs;