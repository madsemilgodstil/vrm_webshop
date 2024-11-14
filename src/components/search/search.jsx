"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Search = ({ products }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    setHasSearched(true);

    if (searchQuery) {
      const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchQuery) || product.category.toLowerCase().includes(searchQuery) || (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(searchQuery))));
      setResults(filteredProducts);
    } else {
      setResults([]);
    }
  };

  const handleFocus = () => {
    if (query) {
      const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(query) || product.category.toLowerCase().includes(query) || (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(query))));
      setResults(filteredProducts);
    }
    setHasSearched(true);
  };

  const handleBlur = () => {
    setResults([]);
    setHasSearched(false);
  };

  return (
    <div className="search-component relative w-full">
      <div className="flex w-[400px]">
        <input type="text" placeholder="Search by name, category, or tags..." value={query} onChange={handleSearch} onBlur={handleBlur} onFocus={handleFocus} className="border p-2 w-full h-10" />
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 bg-white shadow-lg z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[600px] p-4 max-h-[640px] overflow-y-auto">
          {results.map((product) => (
            <div key={product.id} className="flex flex-col items-center p-4 text-black bg-[#f8f8f8] w-full">
              <Link href={`/products/${product.id}`}>
                <Image src={product.thumbnail} alt={product.title} width={100} height={100} />
                <h3 className="font-semibold mt-2">{product.title}</h3>
                <p className="text-sm text-gray-700">{product.description}</p>
                <p className="font-bold mt-1">Price: ${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}

      {hasSearched && results.length === 0 && query && <p className="mt-4 text-center text-gray-600">No results found for "{query}".</p>}
    </div>
  );
};

export default Search;
