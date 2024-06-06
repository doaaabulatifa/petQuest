"use client";

import Image from "next/image";

import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero overflow-hidden">
      <div className="flex-1 sm:pt-36 padding-x">
        <h1 className="hero__title sm:mt-60 text-9xl font-black">
          Don't buy, ADOPT!
        </h1>

        <p className="hero__subtitle text-2xl">
          Helping abandoned pets find Forever homes, we do not discriminate by
          breed, age, or special needs. We help you rehome!
        </p>

        <CustomButton
          title="View available pets"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
