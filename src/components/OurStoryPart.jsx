import React from "react";
import storyImg from "../assets/img5.avif"; // replace with your image

export default function OurStoryPart() {
  return (
    <section className="bg-[#e9e3d6] py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[#6a0610] text-4xl font-semibold font-sans uppercase mb-4">
            Lorem Ipsum
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores 
            sequi laudantium nesciunt recusandae suscipit vero
             quam ipsum iure nobis repellat quibusdam, iste, error consequatur. Dolore!
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores 
            sequi laudantium nesciunt recusandae suscipit vero
             quam ipsum iure nobis repellat quibusdam, iste, error consequatur. Dolore!
          </p>

          {/* SIGNATURE */}
          <p className="text-[#6a0610] italic text-7xl font-signature">
            Lorem Ipsum
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={storyImg}
            alt="Our Story"
            className="rounded-xl w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}