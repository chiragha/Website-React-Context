import React from "react";
import { GiPlantRoots, GiRabbit, GiCardboardBox, GiChemicalDrop } from "react-icons/gi";

export default function ValuesSection() {
 const values = [
  {
    icon: <GiPlantRoots size={40} />,
    title: "purely vegan",
    desc: "Clinical-grade power without the compromise.",
  },
  {
    icon: <GiRabbit size={40} />,
    title: "zero cruelty",
    desc: "Because kindness is the ultimate rebellion.",
  },
  {
    icon: <GiCardboardBox size={40} />, // ✅ fixed
    title: "conscious materials",
    desc: "Low-waste packaging for a cleaner glow.",
  },
  {
    icon: <GiChemicalDrop size={40} />,
    title: "lab for life",
    desc: "Giving ‘lab coat’ the future women of science.",
  },
];

  return (
    <section className="bg-[#f3f3f3] py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[#6a0610] text-3xl font-sans text-center font-semibold mb-10 uppercase">
          Values
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {values.map((item, index) => (
            <div
              key={index}
              className="bg-[#e8cfcf] cursor-pointer rounded-lg p-8 text-center hover:scale-105 transition duration-300"
            >
              {/* ICON */}
              <div className="text-[#6a0610] flex justify-center mb-4">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-[#6a0610] font-sans font-semibold text-lg mb-2">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-xs font-sans text-[#6a0610]">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}