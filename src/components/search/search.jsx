// components/Search.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Search = ({ products }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Filtrer resultaterne baseret på query
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery) || // Søg i navn
        product.category.toLowerCase().includes(searchQuery) || // Søg i kategori
        (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(searchQuery))) // Søg i tags
    );

    setResults(filteredProducts);
  };

  return (
    <div className="search-component">
      <div className="flex">
        <input type="text" placeholder="Search by name, category, or tags..." value={query} onChange={handleSearch} className="border p-2 flex-grow" />
      </div>

      {results.length > 0 && (
        <div className="search-results grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {results.map((product) => (
            <div key={product.id} className="item p-4 bg-white text-black">
              <Link href={`/products/${product.id}`}>
                <Image src={product.thumbnail} alt={product.title} width={100} height={100} />
                <h3 className="font-semibold">{product.title}</h3>
                <p>{product.description}</p>
                <p className="font-bold">Price: ${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && query && <p className="mt-4">No results found for "{query}".</p>}
    </div>
  );
};

export default Search;
