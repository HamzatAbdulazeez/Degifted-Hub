import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer
          className="bg-black text-white pt-16 pb-6 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
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
                  <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1763487665/DigiftedHub/unnamed_1_gnjx1p.jpg"
                    draggable="false" alt="" />
                </NavLink>
              </div>

              {/* Contact Info */}
              <div className="text-right text-sm space-y-2">
                <p>+234 9052464819</p>
                <p>Email:  info@digiftedhub.com                </p>
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
                  <span>→</span> LINKEDIN
                </a>
                <a href="https://www.instagram.com/digiftedhub/" target='blank' className="text-white hover:text-white flex items-center gap-2">
                  <span>→</span> INSTAGRAM
                </a>
                <a href="https://x.com/DigiftedHub" target='blank' className="text-white hover:text-white flex items-center gap-2">
                  <span>→</span> X <span className="text-xs italic">(formerly Twitter)</span>
                </a>
                <a href="https://www.youtube.com/@DigiftedStudio" target='blank' className="text-white hover:text-white flex items-center gap-2">
                  <span>→</span> YOUTUBE
                </a>
                <a href="https://www.facebook.com/digiftedhub/" target='blank' className="text-white hover:text-white flex items-center gap-2">
                  <span>→</span> FACEBOOK
                </a>
                <a href="#" className="text-white hover:text-white flex items-center gap-2">
                  <span>→</span> PINTEREST
                </a>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#5B5B5B] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
              <p>51, Babaponmile street, Onipetes estate, Mangoro Ikeja Lagos State.</p>
              <p>© Copyright {new Date().getFullYear()} At Digifted Creations Hub Limited , All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer