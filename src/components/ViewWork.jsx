import React from "react";
import SplitImage from "./SplitImage";
import ViewWorkButton from "./ViewWorkButton";
import ViewWorkText from "./ViewWorkText";

export default function ViewWork() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      <SplitImage />

      <ViewWorkText />

      <ViewWorkButton />

    </section>
  );
}