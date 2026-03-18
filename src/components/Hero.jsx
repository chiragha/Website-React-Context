import heroImg from "../assets/banner.avif";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full h-[85vh] bg-cover bg-center bg-fixed flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="w-full h-full flex flex-col justify-between px-16 py-12">

        {/* Top Text */}
        <div className="max-w-sm font-serif">
         
        </div>

        {/* Moving Heading */}
        <h1
          style={{ transform: `translateY(${offset * 0.3}px)` }}
          className="text-[140px] md:text-[180px] font-extrabold text-[#6a0610] leading-none tracking-tight transition-transform duration-75"
        >
          ShineGirl.
        </h1>

      </div>
    </section>
  );
};

export default Hero;