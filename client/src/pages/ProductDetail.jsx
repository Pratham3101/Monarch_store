import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  const AddToCart = () => {
    axios.post('http://localhost:5000/api/cart', {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price
    }).then(() => alert('Added to cart!'));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <strong>${product.price}</strong>
        <br />
        <button onClick={AddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
