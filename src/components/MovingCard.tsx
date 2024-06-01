"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { testimonials } from "@/data";

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
