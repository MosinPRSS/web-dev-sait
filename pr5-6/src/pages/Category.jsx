import { useParams } from 'react-router';
import TitlePage from '../components/TitlePage';
import CardGrid from '../components/CardGrid';
import products from '../data/products';
import FilterSection from '../components/filter/FilterSection';

export default function Category() {
    const { name } = useParams();

    return (
        <>
            <TitlePage title={name} />
            <FilterSection/>
            <CardGrid products={products} />
        </>
    );
}
