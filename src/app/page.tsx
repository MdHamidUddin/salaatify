"use client";
import Carousel from "@/components/carousal/Carousal";
import { Hero } from "@/components/layout/hero";
import PrayersSection from "@/components/prayer/prayers-section";
import React from "react";

export default function HomePage() {
  const [clicked, setClicked] = React.useState(false);
  return (
    <>
      <div className="mx-4">
        <Carousel />
        <Hero />
        <PrayersSection clicked={clicked} setClicked={setClicked} />
      </div>
    </>
  );
}
