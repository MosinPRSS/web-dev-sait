import Logo from './navigation/Logo';
import SearchBox from './navigation/Search';
import NavMenu from './navigation/NavMenu';
import NavIcons from './navigation/NavIcons';
import '../styles/navigation/Nav.css';

export default function NavigationBar() {
    return (
        <div className="header-inner">
            <div className="logo-section">
                <Logo />
            </div>

            <div className="nav-center-section">
                <div className="search-section">
                    <SearchBox />
                </div>
                <NavMenu />
            </div>

            <div className="icons-section">
                <NavIcons />
            </div>
        </div>
    );
}
