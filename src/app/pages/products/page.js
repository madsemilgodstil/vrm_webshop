import Link from "next/link";
import Image from "next/image";
import ProductList from "@/components/productlist/ProductList";

export default async function Home() {
  return (
    <div className="grid grid-cols-[66%_33%]">
      <ProductList />
    </div>
  );
}
