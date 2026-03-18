import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f9f4f4] mt-20">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-10 py-14 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
         <Link
            to="/"
            className="text-3xl tracking-[6px] font-semibold text-red-700 mb-4"
          >
            ShineGirl.
          </Link>

          <p className="text-gray-600 text-sm leading-relaxed">
            Discover skincare inspired by nature. Our products hydrate,
            protect and nourish your skin with premium ingredients.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-5">

            <div className="iconStyle">
              <FaInstagram />
            </div>

            <div className="iconStyle">
              <FaFacebookF />
            </div>

            <div className="iconStyle">
              <FaTwitter />
            </div>

            <div className="iconStyle">
              <FaYoutube />
            </div>

          </div>
        </div>

        {/* SHOP */}
       <div>
  <h3 className="footerTitle text-red-700">Shop</h3>

  <ul className="footerLinks space-y-2">
    <li>
      <Link to="/products" className="hover:text-red-700 transition">
        Cleanse
      </Link>
    </li>
    <li>
      <Link to="/products" className="hover:text-red-700 transition">
        Hydrate
      </Link>
    </li>
    <li>
      <Link to="/products" className="hover:text-red-700 transition">
        Protect
      </Link>
    </li>
    <li>
      <Link to="/new-arrivals" className="hover:text-red-700 transition">
        New Arrivals
      </Link>
    </li>
  </ul>
</div>

        {/* COMPANY */}
       <div>
  <h3 className="footerTitle text-red-700">Shop</h3>

  <ul className="footerLinks space-y-2">
    <li>
      <Link to="/story" className="hover:text-red-700 transition">
        Our-Story
      </Link>
    </li>
    
  </ul>
</div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="footerTitle text-red-700">
            Subscribe to our newsletter
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            Get skincare tips and exclusive offers.
          </p>

          <div className="flex">

            <input
              type="email"
              placeholder="Enter your email"
              className="border px-3 py-2 w-full outline-none"
            />

            <button className="bg-[#6a0610] text-white px-5 hover:bg-[#8a0c1b] transition">
              Join
            </button>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t text-center py-5 text-sm text-gray-500">
        ©Chiragha 2026 ShineGirl. All rights reserved.
      </div>

    </footer>
  );
}