"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import RelatedProducts from "@/components/related/Related";
import ButtonSec from "@/components/knapper/ButtonSec";
import { useParams } from "next/navigation";

export default function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
      setCurrentImage(productData.thumbnail);
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    product && (
      <div className="main container mx-auto my-8 px-4">
        <ButtonSec link="/pages/products" text="Back" />

        <div className="bg-white p-8">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div>
              <div className="w-[500px] h-[500px] flex items-center justify-center bg-gray-100">
                <Image src={currentImage} alt={product.title} width={500} height={500} className="rounded-md object-contain" style={{ width: "100%", height: "100%" }} />
              </div>

              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  <Image src={product.thumbnail} width={100} height={100} alt={`${product.title} thumbnail`} className={`w-24 h-24 rounded-md cursor-pointer object-contain ${currentImage === product.thumbnail ? "border-2 border-gray-300" : ""}`} onClick={() => setCurrentImage(product.thumbnail)} />
                  {product.images.map((image, index) => (
                    <Image key={index} src={image} width={100} height={100} alt={`${product.title} thumbnail ${index + 1}`} className={`w-24 h-24 rounded-md cursor-pointer object-contain ${currentImage === image ? "border-2 border-gray-300" : ""}`} onClick={() => setCurrentImage(image)} />
                  ))}
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col">
              <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">{product.description}</p>

              <div className="mt-52 flex justify-between items-end">
                <p className="text-xl font-semibold">Pris: ${product.price}</p>
                <ButtonSec text="Buy" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          <div>
            <RelatedProducts category={product.category} currentProductId={product.id} />
          </div>
        </div>
      </div>
    )
  );
}
