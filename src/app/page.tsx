import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/ui/Hero";

const Home = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Hero />
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Home;
