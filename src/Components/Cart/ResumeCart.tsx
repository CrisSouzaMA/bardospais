import { useEffect, useState } from 'react';
import { useCart } from '../../Context/CartContext';
import { formatNumber } from '../../util/formatNumber';

export default function ResumeCart() {
  const [subTotal, setSubTotal] = useState(0);
  const [delivery, setDelivery] = useState(4.99);
  const { cart } = useCart();

  useEffect(() => {
    const total = cart?.reduce((acc, curr) => {
      const total = curr.price * (curr.quantity ?? 0);
      return acc + total;
    }, 0);
    setSubTotal(total);
  }, [cart]);

  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">{formatNumber(subTotal)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Taixa de entrega</p>
        <p className="text-gray-700">{formatNumber(4.99)}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">
            {subTotal > 0 ? formatNumber(subTotal + delivery) : 0}
          </p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-gray-500 py-1.5 font-medium text-blue-50 hover:bg-gray-600">
        Finalizar compra
      </button>
    </div>
  );
}
