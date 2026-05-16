"use client";

import { cn } from "@/utils/cn";
import type { MotionTier } from "@/components/providers/MotionBudgetProvider";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

type QuoteItem = {
  id: string;
  quote: string;
  name: string;
  title: string;
  avatar?: string;
  recommenderLinkedInUrl?: string;
};

function TestimonialQuote({ item }: { item: QuoteItem }) {
  return (
    <blockquote>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-0.5 -top-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] select-none"
      />
      <span className="relative z-20 text-base font-normal leading-[1.6] text-gray-100 md:text-xl">
        {item.quote}
      </span>
      <div className="relative z-20 mt-6 flex flex-row items-center gap-3">
        <div className="overflow-hidden rounded-full">
          <Image
            src={item.avatar ?? "/profile.svg"}
            alt={item.name ? `Photo of ${item.name}` : ""}
            width={50}
            height={50}
          />
        </div>
        <span className="flex flex-col gap-1">
          <span className="text-base font-semibold text-white md:text-lg">
            {item.recommenderLinkedInUrl ? (
              <a
                href={item.recommenderLinkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-purple hover:underline"
              >
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </span>
          <span className="text-xs font-normal text-gray-400 md:text-sm">
            {item.title}
          </span>
        </span>
      </div>
    </blockquote>
  );
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  motionTier = "full",
}: {
  items: QuoteItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  motionTier?: MotionTier;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const itemKey = useMemo(() => items.map((i) => i.id).join("|"), [items]);

  function applySpeedVars(el: HTMLElement) {
    if (motionTier === "reduced") {
      el.style.setProperty("--animation-duration", "72s");
      return;
    }
    if (speed === "fast") {
      el.style.setProperty("--animation-duration", "16s");
    } else if (speed === "normal") {
      el.style.setProperty("--animation-duration", "32s");
    } else {
      el.style.setProperty("--animation-duration", "52s");
    }
  }

  function applyDirectionVars(el: HTMLElement) {
    if (direction === "left") {
      el.style.setProperty("--animation-direction", "forwards");
    } else {
      el.style.setProperty("--animation-direction", "reverse");
    }
  }

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    if (motionTier === "minimal" || !container || !scroller) {
      setStart(false);
      return;
    }

    applyDirectionVars(container);
    applySpeedVars(container);

    if (scroller.children.length === items.length) {
      Array.from(scroller.children).forEach((child) => {
        scroller.appendChild(child.cloneNode(true));
      });
    }

    setStart(true);
  }, [itemKey, motionTier, direction, speed, items.length]);

  if (motionTier === "minimal") {
    return (
      <div
        className={cn(
          "relative z-20 mx-auto w-full max-w-[100vw] px-4",
          className,
        )}
      >
        <ul className="flex max-w-5xl flex-col gap-4 md:gap-5">
          {items.map((item) => (
            <li
              key={item.id}
              className="relative w-full shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6"
              style={{
                background:
                  "linear-gradient(103.4deg, #04071D 16.66%, #0C0E23 81.61%)",
              }}
            >
              <TestimonialQuote item={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[100vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full w-max shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[600px]"
            style={{
              background:
                "linear-gradient(103.4deg, #04071D 16.66%, #0C0E23 81.61%)",
            }}
          >
            <TestimonialQuote item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
