"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonSec from "../knapper/ButtonSec";
import { useEffect, useState } from "react";

const RelatedProducts = ({ category, currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products/category/${category}`);
      const data = await response.json();

      // 1. Filtrér produkter for at ekskludere det aktuelle produkt
      const productsExcludingCurrent = data.products.filter((product) => {
        return product.id !== parseInt(currentProductId);
      });

      // 2. Begræns resultatet til de første 3 produkter
      const relatedProductsList = productsExcludingCurrent.slice(0, 3);

      setRelatedProducts(relatedProductsList);
    };

    fetchRelatedProducts();
  }, [category, currentProductId]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Related Products</h2>
      <div className="related-items grid grid-cols-1 sm:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <div key={product.id} className="item p-4 bg-[#f8f8f8]">
            <Image src={product.thumbnail} alt={product.title} width={150} height={150} className="rounded-md mb-3 mx-auto" />
            <h3 className="font-bold">{product.title}</h3>
            <p className="text-sm mb-2">{product.description}</p>
            <ButtonSec link={`/pages/singleproduct/${product.id}`} text="View Product" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
