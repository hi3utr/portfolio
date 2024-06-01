"use client";
import { experiences } from "@/data";
import Image from "next/image";
import { TracingBeam } from "./ui/TracingBeam";

const Progress = () => {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {experiences.map((item, index) => (
          <div key={`content-${index}`} className="mb-14">
            <h2 className="bg-gradient-to-l from-blue-400 to-blue-950 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
            <div className="prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height={item.image === "/hust.png" ? 60 : 300}
                  width={item.image === "/hust.png" ? 60 : 300}
                  className="mb-4 object-cover"
                />
              )}
            </div>
            <p className="text-xl mb-4">{item.title}</p>
            <p className="text-sm whitespace-pre-line leading-loose pl-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default Progress;
