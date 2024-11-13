import Button from "@/components/knapper/ButtonPri";

const Basket = () => {
  return (
    <div className="sticky top-5 right-0 border border-gray-200 rounded-lg shadow-lg p-4">
      <div className="space-y-4 mx-auto">
        <div className="product flex items-center">
          <p className="w-16 h-16 bg-gray-200 mr-4 flex items-center justify-center">
            Images her
          </p>
          <div className="content">
            <h2>Produktnavn</h2>
            <p>Antal:</p>
            <p>Pri:</p>
          </div>
        </div>
        <p className="text-lg">I alt at betale: ,-</p>
      </div>
    </div>
  );
};

export default Basket;
