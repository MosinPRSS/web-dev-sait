const stubLinks = [
    'Заглушка для Footer',
    'Заглушка для Footer',
    'Заглушка для Footer',
    'Заглушка для Footer',
    'Заглушка для Footer',
];

export default function Footer() {
    return (
        <div className="footer-inner">
            {Array.from({ length: 4 }, (_, column) => (
                <div className="footer-text-block" key={column}>
                    {stubLinks.map((text, index) => (
                        <a href="#" className="footer-text" key={`${column}-${index}`}>
                            {text}
                        </a>
                    ))}
                </div>
            ))}
        </div>
    );
}
