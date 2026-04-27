import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import './CatalogPage.css';

function CatalogPage() {
  const [sort, setSort] = useState('name-asc');
  const [maxPrice, setMaxPrice] = useState(400);
  const [minRating, setMinRating] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const maxProductPrice = useMemo(() => {
    return Math.ceil(Math.max(...products.map(p => p.price)));
  }, []);

  const filtered = useMemo(() => {
    let result = [...products];

    if (maxPrice < maxProductPrice) {
      result = result.filter((p) => p.price <= maxPrice);
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
  }, [sort, maxPrice, minRating, maxProductPrice]);

  const clearFilters = () => {
    setMaxPrice(maxProductPrice);
    setMinRating('');
  };

  const hasActiveFilters = maxPrice < maxProductPrice || minRating;

  return (
    <div className="catalog-page">
      <div className="catalog-title-section">
        <h1 className="catalog-title">Building Materials</h1>
        <p className="catalog-subtitle">Premium construction supplies for all your projects</p>
      </div>

      <div className="catalog-controls">
        <div className="controls-left">
          <button
            className="toggle-filters-btn"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <svg className="filter-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="16" y2="12" />
              <line x1="11" y1="18" x2="13" y2="18" />
            </svg>
            {filtersOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
          <span className="products-count">Showing {filtered.length} products</span>
        </div>
        <div className="controls-right">
          <span className="sort-label">Sort by:</span>
          <div className="select-wrapper">
            <select
              className="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="filters-panel">
          <div className="filter-section">
            <label className="filter-label">Minimum Rating</label>
            <div className="rating-options">
              <label className={`rating-option ${minRating === '5' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  checked={minRating === '5'}
                  onChange={(e) => setMinRating(e.target.value)}
                />
                <span>5+ Stars</span>
              </label>
              <label className={`rating-option ${minRating === '4' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  checked={minRating === '4'}
                  onChange={(e) => setMinRating(e.target.value)}
                />
                <span>4+ Stars</span>
              </label>
              <label className={`rating-option ${minRating === '3' ? 'active' : ''}`}>
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
          <div className="filter-section">
            <label className="filter-label">Price Range</label>
            <div className="price-range">
              <div className="price-slider-container">
                <div
                  className="price-slider-track"
                  style={{ '--fill-percent': `${(maxPrice / maxProductPrice) * 100}%` }}
                />
                <input
                  type="range"
                  min="0"
                  max={maxProductPrice}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="price-slider"
                />
              </div>
              <div className="price-labels">
                <span>$0</span>
                <span className="price-max-value">${maxPrice}</span>
              </div>
            </div>
          </div>
          {hasActiveFilters && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear All Filters
            </button>
          )}
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