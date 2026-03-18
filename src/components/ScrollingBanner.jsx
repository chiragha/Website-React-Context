import React from "react";

const ScrollingBanner = () => {
  return (
    <div className="w-full h-[50px] bg-[#dbe7eb] overflow-hidden mt-3 flex items-center">
      
      <div className="flex whitespace-nowrap animate-scroll">

        {/* Repeat text multiple times for smooth loop */}
     {[...Array(12)].map((_, i) => (
    <span key={i} className="mx-8 text-lg font-medium text-[#4d3030]">
      ✦ Transform Your Beauty Routine
    </span>
  ))}

      

      </div>

    </div>
  );
};

export default ScrollingBanner;