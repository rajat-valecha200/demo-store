"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter(); // Correctly call useRouter here

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);
  

  const handleProductClick = (productId) => {
    if (router) {
      router.push(`/products/${productId}`);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
  <div key={product.id} className="rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => handleProductClick(product.id)}>
    <div className="image-wrapper" style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        objectFit="contain"
        className="rounded-lg mb-4"
      />
    </div>
    <h3 className="text-lg font-semibold mb-2 mt-4">{product.title}</h3>
    <p className="text-gray-500 line-clamp-2">{product.description}</p>
    <span className="text-blue-500 font-bold mt-2">₹{product.price}</span>
  </div>
))}

      </div>
    </div>
  );
}

export default ProductsList;
