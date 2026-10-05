import TitlePage from '../components/TitlePage';
import CardGrid from '../components/CardGrid';
import products from '../data/products';

export default function Home() {
    return (
        <>
            <TitlePage title="Рекомендуем" />
            <CardGrid products={products} />
        </>
    );
}
