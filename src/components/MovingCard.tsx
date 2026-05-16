"use client";

import { testimonials } from "@/data";
import { useMotionTier } from "@/components/providers/MotionBudgetProvider";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";

export function MovingCard() {
  const tier = useMotionTier();

  return (
    <div className="relative mt-12 flex h-full flex-col items-center justify-center overflow-hidden rounded-md bg-transparent antialiased">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
        motionTier={tier}
      />
    </div>
  );
}
