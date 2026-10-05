import TitlePage from '../components/TitlePage';
import CardGrid from '../components/CardGrid';

export default function NotFound() {
    return (
        <>
            <TitlePage title="404 - Не найдено :(" />
            <CardGrid products={[]} />
        </>
    );
}
