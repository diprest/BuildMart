import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import './CatalogPage.css';

function CatalogPage() {
  const [sort, setSort] = useState('default');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');

  const filtered = useMemo(() => {
    let result = [...products];

    if (minPrice) {
      result = result.filter((p) => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice));
    }
    if (minRating) {
      result = result.filter((p) => p.rating >= Number(minRating));
    }

    switch (sort) {
      case 'name-asc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [sort, minPrice, maxPrice, minRating]);

  return (
    <div className="catalog-page">
      <aside className="filters">
        <h2>Фильтры</h2>

        <div className="filter-group">
          <label>Сортировка</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">По умолчанию</option>
            <option value="name-asc">Название А–Я</option>
            <option value="name-desc">Название Я–А</option>
            <option value="price-asc">Цена по возрастанию</option>
            <option value="price-desc">Цена по убыванию</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Цена</label>
          <div className="price-inputs">
            <input
              type="number"
              placeholder="От"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="До"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-group">
          <label>Минимальный рейтинг</label>
          <input
            type="number"
            placeholder="От 0 до 5"
            min="0"
            max="5"
            step="0.1"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
          />
        </div>
      </aside>

      <main className="products-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filtered.length === 0 && (
          <p className="no-results">Товары не найдены</p>
        )}
      </main>
    </div>
  );
}

export default CatalogPage;