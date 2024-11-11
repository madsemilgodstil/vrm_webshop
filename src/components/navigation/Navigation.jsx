import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-between py-4 max-w-7xl mx-auto">
      <div className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
      </div>

      <Link href="/payment">
        <MdShoppingCart size={24} />
      </Link>
    </div>
  );
};

export default Navigation;