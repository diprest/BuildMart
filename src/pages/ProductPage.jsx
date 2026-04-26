import { useParams, Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import ProductGallery from '../components/ProductGallery';
import Accordion from '../components/Accordion';
import products from '../data/products';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const { addToCart, isInCart } = useCart();

  const product = products.find((p) => p.id === id);
  const inCart = product ? isInCart(product.id) : false;

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Товар не найден</h2>
        <Link to="/">Вернуться в каталог</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <div className="product-page">
      <Link to="/" className="back-link">← Назад в каталог</Link>

      <div className="product-content">
        <div className="product-gallery">
          <ProductGallery images={product.images} title={product.title} />
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-subtitle">{product.subtitle}</p>
          <div className="product-rating">★ {product.rating}</div>
          <p className="product-price">{product.price.toLocaleString()} ₽</p>

          <button
            className={`add-to-cart-btn ${inCart ? 'in-cart' : ''}`}
            onClick={handleAdd}
            disabled={inCart}
          >
            {inCart ? 'Уже в корзине' : 'Добавить в корзину'}
          </button>

          <Accordion title="Расширенное описание">
            <p>{product.extendedDescription}</p>
          </Accordion>

          <Accordion title="Описание">
            <p>{product.description}</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;