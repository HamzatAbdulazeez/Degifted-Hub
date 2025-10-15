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
                  <img src="https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759071880/DigiftedHub/Frame_3_bgkxcs.png " className="h-8 w-auto"
                    draggable="false" alt="" />
                </NavLink>
              </div>

              {/* Contact Info */}
              <div className="text-right text-sm space-y-2">
                <p>+234 091 867 9876</p>
                <p>Email: hello@digiftedhub.com</p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              {/* Links */}
              <div className="space-y-8">
                <a href="#" className="block text-lg font-semibold hover:text-pink-500 transition">
                  Studios
                </a>
                <a href="#" className="block text-lg font-semibold hover:text-pink-500 transition">
                  Live & Events
                </a>
                <a href="#" className="block text-lg font-semibold hover:text-pink-500 transition">
                  Blog
                </a>
                <a href="#" className="block text-lg font-semibold hover:text-pink-500 transition">
                  Business Solutions
                </a>
              </div>

              {/* Get Started */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Get Started</h3>
                <p className="text-gray-400 text-sm leading-loose">
                  At DiGifted Hub, we provide strategic capital and unparalleled video and content production services to companies and users.
                </p>
                <button className="bg-gradient text-white px-8 py-3 cursor-pointer rounded-md transition">
                  Get a Quote
                </button>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="text-white hover:text-white flex items-center gap-2">
                  <span>→</span> LINKEDIN
                </a>
                <a href="#" className="text-white hover:text-white flex items-center gap-2">
                  <span>→</span> INSTAGRAM
                </a>
                <a href="#" className="text-white hover:text-white flex items-center gap-2">
                  <span>→</span> X <span className="text-xs italic">(formerly Twitter)</span>
                </a>
                <a href="#" className="text-white hover:text-white flex items-center gap-2">
                  <span>→</span> YOUTUBE
                </a>
                <a href="#" className="text-white hover:text-white flex items-center gap-2">
                  <span>→</span> FACEBOOK
                </a>
                <a href="#" className="text-white hover:text-white flex items-center gap-2">
                  <span>→</span> PINTEREST
                </a>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#5B5B5B] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
              <p>No 0, Company Address, Lagos, Nigeria.</p>
              <p>© Copyright {new Date().getFullYear()} , All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer