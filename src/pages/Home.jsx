import Hero from "../components/Hero";
import ViewWork from "../components/ViewWork";
import React from "react";
import ScrollingBanner from "../components/ScrollingBanner";
import SolarEssentials from "../components/SolarEssentials";
import TestimonialSection from "../components/TestimonialSection";
import Navbar from "../components/Navbar";
import GlowSection from "../components/GlowSection";
import OurStory from "../components/OurStory";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollingBanner />
      <SolarEssentials />
      <ViewWork />
      <TestimonialSection />
      <GlowSection />
      <OurStory />
      <ContactSection />
      <Footer />
    </div>
  );
}
