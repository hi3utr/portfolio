"use client";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";

export function MovingCard() {
  return (
    <div className="h-full rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden mt-12">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
