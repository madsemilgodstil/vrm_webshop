"use client";

import ButtonPri from "../knapper/ButtonPri";
import Image from "next/image";

import hero_billede from "../../../public/images/reuben-mansell-nwOip8AOZz0-unsplash.jpg";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src={hero_billede}
        alt="hero-billede"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-15 text-white gap-8">
        <h1 className="text-3xl font-bold">Welcome to our site</h1>
        <p className="mx-12 font-bold max-w-3xl text-center">
          in beauty and style! We offer a carefully selected range of beauty
          products, elegant bags, beautiful dresses, and luxurious skincare.
          Whether you're looking to upgrade your wardrobe, pamper your skin, or
          find the perfect accessory, we have something for every taste."
        </p>
        <ButtonPri text="Explore" link="/pages/products"></ButtonPri>
      </div>
    </div>
  );
};

export default Hero;
