"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Search = ({ products }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchRef = useRef(null); // Ref for hele søgekomponenten

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

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
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setResults([]); // Luk resultaterne
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className="search-component w-full">
      <div className="flex w-[400px]">
        <input
          type="text"
          placeholder="Search by name, category, or tags..."
          value={query}
          onChange={handleSearch}
          onFocus={handleFocus} // Søg igen, når input får fokus
          className="border p-2 w-full h-10 rounded"
        />
      </div>

      {results.length > 0 && (
        <div className="absolute top-full bg-white shadow-lg z-10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-h-[640px] overflow-y-auto mt-2">
          {results.map((product) => (
            <Link href={`/pages/singleproduct/${product.id}`} key={product.id} className="flex flex-col items-center p-4 text-black bg-[#f8f8f8] w-full border rounded-lg hover:bg-gray-100 transition">
              <Image src={product.thumbnail} alt={product.title} width={100} height={100} />
              <h3 className="font-semibold mt-2">{product.title}</h3>
              <p className="text-sm text-gray-700">{product.description}</p>
              <p className="font-bold mt-1">Price: ${product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
