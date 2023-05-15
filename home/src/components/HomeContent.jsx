import React, { useState, useEffect } from "react";

import { getProducts, getProductById, currency } from "../products";

export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to my website!</h2>
        <p className="mb-4"> Home Page content </p>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.name} />
              <h3 className="text-xl font-bold mb-4">{product.name}</h3>
              <p className="mb-4">{product.description}</p>
              <p className="mb-4">{currency.format(product.price)}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
