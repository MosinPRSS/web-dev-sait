import '../../styles/ProductCheckout.css';

export default function ProductCheckout({ price }) {
    return (
        <div className="checkout-section">
            <div className="checkout-inner">
                <div className="compare-text-section">
                    <svg
                        className="compare-icon"
                        fill="#000000"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                    >
                        <path d="M1,8A1,1,0,0,1,2,7H9.586L7.293,4.707A1,1,0,1,1,8.707,3.293l4,4a1,1,0,0,1,0,1.414l-4,4a1,1,0,1,1-1.414-1.414L9.586,9H2A1,1,0,0,1,1,8Zm21,7H14.414l2.293-2.293a1,1,0,0,0-1.414-1.414l-4,4a1,1,0,0,0,0,1.414l4,4a1,1,0,0,0,1.414-1.414L14.414,17H22a1,1,0,0,0,0-2Z" />
                    </svg>
                    <span className="compare-text">Сравнить</span>
                </div>
                <div className="bookmark-text-section">
                    <svg
                        className="bookmark-icon"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="#000000" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                    <span className="bookmark-text">Добавить в избранное</span>
                </div>
                <div className="filter-section">
                    <div className="filter-text-section">
                        <span className="filter-text">Фильтр</span>
                    </div>
                    <div className="filter-buttons">
                        <button className="filter-button" type="button">ед.</button>
                        <button className="filter-button" type="button">ед.</button>
                        <button className="filter-button" type="button">ед.</button>
                    </div>
                </div>
                <div className="price-section">
                    <span className="price-text">{price}</span>
                </div>
                <div className="cart-button-section">
                    <button className="cart-button" type="button">
                        В корзину
                    </button>
                </div>
                <div className="delivery-text-section">
                    <span className="delivery-text">Доставка завтра</span>
                </div>
            </div>
        </div>
    );
}
