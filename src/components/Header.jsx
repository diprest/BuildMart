import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './Header.css';

function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          BuildMart
        </Link>
        <nav className="nav">
          <Link to="/">Каталог</Link>
          <Link to="/cart" className="cart-link">
            Корзина
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;