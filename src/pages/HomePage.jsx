import Hero from "../components/Hero/Hero.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Header from "../components/Header/Header.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";

function HomePage() {
  return (
    <>
      <Dropdown />
      <Header />
      <Hero />
      <Projects />
    </>
  );
}

export default HomePage;