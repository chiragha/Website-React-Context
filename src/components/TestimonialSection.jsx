import React from "react";
export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#e6d8b3] py-8 px-6 mt-20 flex items-center justify-center">

      <div className="max-w-6xl text-center">

        {/* Quote */}
        <h2 className="
          text-5xl md:text-[90px] 
          font-bold 
          text-transparent 
          stroke-text
          leading-tight
        ">
          “the search for real
          <br />
          results is over at last.”
        </h2>

        {/* Author */}
        <p className="mt-10 text-lg text-[#e06666]">
          – Riley, SA
        </p>

      </div>

    </section>
  );
}