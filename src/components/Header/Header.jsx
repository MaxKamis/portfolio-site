import "./Header.scss";
import Resume from "../../assets/Max-Kamis-Dev-Resume.pdf";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";

function Header({ handleOnclick }) {
    return (
        <header className="headerWrapper">
            <nav className="navbar">
                <NavLink to="/" className="navbar__logo">Max Kamis</NavLink>
                <div className="navbar__links">
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="navbar__link"
                    >
                        Projects
                    </Link>
                    <NavLink 
                        to="/"
                        className="navbar__link" 
                    >
                        Hire
                    </NavLink>
                </div>    
                <a className="navbar__button" href={Resume} download>
                    <button className="navbar__btn navbar__primaryButton">Resume</button>
                </a>    
                <TiThMenuOutline className="navbar__barIcon" onClick={ handleOnclick } />
            </nav>
        </header>
    );
}

export default Header;