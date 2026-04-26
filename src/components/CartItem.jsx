import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './CartItem.css';

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <Link to={`/product/${item.id}`} className="cart-item-image">
        <img src={item.images[0]} alt={item.title} />
      </Link>
      <div className="cart-item-info">
        <Link to={`/product/${item.id}`} className="cart-item-title">
          {item.title}
        </Link>
        <p className="cart-item-subtitle">{item.subtitle}</p>
        <p className="cart-item-price">{item.price.toLocaleString()} ₽</p>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(item.id)}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
        <p className="cart-item-total">
          {(item.price * item.quantity).toLocaleString()} ₽
        </p>
        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default CartItem;