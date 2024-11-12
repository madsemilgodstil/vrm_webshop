import Button from "@/components/knapper/button";

export function Payment() {
  return (
    <div className="space-y-4">
      <div className="product flex items-center">
        <p className="w-16 h-16 bg-gray-200 mr-4 flex items-center justify-center">Images her</p>
        <div className="content">
          <h2>Produktnavn</h2>
          <p>Pris</p>
        </div>
      </div>
      <div className="product flex items-center">
        <p className="w-16 h-16 bg-gray-200 mr-4 flex items-center justify-center">Images her</p>
        <div className="content">
          <h2>Produktnavn</h2>
          <p>Pris</p>
        </div>
      </div>
      <div className="product flex items-center">
        <p className="w-16 h-16 bg-gray-200 mr-4 flex items-center justify-center">Images her</p>
        <div className="content">
          <h2>Produktnavn</h2>
          <p>Pris</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-lg">I alt at betale: ,-</p>
        <Button text="Betal her" />
      </div>
    </div>
  );
}

export default Payment;
