import { useState } from 'react';
import './PromoCode.css';

function PromoCode({ onApply }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleApply = () => {
    if (!code.trim()) {
      setError('');
      setSuccess(false);
      return;
    }
    if (code.trim().toUpperCase() === 'SAVE10') {
      setError('');
      setSuccess(true);
      onApply(10);
    } else {
      setError('Invalid promo code');
      setSuccess(false);
    }
  };

  const handleChange = (e) => {
    setCode(e.target.value);
    if (error) setError('');
    if (success) setSuccess(false);
  };

  return (
    <div className="bm-promo">
      <p className="bm-promo__title">Have a promo code?</p>
      <div className="bm-promo__row">
        <input
          type="text"
          placeholder="Enter promo code"
          value={code}
          onChange={handleChange}
          className="bm-promo__input"
        />
        <button onClick={handleApply} className="bm-promo__btn">
          Apply
        </button>
      </div>
      {error && <p className="bm-promo__error">{error}</p>}
      {success && <p className="bm-promo__success">Promo code applied: -10%</p>}
    </div>
  );
}

export default PromoCode;
