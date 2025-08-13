"use client";
import Carousel from "@/components/carousal/Carousal";
import { Hero } from "@/components/layout/hero";
import PrayersSection from "@/components/prayer/prayers-section";
import React from "react";

export default function HomePage() {
  const [searchText, setSearchText] = React.useState("Rajshahi");
  const [clicked, setClicked] = React.useState(false);
  return (
    <>
      <div className="mx-4">
        <Carousel />
        <Hero setSearchText={setSearchText} setClicked={setClicked} />
        <PrayersSection
          searchText={searchText}
          clicked={clicked}
          setClicked={setClicked}
        />
      </div>
    </>
  );
}
