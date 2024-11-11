const Button = ({ link, text }) => {
  return (
    <a
      href={link}
      className=" hover:bg-red-600 hover:text-[#B6CCDA] px-6 py-1 rounded-lg transition duration-300 ease-in-out cursor-pointer"
    >
      {text}
    </a>
  );
};

export default Button;
