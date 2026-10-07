import '../../styles/navigation/Search.css';
import getRandomName from '../../utils/randomNames';

export default function SearchBox() {
    return (
        <div className="search-box">
            <svg
                className="search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
            </svg>

            <input
                type="text"
                placeholder={getRandomName()}
                className="search-input"
            />
        </div>
    );
}
