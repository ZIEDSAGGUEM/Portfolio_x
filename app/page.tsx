"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Tools";
import Approach from "@/components/Approach";
import WebProjects from "@/components/WebProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import IAProjects from "@/components/IAProjects";
import { TracingBeam } from "@/components/ui/TracingBeam";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <TracingBeam>
          <Hero />
          <Grid />
          <Approach />
          <Clients />
          <WebProjects />
          <IAProjects />
          <Footer />
        </TracingBeam>
      </div>
    </main>
  );
};

export default Home;
