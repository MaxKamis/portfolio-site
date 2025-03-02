import "./Header.scss";
import Resume from "../../assets/Max-Kamis-Dev-Resume.pdf";
import { NavLink } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";



function Header() {
    return (
        <header className="headerWrapper">
            <nav className="navbar">

                <NavLink to="/" className="navbar__logo">Max Kamis</NavLink>

                <div className="navbar__links">
                    <NavLink
                        to="/"
                        className="navbar__link" 
                        >Projects
                    </NavLink>
                        
                    <NavLink 
                        to="/"
                        className="navbar__link" 
                        >Hire
                    </NavLink>
                </div>    

                <a className="navbar__button" href={Resume} download>
                    <button className="navbar__btn navbar__primaryButton">Resume</button>
                </a>    
                <TiThMenuOutline className="navbar__barIcon" />
            </nav>
        </header>
    );
}

export default Header;