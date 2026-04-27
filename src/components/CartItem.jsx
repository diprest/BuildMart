import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function CartItem({ item, formatPrice }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="bm-cart-row">
      <div className="bm-cart-row__product">
        <Link to={`/product/${item.id}`} className="bm-cart-row__image">
          <img src={item.images[0]} alt={item.title} />
        </Link>
        <div className="bm-cart-row__info">
          <Link to={`/product/${item.id}`} className="bm-cart-row__title">
            {item.title}
          </Link>
          <span className="bm-cart-row__subtitle">{item.subtitle}</span>
        </div>
      </div>
      <div className="bm-cart-row__price">{formatPrice(item.price)}</div>
      <div className="bm-cart-row__quantity">
        <div className="bm-cart-qty">
          <button
            className="bm-cart-qty__btn"
            onClick={() => decreaseQuantity(item.id)}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <span className="bm-cart-qty__value">{item.quantity}</span>
          <button
            className="bm-cart-qty__btn"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>
        </div>
      </div>
      <div className="bm-cart-row__total">{formatPrice(item.price * item.quantity)}</div>
      <button
        className="bm-cart-row__remove"
        onClick={() => removeFromCart(item.id)}
        aria-label="Remove item"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
