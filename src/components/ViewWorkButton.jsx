import React from "react";

export default function ViewWorkButton() {
  return (
    <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6">
      <button className="
        flex items-center gap-3 md:gap-6
        bg-white text-black 
        px-4 py-3 md:px-6 md:py-4
        text-sm md:text-base
        shadow-lg 
        transition-transform duration-300 
        hover:scale-105

        w-auto min-w-[140px] md:min-w-[200px]
      ">
        <span className="tracking-widest leading-tight">
          VIEW OUR <br /> WORK
        </span>

        <span className="text-xl md:text-3xl">↗</span>
      </button>
    </div>
  );
}