import React from "react";
import beforeImage from "../assets/before.avif";
import afterImage from "../assets/after.avif";

export default function SplitImage() {
  return (
    <div className="w-full h-[400px] md:h-full flex relative bg-[#f8d7da] md:bg-transparent">
      
      {/* Left Image (hidden on mobile) */}
      <div
        className="hidden md:block w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${beforeImage})` }}
      />

      {/* Right Image (hidden on mobile) */}
      <div
        className="hidden md:block w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      />

      {/* Divider (only for desktop) */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-white/60" />

      {/* Optional Mobile Content */}
      <div className="flex md:hidden items-center justify-center w-full">
        <h2 className="text-xl font-semibold text-[#6a0610]">
          Glow Transformation ✨
        </h2>
      </div>

    </div>
  );
}