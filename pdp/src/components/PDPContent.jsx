import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, currency } from "home/products";

export default function PDPContent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((product) => setProduct(product));
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) return null;

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <main className="container mx-auto px-4 py-8">
        <div className="border p-4 flex">
          <img
            src={product.image}
            alt={product.name}
            style={{ maxWidth: "100%", height: "400px" }}
            className="mr-4"
          />
          <div>
            <h3 className="text-xl font-bold mb-4">{product.name}</h3>
            <p className="mb-4">{product.description}</p>
            <p className="mb-4">{product.longDescription}</p>
            <p className="mb-4">{currency.format(product.price)}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
