import Card from './Card';

export default function CardGrid({ products = [] }) {
    return (
            <div className="card-content">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        to={`/product/${product.slug}`}
                    />
                ))}
            </div>
    );
}
