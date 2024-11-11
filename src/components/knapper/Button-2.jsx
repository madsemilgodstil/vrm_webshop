const Button2 = ({ link, text }) => {
  return (
    <a
      href={link}
      className="hover:bg-white hover:text-[#B6CCDA] px-6 py-1 rounded-lg transition duration-300 ease-in-out cursor-pointer"
    >
      {text}
    </a>
  );
};

export default Button2;
