"use client";

import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

export default function ConfettiLottie({ copied }: { copied: boolean }) {
  const options = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice" as const,
    },
  };
  return <Lottie options={options} height={200} width={400} />;
}
