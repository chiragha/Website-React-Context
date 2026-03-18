import React from "react";
import { GiTwirlyFlower } from "react-icons/gi";
import contact from "../assets/img1.avif";

export default function ContactSection() {
  return (
    <section className="bg-[#f7f4f3] py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE FORM */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#5a2a2a] mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Have a question or feedback? <br />
            Reach out to us using the form below.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-400 rounded-full px-4 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-[#5a2a2a]"
            />

            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-400 rounded-full px-4 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-[#5a2a2a]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-400 rounded-full px-4 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-[#5a2a2a]"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-400 rounded-lg px-4 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-[#5a2a2a]"
            />

            <button className="bg-[#5a2a2a] text-white px-6 py-2 md:py-3 rounded-full w-full hover:bg-[#7a3a3a] transition">
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          
          {/* IMAGE CONTAINER */}
          <div className="relative w-[250px] sm:w-[300px] md:w-[400px] aspect-[3/4]">
            <div
              className="w-full h-full bg-cover bg-center rounded-xl shadow-lg"
              style={{ backgroundImage: `url(${contact})` }}
            />
          </div>

          {/* ORBIT FLOWER */}
          <div className="absolute bottom-0 left-0 sm:-left-4 sm:-bottom-4 animate-spin-slow">
            <GiTwirlyFlower
              className="text-[#6a0610]"
              size="4em"
            />
          </div>

        </div>
      </div>
    </section>
  );
}