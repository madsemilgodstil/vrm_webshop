import { useRouter } from "next/navigation";

const Basket = ({ items }) => {
  const router = useRouter();

  const handleCheckout = () => {
    // Konverter kurvens indhold til en JSON-streng uden encodeURIComponent
    const cartData = JSON.stringify(
      items.map((item) => ({
        title: item.title,
        thumbnail: item.thumbnail,
        price: item.price,
        quantity: item.quantity,
      }))
    );

    // Naviger til Payment-siden med JSON-data som en enkelt parameter
    router.push(`/pages/payment?cart=${cartData}`);
  };

  return (
    <div className="sticky top-5 right-0 border border-gray-200 rounded-lg shadow-lg p-4">
      <div className="space-y-4 mx-auto">
        {items.map((item, index) => (
          <div key={index} className="product flex items-center">
            <p className="w-16 h-16 bg-gray-200 mr-4 flex items-center justify-center">
              <img src={item.thumbnail} alt={item.title} width="50" />
            </p>
            <div className="content">
              <h2>{item.title}</h2>
              <p>Pris: ${item.price}</p>
              <p>Antal: {item.quantity}</p>
            </div>
          </div>
        ))}
        <p className="text-lg">I alt at betale: ${items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        <button onClick={handleCheckout} className="text-white bg-black px-4 py-2 rounded-full">
          Betal her
        </button>
      </div>
    </div>
  );
};

export default Basket;
