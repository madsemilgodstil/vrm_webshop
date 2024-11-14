"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Category from "../category/Category";
import Search from "../search/Search";

const ProductList = ({ addToBasket }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { slug: "all", name: "All" },
    { slug: "skin-care", name: "Skin Care" },
    { slug: "fragrances", name: "Fragrances" },
    { slug: "beauty", name: "Beauty" },
    { slug: "womens-jewellery", name: "Womens Jewellery" },
    { slug: "womens-dresses", name: "Womens Dresses" },
    { slug: "womens-bags", name: "Womens Bags" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      let allFetchedProducts = [];

      if (selectedCategory === "all") {
        for (let category of categories) {
          if (category.slug !== "all") {
            const response = await fetch(`https://dummyjson.com/products/category/${category.slug}`);
            const data = await response.json();
            allFetchedProducts = [...allFetchedProducts, ...data.products];
          }
        }
        setAllProducts(allFetchedProducts);
        setProducts(allFetchedProducts);
      } else {
        const response = await fetch(`https://dummyjson.com/products/category/${selectedCategory}`);
        const data = await response.json();
        setProducts(data.products);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <Search products={allProducts} />
        <Category categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-lg shadow-lg bg-white p-4 flex flex-col items-center">
            {product.thumbnail ? (
              <Image src={product.thumbnail} width={250} height={250} alt={product.title} className="rounded-md mb-4" />
            ) : (
              <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                <span>No Image Available</span>
              </div>
            )}
            <Link href={`/pages/singleproduct/${product.id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600 mb-2">
              {product.title}
            </Link>
            <p className="text-xl font-bold text-gray-700 mb-4">${product.price}</p>
            <button
              className="inline-block text-white bg-black border hover:bg-white hover:text-[#000000] border-2 border-black hover:border-black px-6 py-1 rounded-full transition duration-300 ease-in-out cursor-pointer"
              onClick={() => addToBasket(product)} // Tilføj produktet til kurven
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
