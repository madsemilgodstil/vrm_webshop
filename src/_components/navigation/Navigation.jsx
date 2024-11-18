import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-between py-4 max-w-7xl mx-auto">
      <div className="flex space-x-6">
        <div className="group relative">
          <Link href="/" className="relative inline-block text-gray-800">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div className="group relative">
          <Link
            href="/pages/products"
            className="relative inline-block text-gray-800"
          >
            Products
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>

      <Link
        href="/pages/payment"
        className="hover:scale-125 transition duration-300 ease-in-out cursor-pointer"
      >
        <MdShoppingCart size={24} />
      </Link>
    </div>
  );
};

export default Navigation;
