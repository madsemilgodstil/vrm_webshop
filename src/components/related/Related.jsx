import Image from "next/image";

const RelatedProducts = async ({ category, currentProductId }) => {
  try {
    // Fetch products from the same category
    const response = await fetch(
      `https://dummyjson.com/products/category/${encodeURIComponent(category)}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch related products");
    }
    const data = await response.json();
    let relatedProducts = data.products;

    // Exclude the current product
    relatedProducts = relatedProducts.filter(
      (product) => product.id !== parseInt(currentProductId)
    );

    // Limit to 3 products
    relatedProducts = relatedProducts.slice(0, 3);

    return (
      <>
        <h2 className="text-lg font-semibold mb-4">Related Products</h2>
        <div className="related-items grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="item p-4 bg-red-500">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={100}
                height={100}
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    return <p>Could not load related products. Please try again later.</p>;
  }
};

export default RelatedProducts;
