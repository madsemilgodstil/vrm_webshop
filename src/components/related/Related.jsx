import Image from "next/image";

const RelatedProducts = () => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Related Products</h2>
      <div className="related-items grid grid-cols-1 sm:grid-cols-3  gap-6">
        <div className="item p-4 bg-red-500">
          <Image />
          <h3>Her</h3>
          <p>Beskrivelse</p>
        </div>
        <div className="item p-4 bg-red-500">
          <Image />
          <h3>Her 2</h3>
          <p>Beskrivelse 2</p>
        </div>
        <div className="item p-4 bg-red-500">
          <Image />
          <h3>Her 3</h3>
          <p>Beskrivelse 3</p>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
