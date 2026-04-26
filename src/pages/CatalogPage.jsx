import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import './CatalogPage.css';

function CatalogPage() {
  const [sort, setSort] = useState('name-asc');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

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
        result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [sort, minPrice, maxPrice, minRating]);

  const clearFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setMinRating('');
  };

  const hasActiveFilters = minPrice || maxPrice || minRating;

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <div className="catalog-title-section">
          <h1 className="catalog-title">Building Materials</h1>
          <p className="catalog-subtitle">Premium construction supplies for all your projects</p>
        </div>
        <div className="catalog-actions">
          <div className="actions-left">
            <button
              className="toggle-filters-btn"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              {filtersOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
            <span className="products-count">Showing {filtered.length} products</span>
          </div>
          <div className="actions-right">
            <span className="sort-label">Sort by:</span>
            <select
              className="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="filters-panel">
          <div className="filter-row">
            <div className="filter-group">
              <label className="filter-label">Minimum Rating</label>
              <div className="rating-options">
                <label className="rating-option">
                  <input
                    type="radio"
                    name="rating"
                    value="5"
                    checked={minRating === '5'}
                    onChange={(e) => setMinRating(e.target.value)}
                  />
                  <span>5+ Stars</span>
                </label>
                <label className="rating-option">
                  <input
                    type="radio"
                    name="rating"
                    value="4"
                    checked={minRating === '4'}
                    onChange={(e) => setMinRating(e.target.value)}
                  />
                  <span>4+ Stars</span>
                </label>
                <label className="rating-option">
                  <input
                    type="radio"
                    name="rating"
                    value="3"
                    checked={minRating === '3'}
                    onChange={(e) => setMinRating(e.target.value)}
                  />
                  <span>3+ Stars</span>
                </label>
              </div>
            </div>
            <div className="filter-group">
              <label className="filter-label">Price Range</label>
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            {hasActiveFilters && (
              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      )}

      <main className="catalog-main">
        <div className="products-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filtered.length === 0 && (
            <p className="no-results">No products found</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default CatalogPage;