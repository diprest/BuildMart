import { useState } from 'react';
import './Accordion.css';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion ${open ? 'open' : ''}`}>
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="accordion-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="accordion-content">
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;