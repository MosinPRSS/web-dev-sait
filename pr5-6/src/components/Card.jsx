import { Link } from 'react-router';
import '../styles/Card.css';

export default function Card({ title, price, image, to }) {
    return (
        <div className="card">
            <Link to={to}>
                <div className="card-inner">
                    <div className="image-section">
                        <img src={image} alt="Товар" className="image" />
                    </div>

                    <div className="title-section">
                        <span className="title-text">{title}</span>
                    </div>

                    <div className="price-section">
                        <span className="price-text">{price}</span>
                    </div>

                    <div className="cart-section">
                        <div className="delivery-info">
                            <svg
                                className="delivery-icon"
                                width="16px"
                                height="16px"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path d="M18.5 18C18.5 19.1046 17.6046 20 16.5 20C15.3954 20 14.5 19.1046 14.5 18M18.5 18C18.5 16.8954 17.6046 16 16.5 16C15.3954 16 14.5 16.8954 14.5 18M18.5 18H21.5M14.5 18H13.5M8.5 18C8.5 19.1046 7.60457 20 6.5 20C5.39543 20 4.5 19.1046 4.5 18M8.5 18C8.5 16.8954 7.60457 16 6.5 16C5.39543 16 4.5 16.8954 4.5 18M8.5 18H13.5M4.5 18C3.39543 18 2.5 17.1046 2.5 16V7.2C2.5 6.0799 2.5 5.51984 2.71799 5.09202C2.90973 4.71569 3.21569 4.40973 3.59202 4.21799C4.01984 4 4.5799 4 5.7 4H10.3C11.4201 4 11.9802 4 12.408 4.21799C12.7843 4.40973 13.0903 4.71569 13.282 5.09202C13.5 5.51984 13.5 6.0799 13.5 7.2V18M13.5 18V8H17.5L20.5 12M20.5 12V18M20.5 12H13.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className="delivery-text">Доставим завтра</span>
                        </div>
                        <div className="bookmark-info">
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
                    </div>

                    <div className="cart-button-section">
                        <button className="cart-button" type="button">
                            В корзину
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}
