import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { projects } from "@/data";
import { Card } from "./Card";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center mt-10"
    >
      <div className="text-4xl md:text-5xl font-bold text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-2 md:gap-8 gap-4 md:mt-12 mt-8">
        {projects.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.des}
            icon={item.iconLists}
            id={item.id}
            img={item.img}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
