import { useEffect, useRef, useState } from "react";
import React from "react";
import about from "../assets/about.avif";
import { Link } from "react-router-dom";

export default function OurStory() {
  const sectionRef = useRef(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Fade only when section starts leaving screen
      if (rect.bottom < windowHeight) {
        const progress = rect.bottom / windowHeight;
        setOpacity(progress);
      } else {
        setOpacity(1); // full opacity when section fully visible
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-[90vh] bg-fixed bg-center bg-cover flex items-center"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between px-10">
        {/* LEFT TEXT */}
        <div
          style={{ opacity }}
          className="w-[40%] text-white transition-opacity duration-300"
        >
          <p className="text-5xl text-[#6a0610] font-bold tracking-widest mb-3 uppercase">the new standard</p>

         
        </div>

        {/* RIGHT TEXT */}
        <div
          style={{ opacity }}
          className="w-[40%] text-white text-right transition-opacity duration-300"
        >
          <Link to="/story" className="bg-[#6a0610] text-white text-md top-4 px-5 py-2 font-sans cursor-pointer rounded">
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}
