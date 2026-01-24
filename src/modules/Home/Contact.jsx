import React, { useState } from 'react';
import BannerSection from './components/Breadcrumb';
import { Phone, Mail, Facebook, Instagram, Youtube, X, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

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
            info: '+234 9052464819',
            link: 'tel:+2349052464819'
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
            info: '51, Babaponmile street Onipetes estate Mangoro Ikeja , Lagos State',
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
            <div className="bg-white px-4">
                <div className="section Resizer mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">Get In Touch</h2>
                    <p className="text-black text-center mb-16 max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear from you. Reach out through any of these channels.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient rounded-xl p-6 text-center hover:scale-105 transition-all cursor-pointer"
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
                                {/* Social Media Links - Added here */}
                                <div className="flex items-center gap-5 mb-8">
                                    <a
                                        href="https://www.facebook.com/digiftedhub/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#053276] hover:text-blue-700 transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-7 h-7" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/digiftedhub/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#053276] hover:text-pink-600 transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-7 h-7" />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@DigiftedStudio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#053276] hover:text-red-600 transition-colors"
                                        aria-label="YouTube"
                                    >
                                        <Youtube className="w-7 h-7" />
                                    </a>
                                    <a
                                        href="https://x.com/DigiftedHub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#053276] hover:text-black transition-colors"
                                        aria-label="X (Twitter)"
                                    >
                                        <X className="w-7 h-7" />
                                    </a>
                                </div>
                            </div>


                        </div>

                        {/* Contact Form */}
                        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
                            <div className="space-y-4">
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
                                    className="w-full bg-gradient text-white px-8 py-4 rounded-md font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
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
            <div className="bg-gray-100">
                <div className="section Resizer mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-4">
                        Find Us
                    </h2>
                    <p className="text-black text-center mb-10 md:mb-12 max-w-3xl mx-auto text-base">
                        Our studio is located in the heart of Ikeja, Lagos. Visit us at Onipetesi Estate to discuss your project and see our facilities firsthand.
                    </p>

                    {/* Google Maps Embed */}
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.328320953773!2d3.3238490749936627!3d6.606061793387874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b912355ca454b%3A0x33c58820188376d!2sOnipetesi%20Estate!5e0!3m2!1sen!2sng!4v1769230209338!5m2!1sen!2sng"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Digifted Hub Location - Onipetesi Estate"
                        />
                    </div>

                    {/* Optional: Add address below map */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-800 font-medium">
                            51, Babaponmile Street, Onipetesi Estate, Mangoro, Ikeja, Lagos State
                        </p>
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