import React from "react";
import { MovingCard } from "./MovingCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center py-24"
    >
      <div className="text-4xl md:text-5xl font-bold text-center">
        Kind words from <span className="text-purple">satisfied clients</span>
      </div>
      <MovingCard />
    </section>
  );
};

export default Testimonials;
