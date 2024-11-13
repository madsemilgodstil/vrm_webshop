const ButtonSec = ({ link, text }) => {
  return (
    <a
      href={link}
      className=" text-white bg-black border hover:bg-white hover:text-[#000000] border-2 border-black hover:border-black px-6 py-1 rounded-full transition duration-300 ease-in-out cursor-pointer"
    >
      {text}
    </a>
  );
};

export default ButtonSec;
