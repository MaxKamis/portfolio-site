import "./Header.scss";
import { NavLink } from "react-router-dom";


function Header() {
    return (

        <header className="header">
            <div className="header__logo-container">
                <h1 className="header__logo">Max Kamis</h1>
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
                            end={false}
                            >
                                Projects
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to="/"
                        className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
                        end={false}
                        >
                            Hire
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;