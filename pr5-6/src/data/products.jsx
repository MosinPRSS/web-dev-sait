import productImage from '../assets/pila.png';

const products = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    slug: 'Товар',
    title: 'Пила циркулярная сетевая Stavr ПДЭ-235/2100, 2100 Вт, 235 мм',
    price: '6199 ₽/шт.',
    image: productImage,
}));

export default products;
