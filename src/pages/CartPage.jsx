import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';
import PromoCode from '../components/PromoCode';
import './CartPage.css';

function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`;
}

function CartPage() {
  const { cartItems, totalPrice, totalItems } = useCart();
  const [discount, setDiscount] = useState(0);

  const handleApplyPromo = (discountPercent) => {
    setDiscount(discountPercent);
  };

  const subtotal = totalPrice;
  const tax = subtotal * 0.08;
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal + tax - discountAmount;
  const itemCount = totalItems;

  if (itemCount === 0) {
    return (
      <div className="bm-cart-page">
        <div className="bm-cart-container">
          <div className="bm-cart-empty">
            <h1 className="bm-cart-empty__title">Your Cart is Empty</h1>
            <p className="bm-cart-empty__text">Start shopping to add items to your cart</p>
            <Link to="/" className="bm-cart-empty__button">
              Browse Products
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bm-cart-page">
      <div className="bm-cart-container">
        <h1 className="bm-cart-page__title">Shopping Cart</h1>

        <div className="bm-cart-layout">
          <div className="bm-cart-main">
            <div className="bm-cart-table">
              <div className="bm-cart-table__header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span></span>
              </div>

              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} formatPrice={formatPrice} />
              ))}
            </div>

            <div className="bm-cart-promo">
              <PromoCode onApply={handleApplyPromo} />
            </div>
          </div>

          <div className="bm-cart-sidebar">
            <div className="bm-order-summary">
              <h3 className="bm-order-summary__title">Order Summary</h3>
              <div className="bm-order-summary__row">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="bm-order-summary__row">
                <span>Tax (8%)</span>
                <span>{formatPrice(tax)}</span>
              </div>
              {discount > 0 && (
                <div className="bm-order-summary__row bm-order-summary__row--discount">
                  <span>Discount</span>
                  <span>-{discount}%</span>
                </div>
              )}
              <div className="bm-order-summary__divider"></div>
              <div className="bm-order-summary__total">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <button className="bm-order-summary__checkout">
                Proceed to Checkout
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <Link to="/" className="bm-order-summary__continue">
                Continue Shopping
              </Link>
            </div>

            <div className="bm-shipping-info">
              <h3 className="bm-shipping-info__title">Shipping Information</h3>
              <div className="bm-shipping-info__item">
                <div className="bm-shipping-info__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <div className="bm-shipping-info__content">
                  <span className="bm-shipping-info__label">Estimated Delivery</span>
                  <span className="bm-shipping-info__text">3-5 business days</span>
                </div>
              </div>
              <div className="bm-shipping-info__item">
                <div className="bm-shipping-info__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="bm-shipping-info__content">
                  <span className="bm-shipping-info__label">Shipping Address</span>
                  <span className="bm-shipping-info__text">123 Construction Ave</span>
                  <span className="bm-shipping-info__text">Builder City, BC 12345</span>
                  <span className="bm-shipping-info__text">United States</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
