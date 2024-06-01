import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { IconArrowUpRight } from "@tabler/icons-react";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <BackgroundBeams className="h-[80vh]" />
      <div className="flex flex-col justify-center items-center relative z-10 gap-7 text-blue-100">
        <TextGenerateEffect
          className="md:text-7xl text-5xl font-bold text-center"
          words="Welcome to My Portfolio"
        />
        <div className="md:text-2xl text-base text-center">
          Hi! I’m Hieu, but you can call me Wayne.
          <br />A Web Developer based in Vietnam.
        </div>
        <ShimmerButton
          title="Visit my works"
          icon={<IconArrowUpRight />}
          position="right"
        />
      </div>
    </div>
  );
};

export default Hero;
