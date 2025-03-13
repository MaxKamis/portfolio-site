import Hero from "../components/Hero/Hero.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Header from "../components/Header/Header.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import { useState } from "react";

function HomePage() {

  const [isOpen, setIsOpen] = useState(false);

  const handleStatusClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && <Dropdown handleOnclick={handleStatusClick} />}
      <Header handleOnclick={handleStatusClick} />
      <Hero />
      <div id="projects">
        <Projects />
      </div>
    </>
  );
}

export default HomePage;