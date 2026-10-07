import React, { useState } from 'react';
import '../../styles/FilterSection.css';

const FilterSection = ({ totalCount }) => {
  // moggнутые фильтры
  const [filters, setFilters] = useState({
    filter1: false,
    filter2: true,
    filter3: false,
    filter4: true,
  });

  const handleCheckboxChange = (name) => {
    setFilters(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="filter-wrapper">
      <div className="filter-container">
        <div className="filter-grid">
          <div className="checkbox-group">
            {Object.keys(filters).map((key, index) => (
              <label key={key} className="filter-item">
                <input
                  type="checkbox"
                  checked={filters[key]}
                  onChange={() => handleCheckboxChange(key)}
                  className="custom-checkbox"
                />
                <span className="checkbox-text">Фильтр</span>
              </label>
            ))}
          </div>

          <div className="select-group">
            <div className="custom-select-wrapper">
              <select className="brand-select" defaultValue="">
                <option value="" disabled hidden>Бренд</option>
                <option value="brand1">Бренд 1</option>
                <option value="brand2">Бренд 2</option>
              </select>
              <div className="select-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="results-count">
        Найдено {totalCount} товара
      </div>
    </div>
  );
};

export default FilterSection;