import React from "react";
import beforeImage from "../assets/before.avif";
import afterImage from "../assets/after.avif";

export default function SplitImage() {
  return (
    <div className="w-full h-full flex">
      
      {/* Left Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${beforeImage})` }}
      />

      {/* Right Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      />

      {/* Divider */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/60" />

    </div>
  );
}