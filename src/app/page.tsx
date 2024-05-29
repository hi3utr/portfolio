import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { IconHome } from "@tabler/icons-react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";

const Home = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome />,
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Testimonials",
      link: "/testimonials",
    },
  ];
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </div>
  );
};

export default Home;
