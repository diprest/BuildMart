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
      setError('Неверный промокод');
      setSuccess(false);
    }
  };

  const handleChange = (e) => {
    setCode(e.target.value);
    if (error) setError('');
    if (success) setSuccess(false);
  };

  return (
    <div className="promo-code">
      <div className="promo-input-row">
        <input
          type="text"
          placeholder="Промокод"
          value={code}
          onChange={handleChange}
          className="promo-input"
        />
        <button onClick={handleApply} className="promo-btn">
          Применить
        </button>
      </div>
      {error && <p className="promo-error">{error}</p>}
      {success && <p className="promo-success">Промокод применён: −10%</p>}
    </div>
  );
}

export default PromoCode;