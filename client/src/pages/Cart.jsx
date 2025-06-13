import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/cart').then(res => {
      const cartWithQty = res.data.map(item => ({ ...item, quantity: 1 }));
      setItems(cartWithQty);
    });
  }, []);

  const QuantityChange = (id, delta) => {
    setItems(prevItems =>
      prevItems.flatMap(item => {
        if (item._id === id) {
          const newQty = item.quantity + delta;
          if (newQty <= 0) {
            Remove(id);
            return [];
          }
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const Remove = (id) => {
    axios.delete(`http://localhost:5000/api/cart/${id}`).then(() => {
      setItems(prev => prev.filter(item => item._id !== id));
    });
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="header-cell">Product</div>
        <div className="header-cell center">Quantity</div>
        <div className="header-cell right">Price</div>
      </div>

      {items.map(item => (
        <div key={item._id} className="cart-row">
          <div className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              onClick={() => navigate(`/product/${item.id}`)}
              className="clickable"
            />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
            </div>
          </div>

          <div className="quantity-stepper">
            <button onClick={() => QuantityChange(item._id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => QuantityChange(item._id, 1)}>+</button>
          </div>

          <div className="cart-price">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}

      <div className="cart-total-row">
           <div className="cart-total-label">Total</div>
            <div></div>
           <div className="cart-total-amount">${total.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default Cart;
