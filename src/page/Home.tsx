import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
