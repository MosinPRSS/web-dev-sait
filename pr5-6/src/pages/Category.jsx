import { useParams } from 'react-router';
import TitlePage from '../components/TitlePage';
import CardGrid from '../components/CardGrid';
import products from '../data/products';

export default function Category() {
    const { name } = useParams();

    return (
        <>
            <TitlePage title={name} />
            <CardGrid products={products} />
        </>
    );
}
