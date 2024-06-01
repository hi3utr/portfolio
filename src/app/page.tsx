import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { IconHome } from "@tabler/icons-react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import { navItems } from "@/data";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
