import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './Header.css';

function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bm-header">
      <div className="bm-header__container">
        <Link to="/" className="bm-header__logo">
          <span className="bm-header__logo-box">BM</span>
          <span className="bm-header__logo-text">BuildMart</span>
        </Link>
        <nav className="bm-header__nav">
          <Link to="/">Products</Link>
          <a href="#">Categories</a>
          <a href="#">Deals</a>
          <a href="#">About</a>
        </nav>
        <div className="bm-header__search">
          <svg className="bm-header__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Search products..." />
        </div>
        <Link to="/cart" className="bm-header__cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {totalItems > 0 && (
            <span className="bm-header__cart-badge">{totalItems}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
