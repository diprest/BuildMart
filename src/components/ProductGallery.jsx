import { useState } from 'react';
import './ProductGallery.css';

function ProductGallery({ images, title }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery">
      <div className="gallery-main">
        <img src={images[current]} alt={`${title} - изображение ${current + 1}`} />
        {images.length > 1 && (
          <>
            <button className="gallery-btn prev" onClick={prev} aria-label="Предыдущее">
              ‹
            </button>
            <button className="gallery-btn next" onClick={next} aria-label="Следующее">
              ›
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`gallery-thumb ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
            >
              <img src={img} alt={`Миниатюра ${idx + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;