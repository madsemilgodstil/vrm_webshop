import Image from "next/image";
import RelatedProducts from "@/components/related/Related";
import ButtonSec from "@/components/knapper/ButtonSec";

export default async function SingleProductPage({ params }) {
  const { id } = params;

  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const product = await response.json();

    return (
      <div className="main container mx-auto my-8 px-4">
        <div className="bg-white p-8">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div>
              <Image
                src={product.thumbnail}
                width={500}
                height={500}
                alt={product.title}
                className="rounded-md"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {product.description}
              </p>

              <div className="mt-72 flex justify-between items-end">
                <p className="text-xl font-semibold">Price: ${product.price}</p>
                <ButtonSec text="Køb" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          <div>
            <RelatedProducts
              category={product.category}
              currentProductId={product.id}
            />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <p>Could not load product. Please try again later.</p>;
  }
}
