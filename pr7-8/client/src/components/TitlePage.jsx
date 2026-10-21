import '../styles/TitlePage.css';

export default function TitlePage({ title }) {
    return (
        <div className="main-title">
            <p className="main-title-text">{title}</p>
        </div>
    );
}
