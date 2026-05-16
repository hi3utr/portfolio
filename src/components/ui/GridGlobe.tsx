"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useMotionTier } from "@/components/providers/MotionBudgetProvider";
import { FALLBACK_ARCS } from "./gridGlobeArcGeometry";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

const ARC_PALETTE = ["#06b6d4", "#3b82f6", "#6366f1"] as const;

type GlobeArc = (typeof FALLBACK_ARCS)[number] & { color: string };

function MinimalGlobeBackdrop() {
  return (
    <div
      className="relative flex h-72 md:h-full w-full items-center justify-center overflow-hidden rounded-[1.65rem]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85" />
      <div className="relative h-44 w-44 shrink-0 rounded-full border border-white/15 bg-[radial-gradient(circle_at_30%_28%,rgba(56,189,248,0.35),transparent_58%),linear-gradient(150deg,#0f2558,#08152f)] shadow-[inset_0_0_48px_rgba(0,0,0,0.48)]" />
      <div className="pointer-events-none absolute inset-[18%] rounded-full border border-cyan-400/15 opacity-75" />
    </div>
  );
}

export function GridGlobe() {
  const tier = useMotionTier();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    amount: 0.12,
    margin: "180px 0px",
    once: false,
  });

  const arcsRef = useRef<GlobeArc[] | null>(null);
  if (!arcsRef.current) {
    arcsRef.current = FALLBACK_ARCS.map((arc, index) => ({
      ...arc,
      color: ARC_PALETTE[index % ARC_PALETTE.length],
    }));
  }

  const allArcs = arcsRef.current;

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };


  const trimmedArcs =
    tier === "full" ? allArcs : allArcs.slice(0, Math.min(26, allArcs.length));

  const activeGlobeConfig = {
    ...globeConfig,
    arcTime: tier === "full" ? 1000 : 2600,
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center absolute w-full h-full -left-5 top-36 md:top-40">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden px-4 h-96">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          {tier === "minimal" ? (
            <MinimalGlobeBackdrop />
          ) : (
            <World
              data={trimmedArcs}
              globeConfig={activeGlobeConfig}
              paused={!inView}
              performanceMode={tier === "reduced"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
