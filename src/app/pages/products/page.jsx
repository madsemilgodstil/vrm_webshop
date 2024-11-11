import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const Page = async ({ params }) => {
  const id = (await params).id;

  let response = await fetch(`https://dummyjson.com/products/${id}`);

  let product = await response.json();

  return (
    <div className="flex flex-col gap-10">
      <Link href="/">
        <button className="flex gap-2 items-center">
          <IoIosArrowBack /> Go back
        </button>
      </Link>
      <div>{product.description}</div>
    </div>
  );
};

export default Page;
