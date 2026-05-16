"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useMotionTier } from "@/components/providers/MotionBudgetProvider";

const Hero = () => {
  const tier = useMotionTier();

  return (
    <div className="relative pb-20 pt-36">
      {tier === "full" ? (
        <>
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
        </>
      ) : tier === "reduced" ? (
        <>
          <Spotlight
            className="-top-32 left-[10%] md:left-[30%] h-[70vh] w-[90vw]"
            fill="purple"
          />
          <BackgroundBeams lite className="h-[80vh]" />
        </>
      ) : (
        <div
          className="pointer-events-none absolute inset-x-0 top-16 h-[80vh]"
          aria-hidden
        >
          <div className="mx-auto max-w-4xl px-8">
            <div className="h-[70vh] w-full rounded-[2rem] border border-white/[0.06] bg-gradient-to-b from-indigo-950/45 via-transparent to-transparent" />
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center gap-7 px-6 text-blue-100">
        <TextGenerateEffect
          className="text-center text-5xl font-bold md:text-7xl"
          words="Welcome to My Portfolio"
        />
        <div className="text-center text-base md:text-2xl">
          Hi! I&apos;m Hieu, but you can call me Wayne.
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
