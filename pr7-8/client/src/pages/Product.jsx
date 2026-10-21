import { useParams } from 'react-router';
import TitlePage from '../components/TitlePage';
import ProductPreview from '../components/product/ProductPreview';
import ProductCheckout from '../components/product/ProductCheckout';
import products from '../data/products';
import ProductSpecs from '../components/product/ProductSpecs';

export default function Product() {
    const { name } = useParams();
    const product = products[0];

    return (
        <>
            <TitlePage title={name} />
            <div className="main-content">
                <div className="product-content">
                    <ProductPreview image={product.image} />
                    <ProductCheckout price={product.price} />
                </div>
            </div>
            <TitlePage title="Характеристики" />
            <ProductSpecs/>
        </>
    );
}
