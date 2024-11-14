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
        <h1 className="text-3xl font-bold">Velkommen til vores side</h1>
        <p className="mx-12 font-bold max-w-3xl text-center">
          Velkommen til vores købsportal – din ultimative destination for alt
          inden for skønhed og stil! Vi tilbyder et håndplukket udvalg af
          beauty-produkter, elegante tasker, smukke kjoler og luksuriøs
          skincare. Uanset om du ønsker at opgradere din garderobe, forkæle din
          hud eller finde det perfekte tilbehør, har vi noget for enhver smag.
        </p>
        <ButtonPri text="Gå på opdagelse" link="/pages/products"></ButtonPri>
      </div>
    </div>
  );
};

export default Hero;
