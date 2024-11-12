import Image from "next/image";
import RelatedProducts from "@/components/related/Related";

export default async function SingleProductPage({ params }) {
  const { id } = params;

  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const product = await response.json();

    return (
      <div className="main">
        <div>
          <h1>{product.title}</h1>
          <Image src={product.thumbnail} width={250} height={250} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
        <div>
          {/* Pass the category and current product ID */}
          <RelatedProducts category={product.category} currentProductId={product.id} />
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <p>Could not load product. Please try again later.</p>;
  }
}
