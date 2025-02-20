import "./Header.scss";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";



function Header() {
    return (

        <header className="header">
            
            <a href="/" className="header__logo">Max Kamis</a>
            
            <nav className="header__nav">

                <IoMenuSharp className="header__icon" />
                
                <NavLink
                    to="/"
                    className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
                    end={false}
                    >Projects
                </NavLink>
                    
                   
                <NavLink 
                    to="/"
                    className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
                    end={false}
                    >Hire
                </NavLink>
                  
            </nav>
        </header>

    );
}

export default Header;