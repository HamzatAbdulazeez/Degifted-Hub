import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Linkedin, Instagram, X, Youtube, Facebook,  ArrowRight } from 'lucide-react';
export class Footer extends Component {
  render() {
    return (
      <>
        <footer
          className="bg-black text-white pt-16 pb-6 px-6 md:px-8 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/ddj0k8gdw/image/upload/v1760532309/DigiftedHub/Group_1321314870_x5gyxo.jpg')",
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#5B5B5B] pb-6 gap-6">
              {/* Logo */}
              <div className="flex flex-col gap-2">
                <NavLink to="/">
                  <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1763488041/DigiftedHub/unnamed__1_-removebg-preview_gedaq0.png"
                    draggable="false" alt="" />
                </NavLink>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-right text-sm space-y-2">
                <p>+234 9052464819</p>
                <p>Email: info@digiftedhub.com</p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              <div className="space-y-4">

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block text-base  transition ${isActive ? 'text-red-600' : 'text-white hover:text-red-600'
                    }`
                  }
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block text-base  transition ${isActive ? 'text-red-600' : 'text-white hover:text-red-600'
                    }`
                  }
                >
                  Our Services
                </NavLink>

                <NavLink
                  to="/studios"
                  className={({ isActive }) =>
                    `block text-base  transition ${isActive ? 'text-red-600' : 'text-white hover:text-red-600'
                    }`
                  }
                >
                  Studios
                </NavLink>

                <NavLink
                  to="/live-events"
                  className={({ isActive }) =>
                    `block text-base  transition ${isActive ? 'text-red-600' : 'text-white hover:text-red-600'
                    }`
                  }
                >
                  Live & Events
                </NavLink>

                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `block text-base  transition ${isActive ? 'text-red-600' : 'text-white hover:text-red-600'
                    }`
                  }
                >
                  Rental Pricing
                </NavLink>

                <NavLink
                  to="/business-solutions"
                  className={({ isActive }) =>
                    `block text-base  transition ${isActive ? 'text-red-600' : 'text-white hover:text-red-600'
                    }`
                  }
                >
                  Business Solutions
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block text-base  transition ${isActive ? 'text-red-600' : 'text-white hover:text-red-600'
                    }`
                  }
                >
                  Contact Us
                </NavLink>




              </div>

              {/* Get Started */}
              <div className="space-y-6">
                <h3 className="text-xl ">Get Started</h3>
                <p className="text-gray-400 text-sm leading-loose">
                  At Digifted Creations Hub Limited is a leading multimedia and creative production company designed for visionary creators, businesses, and brands.
                </p>
                <NavLink
                  to="/contact"
                  className="text-white hover:text-white flex items-center gap-2"
                >
                  <button className="bg-gradient text-white px-8 py-3 cursor-pointer rounded-md transition">
                    Contact Us
                  </button>
                </NavLink>


              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="text-white hover:text-white flex items-center gap-2">
                  <ArrowRight size={16} />
                  <Linkedin size={16} />
                  LINKEDIN
                </a>
                <a href="https://www.instagram.com/digiftedhub/" target='blank' className="text-white hover:text-white flex items-center gap-2">
                  <ArrowRight size={16} />
                  <Instagram size={16} />
                  INSTAGRAM
                </a>
                <a href="https://x.com/DigiftedHub" target='blank' className="text-white hover:text-white flex items-center gap-2">
                  <ArrowRight size={16} />
                  <X size={16} />
                  <span className="text-xs italic">(formerly Twitter)</span>
                </a>
                <a href="https://www.youtube.com/@DigiftedStudio" target='blank' className="text-white hover:text-white flex items-center gap-2">
                  <ArrowRight size={16} />
                  <Youtube size={16} />
                  YOUTUBE
                </a>
                <a href="https://www.facebook.com/digiftedhub/" target='blank' className="text-white hover:text-white flex items-center gap-2">
                  <ArrowRight size={16} />
                  <Facebook size={16} />
                  FACEBOOK
                </a>
                {/* <a href="#" className="text-white hover:text-white flex items-center gap-2">
                  <ArrowRight size={16} />
                  <Pinterest size={16} />
                </a> */}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#5B5B5B] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white text-center md:text-left">
              <p>51, Babaponmile street, Onipetes estate, Mangoro Ikeja Lagos State.</p>
              <p>&copy; Copyright {new Date().getFullYear()} At Digifted Creations Hub Limited , All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer