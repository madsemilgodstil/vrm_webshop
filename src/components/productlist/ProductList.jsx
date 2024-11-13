"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button2 from "../knapper/ButtonSec";
import ButtonSec from "../knapper/ButtonSec";
import Category from "../category/Category";
import Search from "../search/Search";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Definer kategorier
  const categories = [
    { slug: "all", name: "All" },
    { slug: "skin-care", name: "Skin Care" },
    { slug: "fragrances", name: "Fragrances" },
    { slug: "beauty", name: "Beauty" },
    { slug: "womens-jewellery", name: "Womens Jewellery" },
    { slug: "womens-dresses", name: "Womens Dresses" },
    { slug: "womens-bags", name: "Womens Bags" },
  ];

  // Hent produkter fra de ønskede kategorier
  useEffect(() => {
    const fetchProducts = async () => {
      let allProducts = [];

      if (selectedCategory === "all") {
        for (let category of categories) {
          if (category.slug !== "all") {
            const response = await fetch(
              `https://dummyjson.com/products/category/${category.slug}`
            );
            const data = await response.json();
            allProducts = [...allProducts, ...data.products];
          }
        }
      } else {
        const response = await fetch(
          `https://dummyjson.com/products/category/${selectedCategory}`
        );
        const data = await response.json();
        allProducts = data.products;
      }

      setProducts(allProducts);
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {data.products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-200 rounded-lg shadow-lg bg-white p-4 flex flex-col items-center"
        >
          <Image
            src={product.thumbnail}
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
          <Button2 text="Buy" />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
