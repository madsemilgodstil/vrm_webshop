const Hero = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src="/images/miguel-sousa-hUBeoOI0TmA-unsplash.jpg"
        alt="Hero Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-3xl font-bold mb-4">Velkommen til vores side!</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Lær mere
        </button>
      </div>
    </div>
  );
};

export default Hero;
