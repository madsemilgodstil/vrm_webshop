// ProductList.js

"use client";

import Image from "next/image";
import Link from "next/link";
import Button2 from "../knapper/Button-2";
import { useState, useEffect } from "react";

const ProductList = ({ onAddToBasket }) => {
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {data.products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-200 rounded-lg shadow-lg bg-white p-4 flex flex-col items-center"
        >
          <Image
            src={product.thumbnail.replace(
              "i.dummyjson.com",
              "cdn.dummyjson.com"
            )} // Update the domain if necessary
            width={250}
            height={250}
            alt={product.title}
            className="rounded-md mb-4"
          />
          <Link
            href={`/pages/singleproduct/${product.id}`}
            className="text-lg font-semibold text-gray-800 hover:text-blue-600 mb-2"
          >
            {product.title}
          </Link>
          <p className="text-xl font-bold text-gray-700 mb-4">
            ${product.price}
          </p>
          <Button2 text="Buy" onClick={() => onAddToBasket(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
