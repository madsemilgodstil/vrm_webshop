// components/Search.js
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(null); // For error handling

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await response.json();
      setResults(data.products);
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching search results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 flex-grow"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {results.length > 0 && !loading && (
        <div className="search-results grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {results.map((product) => (
            <div key={product.id} className="item p-4 bg-gray-100">
              <Link href={`/products/${product.id}`}>
                <a>
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={100}
                    height={100}
                  />
                  <h3 className="font-semibold">{product.title}</h3>
                  <p>{product.description}</p>
                  <p className="font-bold">Price: ${product.price}</p>
                </a>
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
