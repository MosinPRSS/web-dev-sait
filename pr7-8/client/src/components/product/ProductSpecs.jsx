import React from 'react';
import '../../styles/product/ProductSpecs.css';

// моggи
const MOCK_SPECS = [
  { id: 1, name: 'Мощность', value: '2100 Вт' },
  { id: 2, name: 'Диаметр диска', value: '235 мм' },
  { id: 3, name: 'Посадочный диаметр', value: '30 мм' },
  { id: 4, name: 'Число оборотов', value: '4500 об/мин' },
  { id: 5, name: 'Глубина пропила (90°)', value: '85 мм' },
  { id: 6, name: 'Глубина пропила (45°)', value: '65 мм' },
  { id: 7, name: 'Плавный пуск', value: 'есть' },
  { id: 8, name: 'Вес', value: '7.8 кг' },
];

export default function ProductSpecs({ specs = MOCK_SPECS }) {
  return (
    <section className="specs-section">
      <div className="specs-grid">
        {specs.map((item) => (
          <div key={item.id} className="spec-row">
            <span className="spec-name">{item.name}</span>
            <span className="spec-dots" />
            <span className="spec-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}