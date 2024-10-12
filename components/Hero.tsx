import { FaLocationArrow } from "react-icons/fa6";
import React from "react";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Globe from "./ui/GridGlobe";
import { SparklesCore } from "./ui/Sparkles";

const Hero: React.FC = () => {
  return (
    <div className="pb-10 sm:pb-20 pt-24 sm:pt-36">
      <div className="relative">
        <Spotlight
          className="-top-20 -left-10 sm:-left-32 sm:-top-20 h-[50vh] sm:h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[40vh] sm:h-[80vh] w-[70vw] sm:w-[50vw] top-5 sm:top-10 left-1/2 sm:left-full"
          fill="purple"
        />
        <Spotlight
          className="left-1/2 sm:left-80 top-14 sm:top-28 h-[40vh] sm:h-[80vh] w-[70vw] sm:w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-10 sm:my-20 z-10">
        <div className="w-[90vw] sm:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xl text-center text-blue-100 max-w-80">
            Welcome Guys
          </p>

          <TextGenerateEffect
            words="I'm Zied, a Computer Science Student from Tunisia."
            className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-4"
          />
          <div className="w-full h-full relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Remove the radial gradient div to make background transparent */}
          </div>

          <div className="mt-28 sm:mt-32 w-full max-w-[80vw] sm:max-w-xl">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
