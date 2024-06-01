import React from "react";
import Progress from "./Progress";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-[120px]">
      <div className="text-4xl md:text-5xl font-bold text-center mb-12">
        My <span className="text-purple">work experience</span>
      </div>
      <Progress />
    </div>
  );
};

export default Experience;
