import '../../styles/product/ProductPreview.css';

export default function ProductPreview({ image }) {
    return (
        <div className="image-preview-section">
            <div className="little-image-section">
                {Array.from({ length: 4 }, (_, index) => (
                    <div className="little-image" key={index}>
                        <img
                            src={image}
                            alt="Превью товара"
                            className="little-image-preview"
                        />
                    </div>
                ))}
            </div>

            <div className="big-image-section">
                <img src={image} alt="Товар" className="big-image-preview" />
            </div>
        </div>
    );
}
