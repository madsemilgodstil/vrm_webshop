import Image from "next/image";

const RelatedProducts = async ({ category, currentProductId }) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${encodeURIComponent(category)}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch related products");
    }
    const data = await response.json();
    let relatedProducts = data.products;

    relatedProducts = relatedProducts.filter(
      (product) => product.id !== parseInt(currentProductId)
    );

    relatedProducts = relatedProducts.slice(0, 3);

    return (
      <>
        <h2 className="text-lg font-semibold mb-4">Related Products</h2>
        <div className="related-items grid grid-cols-1 sm:grid-cols-3">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="item p-4 gap-8 hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={150}
                height={150}
              />
              <div className=" p-5 rounded-lg">
                <h3 className="font-bold">{product.title}</h3>
                <p>{product.description}</p>
              </div>
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
