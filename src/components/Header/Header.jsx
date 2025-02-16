import "./Header.scss";
import { NavLink } from "react-router-dom";


function Header() {
    return (

        <header className="header">
            <div className="header__logo-container">
                <h2 className="header__logo">Max Kamis</h2>
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