import "./Dropdown.scss"
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import Resume from "../../assets/Max-Kamis-Dev-Resume.pdf";



const Dropdown = ({ isOpen, handleOnclick }) => {
  return (
    <> 
      <section className={`dropdown ${isOpen ? "drodown-closed" : ""}`}>
        <div className="close_icon-container">
          <IoClose className="close_icon" onClick={ handleOnclick } />
        </div>
        <div className="dropdown__menu">
          <ScrollLink
            onClick={ handleOnclick }
            to="projects"
            smooth={true}
            duration={500}
            className="dropdown__link"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            onClick={ handleOnclick }
            to="/"
            smooth={true}
            duration={500}
            className="dropdown__link"
          >
            Hire
          </ScrollLink>

          <div className="btn-container">
            <a href={Resume} download>
              <button className="btn-container__btn">Resume</button>
            </a> 
          </div>
        </div>
        
        
        
      </section>
    </>
  )
}

export default Dropdown