import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="product-grid">
      {products.map(prod => (
        <Link
          to={`/product/${prod.id}`}
          key={prod.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="product-card">
            <img src={prod.image} alt={prod.title} />
            <h4>{prod.title}</h4>
            <p className="product-price">${prod.price}</p>
            <div className="view-btn">View</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;
