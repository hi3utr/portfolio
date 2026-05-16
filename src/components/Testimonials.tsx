import React from "react";
import { linkedInRecommendationsUrl } from "@/data";
import { MovingCard } from "./MovingCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center py-[120px]"
    >
      <div className="text-4xl md:text-5xl font-bold text-center">
        Recommendations{" "}
        <span className="text-purple">from LinkedIn</span>
      </div>
      <p className="mt-6 max-w-2xl px-6 text-center text-sm text-gray-400 md:text-base">
        Quotes below match what viewers see under Recommendations on my profile.
        You can confirm or read more on{" "}
        <a
          href={linkedInRecommendationsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple underline-offset-4 hover:underline"
        >
          LinkedIn
        </a>
        .
      </p>
      <MovingCard />
    </section>
  );
};

export default Testimonials;
