// Payment.js

import Image from "next/image";

const Payment = ({ basketItems }) => {
  const totalPrice = basketItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="space-y-4 mx-auto">
      {basketItems.map((item) => (
        <div key={item.id} className="product flex items-center">
          <Image
            src={item.thumbnail.replace("i.dummyjson.com", "cdn.dummyjson.com")} // Update the domain if necessary
            alt={item.title}
            width={64}
            height={64}
            className="w-16 h-16 bg-gray-200 mr-4"
          />
          <div className="content">
            <h2>{item.title}</h2>
            <p>Antal: 1</p>
            <p>Pris: ${item.price}</p>
          </div>
        </div>
      ))}
      <p className="text-lg">I alt at betale: ${totalPrice}</p>
    </div>
  );
};

export default Payment;
