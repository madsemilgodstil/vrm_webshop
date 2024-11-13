import Link from "next/link";

const ButtonPri = ({ link = "/", text }) => {
  return (
    <Link href={link}>
      <span className="bg-slate-50 text-black hover:bg-black hover:text-white px-6 py-3 rounded-full transition duration-300 ease-in-out cursor-pointer">
        {text}
      </span>
    </Link>
  );
};

export default ButtonPri;
