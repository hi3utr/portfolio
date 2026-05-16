"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type MotionTier = "full" | "reduced" | "minimal";

const MotionTierContext = createContext<MotionTier>("reduced");

function resolveTier(): MotionTier {
  if (typeof window === "undefined") return "reduced";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return "minimal";
  }

  const nav = navigator as Navigator & {
    deviceMemory?: number;
  };
  const cores = navigator.hardwareConcurrency ?? 8;
  const memory = nav.deviceMemory;
  const narrow = window.innerWidth < 640;
  const tablet = window.innerWidth < 900;

  if (memory !== undefined && memory <= 4) return "reduced";
  if (cores <= 4) return "reduced";
  if (narrow && cores <= 6) return "reduced";
  if (tablet && memory !== undefined && memory <= 8) return "reduced";

  return "full";
}

export function MotionBudgetProvider({ children }: { children: ReactNode }) {
  const [tier, setTier] = useState<MotionTier>("reduced");

  const recomputed = useCallback(() => setTier(resolveTier()), []);

  useEffect(() => {
    recomputed();

    const mqlReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    mqlReduce.addEventListener("change", recomputed);
    window.addEventListener("resize", recomputed);
    window.addEventListener("orientationchange", recomputed);

    return () => {
      mqlReduce.removeEventListener("change", recomputed);
      window.removeEventListener("resize", recomputed);
      window.removeEventListener("orientationchange", recomputed);
    };
  }, [recomputed]);

  useEffect(() => {
    document.documentElement.dataset.motionTier = tier;
    return () => {
      delete document.documentElement.dataset.motionTier;
    };
  }, [tier]);

  return (
    <MotionTierContext.Provider value={tier}>
      {children}
    </MotionTierContext.Provider>
  );
}

export function useMotionTier(): MotionTier {
  return useContext(MotionTierContext);
}
