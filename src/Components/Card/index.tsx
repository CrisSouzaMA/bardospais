import { useState } from 'react';
import { formatNumber } from '../../util/formatNumber';
import { CardProps } from '../../services/interface/card';
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
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="justify-center items-center border-gray-100">
            <button
              onClick={() => handleRemoveProduct(data.id)}
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-gray-500 hover:text-blue-50"
            >
              <FaMinus className="text-red-500" />
            </button>
            <span className="py-1 px-3.5 bg-transparent font-semibold">
              {cart.find((item) => item.id === (data.id || 0))?.quantity ?? 0}
            </span>
            <button
              onClick={handleAddProduct}
              className="cursor-pointer rounded-r bg-gray-100 
            py-1 px-3 duration-100 hover:bg-gray-500 hover:text-blue-50"
            >
              <FaPlus className="text-green-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
