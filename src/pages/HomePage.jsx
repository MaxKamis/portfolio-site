import Hero from "../components/Hero/Hero.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Header from "../components/Header/Header.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <div >
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  );
}

export default HomePage;