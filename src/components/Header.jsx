import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './Header.css';

function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-box">BM</span>
          <span className="logo-text">BuildMart</span>
        </Link>
        <nav className="nav">
          <a href="#">Products</a>
          <a href="#">Categories</a>
          <a href="#">Deals</a>
          <a href="#">About</a>
        </nav>
        <div className="header-right">
          <div className="search-box">
            <input type="text" placeholder="Search products..." />
          </div>
          <Link to="/cart" className="cart-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;