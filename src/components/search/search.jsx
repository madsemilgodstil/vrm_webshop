// components/Search.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Search = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(null); // For error handling

  // Debounce the query input to limit API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // Delay of 500ms

    // Cleanup function cancels the timeout if query changes before 500ms
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Fetch products from specified categories and filter them based on the query
  useEffect(() => {
    const fetchResults = async () => {
      if (!debouncedQuery) {
        setResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // Fetch products from 'fragrances' category
        const fragrancesResponse = await fetch(
          "https://dummyjson.com/products/category/fragrances"
        );
        const fragrancesData = await fragrancesResponse.json();

        // Fetch products from 'skincare' category
        const skincareResponse = await fetch(
          "https://dummyjson.com/products/category/skincare"
        );
        const skincareData = await skincareResponse.json();

        // Fetch products from 'womens-jewellery' category
        const jewelleryResponse = await fetch(
          "https://dummyjson.com/products/category/womens-jewellery"
        );
        const jewelleryData = await jewelleryResponse.json();

        // Combine products from all categories to represent 'beauty'
        const combinedProducts = [
          ...fragrancesData.products,
          ...skincareData.products,
          ...jewelleryData.products,
        ];

        // Filter combined products by search query matching title or description
        const filteredProducts = combinedProducts.filter(
          (product) =>
            product.title
              .toLowerCase()
              .includes(debouncedQuery.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(debouncedQuery.toLowerCase())
        );

        setResults(filteredProducts);
      } catch (error) {
        console.error("Fetch Error:", error);
        setError("An error occurred while fetching search results.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [debouncedQuery]);

  return (
    <div className="search-component">
      <div className="flex">
        <input
          type="text"
          placeholder="Search beauty products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 flex-grow"
        />
      </div>

      {loading && <p className="mt-4">Loading...</p>}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {results.length > 0 && !loading && (
        <div className="search-results grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {results.map((product) => (
            <div key={product.id} className="item p-4 bg-black text-white">
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={100}
                  height={100}
                />
                <h3 className="font-semibold">{product.title}</h3>
                <p>{product.description}</p>
                <p className="font-bold">Price: ${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}

      {!loading && results.length === 0 && query && (
        <p className="mt-4">No results found for "{query}".</p>
      )}
    </div>
  );
};

export default Search;
