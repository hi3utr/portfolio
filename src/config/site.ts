/** Canonical site URL (Vercel production). Override with NEXT_PUBLIC_SITE_URL if needed. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wayne-portfolio.vercel.app";

export const siteConfig = {
  name: "Wayne's Portfolio",
  title: "Wayne's Portfolio | Hieu Tran — Frontend Developer",
  description:
    "Portfolio of Hieu Tran (Wayne), a frontend developer based in Vietnam. Selected work with React, Next.js, and Vue, LinkedIn recommendations, and professional experience.",
  shortDescription:
    "Frontend developer portfolio — projects, experience, and recommendations.",
  author: "Hieu Tran (Wayne)",
  locale: "en_US",
  keywords: [
    "Hieu Tran",
    "Wayne",
    "frontend developer",
    "portfolio",
    "React",
    "Next.js",
    "Vue",
    "Vietnam",
    "web developer",
  ],
} as const;
