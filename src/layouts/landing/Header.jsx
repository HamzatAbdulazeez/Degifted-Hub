import React, { useState } from 'react';
import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Our Services', path: '/services' },
        { label: 'Studios', path: '/studios' },
        { label: 'Rental Pricing', path: '/pricing' },
        { label: 'Live & Events', path: '/live-events' },
        { label: 'Business Solutions', path: '/business-solutions' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="bg-white text-black ">
                {/* Top contact bar */}
                <div className="hidden md:block border-b border-black/20">
                    <div className="Resizer py-3">
                        <div className="flex justify-between items-center text-sm">
                            {/* Logo at center-left */}
                            <div className="flex items-center space-x-2">
                                {/* Social media icons */}
                                <div className="flex items-center space-x-4 pr-6">
                                    <a href="https://www.facebook.com/digiftedhub/" target='blank' className="hover:text-pink-200 transition-colors">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="https://www.instagram.com/digiftedhub/" target='blank' className="hover:text-pink-200 transition-colors">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="https://www.youtube.com/@DigiftedStudio" target='blank' className="hover:text-pink-200 transition-colors">
                                        <Youtube size={20} />
                                    </a>
                                    {/* <a href="https://www.tiktok.com/@digiftedhub" target='blank' className="hover:text-pink-200 transition-colors">
                                        <SiTiktok size={20} />
                                    </a> */}
                                    <a href="https://x.com/DigiftedHub" target='blank' className="hover:text-pink-200 transition-colors">
                                        <X size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Right side content */}
                            <div className="flex items-center">
                                {/* Contact info with border separators */}
                                <div className="flex items-center">
                                    <span className="pl-6 pr-6 border-l border-white/30">+234 9052464819</span>
                                    <span className="pl-6 pr-6 border-l border-white/30">Email:  info@digiftedhub.com                                    </span>
                                    <span className="pl-6 border-l border-white/30">51, Babaponmile street Onipetes estate Mangoro Ikeja , Lagos State</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main navigation */}
                <div className="Resizer">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="flex items-center space-x-2">
                                <NavLink to="/">
                                    <img
                                        src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1763488041/DigiftedHub/unnamed__1_-removebg-preview_gedaq0.png"
                                        alt=""
                                        draggable="false"
                                        className="w-52 h-auto"
                                    />
                                </NavLink>
                            </div>
                        </div>


                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `transition-colors duration-200 font-normal text-sm ${isActive ? 'text-red-500 font-semibold' : 'text-black hover:text-red-500'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Contact Us Button & Mobile Menu Toggle */}
                        <div className="flex items-center space-x-4">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `hidden md:block cursor-pointer bg-[#053276] text-white px-8 py-3 rounded-md font-normal transition-colors duration-200 ${isActive ? 'bg-red-500 hover:bg-red-600' : 'hover:bg-[#053276]/90'
                                    }`
                                }
                            >
                                Contact Us
                            </NavLink>

                            {/* Mobile menu button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden p-2 rounded-md hover:bg-white/20 transition-colors"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="fixed inset-0 bg-black/50" onClick={toggleMobileMenu}></div>
                    {/* Flyout Menu */}
                    <div className="fixed top-0 right-0 h-full w-80 bg-black text-white transform transition-transform duration-300 ease-in-out">
                        <div className="p-6">
                            {/* Mobile menu header */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-2">
                                    <NavLink to="/">
                                        <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1763488041/DigiftedHub/unnamed__1_-removebg-preview_gedaq0.png" className="h-10 w-auto"
                                            draggable="false" alt="" />
                                    </NavLink>
                                </div>
                                <button
                                    onClick={toggleMobileMenu}
                                    className="p-2 rounded-md hover:bg-white/20 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Mobile Navigation */}
                            <nav className="space-y-4">
                                {navItems.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block py-2 px-6 rounded-lg transition-colors duration-200 text-base ${isActive ? 'bg-white/20 text-white font-semibold' : 'hover:bg-white/20'
                                            }`
                                        }
                                        onClick={toggleMobileMenu}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </nav>

                            {/* Mobile Contact Us Button */}
                            <div className="mt-8">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `w-full bg-white text-black px-6 py-3 rounded-md transition-colors duration-200 ${isActive ? 'bg-red-100 text-red-500' : 'hover:bg-pink-50'
                                        }`
                                    }
                                    onClick={toggleMobileMenu}
                                >
                                    Contact Us
                                </NavLink>
                            </div>


                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;