import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import Footer from "@/components/ui/Footer";
import { navItems } from "@/data";

const Home = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Testimonials />
        <Experience />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
