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

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars ? '★' : '☆');
    }
    return stars.join('');
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="rating-value">({product.rating})</span>
        </div>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <p className="product-category">{product.subtitle}</p>
        <button
          className={`add-btn ${inCart ? 'in-cart' : ''}`}
          onClick={handleAdd}
        >
          {inCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;