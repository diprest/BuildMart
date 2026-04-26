import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-subtitle">{product.subtitle}</p>
        <div className="product-meta">
          <span className="product-price">{product.price.toLocaleString()} ₽</span>
          <span className="product-rating">★ {product.rating}</span>
        </div>
      </div>
      <button
        className={`add-btn ${inCart ? 'in-cart' : ''}`}
        onClick={handleAdd}
      >
        {inCart ? 'В корзине' : 'Добавить в корзину'}
      </button>
    </Link>
  );
}

export default ProductCard;