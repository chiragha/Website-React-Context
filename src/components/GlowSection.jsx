import React from "react";
import GlowCard from "./GlowCard";
import cleanse from "../assets/cleanse.avif";
import hydrate from "../assets/hydrate.avif";
import protect from "../assets/protect.avif";

const GlowSection = () => {
  const cards = [
    {
      title: "cleanse",
      subtitle: "The ultimate reset.",
      image: cleanse,
    },
    {
      title: "hydrate",
      subtitle: "Maximum dew. Zero effort.",
      image: hydrate,
    },
    {
      title: "protect",
      subtitle: "Shield the shine.",
      image: protect,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-5xl text-[#6a0610] text-center font-sans font-semibold mb-10">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <GlowCard
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default GlowSection;