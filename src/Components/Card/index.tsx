import { useState } from 'react';
import { formatNumber } from '../../util/formatNumber';
import { CardProps, DataCardProps } from '../../services/interface/card';
import { useCart } from '../../Context/CartContext';
import { FaPlus, FaMinus } from 'react-icons/fa';

export const Card = ({ data }: CardProps) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const handleAddProduct = () => {
    addToCart(data);
  };

  const handleRemoveProduct = (id: string) => {
    removeFromCart(id);
  };

  return (
    <div
      className="mx-auto mt-11 w-80 transform overflow-hidden
     rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300
      hover:scale-105 hover:shadow-lg"
    >
      <img
        className="h-48 w-full object-cover object-center"
        src={data.image}
        alt="Product Image"
      />
      <div className="pt-4 px-4  h-[320px]">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {data.name}
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
          {data.description}
        </p>
        <div className="fixed bottom-0 pb-16">
          <div className="">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              {formatNumber(data.price)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-2 mt-4 fixed bottom-0 bg-gray-300 text-center">
        <div className="justify-center items-center">
          <button
            className="ml-auto text-lg font-bold text-green-500 mr-4"
            onClick={handleAddProduct}
          >
            <FaPlus />
          </button>
          <span className="text-lg font-semibold">
            {cart.find((item) => item.id === data.id ?? 0)?.quantity ?? 0}
          </span>
          <button
            className="text-lg font-bold text-red-500 ml-4"
            onClick={() => handleRemoveProduct(data.id)}
          >
            <FaMinus />
          </button>
        </div>
      </div>
    </div>
  );
};
