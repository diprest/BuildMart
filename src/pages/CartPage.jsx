import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';
import PromoCode from '../components/PromoCode';
import './CartPage.css';

function CartPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [discount, setDiscount] = useState(0);

  const finalPrice = discount > 0
    ? Math.round(totalPrice * (1 - discount / 100))
    : totalPrice;

  const handleApplyPromo = (percent) => {
    setDiscount(percent);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Корзина пуста</h2>
        <p>Добавьте товары в корзину</p>
        <Link to="/" className="back-to-catalog-btn">Вернуться в каталог</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Корзина</h1>
        <button className="clear-btn" onClick={clearCart}>Очистить</button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Итого</h2>
          <div className="summary-rows">
            <div className="summary-row">
              <span>Товары ({cartItems.length})</span>
              <span>{totalPrice.toLocaleString()} ₽</span>
            </div>
            {discount > 0 && (
              <div className="summary-row discount">
                <span>Скидка ({discount}%)</span>
                <span>−{Math.round(totalPrice * discount / 100).toLocaleString()} ₽</span>
              </div>
            )}
            <div className="summary-row total">
              <span>Итого</span>
              <span>{finalPrice.toLocaleString()} ₽</span>
            </div>
          </div>

          <PromoCode onApply={handleApplyPromo} />
        </aside>
      </div>
    </div>
  );
}

export default CartPage;