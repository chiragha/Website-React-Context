import React from "react";
import { Link } from "react-router-dom";


const GlowCard = ({ image, title, subtitle }) => {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="rounded-xl overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-[460px] object-cover"
        />
      </div>

      {/* Text */}
      <h3 className="mt-4 font-sans text-[red-700] font-semibold text-lg text-[#6a0610]">{title}</h3>
      <p className="text-gray-600 font-sans text-sm">{subtitle}</p>

      {/* Button */}
      <Link to="/products" className="mt-3 border font-sans border-[#6a0610] text-[#6a0610] text-md px-4 py-1 cursor-pointer rounded-xl w-fit hover:bg-white hover:text-[#6a0610] transition">
        Shop All →
      </Link>
    </div>
  );
};

export default GlowCard;