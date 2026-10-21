import { Link } from 'react-router';
import '../../styles/navigation/Logo.css';

export default function Logo() {
    return (
        <Link to="/" className="logo-link">
            <div className="logo-title">Материал Экспресс</div>
            <div className="logo-subtitle">
                Стройматериалы и инструменты с<br />
                доставкой по всей России
            </div>
        </Link>
    );
}
