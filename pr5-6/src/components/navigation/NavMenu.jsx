import { Link } from 'react-router';

const categories = [
    'Стройматериалы',
    'Отделочные материалы',
    'Окна и Двери',
    'Инструменты',
    'Сантехника',
];

export default function NavMenu() {
    return (
        <nav className="nav-menu">
            {categories.map((name) => (
                <Link key={name} to={`/category/${name}`} className="nav-link">
                    {name === 'Окна и Двери' ? 'Окна и двери' : name}
                </Link>
            ))}
            <a href="#" className="nav-link">Еще</a>
        </nav>
    );
}
