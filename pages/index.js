import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function HomePage() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div className="flex flex-col justify-center items-center scroll-smooth">
      <Header />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

export default HomePage;
